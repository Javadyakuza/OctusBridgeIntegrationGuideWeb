# Transfer Alien Token

When transferring Alien tokens, which are not EVM gas tokens such as **USDT**, **DAI**, **WBTC** and others, firstly the deposit function must be called on the `MultiVault` contract and then an event contract must be deployed on Everscale in order to mint tokens on Everscale.

The code samples below demonstrate how to perform the first step of this process.

Once a transaction is initiated in this section, in order to have a complete token bridging process if the event contract deployment value is paid with the EVM gas token, get your transaction hash and use it in the [Deploy Alien Event](../DeployEvents/deployAlienEvent.md) section to complete the bridging process.

In this example, MultiVault and ERC-20 Token contracts' ABIs is required:

<div class="TransferAlienToken">

<details>
<summary>MultiVault Contract ABI</summary>

```typescript
const MultiVaultAbi = {
  _format: "hh-sol-artifact-1",
  contractName: "MultiVault",
  sourceName: "hardhat-diamond-abi/HardhatDiamondABI.sol",
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "facetAddress",
              type: "address",
            },
            {
              internalType: "enum IDiamondCut.FacetCutAction",
              name: "action",
              type: "uint8",
            },
            {
              internalType: "bytes4[]",
              name: "functionSelectors",
              type: "bytes4[]",
            },
          ],
          indexed: false,
          internalType: "struct IDiamondCut.FacetCut[]",
          name: "_diamondCut",
          type: "tuple[]",
        },
        {
          indexed: false,
          internalType: "address",
          name: "_init",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "_calldata",
          type: "bytes",
        },
      ],
      name: "DiamondCut",
      type: "event",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "facetAddress",
              type: "address",
            },
            {
              internalType: "enum IDiamondCut.FacetCutAction",
              name: "action",
              type: "uint8",
            },
            {
              internalType: "bytes4[]",
              name: "functionSelectors",
              type: "bytes4[]",
            },
          ],
          internalType: "struct IDiamondCut.FacetCut[]",
          name: "_diamondCut",
          type: "tuple[]",
        },
        {
          internalType: "address",
          name: "_init",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "_calldata",
          type: "bytes",
        },
      ],
      name: "diamondCut",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "_functionSelector",
          type: "bytes4",
        },
      ],
      name: "facetAddress",
      outputs: [
        {
          internalType: "address",
          name: "facetAddress_",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "facetAddresses",
      outputs: [
        {
          internalType: "address[]",
          name: "facetAddresses_",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_facet",
          type: "address",
        },
      ],
      name: "facetFunctionSelectors",
      outputs: [
        {
          internalType: "bytes4[]",
          name: "facetFunctionSelectors_",
          type: "bytes4[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "facets",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "facetAddress",
              type: "address",
            },
            {
              internalType: "bytes4[]",
              name: "functionSelectors",
              type: "bytes4[]",
            },
          ],
          internalType: "struct IDiamondLoupe.Facet[]",
          name: "facets_",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: "int8",
                  name: "wid",
                  type: "int8",
                },
                {
                  internalType: "uint256",
                  name: "addr",
                  type: "uint256",
                },
              ],
              internalType: "struct IEverscale.EverscaleAddress",
              name: "recipient",
              type: "tuple",
            },
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "expected_evers",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "payload",
              type: "bytes",
            },
          ],
          internalType: "struct IMultiVaultFacetDeposit.DepositParams",
          name: "d",
          type: "tuple",
        },
      ],
      name: "deposit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: "int8",
                  name: "wid",
                  type: "int8",
                },
                {
                  internalType: "uint256",
                  name: "addr",
                  type: "uint256",
                },
              ],
              internalType: "struct IEverscale.EverscaleAddress",
              name: "recipient",
              type: "tuple",
            },
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "expected_evers",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "payload",
              type: "bytes",
            },
          ],
          internalType: "struct IMultiVaultFacetDeposit.DepositParams",
          name: "d",
          type: "tuple",
        },
        {
          internalType: "uint256",
          name: "expectedMinBounty",
          type: "uint256",
        },
        {
          components: [
            {
              internalType: "address",
              name: "recipient",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          internalType:
            "struct IMultiVaultFacetPendingWithdrawals.PendingWithdrawalId[]",
          name: "pendingWithdrawalIds",
          type: "tuple[]",
        },
      ],
      name: "deposit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: "int8",
                  name: "wid",
                  type: "int8",
                },
                {
                  internalType: "uint256",
                  name: "addr",
                  type: "uint256",
                },
              ],
              internalType: "struct IEverscale.EverscaleAddress",
              name: "recipient",
              type: "tuple",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "expected_evers",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "payload",
              type: "bytes",
            },
          ],
          internalType:
            "struct IMultiVaultFacetDeposit.DepositNativeTokenParams",
          name: "d",
          type: "tuple",
        },
      ],
      name: "depositByNativeToken",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: "int8",
                  name: "wid",
                  type: "int8",
                },
                {
                  internalType: "uint256",
                  name: "addr",
                  type: "uint256",
                },
              ],
              internalType: "struct IEverscale.EverscaleAddress",
              name: "recipient",
              type: "tuple",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "expected_evers",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "payload",
              type: "bytes",
            },
          ],
          internalType:
            "struct IMultiVaultFacetDeposit.DepositNativeTokenParams",
          name: "d",
          type: "tuple",
        },
        {
          internalType: "uint256",
          name: "expectedMinBounty",
          type: "uint256",
        },
        {
          components: [
            {
              internalType: "address",
              name: "recipient",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          internalType:
            "struct IMultiVaultFacetPendingWithdrawals.PendingWithdrawalId[]",
          name: "pendingWithdrawalIds",
          type: "tuple[]",
        },
      ],
      name: "depositByNativeToken",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "base_chainId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint160",
          name: "base_token",
          type: "uint160",
        },
        {
          indexed: false,
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "symbol",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "decimals",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "uint128",
          name: "amount",
          type: "uint128",
        },
        {
          indexed: false,
          internalType: "int8",
          name: "recipient_wid",
          type: "int8",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "recipient_addr",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "expected_evers",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "payload",
          type: "bytes",
        },
      ],
      name: "AlienTransfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "enum IMultiVaultFacetTokens.TokenType",
          name: "_type",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "int8",
          name: "recipient_wid",
          type: "int8",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "recipient_addr",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "fee",
          type: "uint256",
        },
      ],
      name: "Deposit",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "int8",
          name: "native_wid",
          type: "int8",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "native_addr",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint128",
          name: "amount",
          type: "uint128",
        },
        {
          indexed: false,
          internalType: "int8",
          name: "recipient_wid",
          type: "int8",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "recipient_addr",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "expected_evers",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "payload",
          type: "bytes",
        },
      ],
      name: "NativeTransfer",
      type: "event",
    },
    {
      inputs: [],
      name: "defaultAlienDepositFee",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "defaultAlienWithdrawFee",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "defaultNativeDepositFee",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "defaultNativeWithdrawFee",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
      ],
      name: "fees",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "fee",
          type: "uint256",
        },
      ],
      name: "setDefaultAlienDepositFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "fee",
          type: "uint256",
        },
      ],
      name: "setDefaultAlienWithdrawFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "fee",
          type: "uint256",
        },
      ],
      name: "setDefaultNativeDepositFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "fee",
          type: "uint256",
        },
      ],
      name: "setDefaultNativeWithdrawFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_depositFee",
          type: "uint256",
        },
      ],
      name: "setTokenDepositFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_withdrawFee",
          type: "uint256",
        },
      ],
      name: "setTokenWithdrawFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
      ],
      name: "skim",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "EarnTokenFee",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "skim_to_everscale",
          type: "bool",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "SkimFee",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "fee",
          type: "uint256",
        },
      ],
      name: "UpdateDefaultAlienDepositFee",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "fee",
          type: "uint256",
        },
      ],
      name: "UpdateDefaultAlienWithdrawFee",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "fee",
          type: "uint256",
        },
      ],
      name: "UpdateDefaultNativeDepositFee",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "fee",
          type: "uint256",
        },
      ],
      name: "UpdateDefaultNativeWithdrawFee",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "fee",
          type: "uint256",
        },
      ],
      name: "UpdateTokenDepositFee",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "fee",
          type: "uint256",
        },
      ],
      name: "UpdateTokenWithdrawFee",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "convertLPToUnderlying",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "convertUnderlyingToLP",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
      ],
      name: "exchangeRateCurrent",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
      ],
      name: "getCash",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
      ],
      name: "getLPToken",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
      ],
      name: "liquidity",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "activation",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "supply",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "cash",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "interest",
              type: "uint256",
            },
          ],
          internalType: "struct IMultiVaultFacetLiquidity.Liquidity",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
      ],
      name: "redeem",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "interest",
          type: "uint256",
        },
      ],
      name: "setDefaultInterest",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "interest",
          type: "uint256",
        },
      ],
      name: "setTokenInterest",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "EarnTokenCash",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "lp_amount",
          type: "uint256",
        },
      ],
      name: "MintLiquidity",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "underlying_amount",
          type: "uint256",
        },
      ],
      name: "RedeemLiquidity",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "inetrest",
          type: "uint256",
        },
      ],
      name: "UpdateDefaultLiquidityInterest",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "interest",
          type: "uint256",
        },
      ],
      name: "UpdateTokenLiquidityInterest",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          components: [
            {
              internalType: "int8",
              name: "wid",
              type: "int8",
            },
            {
              internalType: "uint256",
              name: "addr",
              type: "uint256",
            },
          ],
          internalType: "struct IEverscale.EverscaleAddress",
          name: "recipient",
          type: "tuple",
        },
        {
          internalType: "uint256",
          name: "expected_evers",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "payload",
          type: "bytes",
        },
        {
          internalType: "uint256",
          name: "bounty",
          type: "uint256",
        },
      ],
      name: "cancelPendingWithdrawal",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "recipient",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          internalType:
            "struct IMultiVaultFacetPendingWithdrawals.PendingWithdrawalId[]",
          name: "pendingWithdrawalIds",
          type: "tuple[]",
        },
      ],
      name: "forceWithdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "pendingWithdrawals",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "bounty",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
            {
              internalType:
                "enum IMultiVaultFacetPendingWithdrawals.ApproveStatus",
              name: "approveStatus",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "chainId",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "payload",
                  type: "bytes",
                },
                {
                  internalType: "bool",
                  name: "strict",
                  type: "bool",
                },
              ],
              internalType: "struct IMultiVaultFacetWithdraw.Callback",
              name: "callback",
              type: "tuple",
            },
          ],
          internalType:
            "struct IMultiVaultFacetPendingWithdrawals.PendingWithdrawalParams",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "pendingWithdrawalsPerUser",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
      ],
      name: "pendingWithdrawalsTotal",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "recipient",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          internalType:
            "struct IMultiVaultFacetPendingWithdrawals.PendingWithdrawalId[]",
          name: "pendingWithdrawalId",
          type: "tuple[]",
        },
        {
          internalType:
            "enum IMultiVaultFacetPendingWithdrawals.ApproveStatus[]",
          name: "approveStatus",
          type: "uint8[]",
        },
      ],
      name: "setPendingWithdrawalApprove",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "recipient",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          internalType:
            "struct IMultiVaultFacetPendingWithdrawals.PendingWithdrawalId",
          name: "pendingWithdrawalId",
          type: "tuple",
        },
        {
          internalType: "enum IMultiVaultFacetPendingWithdrawals.ApproveStatus",
          name: "approveStatus",
          type: "uint8",
        },
      ],
      name: "setPendingWithdrawalApprove",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "bounty",
          type: "uint256",
        },
      ],
      name: "setPendingWithdrawalBounty",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
      ],
      name: "withdrawalLimits",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "undeclared",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "daily",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "enabled",
              type: "bool",
            },
          ],
          internalType:
            "struct IMultiVaultFacetPendingWithdrawals.WithdrawalLimits",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "withdrawalPeriodId",
          type: "uint256",
        },
      ],
      name: "withdrawalPeriods",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "total",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "considered",
              type: "uint256",
            },
          ],
          internalType:
            "struct IMultiVaultFacetPendingWithdrawals.WithdrawalPeriodParams",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "PendingWithdrawalCancel",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "payloadId",
          type: "bytes32",
        },
      ],
      name: "PendingWithdrawalCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "PendingWithdrawalFill",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "PendingWithdrawalForce",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "enum IMultiVaultFacetPendingWithdrawals.ApproveStatus",
          name: "approveStatus",
          type: "uint8",
        },
      ],
      name: "PendingWithdrawalUpdateApproveStatus",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "bounty",
          type: "uint256",
        },
      ],
      name: "PendingWithdrawalUpdateBounty",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "PendingWithdrawalWithdraw",
      type: "event",
    },
    {
      inputs: [],
      name: "acceptGovernance",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "bridge",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "configurationAlien",
      outputs: [
        {
          components: [
            {
              internalType: "int8",
              name: "wid",
              type: "int8",
            },
            {
              internalType: "uint256",
              name: "addr",
              type: "uint256",
            },
          ],
          internalType: "struct IEverscale.EverscaleAddress",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "configurationNative",
      outputs: [
        {
          components: [
            {
              internalType: "int8",
              name: "wid",
              type: "int8",
            },
            {
              internalType: "uint256",
              name: "addr",
              type: "uint256",
            },
          ],
          internalType: "struct IEverscale.EverscaleAddress",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
      ],
      name: "disableWithdrawalLimits",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "emergencyShutdown",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
      ],
      name: "enableWithdrawalLimits",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "gasDonor",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "governance",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "guardian",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_bridge",
          type: "address",
        },
        {
          internalType: "address",
          name: "_governance",
          type: "address",
        },
        {
          internalType: "address",
          name: "_weth",
          type: "address",
        },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "management",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "rewards",
      outputs: [
        {
          components: [
            {
              internalType: "int8",
              name: "wid",
              type: "int8",
            },
            {
              internalType: "uint256",
              name: "addr",
              type: "uint256",
            },
          ],
          internalType: "struct IEverscale.EverscaleAddress",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "int8",
              name: "wid",
              type: "int8",
            },
            {
              internalType: "uint256",
              name: "addr",
              type: "uint256",
            },
          ],
          internalType: "struct IEverscale.EverscaleAddress",
          name: "_configuration",
          type: "tuple",
        },
      ],
      name: "setConfigurationAlien",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "int8",
              name: "wid",
              type: "int8",
            },
            {
              internalType: "uint256",
              name: "addr",
              type: "uint256",
            },
          ],
          internalType: "struct IEverscale.EverscaleAddress",
          name: "_configuration",
          type: "tuple",
        },
      ],
      name: "setConfigurationNative",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "int8",
              name: "wid",
              type: "int8",
            },
            {
              internalType: "uint256",
              name: "addr",
              type: "uint256",
            },
          ],
          internalType: "struct IEverscale.EverscaleAddress",
          name: "token",
          type: "tuple",
        },
        {
          internalType: "address",
          name: "native",
          type: "address",
        },
      ],
      name: "setCustomNative",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "daily",
          type: "uint256",
        },
      ],
      name: "setDailyWithdrawalLimits",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "active",
          type: "bool",
        },
      ],
      name: "setEmergencyShutdown",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_gasDonor",
          type: "address",
        },
      ],
      name: "setGasDonor",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "setGovernance",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "setGuardian",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "setManagement",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "int8",
              name: "wid",
              type: "int8",
            },
            {
              internalType: "uint256",
              name: "addr",
              type: "uint256",
            },
          ],
          internalType: "struct IEverscale.EverscaleAddress",
          name: "_rewards",
          type: "tuple",
        },
      ],
      name: "setRewards",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "undeclared",
          type: "uint256",
        },
      ],
      name: "setUndeclaredWithdrawalLimits",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "withdrawGuardian",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bool",
          name: "active",
          type: "bool",
        },
      ],
      name: "EmergencyShutdown",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "governance",
          type: "address",
        },
      ],
      name: "NewPendingGovernance",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "bridge",
          type: "address",
        },
      ],
      name: "UpdateBridge",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "enum IMultiVaultFacetTokens.TokenType",
          name: "_type",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "int128",
          name: "wid",
          type: "int128",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "addr",
          type: "uint256",
        },
      ],
      name: "UpdateConfiguration",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "governance",
          type: "address",
        },
      ],
      name: "UpdateGovernance",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "guardian",
          type: "address",
        },
      ],
      name: "UpdateGuardian",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "management",
          type: "address",
        },
      ],
      name: "UpdateManagement",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "int128",
          name: "wid",
          type: "int128",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "addr",
          type: "uint256",
        },
      ],
      name: "UpdateRewards",
      type: "event",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "int8",
              name: "wid",
              type: "int8",
            },
            {
              internalType: "uint256",
              name: "addr",
              type: "uint256",
            },
          ],
          internalType: "struct IEverscale.EverscaleAddress",
          name: "native",
          type: "tuple",
        },
      ],
      name: "getNativeToken",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_token",
          type: "address",
        },
      ],
      name: "natives",
      outputs: [
        {
          components: [
            {
              internalType: "int8",
              name: "wid",
              type: "int8",
            },
            {
              internalType: "uint256",
              name: "addr",
              type: "uint256",
            },
          ],
          internalType: "struct IEverscale.EverscaleAddress",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_token",
          type: "address",
        },
      ],
      name: "prefixes",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "activation",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "symbol",
              type: "string",
            },
          ],
          internalType: "struct IMultiVaultFacetTokens.TokenPrefix",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "string",
          name: "name_prefix",
          type: "string",
        },
        {
          internalType: "string",
          name: "symbol_prefix",
          type: "string",
        },
      ],
      name: "setPrefix",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "bool",
          name: "blacklisted",
          type: "bool",
        },
      ],
      name: "setTokenBlacklist",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_token",
          type: "address",
        },
      ],
      name: "tokens",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "activation",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "blacklisted",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "depositFee",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "withdrawFee",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isNative",
              type: "bool",
            },
            {
              internalType: "address",
              name: "custom",
              type: "address",
            },
          ],
          internalType: "struct IMultiVaultFacetTokens.Token",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
      ],
      name: "BlacklistTokenAdded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
      ],
      name: "BlacklistTokenRemoved",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "activation",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "isNative",
          type: "bool",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "depositFee",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "withdrawFee",
          type: "uint256",
        },
      ],
      name: "TokenActivated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "int8",
          name: "native_wid",
          type: "int8",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "native_addr",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "name_prefix",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "symbol_prefix",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "symbol",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "decimals",
          type: "uint8",
        },
      ],
      name: "TokenCreated",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "payload",
          type: "bytes",
        },
        {
          internalType: "bytes[]",
          name: "signatures",
          type: "bytes[]",
        },
      ],
      name: "saveWithdrawAlien",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "payload",
          type: "bytes",
        },
        {
          internalType: "bytes[]",
          name: "signatures",
          type: "bytes[]",
        },
        {
          internalType: "uint256",
          name: "bounty",
          type: "uint256",
        },
      ],
      name: "saveWithdrawAlien",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "payload",
          type: "bytes",
        },
        {
          internalType: "bytes[]",
          name: "signatures",
          type: "bytes[]",
        },
      ],
      name: "saveWithdrawNative",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      name: "withdrawalIds",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "enum IMultiVaultFacetTokens.TokenType",
          name: "_type",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "payloadId",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "fee",
          type: "uint256",
        },
      ],
      name: "Withdraw",
      type: "event",
    },
  ],
  deployedBytecode: "",
  bytecode: "",
  linkReferences: {},
  deployedLinkReferences: {},
};
```

</details>

<br/>
<details>
<summary>ERC-20 Contract ABI</summary>

```typescript
const ERC20Abi = {
  _format: "hh-sol-artifact-1",
  contractName: "ERC20",
  sourceName: "@openzeppelin/contracts/token/ERC20/ERC20.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "string",
          name: "name_",
          type: "string",
        },
        {
          internalType: "string",
          name: "symbol_",
          type: "string",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "subtractedValue",
          type: "uint256",
        },
      ],
      name: "decreaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "addedValue",
          type: "uint256",
        },
      ],
      name: "increaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode: "",
  linkReferences: {},
  deployedLinkReferences: {},
};
```

</details>
<br/>

#### Initiating the token transfer on EVM network

<br/>
<details>
<summary>Transfer Alien Token</summary>

```typescript
// Import following libraries
import { ethers } from "ethers";
import { Address } from "everscale-inpage-provider";

// Initiate the EVM provider as mentioned in prerequisites section

/**
 * @param MultiVaultAddr {string} MultiVault Contract Address
 * @param MultiVaultAbi {JSON} MultiVault Contract ABI
 * @param signer EVM signer. see prerequisites section
 * @dev Use JSON.parse(JSON.stringify(MultiVaultAbi)) as the ABI if encountering json parse error
 */
  const MultiVault = new ethers.Contract(
    MultiVaultAddr,
    MultiVaultAbi
    signer
  );

/**
 * @param tokenAddress {string} Target alien token address
 * @param ERC20TokenAbi {JSON} ERC20 Contract ABI
 * @param signer EVM signer. see prerequisites section
 * @dev Use JSON.parse(JSON.stringify(ERC20Abi)) as the ABI if encountering json parse error
 */
  let ERC20Token = new ethers.Contract(tokenAddress, ERC20Abi, signer);

  // Pay Everscale fees with EVM gas token ?
  let payWithGasToken: boolean;

  // Amount to transfer
  let amount: string;

  // Target ERC20 token decimals
  const decimals: string = await ERC20Token.decimals();

  // Everscale receiver address. e.g. "0:0000...0000"
  let everAddress : string;

  // Everscale Address EVM object
  const recipient: Address = {
    wid: everAddress.split(":")[0],
    addr: `0x${everAddress.split(":")[1]}`,
  };

  /**
   * @param deployEventValueInEvmGasToken {string} Event contract initial balance in EVM gas token.
   */
  const deposit_value: string = payWithGasToken
    ? ethers.parseEther(deployEventValueInEvmGasToken).toString()
    : "0";

  // See Concepts -> operations -> Event Contract Deploy Value
  const deposit_expected_evers: string = payWithGasToken
    ? ethers.parseUnits("6", 9).toString()
    : "0";

  // Operational payload
  const deposit_payload: string = "0x";

  // Approving the MultiVault contract
  await ERC20Token.approve(
    await MultiVault.getAddress(),
    ethers.parseUnits(amount, decimals).toString()
    );

  /**
   * @param recipient {Address} Recipient Everscale address
   * @param token {string} Target Token address
   * @param amount {string} Token amount to transfer
   * @param deposit_expected_evers {string} Event initial balance
   * @param deposit_payload {string} Operational payload
   * @param deposit_value Amount of gas tokens attached to tx
   */
  const res = await MultiVault.deposit(
    [
        recipient,
        await ERC20Token.getAddress(),
        ethers.parseUnits(amount, decimals).toString(),
        deposit_expected_evers,
        deposit_payload,
    ],
    {
        value: deposit_value,
    }
    );
```

</details>

<br/>
<label for="AlienToken">select the token </label>
<select ref="AlienToken" @change="HandleSelectionChange">
  <option value="USDT" selected >USDT</option>
  <option value="USDC">USDC</option>
  <option value="DAI">DAI</option>
  <option value="WBTC">WBTC</option>
  </select>

<br/>

<label for="amount">amount </label>
<input ref="amount" type="number"/>
<br/>

<label class="container">pay with {{symbol()}}
<input class="checkboxInput" ref="gasTokenPay" type="checkbox">
<span class="checkmark"></span>
</label>
<br/>

<button ref="TransferAlienTokenButton" @click="HandleTransferAlienToken" style="{background-color : gray, border-radius: 100px}">Approve and Transfer USDT</button>

<p class="output-p" ref="TransferAlienTokenOutput"><loading :text="loadingText"/></p>


---

> The addresses of all the referenced contracts and tokens can be found at [Links](../../../../../docs/addresses.md).

</div>

<script lang="ts" >
import { useEvmToEverTransfers } from "../../../providers/useEvmToEverTransfers";
import { defineComponent, ref, onMounted } from "vue";
import { deployedContracts} from "../../../providers/helpers/EvmConstants";
import {useEvmProvider} from "../../../../providers/useEvmProvider"
import {ethers} from "ethers"
const { TransferEvmAlienToken } = useEvmToEverTransfers();
import {toast} from "../../../providers/helpers/toaster.ts"
import loading from "../../../../../.vitepress/theme/components/shared/BKDLoading.vue"

export default defineComponent({
  name: "TransferAlienToken",
    components:{
    loading
  },
  data(){
    return{
      loadingText: " "
    }
  },
  setup() {

    onMounted(async ()=>{
      await useEvmProvider().MetaMaskProvider().on('chainChanged', (chainId) => window.location.reload());
    })

    const symbol = () => {
     return useEvmProvider().getSymbol()
      }

    async function HandleSelectionChange(){
        this.$refs.TransferAlienTokenButton.innerHTML = `Approve and Transfer ${this.$refs.AlienToken.value}`
    }

    async function HandleTransferAlienToken() {
      this.loadingText = "";

      if (Number(this.$refs.amount.value) <= 0) {
        toast("Please enter a valid number !!", 0);
        this.loadingText = " "
        return
      }

      const EvmProvider = new ethers.BrowserProvider(useEvmProvider().MetaMaskProvider())

      let TransferAlienTokenOutput

      try{
       TransferAlienTokenOutput = await TransferEvmAlienToken(
        deployedContracts[Number((await EvmProvider.getNetwork()).chainId.toString())][this.$refs.AlienToken.value],
        this.$refs.amount.value,
        this.$refs.gasTokenPay.checked,
        symbol()
        );}catch(err){
        // catching the bad provider error
        // in this case the chain id and symbol are not derivable from the provider so we encounter a TypeError.
        if(err.toString().includes("intermediate value")){
          toast("unsupported network", 0);
          this.loadingText = " ";
          return;
        }else{
          toast(err.message, 0);
          this.loadingText = " ";
          return;
        }
      }

      if (TransferAlienTokenOutput[0] != "ERROR :" ){
      toast("Operation successful", 1)
      }else{
      toast(TransferAlienTokenOutput[1], 0);
      this.loadingText = " ";
      return;
      }
      this.loadingText = TransferAlienTokenOutput;
    }
    return {
      HandleTransferAlienToken,
      HandleSelectionChange,
      symbol
    };
  },
});
</script>

<style>
  button, input, details, select, .output-p{
  background-color: var(--vp-c-bg-mute);
  transition: background-color 0.1s;
  padding: 5px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-weight: 600;
  margin-right: 0.5rem;
  cursor : pointer;
}

.container {
  display: flex;
  position: relative;
  margin-bottom: 12px;

}

.container .checkboxInput {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  }

.checkmark {
  cursor: pointer;
  position: relative;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: var(--vp-c-bg-mute);
  border: 1px solid var(--vp-c-divider);
  border-radius : 8px;
  margin-left: 10px;
}

.container input:checked ~ .checkmark {
  background-color: rgb(16, 185, 129);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
