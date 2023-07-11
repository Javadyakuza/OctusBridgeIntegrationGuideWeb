import * as EVER from "everscale-standalone-client";
import {
  Contract,
  ProviderRpcClient,
  Address,
} from "everscale-inpage-provider";
import { mapEthBytesIntoTonCell } from "eth-ton-abi-converter";
import { usePayloadBuilders } from "./usePayloadBuilders";
import { FactorySource, factorySource } from "./artifacts/build/factorySource";
import {
  EthereumEverscaleEventConfigurationA,
  EthereumEverscaleEventConfigurationN,
} from "./helpers/constants";
import { setupAndGetProvidersDetails } from "./useWalletsData";
import { ethers } from "ethers";

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

async function deployAlienEvent(evmTxHash: string) {
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
  console.log(
    "conf details : ",
    (await EvmEverEventConf.methods.getDetails({ answerId: 0 }).call({}))
      ._basicConfiguration
  );
  // deploying the event contract
  const { buildAlienEventVoteData } = usePayloadBuilders();
  let eventLog: EventVoteData = await buildAlienEventVoteData(evmTxHash);
  let eventVoteData: EventVoteDataParam;

  let eventData: string | undefined;

  const ethConfigDetails = await EvmEverEventConf.methods
    .getDetails({ answerId: 0 })
    .call({});
  const flags = (
    await EvmEverEventConf.methods.getFlags({ answerId: 0 }).call({})
  )._flags;

  eventData = await mapEthBytesIntoTonCell(
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

  await EvmEverEventConf.methods
    .deployEvent({ eventVoteData: eventVoteData })
    .send({
      from: await everSender,
      amount: ethers.parseUnits("6", 9).toString(),
      bounce: true,
    })
    .then((res) => {
      console.log("successful, tx hash : ", res.id.hash);
    });
}
async function deployNativeEvent(evmTxHash: string) {
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
  let eventLog: EventVoteData = await buildNativeEventVoteData(evmTxHash);
  let eventVoteData: EventVoteDataParam;

  let eventData: string | undefined;

  const ethConfigDetails = await EvmEverEventConf.methods
    .getDetails({ answerId: 0 })
    .call({});
  const flags = (
    await EvmEverEventConf.methods.getFlags({ answerId: 0 }).call({})
  )._flags;

  eventData = await mapEthBytesIntoTonCell(
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

  await EvmEverEventConf.methods
    .deployEvent({ eventVoteData: eventVoteData })
    .send({
      from: await everSender,
      amount: ethers.parseUnits("6", 9).toString(),
      bounce: true,
    })
    .then((res) => {
      console.log("successful, tx hash : ", res.id.hash);
    });
}

export async function useEventsDeployer() {
  return {
    deployAlienEvent,
    deployNativeEvent,
  };
}
