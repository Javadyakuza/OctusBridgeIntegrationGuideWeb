import init, { mapTonCellIntoEthBytes } from "eth-ton-abi-converter";
import { encodeBase64, ethers } from "ethers";
import {
  ProviderRpcClient,
  Address,
  Contract,
} from "everscale-inpage-provider";
import * as web3 from "web3";

import { FactorySource, factorySource } from "./artifacts/build/factorySource";
import * as constants from "./helpers/constants";
import { getRandomUint } from "./helpers/randuint";
import { setupAndGetProvidersDetails } from "./useWalletsData";

interface EventVoteData {
  eventTransaction: string;
  eventIndex: number;
  eventData: string;
  eventBlockNumber: number;
  eventBlock: string;
}

/**
 * buildWrapPayload function prepares the payload to be used in Vault.wrap in order to transfer Ever from everscale to an evm network.
 * @param everSender sender ever account wallet address
 * @param evmRecipient receiver EvmAddress
 * @param amount target token amount without decimals
 * @param chainId target evm network chainId
 * @param releaseByEver this parameter specifies if the credit backend should release the assets in the target evm network(true), or user must release them manually(false)
 * @
 * returns wrap payload string and rand nonce
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
  const randomNonce: string = getRandomUint();
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
 * @
 * returns wrap payload string and rand nonce
 */
async function buildTransferPayload(): Promise<[string, string]> {
  let provider: ProviderRpcClient, evmRecipient: string, chainId: string;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [provider, , evmRecipient, chainId] = returnedValues;
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
  const randomNonce = getRandomUint();
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
 * @
 * returns burn payload string
 */
async function buildBurnPayloadForEvmAlienToken(
  TargetTokenRootAlienEvm: Address
): Promise<[string, string]> {
  let provider: ProviderRpcClient, evmRecipient: string;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [provider, , evmRecipient] = returnedValues;
    } else {
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
  const randNonce = getRandomUint();
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
 * @
 * returns burn payload string
 */
async function buildBurnPayloadForEvmNativeToken(): Promise<[string, string]> {
  let provider: ProviderRpcClient, evmRecipient: string;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [provider, , evmRecipient] = returnedValues;
    } else {
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

  const randomNonce: string = getRandomUint();
  const data = await provider.packIntoCell({
    data: {
      nonce: randomNonce,
      network: 1,
      burnPayload: burnPayload.boc,
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
 * @
 * returns {bytes} payload string to be used in saveWithdraw Functions
 */
export async function buildSaveWithdraw(
  EverEvmAlienEventContractAddress: Address
): Promise<[string, string]> {
  let provider: ProviderRpcClient;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [provider, , ,] = returnedValues;
    } else {
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
  const EverEvmAlienEventConf: Contract<
    FactorySource["EverscaleEthereumEventConfiguration"]
  > = new provider.Contract(
    factorySource["EverscaleEthereumEventConfiguration"],
    eventDetails._eventInitData.configuration
  );
  const [eventConfigDetails, flags] = await Promise.all([
    await EverEvmAlienEventConf.methods.getDetails({ answerId: 0 }).call({}),
    (await EverEvmAlienEventConf.methods.getFlags({ answerId: 0 }).call({}))
      ._flags,
  ]);
  await init();
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

  return ["payload", encodedEvent];
}
export async function buildNativeEventVoteData(
  txHash: string
): Promise<any | null> {
  let abi = new ethers.Interface([
    `event NativeTransfer(
        int8 native_wid,
        uint256 native_addr,
        uint128 amount,
        int8 recipient_wid,
        uint256 recipient_addr,
        uint value,
        uint expected_evers,
        bytes payload
    )`,
  ]);
  const provider = new ethers.JsonRpcProvider(
    "https://endpoints.omniatech.io/v1/bsc/mainnet/public"
  );
  try {
    const txReceipt = await provider.getTransactionReceipt(txHash);
    if (!txReceipt) {
      return ["ERROR: ", "Transaction receipt not found"];
    }
    const logs = txReceipt.logs
      .map((log) => {
        try {
          let abiArgs = { topics: [log.topics[0]], data: log.data };
          return {
            index: log.index,
            data: log.data,
            parsedLog: abi.parseLog(abiArgs),
          };
        } catch (e) {
          return null;
        }
      })
      .filter((log) => log?.parsedLog !== null) as {
      index: number;
      data: string;
      parsedLog: any;
    }[];
    console.log(logs);
    const log = logs.find((log) => log.parsedLog.name === "NativeTransfer");
    const eventVoteData: EventVoteData = {
      eventTransaction: txReceipt.hash,
      eventIndex: log?.index!,
      eventData: log?.data!,
      eventBlockNumber: txReceipt.blockNumber,
      eventBlock: txReceipt.blockHash,
    };
    return eventVoteData;
  } catch (e) {
    throw e;
  }
}
export async function buildAlienEventVoteData(
  txHash: string
): Promise<any | null> {
  const provider = new ethers.JsonRpcProvider(
    "https://endpoints.omniatech.io/v1/bsc/mainnet/public"
  );
  let abi = new ethers.Interface([
    `event AlienTransfer(
        uint256 base_chainId,
        uint160 base_token,
        string name,
        string symbol,
        uint8 decimals,
        uint128 amount,
        int8 recipient_wid,
        uint256 recipient_addr,
        uint value,
        uint expected_evers,
        bytes payload
    )`,
  ]);
  try {
    const txReceipt = await provider.getTransactionReceipt(txHash);
    if (!txReceipt) {
      return ["ERROR: ", "Transaction receipt not found"];
    }
    const logs = txReceipt.logs
      .map((log) => {
        try {
          let abiArgs = { topics: [log.topics[0]], data: log.data };
          return {
            index: log.index,
            data: log.data,
            parsedLog: abi.parseLog(abiArgs),
          };
        } catch (e) {
          return null;
        }
      })
      .filter((log) => log?.parsedLog !== null) as {
      index: number;
      data: string;
      parsedLog: any;
    }[];
    console.log(logs);
    const log = logs.find((log) => log.parsedLog.name === "AlienTransfer");
    const eventVoteData: EventVoteData = {
      eventTransaction: txReceipt.hash,
      eventIndex: log?.index!,
      eventData: log?.data!,
      eventBlockNumber: txReceipt.blockNumber,
      eventBlock: txReceipt.blockHash,
    };
    return eventVoteData;
  } catch (e) {
    console.error(`Error fetching AlienTransfer event: ${e}`);
    throw e;
  }
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
    buildNativeEventVoteData,
    buildAlienEventVoteData,
  };
}
