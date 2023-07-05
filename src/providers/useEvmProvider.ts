import { MetaMaskInpageProvider } from "@metamask/providers";
import { MetaMaskSDK, MetaMaskSDKOptions } from "@metamask/sdk";

const MetamaskOptions: MetaMaskSDKOptions = {
  dappMetadata: { name: "OctusIntegrationGuide", url: "localhost:5173" },
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

  return Array.isArray(accounts) ? accounts : undefined;
};
const HandleAccountChange = async (): Promise<boolean> => {
  return (await getAccounts()) && (await getAccounts())!.length > 0
    ? true
    : false;
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
