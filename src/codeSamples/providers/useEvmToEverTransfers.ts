import { ethers, toBigInt } from "ethers";
import { Address } from "everscale-inpage-provider";

import ERC20TokenAbi from "./artifacts/EvmAbi/abi/ERC20.json";
import MultiVaultAbi from "./artifacts/EvmAbi/abi/MultiVault.json";
import MultiVaultTokenAbi from "./artifacts/EvmAbi/abi/MultiVaultToken.json";
import { calculateEventContractDeployValueInEvmGasToken } from "./helpers/convertNetworksTokens.js";
import { deployedContracts } from "./helpers/EvmConstants";
import { setupAndGetProvidersDetails } from "./useWalletsData";
import { useEvmProvider } from "../../providers/useEvmProvider";
/**
 * Transfers an Evm gas token such BNB or DAI from an  Evm network to Everscale.
 * @param amount Token amount
 * @param payWithGasToken Pay the Everscale operations fees with Evm gas token ?
 * @returns {Promise<[string, string]>} - An array of strings representing error messages or the transaction hash.
 */
async function TransferEvmGasToken(
  amount: number,
  payWithGasToken: boolean,
  symbol: string
): Promise<[string, string]> {
  // Fetching the ever receiver address
  let everSender: Address;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [, everSender, ,] = providerDetails;
    } else {
      return ["ERROR :", "rejection by user !"];
    }
  } catch (error: any) {
    return ["ERROR :", error.message];
  }
  try {
    // Fetching the wallets data
    const evmProvider = new ethers.BrowserProvider(
      useEvmProvider().MetaMaskProvider()
    );
    const signer = await evmProvider.getSigner();

    // Fetching the MultiVault contract
    const MultiVault = new ethers.Contract(
      deployedContracts.MultiVault,
      MultiVaultAbi.abi,
      signer
    );

    // preparing the values
    const recipient = {
      wid: everSender.toString().split(":")[0],
      addr: `0x${everSender.toString().split(":")[1]}`,
    };

    // Fetching the event initial value in Evm gas token
    const depositManualValue: [string, string] =
      await calculateEventContractDeployValueInEvmGasToken(symbol);
    if (depositManualValue[0] == "ERROR :") {
      return depositManualValue;
    }

    const deposit_value = payWithGasToken
      ? ethers.parseEther(depositManualValue[1]).toString()
      : "0";

    const deposit_expected_evers = payWithGasToken
      ? ethers.parseUnits("6", 9)
      : "0";

    const deposit_payload = "0x";

    // checking the balance
    if (payWithGasToken) {
      if (
        (await evmProvider.getBalance(signer.getAddress())) <=
        toBigInt(deposit_value) + ethers.parseEther(amount.toString())
      ) {
        return ["ERROR :", "low balance"];
      }
    } else {
      if (
        (await evmProvider.getBalance(signer.getAddress())) <=
        ethers.parseEther(amount.toString())
      ) {
        return ["ERROR :", "low balance"];
      }
    }
    // depositing the gas token
    const res = await MultiVault.depositByNativeToken(
      [
        recipient,
        ethers.parseEther(amount.toString()),
        deposit_expected_evers,
        deposit_payload,
      ],
      {
        value: toBigInt(deposit_value) + ethers.parseEther(amount.toString()),
      }
    );

    return ["successful, tx hash: ", res?.hash];
  } catch (e: any) {
    return ["ERROR :", e.code];
  }
}

/**
 * Transfers an native token such BRIDGE or QUBE from an Evm network to Everscale.
 * @param MultiVaultTokenAddress address of the native token on the Evm network
 * @param amount Token amount
 * @param payWithGasToken Pay the Everscale operations fees with Evm gas token ?
 * @returns {Promise<[string, string]>} - An array of strings representing error messages or the transaction hash.
 */
async function TransferEvmMultiVaultToken(
  MultiVaultTokenAddress: string,
  amount: number,
  payWithGasToken: boolean,
  symbol: string
): Promise<[string, string]> {
  // Fetching the ever receiver address
  let everSender: Address;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [, everSender, ,] = providerDetails;
    } else {
      return ["ERROR :", "rejection by user !"];
    }
  } catch (error: any) {
    return ["ERROR :", error.message];
  }

  try {
    // Fetching the wallets data
    const evmProvider = new ethers.BrowserProvider(
      useEvmProvider().MetaMaskProvider()
    );
    const signer = await evmProvider.getSigner();

    const MultiVault = new ethers.Contract(
      deployedContracts.MultiVault,
      MultiVaultAbi.abi,
      signer
    );
    const MultiVaultToken = new ethers.Contract(
      MultiVaultTokenAddress,
      MultiVaultTokenAbi,
      signer
    );

    let MultiVaultTokenStorage = MultiVaultToken;

    if ((await MultiVaultToken.symbol()) == "WEVER") {
      MultiVaultTokenStorage = new ethers.Contract(
        deployedContracts["56"].WEVERSTORAGE,
        ERC20TokenAbi.abi,
        signer
      );
    }
    // Fetching the wallets data
    const recipient = {
      wid: everSender.toString().split(":")[0],
      addr: `0x${everSender.toString().split(":")[1]}`,
    };

    // Fetching the event initial value in Evm gas token
    const depositManualValue: [string, string] =
      await calculateEventContractDeployValueInEvmGasToken(symbol);
    if (depositManualValue[0] == "ERROR :") {
      return depositManualValue;
    }
    const deposit_value = payWithGasToken
      ? ethers.parseEther(depositManualValue[1]).toString()
      : "0";

    const deposit_expected_evers = payWithGasToken
      ? ethers.parseUnits("6", 9)
      : "0";

    const deposit_payload = "0x";

    // checking the balance
    if (
      (payWithGasToken &&
        (await evmProvider.getBalance(signer.getAddress())) <=
          toBigInt(deposit_value)) ||
      (await MultiVaultTokenStorage.balanceOf(signer.getAddress())) <=
        ethers.parseUnits(amount.toString(), 9)
    ) {
      return ["ERROR :", "low balance"];
    }

    // depositing the native token
    const res = await MultiVault.deposit(
      [
        recipient,
        MultiVaultTokenAddress,
        ethers.parseUnits(amount.toString(), 9).toString(),
        deposit_expected_evers,
        deposit_payload,
      ],
      {
        value: deposit_value,
      }
    );

    return ["successful, tx hash: ", res?.hash];
  } catch (e: any) {
    return ["ERROR :", e.code];
  }
}

/**
 * Transfers an Alien token such USDT or DAI from an Evm network to Everscale.
 * @param tokenAddress Address of the token on evm network
 * @param amount Token amount
 * @param payWithGasToken Pay the Everscale operations fees with Evm gas token ?
 * @returns {Promise<[string, string]>} - An array of strings representing error messages or the transaction hash.
 */
async function TransferEvmAlienToken(
  tokenAddress: string,
  amount: number,
  payWithGasToken: boolean,
  symbol: string
): Promise<[string, string]> {
  // Fetching the ever receiver address
  let everSender: Address;
  try {
    const providerDetails = await setupAndGetProvidersDetails();
    if (providerDetails) {
      [, everSender, ,] = providerDetails;
    } else {
      return ["ERROR :", "rejection by user !"];
    }
  } catch (error: any) {
    return ["ERROR :", error.message];
  }
  try {
    // Fetching the wallets data
    const evmProvider = new ethers.BrowserProvider(
      useEvmProvider().MetaMaskProvider()
    );
    const signer = await evmProvider.getSigner();

    // Fetching the contracts
    const MultiVault = new ethers.Contract(
      deployedContracts.MultiVault,
      MultiVaultAbi.abi,
      signer
    );

    const ERC20Token = new ethers.Contract(
      tokenAddress,
      ERC20TokenAbi.abi,
      signer
    );

    // preparing the values
    const recipient = {
      wid: everSender.toString().split(":")[0],
      addr: `0x${everSender.toString().split(":")[1]}`,
    };
    const decimals = await ERC20Token.decimals();

    // Fetching the event initial value in Evm gas token
    const depositManualValue: [string, string] =
      await calculateEventContractDeployValueInEvmGasToken(symbol);
    if (depositManualValue[0] == "ERROR :") {
      return depositManualValue;
    }

    const deposit_value = payWithGasToken
      ? ethers.parseEther(depositManualValue[1]).toString()
      : "0";

    const deposit_expected_evers = payWithGasToken
      ? ethers.parseUnits("6", 9)
      : "0";

    const deposit_payload = "0x";

    // checking the balance
    if (
      (payWithGasToken &&
        (await evmProvider.getBalance(signer.getAddress())) <=
          toBigInt(deposit_value)) ||
      (await ERC20Token.balanceOf(signer.getAddress())) <=
        ethers.parseUnits(amount.toString(), decimals)
    ) {
      return ["ERROR :", "low balance"];
    }
    // approving the MultiVault contract
    try {
      await ERC20Token.approve(
        await MultiVault.getAddress(),
        ethers.parseUnits(amount.toString(), decimals)
      );
      // confirming that the contract is approved fro desired amount
      if (
        Number(
          await ERC20Token.allowance(
            signer.address,
            await MultiVault.getAddress()
          )
        ) < Number(ethers.parseUnits(amount.toString(), decimals))
      ) {
        return ["ERROR :", "allowance not enough"];
      }
    } catch (e: any) {
      return ["ERROR :", e.code];
    }

    // depositing the alien token
    const res = await MultiVault.deposit(
      [
        recipient,
        await ERC20Token.getAddress(),
        ethers.parseUnits(amount.toString(), decimals),
        deposit_expected_evers,
        deposit_payload,
      ],
      {
        value: deposit_value,
      }
    );

    return ["successful, tx hash: ", res?.hash];
  } catch (e: any) {
    return ["ERROR :", e.code];
  }
}

export function useEvmToEverTransfers() {
  return {
    TransferEvmGasToken,
    TransferEvmMultiVaultToken,
    TransferEvmAlienToken,
  };
}
