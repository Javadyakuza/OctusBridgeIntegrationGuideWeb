import { Contract } from "everscale-inpage-provider";

import { FactorySource } from "./artifacts/build/factorySource";

// event vote data interface to be passed to deployEvent function  on EventConfig contract.
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

export interface PackedCell {
  boc: string;
  hash: string;
}
