# Building Payloads

<div class="buildPayload">

## Ever Native Coin Payload

The following payload is utilized when transferring **EVER**. It encompasses encoded operational data related to wrapping EVER into [WEVER](../../../../../docs/addresses.md#wever), as well as specifying the EVM network and recipient. The code sample below demonstrates how to construct such a payload.

<details>
<summary>show code</summary>

```typescript
// Initiate the Tvm provider as mentioned in prerequisites section

/**
* Encodes evm data into a cell
* @param addr {uint160} : Evm recipient address. Example: "0x0000000000000000000000000000000000000000"
* @param chainId {uint256} : Evm network chain id. Example: "56"
* @callback {tuple} Default values in this case
*/
const transferPayload = await provider.packIntoCell({
    data: {
      addr: evmRecipient,
      chainId: chainId,
      callback: {
        recipient: "0x0000000000000000000000000000000000000000",
        payload: "",
        strict: false,
      },
    },
    structure: [
      { name: "addr", type: "uint160" },
      { name: "chainId", type: "uint256" },
      {
        name: "callback",
        type: "tuple",
        components: [
          { name: "recipient", type: "uint160" },
          { name: "payload", type: "cell" },
          { name: "strict", type: "bool" },
        ] as const,
      },
    ] as const,
  });

// {randomNonce} is used when encoding and deriving the deployed event address
function getRandomUint(bits: 8 | 16 | 32 | 64 | 128 | 160 | 256 = 32): string {
// eslint-disable-next-line no-bitwise
return Math.abs(~~(Math.random() \* 2 \*\* bits) | 0).toString();
}
let randomNonce: string = getRandomUint();

// Base encoded data
const data = await provider.packIntoCell({
data: {
nonce: randomNonce,
network: 1,
transferPayload: transferPayload.boc, // boc is payload string
},
structure: [
{ name: "nonce", type: "uint32" },
{ name: "network", type: "uint8" },
{ name: "transferPayload", type: "cell" },
] as const,
});

// {remainingGasTo} will be user's Ever address if asset releasing is done manually and Event closer address if its done automatically.
const remainingGasTo = releaseByEver ? EventCloser : everSender;
/**
* Encodes data related to the EVER wrapper
* @param to {address} : WEVER receiver, must be ProxyMultiVaultNativeV_4's address.
* @param amount {uint128} : Ever amount. Example: "1000000000".
* @param remainingGasTo {address} : Address to send the change back. Example: "0:0000000000000000000000000000000000000000000000000000000000000000".
*/
const compounderPayload = await provider.packIntoCell({
data: {
to: ProxyMultiVaultNativeV_4,
amount: locklift.utils.toNano(amount),
remainingGasTo,
payload: data.boc, // boc is the payload string
},
structure: [
{ name: "to", type: "address" },
{ name: "amount", type: "uint128" },
{ name: "remainingGasTo", type: "address" },
{ name: "payload", type: "cell" },
] as const,
});
// boc contains the TvmCell payload string and is used as payload.
const boc: string = compounderPayload.boc;

```

</details>

<label for="amount">amount </label>
<input ref="amount" type="number"/>
<br/>

<label class="container">pay with Ever
<input class="checkboxInput" ref="everPay" type="checkbox">
<span class="checkmark"></span>
</label>

<br/>
<button @click="HandleWrapPayload" style="{background-color : gray, border-radius: 100px}">Build wrap Payload</button>

<p class="output-p" ref="wrapPayloadOutput"></p>

## Native Token Payload

The following payload is utilized when transferring an Native token such as [BRIDGE](../../../../../docs/addresses.md#bridge) or [QUBE](../../../../../docs/addresses.md#qube). It encompasses encoded operational data related to EVM network and EVM recipient. The code sample below demonstrates how to construct such a payload.

<details>
<summary>show code</summary>

```typescript
// Initiate the Tvm provider as mentioned in prerequisites section

/**
* Encodes evm data into a cell
* @param addr {uint160} : Evm recipient address. Example: "0x0000000000000000000000000000000000000000"
* @param chainId {uint256} : Evm network chain id. Example: "56"
* @callback {tuple} Default values in this case
*/
 const transferPayload = await provider.packIntoCell({
    data: {
      addr: evmRecipient,
      chainId: chainId,
      callback: {
        recipient: "0x0000000000000000000000000000000000000000",
        payload: "",
        strict: false,
      },
    },
    structure: [
      { name: "addr", type: "uint160" },
      { name: "chainId", type: "uint256" },
      {
        name: "callback",
        type: "tuple",
        components: [
          { name: "recipient", type: "uint160" },
          { name: "payload", type: "cell" },
          { name: "strict", type: "bool" },
        ] as const,
      },
    ] as const,
  });

  // {randomNonce} is used when encoding and deriving the deployed event address
  function getRandomUint(bits: 8 | 16 | 32 | 64 | 128 | 160 | 256 = 32): string {
  // eslint-disable-next-line no-bitwise
  return Math.abs(~~(Math.random() \* 2 \*\* bits) | 0).toString();
  }
  let randomNonce: string = getRandomUint();

  // Base encoded data
  const data = await provider.packIntoCell({
    data: {
      nonce: randomNonce,
      network: 1,
      transferPayload: transferPayload.boc, // boc is the payload string
    },
    structure: [
      { name: "nonce", type: "uint32" },
      { name: "network", type: "uint8" },
      { name: "transferPayload", type: "cell" },
    ] as const,
  });

  // boc contains the TvmCell payload string and is used as payload
  const boc: string = data.boc;

```

</details>

<button @click="HandleTransferPayload" style="{background-color : gray, border-radius: 100px}">Build transfer Payload</button>

<p class="output-p" ref="transferPayloadOutput"></p>

## Alien Token Payload

The following payload is utilized when transferring an Alien token which is not an EVM gas token, such as `USDT`, `USDC`, `WBTC` among others. It encompasses encoded operational data related to EVM network, EVM recipient and target Alien EVM token on Everscale.\
The code sample below demonstrates how to construct such a payload.

To accomplish that, it is necessary to obtain the ABI files for the ProxyMultiVaultAlien_V7 and ERC-20 contracts which are as follows.

<br/>
<details>
<summary>ProxyMultiVaultAlien_V7 Contract ABI</summary>

```typescript
const ProxyMultiVaultAlienV_7Abi = {
  "ABI version": 2,
  version: "2.2",
  header: ["pubkey", "time"],
  functions: [
    {
      name: "constructor",
      inputs: [{ name: "owner_", type: "address" }],
      outputs: [],
    },
    {
      name: "apiVersion",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "value0", type: "uint8" }],
    },
    {
      name: "upgrade",
      inputs: [{ name: "code", type: "cell" }],
      outputs: [],
    },
    {
      name: "deriveMergeRouter",
      inputs: [
        { name: "answerId", type: "uint32" },
        { name: "token", type: "address" },
      ],
      outputs: [{ name: "router", type: "address" }],
    },
    {
      name: "deployMergeRouter",
      inputs: [{ name: "token", type: "address" }],
      outputs: [],
    },
    {
      name: "setMergeRouter",
      inputs: [{ name: "_mergeRouter", type: "cell" }],
      outputs: [],
    },
    {
      name: "deriveMergePool",
      inputs: [
        { name: "answerId", type: "uint32" },
        { name: "nonce", type: "uint256" },
      ],
      outputs: [{ name: "pool", type: "address" }],
    },
    {
      name: "deployMergePool",
      inputs: [
        { name: "nonce", type: "uint256" },
        { name: "tokens", type: "address[]" },
        { name: "canonId", type: "uint256" },
      ],
      outputs: [],
    },
    {
      name: "mintTokensByMergePool",
      inputs: [
        { name: "nonce", type: "uint256" },
        { name: "token", type: "address" },
        { name: "amount", type: "uint128" },
        { name: "recipient", type: "address" },
        { name: "remainingGasTo", type: "address" },
        { name: "payload", type: "cell" },
      ],
      outputs: [],
    },
    {
      name: "withdrawTokensToEVMByMergePool",
      inputs: [
        { name: "nonce", type: "uint256" },
        { name: "token", type: "address" },
        { name: "amount", type: "uint128" },
        { name: "recipient", type: "uint160" },
        { name: "remainingGasTo", type: "address" },
        {
          components: [
            { name: "recipient", type: "uint160" },
            { name: "payload", type: "bytes" },
            { name: "strict", type: "bool" },
          ],
          name: "callback",
          type: "tuple",
        },
      ],
      outputs: [],
    },
    {
      name: "withdrawTokensToSolanaByMergePool",
      inputs: [
        { name: "nonce", type: "uint256" },
        { name: "token", type: "address" },
        { name: "amount", type: "uint128" },
        { name: "recipient", type: "uint256" },
        { name: "remainingGasTo", type: "address" },
        {
          components: [
            { name: "account", type: "uint256" },
            { name: "readOnly", type: "bool" },
            { name: "isSigner", type: "bool" },
          ],
          name: "executeAccounts",
          type: "tuple[]",
        },
      ],
      outputs: [],
    },
    {
      name: "upgradeMergePool",
      inputs: [{ name: "pool", type: "address" }],
      outputs: [],
    },
    {
      name: "setMergePoolPlatform",
      inputs: [{ name: "_mergePoolPlatform", type: "cell" }],
      outputs: [],
    },
    {
      name: "setMergePool",
      inputs: [{ name: "_mergePool", type: "cell" }],
      outputs: [],
    },
    {
      name: "onAcceptTokensBurn",
      inputs: [
        { name: "amount", type: "uint128" },
        { name: "value1", type: "address" },
        { name: "value2", type: "address" },
        { name: "remainingGasTo", type: "address" },
        { name: "payload", type: "cell" },
      ],
      outputs: [],
    },
    {
      name: "onEventConfirmedExtended",
      inputs: [
        {
          components: [
            {
              components: [
                { name: "eventTransaction", type: "uint256" },
                { name: "eventIndex", type: "uint32" },
                { name: "eventData", type: "cell" },
                { name: "eventBlockNumber", type: "uint32" },
                { name: "eventBlock", type: "uint256" },
              ],
              name: "voteData",
              type: "tuple",
            },
            { name: "configuration", type: "address" },
            { name: "staking", type: "address" },
            { name: "chainId", type: "uint32" },
          ],
          name: "value0",
          type: "tuple",
        },
        { name: "meta", type: "cell" },
        { name: "remainingGasTo", type: "address" },
      ],
      outputs: [],
    },
    {
      name: "onSolanaEventConfirmedExtended",
      inputs: [
        {
          components: [
            {
              components: [
                { name: "accountSeed", type: "uint128" },
                { name: "slot", type: "uint64" },
                { name: "blockTime", type: "uint64" },
                { name: "txSignature", type: "string" },
                { name: "eventData", type: "cell" },
              ],
              name: "voteData",
              type: "tuple",
            },
            { name: "configuration", type: "address" },
            { name: "staking", type: "address" },
          ],
          name: "value0",
          type: "tuple",
        },
        { name: "meta", type: "cell" },
        { name: "remainingGasTo", type: "address" },
      ],
      outputs: [],
    },
    {
      name: "mint",
      inputs: [
        { name: "token", type: "address" },
        { name: "amount", type: "uint128" },
        { name: "recipient", type: "address" },
        { name: "payload", type: "cell" },
      ],
      outputs: [],
    },
    {
      name: "burn",
      inputs: [
        { name: "token", type: "address" },
        { name: "amount", type: "uint128" },
        { name: "walletOwner", type: "address" },
      ],
      outputs: [],
    },
    {
      name: "deployEVMAlienToken",
      inputs: [
        { name: "chainId", type: "uint256" },
        { name: "token", type: "uint160" },
        { name: "name", type: "string" },
        { name: "symbol", type: "string" },
        { name: "decimals", type: "uint8" },
        { name: "remainingGasTo", type: "address" },
      ],
      outputs: [],
    },
    {
      name: "deploySolanaAlienToken",
      inputs: [
        { name: "token", type: "uint256" },
        { name: "name", type: "string" },
        { name: "symbol", type: "string" },
        { name: "decimals", type: "uint8" },
        { name: "remainingGasTo", type: "address" },
      ],
      outputs: [],
    },
    {
      name: "deriveEVMAlienTokenRoot",
      inputs: [
        { name: "answerId", type: "uint32" },
        { name: "chainId", type: "uint256" },
        { name: "token", type: "uint160" },
        { name: "name", type: "string" },
        { name: "symbol", type: "string" },
        { name: "decimals", type: "uint8" },
      ],
      outputs: [{ name: "value0", type: "address" }],
    },
    {
      name: "deriveSolanaAlienTokenRoot",
      inputs: [
        { name: "answerId", type: "uint32" },
        { name: "token", type: "uint256" },
        { name: "name", type: "string" },
        { name: "symbol", type: "string" },
        { name: "decimals", type: "uint8" },
      ],
      outputs: [{ name: "value0", type: "address" }],
    },
    {
      name: "getConfiguration",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [
        {
          components: [
            { name: "everscaleConfiguration", type: "address" },
            { name: "evmConfigurations", type: "address[]" },
            { name: "alienTokenRootCode", type: "cell" },
            { name: "alienTokenWalletCode", type: "cell" },
            { name: "alienTokenWalletPlatformCode", type: "cell" },
          ],
          name: "value0",
          type: "tuple",
        },
        {
          components: [
            { name: "everscaleConfiguration", type: "address" },
            { name: "solanaConfiguration", type: "address" },
            { name: "alienTokenRootCode", type: "cell" },
            { name: "alienTokenWalletCode", type: "cell" },
            { name: "alienTokenWalletPlatformCode", type: "cell" },
          ],
          name: "value1",
          type: "tuple",
        },
      ],
    },
    {
      name: "setEVMConfiguration",
      inputs: [
        {
          components: [
            { name: "everscaleConfiguration", type: "address" },
            { name: "evmConfigurations", type: "address[]" },
            { name: "alienTokenRootCode", type: "cell" },
            { name: "alienTokenWalletCode", type: "cell" },
            { name: "alienTokenWalletPlatformCode", type: "cell" },
          ],
          name: "_config",
          type: "tuple",
        },
        { name: "remainingGasTo", type: "address" },
      ],
      outputs: [],
    },
    {
      name: "setSolanaConfiguration",
      inputs: [
        {
          components: [
            { name: "everscaleConfiguration", type: "address" },
            { name: "solanaConfiguration", type: "address" },
            { name: "alienTokenRootCode", type: "cell" },
            { name: "alienTokenWalletCode", type: "cell" },
            { name: "alienTokenWalletPlatformCode", type: "cell" },
          ],
          name: "_config",
          type: "tuple",
        },
        { name: "remainingGasTo", type: "address" },
      ],
      outputs: [],
    },
    {
      name: "setManager",
      inputs: [{ name: "_manager", type: "address" }],
      outputs: [],
    },
    {
      name: "sendMessage",
      inputs: [
        { name: "recipient", type: "address" },
        { name: "message", type: "cell" },
      ],
      outputs: [],
    },
    {
      name: "transferOwnership",
      inputs: [{ name: "newOwner", type: "address" }],
      outputs: [],
    },
    {
      name: "renounceOwnership",
      inputs: [],
      outputs: [],
    },
    {
      name: "owner",
      inputs: [],
      outputs: [{ name: "owner", type: "address" }],
    },
    {
      name: "manager",
      inputs: [],
      outputs: [{ name: "manager", type: "address" }],
    },
    {
      name: "mergeRouter",
      inputs: [],
      outputs: [{ name: "mergeRouter", type: "cell" }],
    },
    {
      name: "mergePool",
      inputs: [],
      outputs: [{ name: "mergePool", type: "cell" }],
    },
    {
      name: "mergePoolPlatform",
      inputs: [],
      outputs: [{ name: "mergePoolPlatform", type: "cell" }],
    },
    {
      name: "mergePoolVersion",
      inputs: [],
      outputs: [{ name: "mergePoolVersion", type: "uint8" }],
    },
    {
      name: "_randomNonce",
      inputs: [],
      outputs: [{ name: "_randomNonce", type: "uint256" }],
    },
  ],
  data: [{ key: 1, name: "_randomNonce", type: "uint256" }],
  events: [
    {
      name: "OwnershipTransferred",
      inputs: [
        { name: "previousOwner", type: "address" },
        { name: "newOwner", type: "address" },
      ],
      outputs: [],
    },
    {
      name: "SolanaAlienTransfer",
      inputs: [
        { name: "base_token", type: "uint256" },
        { name: "name", type: "string" },
        { name: "symbol", type: "string" },
        { name: "decimals", type: "uint8" },
        { name: "amount", type: "uint128" },
        { name: "sol_amount", type: "uint64" },
        { name: "recipient", type: "address" },
        { name: "payload", type: "bytes" },
      ],
      outputs: [],
    },
    {
      name: "EVMAlienTransfer",
      inputs: [
        { name: "token", type: "uint160" },
        { name: "amount", type: "uint128" },
        { name: "recipient", type: "uint160" },
        { name: "chainId", type: "uint256" },
        { name: "callback_recipient", type: "uint160" },
        { name: "callback_payload", type: "bytes" },
        { name: "callback_strict", type: "bool" },
      ],
      outputs: [],
    },
  ],
  fields: [
    { name: "_pubkey", type: "uint256" },
    { name: "_timestamp", type: "uint64" },
    { name: "_constructorFlag", type: "bool" },
    { name: "owner", type: "address" },
    {
      components: [
        { name: "everscaleConfiguration", type: "address" },
        { name: "solanaConfiguration", type: "address" },
        { name: "alienTokenRootCode", type: "cell" },
        { name: "alienTokenWalletCode", type: "cell" },
        { name: "alienTokenWalletPlatformCode", type: "cell" },
      ],
      name: "solanaConfiguration",
      type: "tuple",
    },
    {
      components: [
        { name: "everscaleConfiguration", type: "address" },
        { name: "evmConfigurations", type: "address[]" },
        { name: "alienTokenRootCode", type: "cell" },
        { name: "alienTokenWalletCode", type: "cell" },
        { name: "alienTokenWalletPlatformCode", type: "cell" },
      ],
      name: "evmConfiguration",
      type: "tuple",
    },
    { name: "api_version", type: "uint8" },
    { name: "manager", type: "address" },
    { name: "mergeRouter", type: "cell" },
    { name: "mergePool", type: "cell" },
    { name: "mergePoolPlatform", type: "cell" },
    { name: "mergePoolVersion", type: "uint8" },
    { name: "_randomNonce", type: "uint256" },
  ],
} as const;
```

</details>

<br/>
<details>
<summary>ERC20 Contract Abi</summary>

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
  deployedBytecode: "",
  linkReferences: {},
  deployedLinkReferences: {},
};
```

</details>
<br/>

#### Getting the TokenRootEvmAlien address

<br/>
<details>
<summary>Get TokenRootAlienEvm Address</summary>

```typescript
// Import the following libraries
import { ethers } from "ethers";

// Initiate the Evm and Tvm provider

/**
 * Fetches the ProxyMultiVaultAlienV_7 contract.
 * @param ProxyMultivaultAlienV_7Abi {JSON} The ProxyMultiVaultAlienV_7 contract ABI
 * @param ProxyMultiVaultAlienV_7Addr {Address} The ProxyMultiVaultAlienV_7 contract address.
 */
const proxyMVAlienV_7 = new TvmProvider.Contract(
  ProxyMultiVaultAlienV_7Abi,
  ProxyMultiVaultAlienV_7Addr
);

/**
 * Fetches the target token contract
 * @param EvmTokenAddress {Address} The target token address on the Evm network
 * @param ERC20Abi.abi {JSON} The erc-20 contract ABI
 * @param EvmPRovider instructions on prerequisites section
 */
const ERC20Token = new ethers.Contract(
  EvmTokenAddress,
  ERC20Abi.abi,
  EvmProvider
);

// Fetching the erc-20 token details
const [name, symbol, decimals] = await Promise.all<[string, string, number]>([
  await ERC20Token.name(),
  await ERC20Token.symbol(),
  await ERC20Token.decimals(),
]);

// Fetching the chain id
const chainId: string = (await EvmProvider.getNetwork()).chainId.toString();

/**
 * @param answerId {number} answer id
 * @param chainId {string} The current provider chain id
 * @param token {string} The Evm token address. e.g. "0x1234"
 * @param name {string} The name of the token
 * @param symbol {string} The symbol of the token
 * @param decimals {string} The decimals of the token
 */
const TargetTokenRootAlienEvm = (
  await proxyMVAlienV_7.methods
    .deriveEVMAlienTokenRoot({
      answerId: 0,
      chainId: chainId,
      token: EvmTokenAddress, // the string of target token address
      name: name,
      symbol: symbol,
      decimals: decimals.toString(),
    })
    .call({})
).value0;
```

</details>
<br/>

#### Building the burn Alien token payload

<br/>
<details>
<summary>Build burn payload</summary>

```typescript
// Initiate the Tvm provider as mentioned in prerequisites section

/**
 * Encodes evm data into a cell
 * @param addr {uint160} Evm recipient address. Example: "0x0000000000000000000000000000000000000000"
 * @callback {tuple} Default values in this case

 * */
const operationPayload = await provider.packIntoCell({
    data: {
      addr: evmRecipient,
      callback: {
        recipient: "0x0000000000000000000000000000000000000000",
        payload: "",
        strict: false,
      },
    },
    structure: [
      { name: "addr", type: "uint160" },
      {
        name: "callback",
        type: "tuple",
        components: [
          { name: "recipient", type: "uint160" },
          { name: "payload", type: "cell" },
          { name: "strict", type: "bool" },
        ] as const,
      },
    ] as const,
  });
  // Base encoded data
  const payload = await provider.packIntoCell({
    data: {
      network: 1,
      withdrawPayload: operationPayload.boc,
    },
    structure: [
      { name: "network", type: "uint8" },
      { name: "withdrawPayload", type: "cell" },
    ] as const,
  });

  // {randomNonce} is used when encoding and deriving the deployed event address
  function getRandomUint(bits: 8 | 16 | 32 | 64 | 128 | 160 | 256 = 32): string {
  // eslint-disable-next-line no-bitwise
  return Math.abs(~~(Math.random() \* 2 \*\* bits) | 0).toString();
  }
  let randomNonce: string = getRandomUint();
  // Encodes TokenRootAlienEVM and base encoded data
  /**
   * @param targetToken {ever address} Represents an alterNative version of the token on Everscale, differing from its standard counterpart. Example: "0:0000000000000000000000000000000000000000000000000000000000000000".
   * */
    const data = await provider.packIntoCell({
    data: {
      nonce: randNonce,
      type: 0,
      targetToken: TargetTokenRootAlienEvm, // TokenRootAlienEvm, derived in previous code sample
      operationPayload: payload.boc,
    },
    structure: [
      { name: "nonce", type: "uint32" },
      { name: "type", type: "uint8" },
      { name: "targetToken", type: "address" },
      { name: "operationPayload", type: "cell" },
    ] as const,
  });
  // boc contains the TvmCell payload string and is used as payload
  const boc: string = data.boc;

```

</details>
<br/>
<label for="burnToken">select the token </label>
<select @change="HandleSelection" ref="burnToken" >
  <option value="USDT" selected >USDT</option>
  <option value="USDC" >USDC</option>
  <option value="WBTC" >WBTC</option>
  <option value="DAI" >DAI</option>

</select>

<br/>

<button ref="buildBurnAlien" @click="HandleBurnPayload" style="{background-color : gray, border-radius: 100px}">build burn USDT Payload</button>

<p class="output-p" ref="burnPayloadOutput"></p>

## EVM Gas Token Payload

The provided payload is utilized for transferring an EVM gas token (such as BNB, ETH, FTM, etc.), from Everscale to an EVM network. The payload contains encoded operational data that is relevant to the EVM recipient, EVM network and its unwrapper contract. The purpose of the unwrapper contract is to convert the wrapped version of the EVM network gas token back to its original form. The code sample below illustrates how to construct such a payload.

<details>
<summary>show code</summary>

```typescript
// Initiate the Tvm provider as mentioned in prerequisites section

  /**
   * Encodes data about unWrapper of wrapped version of the Evm network gas token (BNB, ETH, ...).
   * @param addr {uint160} Wrapped coin unWrapper contract address. Example: "0x0000000000000000000000000000000000000000"
   * @param recipient {uint160} Wrapped coin unWrapper contract address. Example: "0x0000000000000000000000000000000000000000"
   * @param payload {bytes} Encoded data related to Evm recipient address. "0x0"
   */
  const burnPayload = await provider.packIntoCell({
    data: {
      addr: unWrapper,
      callback: {
        recipient: unWrapper,
        payload: encodeBase64(web3.eth.abi.encodeParameters(["address"], [evmRecipient])) ?? "",
        strict: false,
      },
    },
    structure: [
      { name: "addr", type: "uint160" },
      {
        name: "callback",
        type: "tuple",
        components: [
          { name: "recipient", type: "uint160" },
          { name: "payload", type: "bytes" },
          { name: "strict", type: "bool" },
        ] as const,
      },
    ] as const,
  });

  // {randomNonce} is used when encoding and deriving the deployed event address
  function getRandomUint(bits: 8 | 16 | 32 | 64 | 128 | 160 | 256 = 32): string {
  // eslint-disable-next-line no-bitwise
  return Math.abs(~~(Math.random() \* 2 \*\* bits) | 0).toString();
  }
  let randomNonce: string = getRandomUint();

  // Base encoded data
  const data = await provider.packIntoCell({
    data: {
      nonce: randomNonce,
      network: 1,
      burnPayload: burnPayload.boc,
    },
    structure: [
      { name: "nonce", type: "uint32" },
      { name: "network", type: "uint8" },
      { name: "burnPayload", type: "cell" },
    ] as const,
  });

  // boc contains the TvmCell payload string and is used as payload
  const boc: string = data.boc;

```

</details>

<button ref="buildBurnNative" @click="HandleNativeBurnPayload" style="{background-color : gray, border-radius: 100px}">build burn {{BurnNativeBtnText()}} Payload </button>

<p class="output-p" ref="burnNativePayloadOutput"></p>

---

> The addresses of all the referenced contracts and tokens can be found at [Links](./addresses.md).
</div>

<script lang="ts" >
import { usePayloadBuilders } from "../../../providers/usePayloadBuilders";
import { defineComponent, ref, onMounted } from "vue";
import { Address } from "Everscale-inpage-provider";
import {deployedContracts} from "../../../providers/helpers/EvmConstants";
import {useEvmProvider} from "../../../../providers/useEvmProvider"
import {ethers} from "ethers" 
export default defineComponent({
  name: "buildPayload",
  setup() {
    const {
      buildWrapPayload,
      buildTransferPayload,
      buildBurnPayloadForEvmAlienToken,
      buildBurnPayloadForEvmNativeToken,
      format,
    } = usePayloadBuilders();

    onMounted(async ()=>{
      await useEvmProvider().MetaMaskProvider().on('chainChanged', (chainId) => window.location.reload());
    })
    const BurnNativeBtnText = () => {
     return useEvmProvider().getSymbol()
      }
    async function HandleWrapPayload() {
      this.$refs.wrapPayloadOutput.innerHTML = "processing ...";
      if (Number(this.$refs.amount.value) <= 0) {
        this.$refs.wrapPayloadOutput.innerHTML = "ERROR: please enter a valid number !!";
        return
      }
      var wrapPayloadOutput = await buildWrapPayload(
        this.$refs.amount.value.toString(),
        this.$refs.everPay.checked
      );
      this.$refs.wrapPayloadOutput.innerHTML = format(wrapPayloadOutput);
    }
    async function HandleTransferPayload() {
      this.$refs.transferPayloadOutput.innerHTML = "processing ...";
      var transferPayloadOutput = await buildTransferPayload();
      this.$refs.transferPayloadOutput.innerHTML = format(
        transferPayloadOutput
      );
    }
    async function HandleBurnPayload() {
      this.$refs.burnPayloadOutput.innerHTML = "processing ...";
      const EvmProvider = new ethers.BrowserProvider(useEvmProvider().MetaMaskProvider())
      var burnPayloadOutput = await buildBurnPayloadForEvmAlienToken(
        deployedContracts[Number((await EvmProvider.getNetwork()).chainId.toString())][this.$refs.burnToken.value]
      );
      this.$refs.burnPayloadOutput.innerHTML = format(burnPayloadOutput);
    }
    async function HandleNativeBurnPayload() {
      this.$refs.burnNativePayloadOutput.innerHTML = "processing ...";
      var burnNativePayloadOutput = await buildBurnPayloadForEvmNativeToken();
      this.$refs.burnNativePayloadOutput.innerHTML = format(
        burnNativePayloadOutput
      );
    } 
    async function HandleSelection(){
    this.$refs.buildBurnAlien.innerHTML = ` build burn ${this.$refs.burnToken.value} payload`
    }
    return {
      HandleWrapPayload,
      HandleTransferPayload,
      HandleBurnPayload,
      HandleNativeBurnPayload,
      HandleSelection,
      BurnNativeBtnText
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
  cursor: pointer;
}

.container .checkboxInput {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  
}

.checkmark {
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
