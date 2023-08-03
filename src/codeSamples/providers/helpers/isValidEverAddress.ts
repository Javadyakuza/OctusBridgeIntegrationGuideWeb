import {
  Address,
  Contract,
  ProviderRpcClient,
} from "everscale-inpage-provider";

import * as constants from "./constants";
import { FactorySource, factorySource } from "../artifacts/build/factorySource";

/**
 * Checks if the event address valid and in pending status to call the saveWithdraw function in EMM network
 * @param address The event contract address on Everscale
 * @returns returns either an boolean representing the provided event address is valid or no or 1 if the event contract status was not pending (1) and 2 if the event contract address and type were incompatible
 */
export default async function isValidEverAddress(
  isNative: boolean,
  address: string
): Promise<boolean | number> {
  // checking the length
  if (address.length < 66 || address.length > 66) {
    return false;
  }
  if (address.substring(0, 2) != "0:") {
    return false;
  }
  try {
    // getting the status of the contract
    const provider = new ProviderRpcClient();
    const eventContract: Contract<
      FactorySource[
        | "MultiVaultEVMEverscaleEventNative"
        | "MultiVaultEVMEverscaleEventAlien"]
    > = new provider.Contract(
      factorySource[
        isNative
          ? "MultiVaultEVMEverscaleEventNative"
          : "MultiVaultEVMEverscaleEventAlien"
      ],
      new Address(address)
    );
    // checking if the address is related to the event type
    if (
      isNative &&
      (
        await eventContract.methods.initializer().call()
      ).initializer.toString() != constants.ProxyMultiVaultNativeV_4.toString()
    ) {
      // means incompatible event address and type
      return 2;
    }
    if (
      !isNative &&
      (
        await eventContract.methods.initializer().call()
      ).initializer.toString() != constants.ProxyMultiVaultAlienV_7.toString()
    ) {
      // means incompatible event address and type
      return 2;
    }
    if ((await eventContract.methods.status().call()).value0 != "1") {
      return 1;
    }

    return true;
  } catch (err) {
    // Event contract not found !!
    return false;
  }
}
