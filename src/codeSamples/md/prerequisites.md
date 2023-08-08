# Prerequisites

To perform operations mentioned in this section for transferring a token between Everscale and EVM, the following requirements must be met:

## Packages

The necessary npm packages are as follows:

- `everscale-inpage-provider`
- `@metamask/sdk`
- `ethers`
- `web3`
- `bignumber.js`
- `eth-ton-abi-converter`

  To install these packages, run the following command in your shell:

  ```shell
  npm install --save-dev everscale-inpage-provider @metamask/sdk ethers web3  bignumber.js eth-ton-abi-converter
  ```

## Providers

This documentation utilizes two types of providers: one for Tvm-based networks and another for EVM-based networks. However, it's important to note that Octus Bridge also supports transfers between Solana and Everscale, which require a different type of provider that is not covered in this documentation.

- EVM-based Provider:
  There are several providers available for EVM-based networks, but for the purposes of this documentation, we will be using MetaMask. Follow the steps below to initialize and use MetaMask provider in your code samples.

```typescript
// Import the required libraries
import { MetaMaskInpageProvider } from "@metamask/providers";
import { MetaMaskSDK, MetaMaskSDKOptions } from "@metamask/sdk";
import { ethers } from "ethers";
// Initialize the MetaMask provider
const MetamaskOptions: MetaMaskSDKOptions = {
  dappMetadata: { name: "<YOUR-DAPP-NAME>", url: "<YOUR-DAPP-URL>" },
};
const MMSDK: MetaMaskSDK = new MetaMaskSDK(MetamaskOptions);
const provider: MetaMaskInpageProvider = MMSDK.getProvider()!;
// Get the signer
const browserProvider = new ethers.BrowserProvider(MMSDK.getProvider()!);
const signer = await browserProvider.getSigner();
// Use the signer to write to the blockchain and browserProvider or provider to read from the blockchain
```

- Tvm-based Provider:
  everscale-inpage-provider is used as provider for everscale. Follow the steps below to initialize and use everscale-inpage-provider in your code samples.

  ```typescript
  // Import the required libraries
  import { ProviderRpcClient, Address } from "everscale-inpage-provider";

  // Initialize the provider
  const provider = new ProviderRpcClient();
  // Make sure the provider is initialized.
  await provider.ensureInitialized();
  // Request permissions from the user to execute API
  await provider.requestPermissions({
    permissions: ["basic", "accountInteraction"],
  });
  // use the provider
  ```
