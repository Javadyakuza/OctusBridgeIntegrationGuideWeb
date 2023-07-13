import { ethers } from "ethers";
import {
  ProviderRpcClient,
  Address,
  Contract,
  Transaction,
} from "everscale-inpage-provider";

import { FactorySource, factorySource } from "./artifacts/build/factorySource";
import { EverAbi } from "./artifacts/WEVERVault";
import * as constants from "./helpers/constants";
import {
  fetchNativeEventAddressFromOriginTxHash,
  fetchAlienEventAddressFromOriginTxHash,
} from "./helpers/deriveEventAddressFromOriginHash";
import { usePayloadBuilders } from "./usePayloadBuilders";
import { setupAndGetProvidersDetails } from "./useWalletsData";

async function transferEverNativeCoin(
  amount: number,
  payWithEver: boolean
): Promise<[string, string[]] | unknown> {
  let provider: ProviderRpcClient, everSender: Address;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [provider, everSender, ,] = providerDetails;
    } else {
      // Handle the case where the function returns undefined
      return ["ERROR", "rejection by user !"];
    }
  } catch (error) {
    // Handle any errors that occur during function execution
    return ["ERROR", "unknown error accrued while fetching wallet's data !"];
  }
  const { buildWrapPayload } = usePayloadBuilders();

  const WEVERVaultContract: Contract<typeof EverAbi.WeverVault> =
    new provider.Contract(EverAbi.WeverVault, constants.WEVERVault);
  // getting the payload
  const wrapPayload: [string, string] = await buildWrapPayload(
    amount,
    payWithEver
  );
  // wrapping
  try {
    const res: Transaction = await WEVERVaultContract.methods
      .wrap({
        tokens: ethers.parseUnits(amount.toString(), 9).toString(),
        owner_address: constants.Compounder,
        gas_back_address: payWithEver ? constants.EventCloser : everSender,
        payload: wrapPayload[0],
      })
      .send({
        from: everSender,
        amount: payWithEver
          ? constants.transfer_fees.EverToEvmAutoRelease.toString()
          : constants.transfer_fees.EverToEvmManualRelease.toString(),
        bounce: true,
      });
    const eventAddress: Address | undefined =
      await fetchNativeEventAddressFromOriginTxHash(provider, res.id.hash);
    if (!payWithEver) {
      return eventAddress
        ? ["Event address : ", eventAddress.toString()]
        : ["ERROR :", "couldn't find Event address !!"];
    } else {
      res?.aborted
        ? ["ERROR :", "transaction aborted"]
        : ["successful, tx hash: ", res?.id.hash];
    }
  } catch (e: any) {
    return ["an error accrued : ", e.message];
  }
}

async function transferEverNativeToken(
  tokenAddress: Address,
  amount: number,
  payWithEver: boolean
): Promise<[string, string[]] | unknown> {
  // setting ever wallet
  let provider: ProviderRpcClient, everSender: Address;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [provider, everSender, ,] = providerDetails;
    } else {
      // Handle the case where the function returns undefined
      return ["ERROR", "rejection by user !"];
    }
  } catch (error) {
    // Handle any errors that occur during function execution
    return ["ERROR", "unknown error accrued while fetching wallet's data !"];
  }
  // fetching the contracts
  const NativeTokenRoot: Contract<FactorySource["TokenRoot"]> =
    new provider.Contract(factorySource["TokenRoot"], tokenAddress);

  const AlienTokenWalletUpgradable: Contract<
    FactorySource["AlienTokenWalletUpgradeable"]
  > = new provider.Contract(
    factorySource["AlienTokenWalletUpgradeable"],
    (
      await NativeTokenRoot.methods
        .walletOf({ answerId: 0, walletOwner: everSender })
        .call({})
    ).value0
  );
  // getting the payload
  const { buildTransferPayload } = usePayloadBuilders();
  const transferPayload: [string, string] = await buildTransferPayload();

  // transferring
  try {
    const res: Transaction = await AlienTokenWalletUpgradable.methods
      .transfer({
        amount: ethers.parseUnits(amount.toString(), 9).toString(),
        deployWalletValue: "200000000",
        notify: true,
        payload: transferPayload[0],
        recipient: constants.ProxyMultiVaultNativeV_4,
        remainingGasTo: payWithEver ? constants.EventCloser : everSender,
      })
      .send({
        from: everSender,
        amount: payWithEver
          ? constants.transfer_fees.EverToEvmAutoRelease.toString()
          : constants.transfer_fees.EverToEvmManualRelease.toString(),
        bounce: true,
      });
    const eventAddress: Address | undefined =
      await fetchNativeEventAddressFromOriginTxHash(provider, res?.id.hash);

    if (!payWithEver) {
      return eventAddress
        ? ["Event address : ", eventAddress.toString()]
        : ["ERROR :", "couldn't find Event address !!"];
    } else {
      res?.aborted
        ? ["ERROR :", "transaction aborted"]
        : ["successful, tx hash: ", res?.id.hash];
    }
  } catch (e: any) {
    return ["an error accrued : ", e.message];
  }
}

async function transferEverAlienToken(
  tokenAddress: Address,
  tokenAddressEvmAlien: Address,
  amount: number,
  payWithEver: boolean
): Promise<[string, string[]] | unknown> {
  let provider: ProviderRpcClient, everSender: Address;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [provider, everSender, ,] = providerDetails;
    } else {
      // Handle the case where the function returns undefined
      return ["ERROR", "rejection by user !"];
    }
  } catch (error) {
    // Handle any errors that occur during function execution
    return ["ERROR", "unknown error accrued while fetching wallet's data !"];
  }
  // fetching the contracts

  const AlienTokenRoot: Contract<FactorySource["TokenRoot"]> =
    new provider.Contract(factorySource["TokenRoot"], tokenAddress);

  const AlienTokenWalletUpgradable: Contract<
    FactorySource["AlienTokenWalletUpgradeable"]
  > = new provider.Contract(
    factorySource["AlienTokenWalletUpgradeable"],
    (
      await AlienTokenRoot.methods
        .walletOf({ answerId: 0, walletOwner: everSender })
        .call({})
    ).value0
  );
  // getting the payload
  const { buildBurnPayloadForEvmAlienToken } = usePayloadBuilders();

  const burnPayload: [string, string] = await buildBurnPayloadForEvmAlienToken(
    tokenAddressEvmAlien
  ); // first str is payload and second str is randomNonce

  // burning
  try {
    const res: Transaction = await AlienTokenWalletUpgradable.methods
      .burn({
        amount: ethers.parseUnits(amount.toString(), 6).toString(),
        callbackTo: constants.MergePool_V4,
        payload: burnPayload[0],
        remainingGasTo: payWithEver ? constants.EventCloser : everSender,
      })
      .send({
        from: everSender,
        amount: payWithEver
          ? constants.transfer_fees.EverToEvmAutoRelease.toString()
          : constants.transfer_fees.EverToEvmManualRelease.toString(),
        bounce: true,
      });

    // getting the event contract address
    const eventAddress: Address | undefined =
      await fetchAlienEventAddressFromOriginTxHash(provider, res?.id.hash)!;

    if (!payWithEver) {
      return eventAddress
        ? ["Event address : ", eventAddress.toString()]
        : ["ERROR :", "couldn't find Event address !!"];
    } else {
      res?.aborted
        ? ["ERROR :", "transaction aborted"]
        : ["successful, tx hash: ", res?.id.hash];
    }
  } catch (e: any) {
    return ["an error accrued : ", e.message];
  }
}

async function transferEverAlienEvmNativeCoin(
  tokenAddress: Address,
  amount: number,
  payWithEver: boolean
): Promise<[string, string[]] | unknown> {
  let provider: ProviderRpcClient, everSender: Address;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [provider, everSender, ,] = providerDetails;
    } else {
      // Handle the case where the function returns undefined
      return ["ERROR", "rejection by user !"];
    }
  } catch (error) {
    // Handle any errors that occur during function execution
    return ["ERROR", "unknown error accrued while fetching wallet's data !"];
  }
  // fetching the contracts

  const AlienTokenRoot: Contract<FactorySource["TokenRoot"]> =
    new provider.Contract(factorySource["TokenRoot"], tokenAddress);

  const AlienTokenWalletUpgradable: Contract<
    FactorySource["AlienTokenWalletUpgradeable"]
  > = new provider.Contract(
    factorySource["AlienTokenWalletUpgradeable"],
    (
      await AlienTokenRoot.methods
        .walletOf({ answerId: 0, walletOwner: everSender })
        .call({})
    ).value0
  );
  const { buildBurnPayloadForEvmNativeToken } = usePayloadBuilders();

  const burnPayload: [string, string] =
    await buildBurnPayloadForEvmNativeToken();
  // burning
  try {
    const res: Transaction = await AlienTokenWalletUpgradable.methods
      .burn({
        callbackTo: constants.ProxyMultivaultAlienV_7,
        payload: burnPayload[0],
        remainingGasTo: payWithEver ? constants.EventCloser : everSender,
        amount: ethers.parseEther(amount.toString()).toString(),
      })
      .send({
        from: everSender,
        amount: payWithEver
          ? constants.transfer_fees.EverToEvmAutoRelease.toString()
          : constants.transfer_fees.EverToEvmManualRelease.toString(),
        bounce: true,
      });

    // getting the event contract address
    const eventAddress: Address | undefined =
      await fetchAlienEventAddressFromOriginTxHash(provider, res?.id.hash);

    if (!payWithEver) {
      return eventAddress
        ? ["Event address : ", eventAddress.toString()]
        : ["ERROR :", "couldn't find Event address !!"];
    } else {
      res?.aborted
        ? ["ERROR :", "transaction aborted"]
        : ["successful, tx hash: ", res?.id.hash];
    }
  } catch (e: any) {
    return ["an error accrued : ", e.message];
  }
}

export function useEverToEvmTransfers() {
  return {
    transferEverNativeCoin,
    transferEverNativeToken,
    transferEverAlienToken,
    transferEverAlienEvmNativeCoin,
  };
}
