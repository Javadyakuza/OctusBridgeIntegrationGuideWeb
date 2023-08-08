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
import { deriveEvmAlienTokenRoot } from "./helpers/deriveEvmAlienTokenRoot";
import { getRandomUint } from "./helpers/randuint";
import { EventVoteData, PackedCell } from "./types";
import { setupAndGetProvidersDetails } from "./useWalletsData";
import { useEvmProvider } from "../../providers/useEvmProvider";

/**
 * buildWrapPayload function prepares the payload to be used in Vault.wrap in order to transfer EVER from everscale to an evm network.
 * @param everSender sender ever account wallet address
 * @param evmRecipient receiver EvmAddress
 * @param amount Target token amount without decimals
 * @param chainId Evm network chainId
 * @param releaseByEver this parameter specifies if the credit backend should release the assets in the target evm network(true), or user must release them manually(false)
 * @returns {Promise<[string, string]>} - An array of strings representing error messages or the the built payload.
 */
async function buildWrapPayload(
  amount: string | number,
  releaseByEver: boolean
): Promise<[string, string]> {
  // Fetching the wallets data
  let provider: ProviderRpcClient,
    everSender: Address,
    evmRecipient: string,
    chainId: string;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [provider, everSender, evmRecipient, chainId] = providerDetails;
    } else {
      return ["ERROR", "rejection by user !"];
    }
  } catch (error: any) {
    return ["ERROR", error.message];
  }
  try {
    //encoding the data
    const transferPayload: PackedCell = await provider.packIntoCell({
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
    const data: PackedCell = await provider.packIntoCell({
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

    const compounderPayload: PackedCell = await provider.packIntoCell({
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
  } catch (e: any) {
    return ["ERROR :", e.message];
  }
}

/**
 * buildTransferPayload prepares the payload to transfer a everscale native token such as BRIDGE or QUBE from everscale to an evm network
 * @returns {Promise<[string, string]>} - An array of strings representing error messages or the the built payload.
 */
async function buildTransferPayload(): Promise<[string, string]> {
  // Fetching the wallets data
  let provider: ProviderRpcClient, evmRecipient: string, chainId: string;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [provider, , evmRecipient, chainId] = providerDetails;
    } else {
      return ["ERROR", "rejection by user !"];
    }
  } catch (error: any) {
    return ["ERROR", error.message];
  }

  try {
    // encoding the data
    const transferPayload: PackedCell = await provider.packIntoCell({
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
    const data: PackedCell = await provider.packIntoCell({
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
  } catch (e: any) {
    return ["ERROR :", e.message];
  }
}
/**
 * buildBurnPayloadForEvmAlienToken function prepares the payload to be used in TokenWalletUpgradable.burn in order to transfer a token from everscale and to an evm network.
 * @param evmRecipient receiver EvmAddress
 * @returns {Promise<[string, string]>} - An array of strings representing error messages or the the built payload.
 */
async function buildBurnPayloadForEvmAlienToken(
  TargetTokenEvmAddress: string
): Promise<[string, string]> {
  // Fetching the wallets data
  let provider: ProviderRpcClient, evmRecipient: string;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [provider, , evmRecipient] = providerDetails;
    } else {
      return ["ERROR", "rejection by user !"];
    }
  } catch (error: any) {
    return ["ERROR", error.message];
  }
  // Fetching he token root
  const TargetTokenRootAlienEvm: Address | [string, string] =
    await deriveEvmAlienTokenRoot(
      provider,
      new ethers.BrowserProvider(useEvmProvider().MetaMaskProvider()),
      TargetTokenEvmAddress
    );
  if (Array.isArray(TargetTokenRootAlienEvm)) {
    return TargetTokenRootAlienEvm;
  }
  try {
    // encoding the data
    const operationPayload: PackedCell = await provider.packIntoCell({
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

    const payload: PackedCell = await provider.packIntoCell({
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
    const data: PackedCell = await provider.packIntoCell({
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
  } catch (e: any) {
    return ["ERROR :", e.message];
  }
}

/**
 * buildBurnPayloadForEvmNativeToken function prepares the payload to be used in TokenWalletUpgradable.burn in order to transfer a token from everscale and to an evm network.
 * @param evmRecipient receiver EvmAddress
 * @returns {Promise<[string, string]>} - An array of strings representing error messages or the the built payload.
 */
async function buildBurnPayloadForEvmNativeToken(): Promise<[string, string]> {
  // Fetching the wallets data
  let provider: ProviderRpcClient, evmRecipient: string;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [provider, , evmRecipient] = providerDetails;
    } else {
      return ["ERROR", "rejection by user !"];
    }
  } catch (error: any) {
    return ["ERROR", error.message];
  }
  try {
    // encoding the data
    const burnPayload: PackedCell = await provider.packIntoCell({
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
    const data: PackedCell = await provider.packIntoCell({
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
  } catch (e: any) {
    return ["ERROR :", e.message];
  }
}

/**
 * prepares the payload to be used in withdraw function on MV contracts on Evm network
 * @param EverEvmAlienEventContractAddress address of the relevant deployed event contract on everscale
 * @returns {Promise<[string, string]>} - An array of strings representing error messages or the the built payload.
 */
export async function buildSaveWithdraw(
  EverEvmAlienEventContractAddress: Address
): Promise<[string, string]> {
  // Fetching the wallets data
  let provider: ProviderRpcClient;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [provider, , ,] = providerDetails;
    } else {
      return ["ERROR", "rejection by user !"];
    }
  } catch (error: any) {
    return ["ERROR", error.message];
  }
  try {
    // Fetching the contracts
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

    // Fetching the details
    const [eventConfigDetails, flags] = await Promise.all([
      await EverEvmAlienEventConf.methods.getDetails({ answerId: 0 }).call({}),
      (await EverEvmAlienEventConf.methods.getFlags({ answerId: 0 }).call({}))
        ._flags,
    ]);

    const roundNumber = (
      await EverEvmEventContract.methods.round_number({}).call({})
    ).round_number;

    // encoding the event data into bytes
    await init();
    const eventDataEncoded = mapTonCellIntoEthBytes(
      Buffer.from(
        (
          await EverEvmAlienEventConf.methods
            .getDetails({ answerId: 0 })
            .call({})
        )._basicConfiguration.eventABI,
        "base64"
      ).toString(),
      eventDetails._eventInitData.voteData.eventData,
      flags
    );

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
  } catch (e: any) {
    return ["ERROR :", e.message];
  }
}

/**
 * Prepares an event vote data to be used in deploying an native event on everscale on evm -> Everscale.
 * @param txHash The root transaction hash that initiated the token transfer on evm network
 * @returns {Promise<[string, string] | EventVoteData>} - An array of strings representing error messages or an object containing the event vote data.
 */
export async function buildNativeEventVoteData(
  txHash: string
): Promise<[string, string] | EventVoteData> {
  // Fetching the wallets data
  const provider = new ethers.BrowserProvider(
    useEvmProvider().MetaMaskProvider()
  );

  // NativeTransfer event interface
  const abi = new ethers.Interface([
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

  // Fetching tx receipt and extracting data out of it
  try {
    const txReceipt = await provider.getTransactionReceipt(txHash);
    if (!txReceipt) {
      return ["ERROR :", "Transaction receipt not found"];
    }
    const txLogs = txReceipt.logs
      .map((log) => {
        try {
          const abiArgs = { topics: [log.topics[0]], data: log.data };

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
    const log = txLogs.find(
      (txLog) => txLog.parsedLog.name === "NativeTransfer"
    );
    if (!log) {
      return ["ERROR :", "couldn't find NativeTransfer Event "];
    }

    // preprint the event vote data
    const eventVoteData: EventVoteData = {
      eventTransaction: txReceipt.hash,
      eventIndex: log?.index,
      eventData: log?.data,
      eventBlockNumber: txReceipt.blockNumber,
      eventBlock: txReceipt.blockHash,
    };

    return eventVoteData;
  } catch (e: any) {
    return ["ERROR :", e.message];
  }
}

/**
 * Prepares an event vote data to be used in deploying an alien event on everscale on evm -> Everscale.
 * @param txHash The root transaction hash that initiated the token transfer on evm network
 * @returns {Promise<[string, string] | EventVoteData>} - An array of strings representing error messages or an object containing the event vote data.
 */
export async function buildAlienEventVoteData(
  txHash: string
): Promise<[string, string] | EventVoteData> {
  // Fetching the wallets data
  const provider = new ethers.BrowserProvider(
    useEvmProvider().MetaMaskProvider()
  );

  // AlienTransfer event interface
  const abi = new ethers.Interface([
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

  // Fetching tx receipt and extracting data out of it
  try {
    const txReceipt = await provider.getTransactionReceipt(txHash);
    if (!txReceipt) {
      return ["ERROR :", "Transaction receipt not found"];
    }
    const txLogs = txReceipt.logs
      .map((log) => {
        try {
          const abiArgs = { topics: [log.topics[0]], data: log.data };

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
    const log = txLogs.find(
      (txLog) => txLog.parsedLog.name === "AlienTransfer"
    );
    if (!log) {
      return ["ERROR :", "couldn't find AlienTransfer Event "];
    }

    // preparing the event vote data
    const eventVoteData: EventVoteData = {
      eventTransaction: txReceipt.hash,
      eventIndex: log?.index,
      eventData: log?.data,
      eventBlockNumber: txReceipt.blockNumber,
      eventBlock: txReceipt.blockHash,
    };

    return eventVoteData;
  } catch (e: any) {
    return ["ERROR :", e.message];
  }
}

/**
 * this function prepares format from returned values of the functions of this module.
 * @param data String array of data.
 * @returns {string} formatted string.
 */
const format = (data: string[]): string => {
  return `${data[0] != "ERROR" ? "payload : " : ""}  ${data[0]} <br/>
  ${data[0] != "ERROR" ? "random nonce" : ""} ${data[1]}
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
