import { ethers } from "ethers";

import { useEvmProvider } from "../../../providers/useEvmProvider";
export default async function isValidTxHash(hash: string): Promise<boolean> {
  // seething up the EVM provider
  try {
    const provider = new ethers.BrowserProvider(
      useEvmProvider().MetaMaskProvider()
    );
    await provider.getTransactionReceipt(hash);
    
return true;
  } catch (err: any) {
    return false;
  }
}
