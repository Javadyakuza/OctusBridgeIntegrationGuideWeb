import { ProviderRpcClient, Address } from "everscale-inpage-provider";

import { useEvmProvider } from "../../providers/useEvmProvider";

const supportedNetworks = [1, 56, 137, 43114, 250];

// sets up the tvm and evm browser injected providers. (metamask and everWallet)
export async function setupAndGetProvidersDetails(): Promise<
  [ProviderRpcClient, Address, string, string] | undefined
> {
  // fetching the evm provider
  const evmProvider = useEvmProvider();
  // fetching the tvm provider
  const provider = new ProviderRpcClient();
  // Make sure the tvm provider is initialized.
  await provider.ensureInitialized();
  // Request permissions from the user to execute API
  // methods using the provider.
  await provider.requestPermissions({
    permissions: ["basic", "accountInteraction"],
  });
  // setting the ever sender address
  const everSender: Address = (await provider.getProviderState()).permissions
    .accountInteraction!.address;

  let evmRecipient: string;
  let chainId: string;
  // checks if the network is one of the supported networks.
  if (
    !supportedNetworks.includes(Number(evmProvider.MetaMaskProvider().chainId!))
  )
    {throw new Error(
      `unsupported network, only 
  Ethereum, BNB Chain, Polygon, Avalanche and Fantom are supported.`
    );}
  if ((await evmProvider.getAccounts())![0] != undefined) {
    // means user is well connected
    evmRecipient = (await evmProvider.getAccounts())![0];
    chainId = evmProvider.MetaMaskProvider().chainId!;

    return [provider, everSender, evmRecipient, chainId];
  } else {
    // means rejection by user
    return undefined;
  }
}
