# Transfer Evm Gas Token

When transferring Evm gas tokens such as **BNB**, **ETH** and **MATIC** and others, Firstly the deposit function for Evm Gas tokens must be called on the `MultiVault` contract and then an event contract must be deployed.

The code samples below demonstrate how to perform the first step of this process.

In order to have a complete token bridging process, Once initiated a transaction on this section, get you transaction hash and use it on [deploy alien event](../DeployEvents/deployAlienEvent.md) section to complete the bridging process.

In this example, MultiVault contract Abi is required:

<div class="TransferEvmGasToken">

<details>
<summary>MultiVault Contract Abi</summary>

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

#### Initiating the token transfer on Evm network

<br/>
<details>
<summary>Transfer native Token</summary>

```typescript
//Import following libraries
import { ethers, toBigInt } from "ethers";

//initial the Evm provider as mentioned in prerequisites section

/**
 * @param MultiVaultAddr MultiVault Contract Address
 * @param MultiVaultAbi MultiVault Contract Abi
 * @param signer Evm signer
 * @dev use JSON.parse(JSON.stringify(MultiVaultAbi)) as the abi if encountering json parse error
 */
  const MultiVault = new ethers.Contract(
    MultiVaultAddr,
    MultiVaultAbi
    signer
  );


/**
 * @param payWithGasToken pay Everscale fees with evm gas token ?
 * @param amount token amount to transfer
 * @param recipient sample ever recipient
 * @param deposit_value amount of gas token to attach to transaction
 * @important @param deposit_expected_evers its very important to be set properly to certain the behavior of the operation,
 * if zero => manual event deployment or if 5( event initial value ) => automatic event deployment
 * @param deposit_payload operational payload for everscale which is not needed in normal transfers
 */
  const payWithGasToken: boolean = true

  const amount: number = "0.01"

  const recipient = {
    wid: everSender.toString().split(":")[0],
    addr: `0x${everSender.toString().split(":")[1]}`,
  };

  const deposit_value = payWithGasToken
    ? ethers.parseEther("0.0016").toString()
    : "0";

  const deposit_expected_evers = payWithGasToken
    ? ethers.parseUnits("6", 9)
    : "0";

  const deposit_payload = "0x";

 // calling depositByNativeToken on MultiVault contract with prepared values
 const res = await MultiVault.depositByNativeToken(
      [
        recipient,
        ethers.parseEther(amount.toString()),
        deposit_expected_evers,
        deposit_payload,
      ],
      {
        value: toBigInt(deposit_value) + ethers.parseEther(amount.toString()),
      };
 )
```

</details>

<br/>

<label for="amount">amount </label>
<input ref="amount" type="number"/>
<br/>

<label for="gasTokenPay">pay with Evm Gas Token </label>
<input ref="gasTokenPay" type="checkbox"/>
<br/>

<button @click="HandleTransferEvmGasToken" style="{background-color : gray, border-radius: 100px}">Approve and Transfer Gas Token</button>

<p class="output-p" ref="TransferEvmGasToken"></p>

</div>

<script lang="ts" >
import { useEvmToEverTransfers } from "../../../providers/useEvmToEverTransfers";
import { defineComponent, ref, onMounted } from "vue";
import { deployedContracts} from "../../../providers/helpers/EvmConstants";

const { TransferEvmGasToken } = useEvmToEverTransfers();

export default defineComponent({
  name: "TransferEvmGasToken",
  setup() {

    async function HandleTransferEvmGasToken() {
      this.$refs.TransferEvmGasToken.innerHTML = "processing ...";
     if (Number(this.$refs.amount.value) <= 0) {
        this.$refs.TransferEvmGasToken.innerHTML = "ERROR: please enter valid amount !!"
        return;
      }
      let output = await TransferEvmGasToken(
        this.$refs.amount.value, 
        this.$refs.gasTokenPay.checked
        );
      this.$refs.TransferEvmGasToken.innerHTML = output;
    }
    return {
      HandleTransferEvmGasToken,
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

</style>