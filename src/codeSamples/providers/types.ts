import {
  Contract,
  ProviderRpcClient,
  Address,
  Transaction,
} from "everscale-inpage-provider";
import { FactorySource, factorySource } from "./artifacts/build/factorySource";

export interface EventVoteData {
  eventTransaction: string;
  eventIndex: number;
  eventData: string;
  eventBlockNumber: number;
  eventBlock: string;
}

export type EventVoteDataParam = Parameters<
  Contract<
    FactorySource["EthereumEverscaleEventConfiguration"]
  >["methods"]["deployEvent"]
>[0]["eventVoteData"];
