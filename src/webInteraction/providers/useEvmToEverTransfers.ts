import { ethers } from "ethers";
import { deployedContracts } from "./helpers/EvmConstants";
import { setupAndGetProvidersDetails } from "./useWalletsData";
import { useEvmProvider } from "../../providers/useEvmProvider";
import MultiVaultAbi from "./artifacts/EvmAbi/abi/MultiVault.json";
import MultiVaultTokenAbi from "./artifacts/EvmAbi/abi/MultiVaultToken.json";
import ERC20TokenAbi from "./artifacts/EvmAbi/abi/ERC20.json";
import { Address } from "everscale-inpage-provider";

async function TransferEvmNativeToken(
  amount: number,
  payWithGasToken: boolean
): Promise<[string, string]> {
  let everSender: Address;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [, everSender, ,] = returnedValues;
    } else {
      return ["ERROR", "rejection by user !"];
    }
  } catch (error) {
    return ["ERROR", "unknown error accrued while fetching wallet's data !"];
  }

  const evmProvider = new ethers.BrowserProvider(
    useEvmProvider().MetaMaskProvider()
  );

  const signer = await evmProvider.getSigner();
  const MultiVault = new ethers.Contract(
    deployedContracts.BSCMultiVault,
    MultiVaultAbi.abi,
    signer
  );

  const recipient = {
    wid: everSender.toString().split(":")[0],
    addr: `0x${everSender.toString().split(":")[1]}`,
  };

  const deposit_value = payWithGasToken
    ? ethers.parseEther("0.0016").toString()
    : "0";
  const deposit_expected_evers = payWithGasToken
    ? ethers.parseUnits("5", 9)
    : "0";
  const deposit_payload = "0x";

  try {
    const res = await MultiVault.depositByNativeCoin(
      [
        recipient,
        ethers.parseEther(amount.toString()),
        deposit_expected_evers,
        deposit_payload,
      ],
      {
        value: deposit_value + ethers.parseEther(amount.toString()),
      }
    );
    return ["successful, tx hash: ", res?.hash];
  } catch (e: any) {
    return ["an error accrued : ", e.message];
  }
}

async function TransferEvmMultiVaultToken(
  MultiVaultTokenAddress: string,
  amount: number,
  payWithGasToken: boolean
): Promise<[string, string]> {
  let everSender: Address;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [, everSender, ,] = returnedValues;
    } else {
      return ["ERROR", "rejection by user !"];
    }
  } catch (error) {
    return ["ERROR", "unknown error accrued while fetching wallet's data !"];
  }

  const evmProvider = new ethers.BrowserProvider(
    useEvmProvider().MetaMaskProvider()
  );

  const signer = await evmProvider.getSigner();
  const MultiVault = new ethers.Contract(
    deployedContracts.BSCMultiVault,
    MultiVaultAbi.abi,
    signer
  );

  let MultiVaultToken = new ethers.Contract(
    MultiVaultTokenAddress,
    MultiVaultTokenAbi,
    signer
  );

  await MultiVaultToken.approve(
    await MultiVault.getAddress(),
    ethers.parseUnits(amount.toString(), 9)
  );
  // confirming that the contract is approved fro desired amount
  console.log(
    "this is the multiVault allowance : ",
    await MultiVaultToken.allowance(
      signer.address,
      await MultiVault.getAddress()
    )
  );

  const recipient = {
    wid: everSender.toString().split(":")[0],
    addr: `0x${everSender.toString().split(":")[1]}`,
  };

  const deposit_value = payWithGasToken
    ? ethers.parseEther("0.0016").toString()
    : "0";
  const deposit_expected_evers = payWithGasToken
    ? ethers.parseUnits("5", 9)
    : "0";
  const deposit_payload = "0x";

  try {
    const res = await MultiVault.deposit(
      [
        recipient,
        await MultiVaultToken.getAddress(),
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
    return ["an error accrued : ", e.message];
  }
}
async function TransferEvmAlienToken(
  tokenAddress: string,
  amount: number,
  payWithGasToken: boolean
): Promise<[string, string]> {
  let everSender: Address;
  try {
    const returnedValues = await setupAndGetProvidersDetails();
    if (returnedValues) {
      [, everSender, ,] = returnedValues;
    } else {
      return ["ERROR", "rejection by user !"];
    }
  } catch (error) {
    return ["ERROR", "unknown error accrued while fetching wallet's data !"];
  }

  const evmProvider = new ethers.BrowserProvider(
    useEvmProvider().MetaMaskProvider()
  );

  const signer = await evmProvider.getSigner();
  const MultiVault = new ethers.Contract(
    deployedContracts.BSCMultiVault,
    MultiVaultAbi.abi,
    signer
  );

  let ERC20Token = new ethers.Contract(tokenAddress, ERC20TokenAbi.abi, signer);
  // approving the MultiVault contract
  await ERC20Token.approve(
    await MultiVault.getAddress(),
    ethers.parseEther("0.01")
  );
  // confirming that the contract is approved fro desired amount
  console.log(
    "this is the multiVault allowance : ",
    await ERC20Token.allowance(signer.address, await MultiVault.getAddress())
  );
  // depositing

  const recipient = {
    wid: everSender.toString().split(":")[0],
    addr: `0x${everSender.toString().split(":")[1]}`,
  };

  const deposit_value = payWithGasToken
    ? ethers.parseEther("0.0016").toString()
    : "0";
  const deposit_expected_evers = payWithGasToken
    ? ethers.parseUnits("5", 9)
    : "0";
  const deposit_payload = "0x";

  try {
    const res = await MultiVault.deposit(
      [
        recipient,
        await ERC20Token.getAddress(),
        ethers.parseEther(amount.toString()),
        deposit_expected_evers,
        deposit_payload,
      ],
      {
        value: deposit_value,
      }
    );
    return ["successful, tx hash: ", res?.hash];
  } catch (e: any) {
    return ["an error accrued : ", e.message];
  }
}

export function useEvmToEverTransfers() {
  return {
    TransferEvmNativeToken,
    TransferEvmMultiVaultToken,
    TransferEvmAlienToken,
  };
}
