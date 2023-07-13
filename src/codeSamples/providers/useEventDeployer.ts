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

interface EventVoteData {
  eventTransaction: string;
  eventIndex: number;
  eventData: string;
  eventBlockNumber: number;
  eventBlock: string;
}

type EventVoteDataParam = Parameters<
  Contract<
    FactorySource["EthereumEverscaleEventConfiguration"]
  >["methods"]["deployEvent"]
>[0]["eventVoteData"];

async function deployAlienEvent(evmTxHash: string): Promise<[string, string]> {
  // setting ever wallet
  let provider: ProviderRpcClient, everSender: Address;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [provider, everSender, ,] = returnedValues;
    } else {
      // Handle the case where the function returns undefined
      return ["ERROR", "rejection by user !"];
    }
  } catch (error) {
    // Handle any errors that occur during function execution
    return ["ERROR", "unknown error accrued while fetching wallet's data !"];
  }
  // fetching the contract
  const EvmEverEventConf: Contract<
    FactorySource["EthereumEverscaleEventConfiguration"]
  > = new provider.Contract(
    factorySource["EthereumEverscaleEventConfiguration"],
    EthereumEverscaleEventConfigurationA
  );

  // deploying the event contract
  const { buildAlienEventVoteData } = usePayloadBuilders();
  let eventLog: [string, string] | EventVoteData =
    await buildAlienEventVoteData(evmTxHash);
  if (Array.isArray(eventLog)) return eventLog;

  let eventVoteData: EventVoteDataParam;

  let eventData: string | undefined;

  const ethConfigDetails = await EvmEverEventConf.methods
    .getDetails({ answerId: 0 })
    .call({});
  const flags = (
    await EvmEverEventConf.methods.getFlags({ answerId: 0 }).call({})
  )._flags;
  await init();
  eventData = mapEthBytesIntoTonCell(
    Buffer.from(
      ethConfigDetails._basicConfiguration.eventABI,
      "base64"
    ).toString(),
    eventLog.eventData,
    flags
  );
  eventVoteData = {
    eventTransaction: eventLog.eventTransaction,
    eventIndex: eventLog.eventIndex,
    eventData: eventData,
    eventBlockNumber: eventLog.eventBlockNumber,
    eventBlock: eventLog.eventBlock,
  };
  try {
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
  // setting ever wallet
  let provider: ProviderRpcClient, everSender: Address;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [provider, everSender, ,] = returnedValues;
    } else {
      // Handle the case where the function returns undefined
      return ["ERROR", "rejection by user !"];
    }
  } catch (error) {
    // Handle any errors that occur during function execution
    return ["ERROR", "unknown error accrued while fetching wallet's data !"];
  }
  // fetching the contract
  const EvmEverEventConf: Contract<
    FactorySource["EthereumEverscaleEventConfiguration"]
  > = new provider.Contract(
    factorySource["EthereumEverscaleEventConfiguration"],
    EthereumEverscaleEventConfigurationN
  );
  // deploying the event contract
  const { buildNativeEventVoteData } = usePayloadBuilders();
  let eventLog: [string, string] | EventVoteData =
    await buildNativeEventVoteData(evmTxHash);
  if (Array.isArray(eventLog)) return eventLog;
  console.log(Array.isArray(eventLog));
  let eventVoteData: EventVoteDataParam;

  let eventData: string | undefined;

  const ethConfigDetails = await EvmEverEventConf.methods
    .getDetails({ answerId: 0 })
    .call({});
  const flags = (
    await EvmEverEventConf.methods.getFlags({ answerId: 0 }).call({})
  )._flags;
  await init();
  eventData = mapEthBytesIntoTonCell(
    Buffer.from(
      ethConfigDetails._basicConfiguration.eventABI,
      "base64"
    ).toString(),
    eventLog.eventData,
    flags
  );
  eventVoteData = {
    eventTransaction: eventLog.eventTransaction,
    eventIndex: eventLog.eventIndex,
    eventData: eventData,
    eventBlockNumber: eventLog.eventBlockNumber,
    eventBlock: eventLog.eventBlock,
  };

  try {
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

export function useEventDeployer() {
  return {
    deployAlienEvent,
    deployNativeEvent,
  };
}
