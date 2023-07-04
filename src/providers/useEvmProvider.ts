import { MetaMaskInpageProvider } from "@metamask/providers";

import { MetaMaskSDK, MetaMaskSDKOptions } from "@metamask/sdk";

const MetamaskOptions: MetaMaskSDKOptions = {
  dappMetadata: { name: "OctusIntegrationGuide", url: "localhost:5173" },
  checkInstallationImmediately: true,
};
const MMSDK: MetaMaskSDK = new MetaMaskSDK(MetamaskOptions);

const provider: MetaMaskInpageProvider = MMSDK.getProvider()!;

const connectToMetamaskWallet = async () => {
  await provider.request({ method: "eth_requestAccounts", params: [] });
};

const getAccounts = async (): Promise<string[] | undefined> => {
  // provider
  const accounts = await provider.request({
    method: "eth_accounts",
    params: [],
  });

  if (accounts) {
    if (Array.isArray(accounts)) {
      // Handle the case when the accounts is definitely an array
      return accounts;
  } else {
    // Handle the case when the accounts is null or undefined
    return undefined;
  }
};
const HandleAccountChange = async (): Promise<boolean> => {
  if ((await getAccounts) && (await getAccounts())!.length > 0) {

    return true;

  } else {

    return false;
    
  }
};
const MetaMaskProvider = (): MetaMaskInpageProvider => {

  return MMSDK.getProvider()!;
};

export function useEvmProvider() {
  return {
    connectToMetamaskWallet,
    getAccounts,
    MetaMaskProvider,
    HandleAccountChange,
  };
}
