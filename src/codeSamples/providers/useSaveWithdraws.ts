import BigNumber from "bignumber.js";
import { ethers, TransactionResponse } from "ethers";
import { ProviderRpcClient, Address } from "everscale-inpage-provider";
import { eth, utils } from "web3";
import MultiVaultAbi from "./artifacts/EvmAbi/abi/MultiVault.json";
import * as constants from "./helpers/EvmConstants";
import { getSignatures } from "./helpers/getSignatures";
import { usePayloadBuilders } from "./usePayloadBuilders";
import { setupAndGetProvidersDetails } from "./useWalletsData";
import { useEvmProvider } from "../../providers/useEvmProvider";

/**
 * Mints the tokens on Evm network
 * @param eventAddress The EverscaleEthereumNativeEvent confirmed contract Address
 * @returns {Promise<[string, string]>} - An array of strings representing error messages or the expected function value.
 */
export async function saveWithdrawNative(
  eventAddress: Address
): Promise<[string, string]> {
  // fetching the Ever provider
  let provider: ProviderRpcClient;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [provider, , ,] = providerDetails;
    } else {
      return ["ERROR", "rejection by user !"];
    }
  } catch (error: any) {
    return ["ERROR", error.message];
  }
  try {
    // fetching the wallet data
    const evmProvider = new ethers.BrowserProvider(
      useEvmProvider().MetaMaskProvider()
    );
    const signer = await evmProvider.getSigner();

    //  fetching the MultiVault the contracts
    const MultiVault = new ethers.Contract(
      constants.deployedContracts.BSCMultiVault,
      MultiVaultAbi.abi,
      signer
    );

    // preparing the payloads
    const { buildSaveWithdraw } = usePayloadBuilders();
    const rawSignatures: string[] = await getSignatures(eventAddress, provider);
    if (rawSignatures[0] == "Error:")
      return [rawSignatures[0], rawSignatures[1]];
    const payload: [string, string] = await buildSaveWithdraw(eventAddress);

    // preparing the signatures
    const signatures = rawSignatures.map((sign) => {
      const signature = `0x${Buffer.from(sign, "base64").toString("hex")}`;
      const address = eth.accounts.recover(
        utils.sha3(payload[1]) as string,
        signature
      );

      return {
        address,
        order: new BigNumber(address.slice(2).toUpperCase(), 16),
        signature,
      };
    });

    signatures.sort((a, b) => {
      if (a.order.eq(b.order)) {
        return 0;
      }

      if (a.order.gt(b.order)) {
        return 1;
      }

      return -1;
    });

    // mint assets
    const res: TransactionResponse = await MultiVault.saveWithdrawNative(
      payload[1],
      signatures.map(({ signature }) => signature)
    );

    return ["tx hash ; ", res?.hash];
  } catch (e: any) {
    return ["ERROR: ", e.message];
  }
}

/**
 * Releases tha assets on evm network
 * @param eventAddress The EverscaleEthereumAlienEvent confirmed contract Address
 * @returns {Promise<[string, string]>} - An array of strings representing error messages or the expected function value.
 */
export async function saveWithdrawAlien(
  eventAddress: Address
): Promise<[string, string]> {
  // fetching the Ever provider
  let provider: ProviderRpcClient;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [provider, , ,] = providerDetails;
    } else {
      return ["ERROR", "rejection by user !"];
    }
  } catch (error: any) {
    return ["ERROR", error.message];
  }
  try {
    //fetching the wallets data
    const evmProvider = new ethers.BrowserProvider(
      useEvmProvider().MetaMaskProvider()
    );
    const signer = await evmProvider.getSigner();

    // fetching the MultiVault the contracts
    const MultiVault = new ethers.Contract(
      constants.deployedContracts.BSCMultiVault,
      MultiVaultAbi.abi,
      signer
    );

    //preparing the payload
    const { buildSaveWithdraw } = usePayloadBuilders();
    const rawSignatures: string[] = await getSignatures(eventAddress, provider);
    if (rawSignatures[0] == "Error:")
      return [rawSignatures[0], rawSignatures[1]];
    const Payload: [string, string] = await buildSaveWithdraw(eventAddress);

    // preparing the signatures
    const signatures = rawSignatures.map((sign) => {
      const signature = `0x${Buffer.from(sign, "base64").toString("hex")}`;
      const address = eth.accounts.recover(
        utils.sha3(Payload[1]) as string,
        signature
      );

      return {
        address,
        order: new BigNumber(address.slice(2).toUpperCase(), 16),
        signature,
      };
    });

    signatures.sort((a, b) => {
      if (a.order.eq(b.order)) {
        return 0;
      }

      if (a.order.gt(b.order)) {
        return 1;
      }

      return -1;
    });

    // release the tokens
    const res = await MultiVault.saveWithdrawAlien(
      Payload[1],
      signatures.map(({ signature }) => signature)
    );

    return ["tx hash ; ", res?.hash];
  } catch (e: any) {
    return ["ERROR", e.message];
  }
}

export function useSaveWithdraws() {
  return { saveWithdrawNative, saveWithdrawAlien };
}
