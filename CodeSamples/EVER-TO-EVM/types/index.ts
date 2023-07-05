import { Address, Contract, Signer } from "../scripts/helpers/node_modules/locklift";
import { FactorySource } from "../build/factorySource";

export type EncodeMultiVaultAlienEVMEverscaleParam = Parameters<
  Contract<FactorySource["CellEncoderStandalone"]>["methods"]["encodeMultiVaultAlienEVMEverscale"]
>[0];

export type EventVoteDataParam = Parameters<
  Contract<FactorySource["EthereumEverscaleEventConfiguration"]>["methods"]["deployEvent"]
>[0]["eventVoteData"];
