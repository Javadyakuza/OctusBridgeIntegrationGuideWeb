import { ProviderRpcClient, Address } from "everscale-inpage-provider";

import { useEvmProvider } from "../../providers/useEvmProvider";

// changes to BSC network, its temporary and will change the network to other networks too.
async function checkMetaMaskNetwork() {
  const evmProvider = useEvmProvider();

  if (evmProvider.MetaMaskProvider().chainId! != "56") {
    try {
      await useEvmProvider().changeMetaMaskNetwork("BSC");

      return true;
    } catch (e) {
      return undefined;
    }
  }
}

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

  if (
    (await evmProvider.getAccounts())![0] != undefined &&
    (await checkMetaMaskNetwork())
  ) {
    // means user is well connected
    evmRecipient = (await evmProvider.getAccounts())![0];
    chainId = evmProvider.MetaMaskProvider().chainId!;
    
return [provider, everSender, evmRecipient, chainId];
  } else {
    // means not connected, trying to connect ...
    await evmProvider.connectToMetamaskWallet();
    if ((await evmProvider.getAccounts())![0] != undefined) {
      evmRecipient = (await evmProvider.getAccounts())![0];
      chainId = evmProvider.MetaMaskProvider().chainId!;

      return [provider, everSender, evmRecipient, chainId];
    } else {
      // means user rejected the connection
      return undefined;
    }
  }
}
