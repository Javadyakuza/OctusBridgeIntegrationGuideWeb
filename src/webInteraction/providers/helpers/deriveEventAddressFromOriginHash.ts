import {
  Address,
  Contract,
  EventsBatch,
  ProviderRpcClient,
} from "everscale-inpage-provider";
import * as constants from "./constants";
import { FactorySource, factorySource } from "../artifacts/build/factorySource";
export async function fetchAlienEventAddressFromOriginTxHash(
  provider: ProviderRpcClient,
  txHash: string
): Promise<Address | undefined> {
  // fetching the tx receipt
  const originTxReceipt = (await provider.getTransaction({ hash: txHash }))
    .transaction;
  // fetching the conf contract

  const EverEvmAlienEventConfig: Contract<
    FactorySource["EverscaleEthereumEventConfiguration"]
  > = new provider.Contract(
    factorySource["EverscaleEthereumEventConfiguration"],
    constants.EverscaleEthereumEventConfigurationA
  );

  // getting the pastEvents
  const pastEvents: EventsBatch<
    FactorySource["EverscaleEthereumEventConfiguration"],
    FactorySource["EverscaleEthereumEventConfiguration"]["events"][1]["name"]
  > = await EverEvmAlienEventConfig.getPastEvents({
    filter: (event: any) => event.event === "NewEventContract",
    // limit: 100,
  });
  for (const event in pastEvents.events) {
    if (
      pastEvents.events[event].transaction.createdAt ==
      originTxReceipt?.createdAt
    ) {
      console.log(pastEvents.events[event].data.eventContract);
      return pastEvents.events[event].data.eventContract;
    }
  }
}
//--//
export async function fetchNativeEventAddressFromOriginTxHash(
  provider: ProviderRpcClient,
  txHash: string
): Promise<Address | undefined> {
  // fetching the tx receipt
  const originTxReceipt = (await provider.getTransaction({ hash: txHash }))
    .transaction;

  // fetching the conf contract
  const EverEvmAlienEventConfig: Contract<
    FactorySource["EverscaleEthereumEventConfiguration"]
  > = new provider.Contract(
    factorySource["EverscaleEthereumEventConfiguration"],
    constants.EverscaleEthereumEventConfigurationN
  );

  // getting the pastEvents
  const pastEvents: EventsBatch<
    FactorySource["EverscaleEthereumEventConfiguration"],
    FactorySource["EverscaleEthereumEventConfiguration"]["events"][1]["name"]
  > = await EverEvmAlienEventConfig.getPastEvents({
    filter: (event: any) => event.event === "NewEventContract",
    // limit: 100,
  });

  for (const event in pastEvents.events) {
    if (
      pastEvents.events[event].transaction.createdAt ==
      originTxReceipt?.createdAt
    ) {
      console.log(pastEvents.events[event].data.eventContract);
      return pastEvents.events[event].data.eventContract;
    }
  }
}
