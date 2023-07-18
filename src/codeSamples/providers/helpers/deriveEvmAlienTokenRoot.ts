import { BrowserProvider, ethers } from "ethers";
import {
  Address,
  Contract,
  ProviderRpcClient,
} from "everscale-inpage-provider";

import { ProxyMultiVaultAlienV_7 } from "./constants";
import { FactorySource, factorySource } from "../artifacts/build/factorySource";
import ERC20Abi from "../artifacts/EvmAbi/abi/ERC20.json";

/**
 *
 * @param provider Tvm provider
 * @param EvmProvider Evm provider
 * @param EvmTokenAddress Evm token address
 * @return Retrieves the EvmAlienToken root address or an array of error messages.
 */
export async function deriveEvmAlienTokenRoot(
  provider: ProviderRpcClient,
  EvmProvider: BrowserProvider,
  EvmTokenAddress: string
): Promise<Address | [string, string]> {
  // fetching the ProxyMVAlienV_7 and the erc-20 token contract
  const proxyMVAlienV_7: Contract<FactorySource["ProxyMultiVaultAlien_V6"]> =
    new provider.Contract(
      factorySource["ProxyMultiVaultAlien_V6"],
      ProxyMultiVaultAlienV_7
    );
  try {
    const ERC20Token = new ethers.Contract(
      EvmTokenAddress,
      ERC20Abi.abi,
      EvmProvider
    );

    // Fetching the erc-20 token details
    const [name, symbol, decimals] = await Promise.all<
      [string, string, number]
    >([
      await ERC20Token.name(),
      await ERC20Token.symbol(),
      await ERC20Token.decimals(),
    ]);

    // Fetching the chain id from Evm provider
    const chainId: string = (await EvmProvider.getNetwork()).chainId.toString();

    // Deriving the address
    const res: Address = (
      await proxyMVAlienV_7.methods
        .deriveEVMAlienTokenRoot({
          answerId: 0,
          chainId: chainId,
          token: EvmTokenAddress,
          name: name,
          symbol: symbol,
          decimals: decimals.toString(),
        })
        .call({})
    ).value0;

    return res;
  } catch (e: any) {
    return ["ERROR: ", e.message];
  }
}
