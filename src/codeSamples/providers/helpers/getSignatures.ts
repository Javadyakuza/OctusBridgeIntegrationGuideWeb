import {
  Contract,
  Address,
  ProviderRpcClient,
} from "everscale-inpage-provider";

import { FactorySource, factorySource } from "../artifacts/build/factorySource";

/**
 *
 * @param eventAddress EverscaleEthereumEvent contract address.
 * @param provider an instance of tvm provider.
 * @returns {Promise<string[]>}  Is either the signatures array or an error.
 */
export async function getSignatures(
  eventAddress: Address,
  provider: ProviderRpcClient
): Promise<string[]> {
  //fetching the contract
  const eventContract: Contract<FactorySource["EverscaleEthereumBaseEvent"]> =
    new provider.Contract(
      factorySource["EverscaleEthereumBaseEvent"],
      eventAddress
    );

  // fetching the signatures
  return new Promise(async (resolve, reject) => {
    let signatures: string[];
    try {
      signatures = (
        await eventContract.methods.getDetails({ answerId: 0 }).call({})
      )._signatures;
      resolve(signatures);
    } catch (error: any) {
      reject(["Error:", error.message]);
    }
  });
}
