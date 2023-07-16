import { BrowserProvider, ethers } from "ethers";
import {
  Address,
  Contract,
  ProviderRpcClient,
} from "everscale-inpage-provider";

import { ProxyMultivaultAlienV_7 } from "./constants";
import { FactorySource, factorySource } from "../artifacts/build/factorySource";
import ERC20Abi from "../artifacts/EvmAbi/abi/ERC20.json";
export async function deriveEvmAlienTokenRoot(
  provider: ProviderRpcClient,
  EvmProvider: BrowserProvider,
  EvmTokenAddress: string
): Promise<Address | [string, string]> {
  // fetching the ProxyMVAlienV_7 and the token contract
  const proxyMVAlienV_7: Contract<FactorySource["ProxyMultiVaultAlien_V6"]> =
    new provider.Contract(
      factorySource["ProxyMultiVaultAlien_V6"],
      ProxyMultivaultAlienV_7
    );
  const ERC20Token = new ethers.Contract(
    EvmTokenAddress,
    ERC20Abi.abi,
    EvmProvider
  );
  // getting the erc-20 token details
  const [name, symbol, decimals] = await Promise.all<[string, string, number]>([
    await ERC20Token.name(),
    await ERC20Token.symbol(),
    await ERC20Token.decimals(),
  ]);
  // details chain id
  const chainId: string = (await EvmProvider.getNetwork()).chainId.toString();

  // deriving the address
  try {
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
    return ["ERROR: ", e];
  }
}
