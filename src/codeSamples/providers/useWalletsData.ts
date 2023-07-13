import { ProviderRpcClient, Address } from "everscale-inpage-provider";

import { useEvmProvider } from "../../providers/useEvmProvider";

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

export async function setupAndGetProvidersDetails(): Promise<
  [ProviderRpcClient, Address, string, string] | undefined
> {
  const evmProvider = useEvmProvider();
  const provider = new ProviderRpcClient();
  // Make sure the provider is initialized.
  await provider.ensureInitialized();
  // Request permissions from the user to execute API
  // methods using the provider.
  await provider.requestPermissions({
    permissions: ["basic", "accountInteraction"],
  });
  const everSender: Address = (await provider.getProviderState()).permissions
    .accountInteraction!.address;
  let evmRecipient: string;
  let chainId: string;

  if (
    (await evmProvider.getAccounts())![0] != undefined &&
    (await checkMetaMaskNetwork())
  ) {
    evmRecipient = (await evmProvider.getAccounts())![0];
    chainId = evmProvider.MetaMaskProvider().chainId!;

    return [provider, everSender, evmRecipient, chainId];
  } else {
    await evmProvider.connectToMetamaskWallet();
    if ((await evmProvider.getAccounts())![0] != undefined) {
      evmRecipient = (await evmProvider.getAccounts())![0];
      chainId = evmProvider.MetaMaskProvider().chainId!;

      return [provider, everSender, evmRecipient, chainId];
    } else {
      // means rejection by user

      return undefined;
    }
  }
}
