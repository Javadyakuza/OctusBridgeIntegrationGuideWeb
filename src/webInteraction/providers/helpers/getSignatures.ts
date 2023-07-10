import {
  Contract,
  Address,
  ProviderRpcClient,
} from "everscale-inpage-provider";

import { FactorySource, factorySource } from "../artifacts/build/factorySource";

export async function getSignatures(
  eventAddress: Address,
  provider: ProviderRpcClient
): Promise<string[]> {
  const eventContract: Contract<FactorySource["EverscaleEthereumBaseEvent"]> =
    new provider.Contract(
      factorySource["EverscaleEthereumBaseEvent"],
      eventAddress
    );

  return new Promise((resolve) => {
    let signatures: string[];
    setTimeout(async () => {
      signatures = (
        await eventContract.methods.getDetails({ answerId: 0 }).call({})
      )._signatures;
      resolve(signatures);
    }, 5000);
  });
}
