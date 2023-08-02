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
// import { calculateEvmSaveWithdrawFeeInEver } from "./helpers/convertNetworksTokens";
/**
 * Transfers the Ever which is Everscale native coin from Everscale to an Evm network.
 * @param amount Token amount.
 * @param payWithEver Pay Evm operations fees with Ever ?
 * @returns {Promise<[string, string]>} - An array of strings representing error messages or the event contract address or the tx hash.
 */
async function transferEverNativeCoin(
  amount: number,
  payWithEver: boolean
): Promise<[string, string] | unknown> {
  // fetching the wallet data
  let provider: ProviderRpcClient, everSender: Address;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [provider, everSender, ,] = providerDetails;
    } else {
      return ["ERROR", "rejection by user !"];
    }
  } catch (error: any) {
    return ["ERROR", error.message];
  }
  try {
    // fetching the WEVERVault contract
    const WEVERVaultContract: Contract<typeof EverAbi.WeverVault> =
      new provider.Contract(EverAbi.WeverVault, constants.WEVERVault);

    // building the payloads
    const { buildWrapPayload } = usePayloadBuilders();
    const wrapPayload: [string, string] = await buildWrapPayload(
      amount,
      payWithEver
    ); // first str is payload and second str is randomNonce

    // wrapping
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
    // fetching the event address
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

/**
 * Transfers an native token such bridge or qube from Everscale to an Evm network.
 * @param tokenAddress Ever token address.
 * @param amount Token Amount.
 * @param payWithEver Pay Evm operations fees with Ever ?
 * @returns {Promise<[string, string]>} - An array of strings representing error messages or the event contract address or the tx hash.
 */
async function transferEverNativeToken(
  tokenAddress: Address,
  amount: number,
  payWithEver: boolean
): Promise<[string, string] | unknown> {
  // fetching the wallets data
  let provider: ProviderRpcClient, everSender: Address;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [provider, everSender, ,] = providerDetails;
    } else {
      return ["ERROR", "rejection by user !"];
    }
  } catch (error: any) {
    return ["ERROR", error.message];
  }

  try {
    // fetching the contracts
    const nativeTokenRoot: Contract<FactorySource["TokenRoot"]> =
      new provider.Contract(factorySource["TokenRoot"], tokenAddress);

    const alienTokenWalletUpgradable: Contract<
      FactorySource["AlienTokenWalletUpgradeable"]
    > = new provider.Contract(
      factorySource["AlienTokenWalletUpgradeable"],
      (
        await nativeTokenRoot.methods
          .walletOf({ answerId: 0, walletOwner: everSender })
          .call({})
      ).value0
    );

    // building the payload
    const { buildTransferPayload } = usePayloadBuilders();
    const transferPayload: [string, string] = await buildTransferPayload(); // first str is payload and second str is randomNonce

    // transferring
    const res: Transaction = await alienTokenWalletUpgradable.methods
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

    // fetching the event address
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

/**
 * Transfers an Alien token such USDT or DAI from Everscale to an Evm network.
 * @param tokenAddress Address of the token on Everscale.
 * @param tokenAddressEvmAlien Address of the AlienEvm version of the target token.
 * @param amount Token amount.
 * @param payWithEver Pay Evm operations fees with Ever ?
 * @returns {Promise<[string, string]>} - An array of strings representing error messages or the event contract address or the tx hash.
 */
async function transferEverAlienToken(
  tokenAddress: Address,
  EvmTokenAddress: string,
  amount: number,
  payWithEver: boolean
): Promise<[string, string] | unknown> {
  let provider: ProviderRpcClient, everSender: Address;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [provider, everSender, ,] = providerDetails;
    } else {
      return ["ERROR", "rejection by user !"];
    }
  } catch (error: any) {
    return ["ERROR", error.message];
  }
  try {
    // fetching the contracts
    const alienTokenRoot: Contract<FactorySource["TokenRoot"]> =
      new provider.Contract(factorySource["TokenRoot"], tokenAddress);

    const alienTokenWalletUpgradable: Contract<
      FactorySource["AlienTokenWalletUpgradeable"]
    > = new provider.Contract(
      factorySource["AlienTokenWalletUpgradeable"],
      (
        await alienTokenRoot.methods
          .walletOf({ answerId: 0, walletOwner: everSender })
          .call({})
      ).value0
    );

    // building the payload
    const { buildBurnPayloadForEvmAlienToken } = usePayloadBuilders();

    const burnPayload: [string, string] =
      await buildBurnPayloadForEvmAlienToken(EvmTokenAddress); // first str is payload and second str is randomNonce

    // burning
    const res: Transaction = await alienTokenWalletUpgradable.methods
      .burn({
        amount: ethers
          .parseUnits(
            amount.toString(),
            Number(
              (await alienTokenRoot.methods.decimals({ answerId: 0 }).call({}))
                .value0
            )
          )
          .toString(),
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

    // fetching the event address
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

/**
 * Transfers Evm gas token such as BNB or ETH from Everscale to an Evm network.
 * @param tokenAddress Address of the token on Everscale.
 * @param amount Token amount.
 * @param payWithEver Pay Evm operations fees with Ever ?
 * @returns {Promise<[string, string]>} - An array of strings representing error messages or the event contract address or the tx hash.
 */
async function transferEverAlienEvmNativeCoin(
  tokenAddress: Address,
  amount: number,
  payWithEver: boolean
): Promise<[string, string] | unknown> {
  let provider: ProviderRpcClient, everSender: Address;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [provider, everSender, ,] = providerDetails;
    } else {
      return ["ERROR :any", "rejection by user !"];
    }
  } catch (error: any) {
    return ["ERROR", error.message];
  }

  try {
    // fetching the contracts
    const alienTokenRoot: Contract<FactorySource["TokenRoot"]> =
      new provider.Contract(factorySource["TokenRoot"], tokenAddress);

    const alienTokenWalletUpgradable: Contract<
      FactorySource["AlienTokenWalletUpgradeable"]
    > = new provider.Contract(
      factorySource["AlienTokenWalletUpgradeable"],
      (
        await alienTokenRoot.methods
          .walletOf({ answerId: 0, walletOwner: everSender })
          .call({})
      ).value0
    );

    // building the payloads
    const { buildBurnPayloadForEvmNativeToken } = usePayloadBuilders();
    const burnPayload: [string, string] =
      await buildBurnPayloadForEvmNativeToken(); // first str is payload and second str is randomNonce

    // burning
    const res: Transaction = await alienTokenWalletUpgradable.methods
      .burn({
        callbackTo: constants.ProxyMultiVaultAlienV_7,
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

    // fetching the event address
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
