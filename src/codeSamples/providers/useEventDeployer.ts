import {
  Contract,
  ProviderRpcClient,
  Address,
  Transaction,
} from "everscale-inpage-provider";
import init, { mapEthBytesIntoTonCell } from "eth-ton-abi-converter";
import { usePayloadBuilders } from "./usePayloadBuilders";
import { FactorySource, factorySource } from "./artifacts/build/factorySource";
import {
  EthereumEverscaleEventConfigurationA,
  EthereumEverscaleEventConfigurationN,
} from "./helpers/constants";
import { setupAndGetProvidersDetails } from "./useWalletsData";
import { ethers } from "ethers";
import {
  fetchAlienEventAddressFromOriginTxHash,
  fetchNativeEventAddressFromOriginTxHash,
} from "./helpers/deriveEventAddressFromOriginHash";

import { EventVoteData, EventVoteDataParam } from "./types";

async function deployAlienEvent(evmTxHash: string): Promise<[string, string]> {
  // fetching the provider data
  let provider: ProviderRpcClient, everSender: Address;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [provider, everSender, ,] = providerDetails;
    } else {
      return ["ERROR", "rejection by user !"];
    }
  } catch (error: any) {
    return ["ERROR", error.message];
  }

  // fetching the contract
  const EvmEverEventConf: Contract<
    FactorySource["EthereumEverscaleEventConfiguration"]
  > = new provider.Contract(
    factorySource["EthereumEverscaleEventConfiguration"],
    EthereumEverscaleEventConfigurationA
  );

  // building the payload
  const { buildAlienEventVoteData } = usePayloadBuilders();
  let eventLog: [string, string] | EventVoteData =
    await buildAlienEventVoteData(evmTxHash);
  if (Array.isArray(eventLog)) return eventLog;

  let eventData: string | undefined;

  try {
    const eventAbi: string = (
      await EvmEverEventConf.methods.getDetails({ answerId: 0 }).call({})
    )._basicConfiguration.eventABI;

    const flags: string = (
      await EvmEverEventConf.methods.getFlags({ answerId: 0 }).call({})
    )._flags;

    // init() is necessary to use wasm from this lib(eth-ton-abi-convertor) in browser
    await init();
    eventData = mapEthBytesIntoTonCell(
      Buffer.from(eventAbi, "base64").toString(),
      eventLog.eventData,
      flags
    );

    const eventVoteData: EventVoteDataParam = {
      eventTransaction: eventLog.eventTransaction,
      eventIndex: eventLog.eventIndex,
      eventData: eventData,
      eventBlockNumber: eventLog.eventBlockNumber,
      eventBlock: eventLog.eventBlock,
    };

    // deploying the event
    const res: Transaction = await EvmEverEventConf.methods
      .deployEvent({ eventVoteData: eventVoteData })
      .send({
        from: everSender,
        amount: ethers.parseUnits("6", 9).toString(),
        bounce: true,
      });

    const eventAddress: Address = (await fetchAlienEventAddressFromOriginTxHash(
      provider,
      res?.id.hash
    ))!;
    return ["event address : ", eventAddress.toString()];
  } catch (error: any) {
    return ["ERROR: ", error.message];
  }
}
async function deployNativeEvent(evmTxHash: string): Promise<[string, string]> {
  // fetching the provider data
  let provider: ProviderRpcClient, everSender: Address;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [provider, everSender, ,] = providerDetails;
    } else {
      return ["ERROR", "rejection by user !"];
    }
  } catch (error: any) {
    return ["ERROR", error.message];
  }

  // fetching the contract
  const EvmEverEventConf: Contract<
    FactorySource["EthereumEverscaleEventConfiguration"]
  > = new provider.Contract(
    factorySource["EthereumEverscaleEventConfiguration"],
    EthereumEverscaleEventConfigurationN
  );

  // Building the payload
  const { buildNativeEventVoteData } = usePayloadBuilders();
  let eventLog: [string, string] | EventVoteData =
    await buildNativeEventVoteData(evmTxHash);
  if (Array.isArray(eventLog)) return eventLog;

  let eventData: string | undefined;

  try {
    const eventAbi: string = (
      await EvmEverEventConf.methods.getDetails({ answerId: 0 }).call({})
    )._basicConfiguration.eventABI;

    const flags: string = (
      await EvmEverEventConf.methods.getFlags({ answerId: 0 }).call({})
    )._flags;

    // init() is necessary to use wasm from this lib(eth-ton-abi-convertor) in browser
    await init();
    eventData = mapEthBytesIntoTonCell(
      Buffer.from(eventAbi, "base64").toString(),
      eventLog.eventData,
      flags
    );

    const eventVoteData: EventVoteDataParam = {
      eventTransaction: eventLog.eventTransaction,
      eventIndex: eventLog.eventIndex,
      eventData: eventData,
      eventBlockNumber: eventLog.eventBlockNumber,
      eventBlock: eventLog.eventBlock,
    };

    // deploying the event
    const res: Transaction = await EvmEverEventConf.methods
      .deployEvent({ eventVoteData: eventVoteData })
      .send({
        from: everSender,
        amount: ethers.parseUnits("6", 9).toString(),
        bounce: true,
      });
    const eventAddress: Address =
      (await fetchNativeEventAddressFromOriginTxHash(provider, res?.id.hash))!;
    return ["event address : ", eventAddress.toString()];
  } catch (error: any) {
    return ["ERROR: ", error.message];
  }
}

export function useEventDeployer() {
  return {
    deployAlienEvent,
    deployNativeEvent,
  };
}