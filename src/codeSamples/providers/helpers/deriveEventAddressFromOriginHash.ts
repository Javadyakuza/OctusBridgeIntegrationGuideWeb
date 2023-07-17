import {
  Address,
  Contract,
  EventsBatch,
  ProviderRpcClient,
} from "everscale-inpage-provider";

import * as constants from "./constants";
import { FactorySource, factorySource } from "../artifacts/build/factorySource";

/**
 *
 * @param provider an instance of tvm provider.
 * @param txHash The root transaction hash that initiated the token transfer on Everscale
 * @returns {Promise<Address | undefined>} returns either the address of the event contract is exists and undefined if not
 */
export async function fetchAlienEventAddressFromOriginTxHash(
  provider: ProviderRpcClient,
  txHash: string
): Promise<Address | undefined> {
  // Fetching the tx receipt
  const originTxReceipt = (await provider.getTransaction({ hash: txHash }))
    .transaction;

  // Fetching the conf contract
  const EverEvmAlienEventConfig: Contract<
    FactorySource["EverscaleEthereumEventConfiguration"]
  > = new provider.Contract(
    factorySource["EverscaleEthereumEventConfiguration"],
    constants.EverscaleEthereumEventConfigurationA
  );

  // Fetching the pastEvents
  const pastEvents: EventsBatch<
    FactorySource["EverscaleEthereumEventConfiguration"],
    FactorySource["EverscaleEthereumEventConfiguration"]["events"][1]["name"]
  > = await EverEvmAlienEventConfig.getPastEvents({
    filter: (event: any) => event.event === "NewEventContract",
    // limit: 100,
  });
  pastEvents.events.forEach((event) => {
    if (event.transaction.createdAt == originTxReceipt?.createdAt) {
      return event.data.eventContract;
    }
  });

  return undefined;
}

/**
 *
 * @param provider an instance of tvm provider.
 * @param txHash The root transaction hash that initiated the token transfer on Everscale
 * @returns {Promise<Address | undefined>} returns either the address of the event contract is exists and undefined if not
 */
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

  pastEvents.events.forEach((event) => {
    if (event.transaction.createdAt == originTxReceipt?.createdAt) {
      return event.data.eventContract;
    }
  });

  return undefined;
}
