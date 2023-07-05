import { getRandomUint } from "./misc/randuint";
import * as constants from "./misc/constants";
import { ProviderRpcClient, Address } from "everscale-inpage-provider";
import { useEvmProvider } from "../../providers/useEvmProvider";
import { ethers, hexlify, isHexString } from "ethers";
/**
 * buildWrapPayload function prepares the payload to be used in Vault.wrap in order to transfer Ever from everscale to an evm network.
 * @param everSender sender ever account wallet address
 * @param evmRecipient receiver EvmAddress
 * @param amount target token amount without decimals
 * @param chainId target evm network chainId
 * @param releaseByEver this parameter specifies if the credit backend should release the assets in the target evm network(true), or user must release them manually(false)
 * @returns wrap payload string
 */
async function buildWrapPayload(
  amount: string | number,
  releaseByEver: boolean
): Promise<[string, string]> {
  const evmProvider = useEvmProvider();
  const provider = new ProviderRpcClient();
  // Make sure the provider is initialized.
  await provider.ensureInitialized();

  // Request permissions from the user to execute API
  // methods using the provider.
  await provider.requestPermissions({
    permissions: ["basic", "accountInteraction"],
  });

  const everSender: Address = (await provider.getProviderState()).permissions
    .accountInteraction?.address!;
  var evmRecipient: string;
  var chainId: string;
  if ((await evmProvider.getAccounts())![0] != undefined) {
    evmRecipient = (await evmProvider.getAccounts())![0];
    chainId = await evmProvider.MetaMaskProvider().chainId!;
    console.log(evmRecipient, Number(chainId));
  } else {
    await evmProvider.connectToMetamaskWallet();
    console.log("tried");
    if ((await evmProvider.getAccounts())![0] != undefined) {
      evmRecipient = (await evmProvider.getAccounts())![0];
      chainId = await evmProvider.MetaMaskProvider().chainId!;
    } else {
      return ["ERROR : ", "rejection by user"];
    }
  }
  const transferPayload = await provider.packIntoCell({
    data: {
      addr: evmRecipient,
      chainId: Number(chainId),
      callback: {
        recipient: "0x0000000000000000000000000000000000000000",
        payload: "",
        strict: false,
      },
    },
    structure: [
      { name: "addr", type: "uint160" },
      { name: "chainId", type: "uint256" },
      {
        name: "callback",
        type: "tuple",
        components: [
          { name: "recipient", type: "uint160" },
          { name: "payload", type: "cell" },
          { name: "strict", type: "bool" },
        ] as const,
      },
    ] as const,
  });
  let randomNonce: string = getRandomUint();
  const data = await provider.packIntoCell({
    data: {
      nonce: randomNonce,
      network: 1,
      transferPayload: transferPayload.boc,
    },
    structure: [
      { name: "nonce", type: "uint32" },
      { name: "network", type: "uint8" },
      { name: "transferPayload", type: "cell" },
    ] as const,
  });

  const remainingGasTo = releaseByEver ? constants.EventCloser : everSender;

  const compounderPayload = await provider.packIntoCell({
    data: {
      to: constants.ProxyMultiVaultNativeV_4,
      amount: ethers.parseUnits(amount.toString(), 9).toString(),
      remainingGasTo,
      payload: data.boc,
    },
    structure: [
      { name: "to", type: "address" },
      { name: "amount", type: "uint128" },
      { name: "remainingGasTo", type: "address" },
      { name: "payload", type: "cell" },
    ] as const,
  });
  return [compounderPayload.boc, randomNonce];
}

export function usePayloadBuilders() {
  return {
    buildWrapPayload,
  };
}
