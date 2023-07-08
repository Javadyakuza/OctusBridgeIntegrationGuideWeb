import { getRandomUint } from "./helpers/randuint";
import * as constants from "./helpers/constants";
import {
  ProviderRpcClient,
  Address,
  Contract,
} from "everscale-inpage-provider";
import { useEvmProvider } from "../../providers/useEvmProvider";
import { encodeBase64, ethers } from "ethers";
import { setupAndGetProvidersDetails } from "./useWalletsData";
import { mapTonCellIntoEthBytes } from "eth-ton-abi-converter";
import { FactorySource, factorySource } from "./artifacts/build/factorySource";
import * as web3 from "web3";
/**
 * buildWrapPayload function prepares the payload to be used in Vault.wrap in order to transfer Ever from everscale to an evm network.
 * @param everSender sender ever account wallet address
 * @param evmRecipient receiver EvmAddress
 * @param amount target token amount without decimals
 * @param chainId target evm network chainId
 * @param releaseByEver this parameter specifies if the credit backend should release the assets in the target evm network(true), or user must release them manually(false)
 * @returns wrap payload string and rand nonce
 */
async function buildWrapPayload(
  amount: string | number,
  releaseByEver: boolean
): Promise<[string, string]> {
  let provider: ProviderRpcClient,
    everSender: Address,
    evmRecipient: string,
    chainId: string;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [provider, everSender, evmRecipient, chainId] = returnedValues;
    } else {
      // Handle the case where the function returns undefined
      return ["ERROR", "rejection by user !"];
    }
  } catch (error) {
    // Handle any errors that occur during function execution
    return ["ERROR", "unknown error accrued while fetching wallet's data !"];
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
/**
 * buildTransferPayload prepares the payload to transfer a everscale native token such as BRIDGE or QUBE from everscale to an evm network
 * @returns wrap payload string and rand nonce
 */
async function buildTransferPayload(): Promise<[string, string]> {
  let provider: ProviderRpcClient,
    everSender: Address,
    evmRecipient: string,
    chainId: string;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [provider, everSender, evmRecipient, chainId] = returnedValues;
      // Use the returned values as needed
    } else {
      // Handle the case where the function returns undefined
      return ["ERROR", "rejection by user !"];
    }
  } catch (error) {
    // Handle any errors that occur during function execution
    return ["ERROR", "unknown error accrued while fetching wallet's data !"];
  }
  const transferPayload = await provider.packIntoCell({
    data: {
      addr: evmRecipient,
      chainId: chainId,
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
  let randomNonce = getRandomUint();
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
  return [data.boc, randomNonce];
}
/**
 * buildBurnPayloadForEvmAlienToken function prepares the payload to be used in TokenWalletUpgradable.burn in order to transfer a token from everscale and to an evm network.
 * @param evmRecipient receiver EvmAddress
 * @returns burn payload string
 */
async function buildBurnPayloadForEvmAlienToken(
  TargetTokenRootAlienEvm: Address
): Promise<[string, string]> {
  let provider: ProviderRpcClient,
    everSender: Address,
    evmRecipient: string,
    chainId: string;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [provider, everSender, evmRecipient, chainId] = returnedValues;
    } else {
      // Handle the case where the function returns undefined
      return ["ERROR", "rejection by user !"];
    }
  } catch (error) {
    // Handle any errors that occur during function execution
    return ["ERROR", "unknown error accrued while fetching wallet's data !"];
  }
  const operationPayload = await provider.packIntoCell({
    data: {
      addr: evmRecipient,
      callback: {
        recipient: "0x0000000000000000000000000000000000000000",
        payload: "",
        strict: false,
      },
    },
    structure: [
      { name: "addr", type: "uint160" },
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

  const payload = await provider.packIntoCell({
    data: {
      network: 1,
      withdrawPayload: operationPayload.boc,
    },
    structure: [
      { name: "network", type: "uint8" },
      { name: "withdrawPayload", type: "cell" },
    ] as const,
  });
  let randNonce = getRandomUint();
  const data = await provider.packIntoCell({
    data: {
      nonce: randNonce,
      type: 0,
      targetToken: TargetTokenRootAlienEvm, // TokenRootAlienEvm, different with normal tip3 tokens in everscale.
      operationPayload: payload.boc,
    },
    structure: [
      { name: "nonce", type: "uint32" },
      { name: "type", type: "uint8" },
      { name: "targetToken", type: "address" },
      { name: "operationPayload", type: "cell" },
    ] as const,
  });
  return [data.boc, randNonce];
}
/**
 * buildBurnPayloadForEvmNativeToken function prepares the payload to be used in TokenWalletUpgradable.burn in order to transfer a token from everscale and to an evm network.
 * @param evmRecipient receiver EvmAddress
 * @returns burn payload string
 */
async function buildBurnPayloadForEvmNativeToken(): Promise<[string, string]> {
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
  const burnPayload = await provider.packIntoCell({
    data: {
      addr: constants.unWrapper,
      callback: {
        recipient: constants.unWrapper,
        payload:
          encodeBase64(
            web3.eth.abi.encodeParameters(["address"], [evmRecipient])
          ) ?? "",
        strict: false,
      },
    },
    structure: [
      { name: "addr", type: "uint160" },
      {
        name: "callback",
        type: "tuple",
        components: [
          { name: "recipient", type: "uint160" },
          { name: "payload", type: "bytes" },
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
      burnPayload: burnPayload!.boc,
    },
    structure: [
      { name: "nonce", type: "uint32" },
      { name: "network", type: "uint8" },
      { name: "burnPayload", type: "cell" },
    ] as const,
  });

  return [data.boc, randomNonce];
}
/**
 * prepares the payload to be used in withdraw function on MV contracts on Evm sides
 * @param EverEvmAlienEventContractAddress address of the relevant deployed event contract on everscale
 * @returns {bytes} payload string to be used in saveWithdraw Functions
 */
export async function buildSaveWithdraw(
  EverEvmAlienEventContractAddress: Address
) {
  // Promise<string | [string, string]>
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
  // fetching the contracts
  const EverEvmEventContract: Contract<
    FactorySource["EverscaleEthereumBaseEvent"]
  > = new provider.Contract(
    factorySource["EverscaleEthereumBaseEvent"],
    EverEvmAlienEventContractAddress
  );
  const eventDetails = await EverEvmEventContract.methods
    .getDetails({ answerId: 0 })
    .call({});
  console.log(" details fetched !", eventDetails);
  const EverEvmAlienEventConf: Contract<
    FactorySource["EverscaleEthereumEventConfiguration"]
  > = new provider.Contract(
    factorySource["EverscaleEthereumEventConfiguration"],
    eventDetails._eventInitData.configuration
  );
  const [eventConfigDetails, flags] = await Promise.all([
    await EverEvmAlienEventConf.methods.getDetails({ answerId: 0 }).call({}),
    (
      await EverEvmAlienEventConf.methods.getFlags({ answerId: 0 }).call({})
    )._flags,
  ]);
  // preparing the payload
  const eventDataEncoded = mapTonCellIntoEthBytes(
    Buffer.from(
      (await EverEvmAlienEventConf.methods.getDetails({ answerId: 0 }).call({}))
        ._basicConfiguration.eventABI,
      "base64"
    ).toString(),
    eventDetails._eventInitData.voteData.eventData,
    flags
  );
  const roundNumber = (
    await EverEvmEventContract.methods.round_number({}).call({})
  ).round_number;

  const encodedEvent = web3.eth.abi.encodeParameters(
    [
      {
        EverscaleEvent: {
          eventTransactionLt: "uint64",
          eventTimestamp: "uint32",
          eventData: "bytes",
          configurationWid: "int8",
          configurationAddress: "uint256",
          eventContractWid: "int8",
          eventContractAddress: "uint256",
          proxy: "address",
          round: "uint32",
        },
      },
    ],
    [
      {
        eventTransactionLt:
          eventDetails._eventInitData.voteData.eventTransactionLt,
        eventTimestamp: eventDetails._eventInitData.voteData.eventTimestamp,
        eventData: eventDataEncoded,
        configurationWid: eventDetails._eventInitData.configuration
          .toString()
          .split(":")[0],
        configurationAddress: `0x${
          eventDetails._eventInitData.configuration.toString().split(":")[1]
        }`,
        eventContractWid:
          EverEvmAlienEventContractAddress.toString().split(":")[0],
        eventContractAddress: `0x${
          EverEvmAlienEventContractAddress.toString().split(":")[1]
        }`,
        proxy: `0x${ethers
          .toBigInt(eventConfigDetails._networkConfiguration.proxy)
          .toString(16)
          .padStart(40, "0")}`,
        round: roundNumber,
      },
    ]
  );
  return encodedEvent;
}

const format = (data: string[]): string => {
  return `payload : ${data[0]} <br/>
  random nonce : ${data[1]}
`;
};

export function usePayloadBuilders() {
  return {
    buildWrapPayload,
    buildTransferPayload,
    buildBurnPayloadForEvmAlienToken,
    buildBurnPayloadForEvmNativeToken,
    format,
    buildSaveWithdraw,
  };
}
