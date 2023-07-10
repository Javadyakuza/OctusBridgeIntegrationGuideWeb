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

export async function saveWithdrawNative(
  eventAddress: Address
): Promise<[string, string]> {
  //  setting the wallets up
  let provider: ProviderRpcClient;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [provider, , ,] = returnedValues;
    } else {
      return ["ERROR", "rejection by user !"];
    }
  } catch (error) {
    return ["ERROR", "unknown error accrued while fetching wallet's data !"];
  }
  const evmProvider = new ethers.BrowserProvider(
    useEvmProvider().MetaMaskProvider()
  );
  const { buildSaveWithdraw } = usePayloadBuilders();
  const rawSignatures: string[] = await getSignatures(eventAddress, provider);
  const payload: [string, string] = await buildSaveWithdraw(eventAddress);
  //  getting the contracts
  const signer = await evmProvider.getSigner();
  const MultiVault = new ethers.Contract(
    constants.deployedContracts.BSCMultiVault,
    MultiVaultAbi.abi,
    signer
  );
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
  //  releasing assets
  try {
    const res: TransactionResponse = await MultiVault.saveWithdrawNative(
      payload[1],
      signatures.map(({ signature }) => signature)
    );

    return ["tx hash ; ", res?.hash];
  } catch (e: any) {
    return ["ERROR: ", e.message];
  }
}

export async function saveWithdrawAlien(
  eventAddress: Address
): Promise<[string, string]> {
  //  setting the wallets up
  let provider: ProviderRpcClient;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [provider, , ,] = returnedValues;
    } else {
      return ["ERROR", "rejection by user !"];
    }
  } catch (error) {
    return ["ERROR", "unknown error accrued while fetching wallet's data !"];
  }
  const evmProvider = new ethers.BrowserProvider(
    useEvmProvider().MetaMaskProvider()
  );
  const { buildSaveWithdraw } = usePayloadBuilders();
  const rawSignatures: string[] = await getSignatures(eventAddress, provider);
  const Payload: [string, string] = await buildSaveWithdraw(eventAddress);
  //  getting the contracts
  const signer = await evmProvider.getSigner();
  const MultiVault = new ethers.Contract(
    constants.deployedContracts.BSCMultiVault,
    MultiVaultAbi.abi,
    signer
  );
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
  try {
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
