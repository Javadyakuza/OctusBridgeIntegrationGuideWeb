import { ProviderRpcClient, Address } from "everscale-inpage-provider";
import { useEvmProvider } from "../../providers/useEvmProvider";

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
    .accountInteraction?.address!;
  var evmRecipient: string;
  var chainId: string;
  if ((await evmProvider.getAccounts())![0] != undefined) {
    evmRecipient = (await evmProvider.getAccounts())![0];
    chainId = await evmProvider.MetaMaskProvider().chainId!;
    return [provider, everSender, evmRecipient, chainId];
  } else {
    await evmProvider.connectToMetamaskWallet();
    if ((await evmProvider.getAccounts())![0] != undefined) {
      evmRecipient = (await evmProvider.getAccounts())![0];
      chainId = await evmProvider.MetaMaskProvider().chainId!;
      return [provider, everSender, evmRecipient, chainId];
    } else {
      // means rejection by user
      return undefined;
    }
  }
}
