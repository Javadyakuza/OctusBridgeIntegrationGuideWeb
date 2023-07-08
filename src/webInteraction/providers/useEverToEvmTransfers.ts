import * as constants from "./helpers/constants";
import {
  ProviderRpcClient,
  Address,
  Contract,
  Transaction,
} from "everscale-inpage-provider";
import { EverAbi } from "./artifacts/WEVERVault";
import { useEvmProvider } from "../../providers/useEvmProvider";
import { setupAndGetProvidersDetails } from "./useWalletsData";
import { usePayloadBuilders } from "./usePayloadBuilders";
import {
  fetchNativeEventAddressFromOriginTxHash,
  fetchAlienEventAddressFromOriginTxHash,
} from "./helpers/deriveEventAddressFromOriginHash";
import { ethers } from "ethers";
import { FactorySource, factorySource } from "./artifacts/build/factorySource";
/**
 * this module performs transferring an ever native, evm alien token from everscale network to an evm network using transferEverNativeCoin function.
 * EVER is used as token and receiver evm nework is BSC at this reticular example.
 * @notice releasing assets on evm network is done automatically by attaching enough ever to tx.{see ../../constants.ts:32}
 * @returns ContractTransactionResponse returned data about the tx
 */
async function transferEverNativeCoin(
  amount: number,
  payWithEver: boolean
): Promise<[string, string]> {
  let provider: ProviderRpcClient,
    everSender: Address,
    evmRecipient: string,
    chainId: string;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [provider, everSender, evmRecipient, chainId] = returnedValues;
      Number(chainId) != 56
        ? useEvmProvider().changeMetaMaskNetwork("BSC")
        : undefined;
      Number(chainId) != 56
        ? [
            "ERROR",
            "rejection by user !, only BNB chain is available for this payload at the moment",
          ]
        : undefined;
    } else {
      // Handle the case where the function returns undefined
      return ["ERROR", "rejection by user !"];
    }
  } catch (error) {
    // Handle any errors that occur during function execution
    return ["ERROR", "unknown error accrued while fetching wallet's data !"];
  }
  const { buildWrapPayload } = await usePayloadBuilders();

  const WEVERVaultContract: Contract<typeof EverAbi.WeverVault> =
    await new provider.Contract(EverAbi.WeverVault, constants.WEVERVault);
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
    const EventAddress: Address | undefined =
      await fetchNativeEventAddressFromOriginTxHash(provider, res.id.hash);
    return EventAddress
      ? ["Event address : ", EventAddress.toString()]
      : ["ERROR :", "couldn't find Event address !!"];
  } catch (error: any) {
    console.log("an error accrued while wrapping : ", error);
    return ["ERROR : ", error.message];
  }
}

/**
 * this module performs transferring an ever native, evm alien token from everscale network to an evm network using transferEverNativeToken function.
 * BRIDGE is used as token and receiver evm network is BSC at this particular example.
 * @notice releasing assets on evm network is done automatically by attaching enough ever to tx.{see ../../constants.ts:32}
 * @returns ContractTransactionResponse returned data about the tx
 */
async function transferEverNativeToken(
  tokenAddress: Address,
  amount: number,
  payWithEver: boolean
): Promise<[string, string[]] | unknown> {
  // setting ever wallet
  let provider: ProviderRpcClient,
    everSender: Address,
    evmRecipient: string,
    chainId: string;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [provider, everSender, evmRecipient, chainId] = returnedValues;
      Number(chainId) != 56
        ? useEvmProvider().changeMetaMaskNetwork("BSC")
        : undefined;
      Number(chainId) != 56
        ? [
            "ERROR",
            "rejection by user !, only BNB chain is available for this payload at the moment",
          ]
        : undefined;
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
        amount: ethers.parseUnits(amount.toString(), 18).toString(),
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
    console.log("successful, tx hash : ", res.id.hash);
    const eventAddress: Address | undefined =
      await fetchNativeEventAddressFromOriginTxHash(provider, res?.id.hash);

    return eventAddress
      ? ["Event address : ", eventAddress.toString()]
      : ["ERROR :", "couldn't find Event address !!"];
    // preparing payload for `saveWithdrawAlien`
  } catch (e) {
    console.log("an error accrued while transferring : ", e);
    return e;
  }
}

/**
 * this module performs transferring an ever alien, evm alien token from everscale network to an evm network using transferEverAlienToken function.
 * USDT is used as token and receiver evm network is BSC at this particular example.
 * @notice releasing assets on evm network is done manually by calling saveWithdrawAlien on MV contract at BSC.
 * @returns ContractTransactionResponse returned data about the tx
 */

async function transferEverAlienToken(
  tokenAddress: Address,
  tokenAddressEvmAlien: Address,
  amount: number,
  payWithEver: boolean
): Promise<[string, string[]] | unknown> {
  let provider: ProviderRpcClient,
    everSender: Address,
    evmRecipient: string,
    chainId: string;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [provider, everSender, evmRecipient, chainId] = returnedValues;
      Number(chainId) != 56
        ? useEvmProvider().changeMetaMaskNetwork("BSC")
        : undefined;
      Number(chainId) != 56
        ? [
            "ERROR",
            "rejection by user !, only BNB chain is available for this payload at the moment",
          ]
        : undefined;
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

    console.log("successful, tx hash: ", res?.id.hash);
    // getting the event contract address
    const eventAddress: Address | undefined =
      await fetchAlienEventAddressFromOriginTxHash(provider, res?.id.hash)!;

    return eventAddress
      ? ["Event address : ", eventAddress.toString()]
      : ["ERROR :", "couldn't find Event address !!"];
  } catch (e) {
    console.log("an error accrued while wrapping : ", e);
    return e;
  }
}

export function useEverToEvmTransfers() {
  return {
    transferEverNativeCoin,
    transferEverNativeToken,
    transferEverAlienToken,
  };
}
