import * as constants from "./helpers/EvmConstants";
import { ProviderRpcClient, Address } from "everscale-inpage-provider";
import { useEvmProvider } from "../../providers/useEvmProvider";
import { setupAndGetProvidersDetails } from "./useWalletsData";
import { usePayloadBuilders } from "./usePayloadBuilders";
import { ethers } from "ethers";
import BigNumber from "bignumber.js";
import { ContractTransactionResponse } from "ethers/src.ts/ethers";
import * as web3 from "web3";
import { getSignatures } from "./helpers/getSignatures";
import MultiVaultAbi from "./artifacts/EvmAbi/abi/MultiVault.json";
export async function saveWithdrawNative(
  eventAddress: Address
): Promise<[string, string]> {
  // setting the wallets up
  // let provider: ProviderRpcClient,
  //   everSender: Address,
  //   evmRecipient: string,
  //   chainId: string;
  // try {
  //   const returnedValues = await setupAndGetProvidersDetails();
  //   if (returnedValues) {
  //     [provider, everSender, evmRecipient, chainId] = returnedValues;
  //     Number(chainId) != 56
  //       ? useEvmProvider().changeMetaMaskNetwork("BSC")
  //       : undefined;
  //     Number(chainId) != 56
  //       ? [
  //           "ERROR",
  //           "rejection by user !, only BNB chain is available for this payload at the moment",
  //         ]
  //       : undefined;
  //   } else {
  //     // Handle the case where the function returns undefined
  //     return ["ERROR", "rejection by user !"];
  //   }
  // } catch (error) {
  //   // Handle any errors that occur during function execution
  //   return ["ERROR", "unknown error accrued while fetching wallet's data !"];
  // }
  // const evmProvider = new ethers.BrowserProvider(
  //   useEvmProvider().MetaMaskProvider()
  // );
  const { buildSaveWithdraw } = usePayloadBuilders();
  // const rawSignatures: string[] = await getSignatures(eventAddress, provider);
  const payload = await buildSaveWithdraw(eventAddress);
  // getting the contracts
  // let MultiVault = new ethers.Contract(
  //   constants.deployedContracts.BSCMultiVault,
  //   MultiVaultAbi.abi,
  //   evmProvider
  // );

  // const signatures = rawSignatures.map((sign) => {
  //   const signature = `0x${Buffer.from(sign, "base64").toString("hex")}`;
  //   const address = web3.eth.accounts.recover(
  //     web3.utils.sha3(payload as string) as string,
  //     signature
  //   );
  //   return {
  //     address,
  //     order: new BigNumber(address.slice(2).toUpperCase(), 16),
  //     signature,
  //   };
  // });

  // signatures.sort((a, b) => {
  //   if (a.order.eq(b.order)) {
  //     return 0;
  //   }

  //   if (a.order.gt(b.order)) {
  //     return 1;
  //   }

  //   return -1;
  // });
  // releasing assets
  try {
    // const res = await MultiVault.saveWithdrawNative(
    //   payload,
    //   signatures.map(({ signature }) => signature)
    // );
    // console.log("tx hash ; ", res?.hash);
    return ["payload", "Payload.toString()"];
  } catch (e: any) {
    console.log(e);
    return ["ERROR: ", e.message];
  }
}

export async function saveWithdrawAlien(
  eventAddress: Address
): Promise<[string, string]> {
  // setting the wallets up
  let provider: ProviderRpcClient,
    everSender: Address,
    evmRecipient: string,
    chainId: string;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [provider, everSender, evmRecipient, chainId] = returnedValues;
      Number(chainId) != 56
        ? useEvmProvider().changeMetaMaskNetwork("BSC")
        : undefined;
      Number(chainId) != 56
        ? [
            "ERROR",
            "rejection by user !, only BNB chain is available for this payload at the moment",
          ]
        : undefined;
    } else {
      // Handle the case where the function returns undefined
      return ["ERROR", "rejection by user !"];
    }
  } catch (error) {
    // Handle any errors that occur during function execution
    return ["ERROR", "unknown error accrued while fetching wallet's data !"];
  }
  const evmProvider = new ethers.BrowserProvider(
    useEvmProvider().MetaMaskProvider()
  );
  const { buildSaveWithdraw } = usePayloadBuilders();
  const rawSignatures: string[] = await getSignatures(eventAddress, provider);
  const Payload = await buildSaveWithdraw(eventAddress);
  // getting the contracts
  let MultiVault = new ethers.Contract(
    constants.deployedContracts.BSCMultiVault,
    MultiVaultAbi.abi,
    evmProvider
  );
  const signatures = rawSignatures.map((sign) => {
    const signature = `0x${Buffer.from(sign, "base64").toString("hex")}`;
    const address = web3.eth.accounts.recover(
      web3.utils.sha3(Payload as string) as string,
      signature
    );
    return {
      address,
      order: new BigNumber(address.slice(2).toUpperCase(), 16),
      signature,
    };
  });

  signatures.sort((a, b) => {
    if (a.order.eq(b.order)) {
      return 0;
    }

    if (a.order.gt(b.order)) {
      return 1;
    }

    return -1;
  });
  try {
    // const res = await MultiVault.saveWithdrawAlien(
    //   Payload,
    //   signatures.map(({ signature }) => signature)
    // );
    // console.log("tx hash ; ", res?.hash);
    return ["payload", Payload.toString()];
  } catch (e: any) {
    console.log(e);
    return ["ERROR", e.message];
  }
}

export function useSaveWithdraws() {
  return { saveWithdrawNative, saveWithdrawAlien };
}
