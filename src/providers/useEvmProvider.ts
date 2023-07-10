import { MetaMaskInpageProvider } from "@metamask/providers";
import { MetaMaskSDK, MetaMaskSDKOptions } from "@metamask/sdk";
import * as web3 from "web3";
const MetamaskOptions: MetaMaskSDKOptions = {
  dappMetadata: { name: "OctusIntegrationGuide", url: "localhost:5173" },
};
const MMSDK: MetaMaskSDK = new MetaMaskSDK(MetamaskOptions);

const provider: MetaMaskInpageProvider | undefined = MMSDK.getProvider();

const networksConfig = () => {
  return {
    BSC: {
      chainName: "Binance Smart Chain",
      chainId: web3.utils.toHex(56),
      nativeCurrency: { name: "BNB", decimals: 18, symbol: "BNB" },
      rpcUrls: ["https://endpoints.omniatech.io/v1/bsc/mainnet/public"],
    },
    ETH: {
      chainName: "Ethereum Mainnet",
      chainId: web3.utils.toHex(1),
      nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
      rpcUrls: ["https://endpoints.omniatech.io/v1/eth/mainnet/public"],
    },
    POLYGON: {
      chainName: "Polygon Mainnet",
      chainId: web3.utils.toHex(137),
      nativeCurrency: { name: "MATIC", decimals: 18, symbol: "MATIC" },
      rpcUrls: ["https://endpoints.omniatech.io/v1/matic/mainnet/public"],
    },
    FTM: {
      chainName: "Fantom Opera",
      chainId: web3.utils.toHex(250),
      nativeCurrency: { name: "FTM", decimals: 18, symbol: "FTM" },
      rpcUrls: ["https://1rpc.io/ftm"],
    },
    AVAlANCHE: {
      chainName: "Avalanche Mainnet",
      chainId: web3.utils.toHex(43114),
      nativeCurrency: { name: "AVAX", decimals: 18, symbol: "AVAX" },
      rpcUrls: ["https://endpoints.omniatech.io/v1/avax/mainnet/public"],
    },
  };
};
const connectToMetamaskWallet = async () => {
  await provider?.request({ method: "eth_requestAccounts", params: [] });
};
const changeMetaMaskNetwork = async (chainName: string) => {
  const config = networksConfig() as { [key: string]: any };
  try {
    await provider?.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: config[chainName].chainId }],
    });
  } catch (error: any) {
    if (error.code === 4902) {
      await provider?.request({
        method: "wallet_addEthereumChain",
        params: [config[chainName]],
      });
    }
  }
};

const getAccounts = async (): Promise<string[] | undefined> => {
  // provider
  const accounts = await provider?.request({
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
    changeMetaMaskNetwork,
  };
}
