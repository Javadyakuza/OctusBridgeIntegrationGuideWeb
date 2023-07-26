# Save Withdraw Alien

The mentioned operation is utilized when a bridging process is initiated from Everscale to a EVM network. In this scenario, an event contract is deployed on Everscale, but the user prefers to pay the operation fees on the EVM network using is gas tokens, rather than EVER. If the fees were paid with EVER, assets would be released automatically.

This operation is specifically used for transferring alien tokens. At this stage, assets are released and to execute this operation, the `saveWithdrawAlien` function needs to be called with a payload that includes encoded data related to the deployed event contract on Everscale, as well as all the relayers' signatures that have confirmed the event contract.

In order to execute transaction at this page you need to initial a transaction and get your event address from [Transfer Alien Token](../transfers/transferEverAlienToken.md) or [Transfer EVM Gas Token](../transfers/transferEvmNativeCoin.md) section.

In this example, interaction takes place with three contracts, following ABI's are used to interact with those:

<div class="saveWithdrawAlien">

<details>
<summary>EverScaleEthereumBaseEvent Contract Abi</summary>

```typescript
const EverscaleEthereumBaseEventABI = {
  "ABI version": 2,
  version: "2.2",
  header: ["pubkey", "time", "expire"],
  functions: [
    {
      name: "constructor",
      inputs: [
        { name: "_initializer", type: "address" },
        { name: "_meta", type: "cell" },
      ],
      outputs: [],
    },
    {
      name: "getEventInitData",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [
        {
          components: [
            {
              components: [
                { name: "eventTransactionLt", type: "uint64" },
                { name: "eventTimestamp", type: "uint32" },
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
      ],
    },
    {
      name: "confirm",
      inputs: [
        { name: "signature", type: "bytes" },
        { name: "voteReceiver", type: "address" },
      ],
      outputs: [],
    },
    {
      name: "reject",
      inputs: [{ name: "voteReceiver", type: "address" }],
      outputs: [],
    },
    {
      name: "close",
      inputs: [],
      outputs: [],
    },
    {
      name: "getDetails",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [
        {
          components: [
            {
              components: [
                { name: "eventTransactionLt", type: "uint64" },
                { name: "eventTimestamp", type: "uint32" },
                { name: "eventData", type: "cell" },
              ],
              name: "voteData",
              type: "tuple",
            },
            { name: "configuration", type: "address" },
            { name: "staking", type: "address" },
          ],
          name: "_eventInitData",
          type: "tuple",
        },
        { name: "_status", type: "uint8" },
        { name: "_confirms", type: "uint256[]" },
        { name: "_rejects", type: "uint256[]" },
        { name: "empty", type: "uint256[]" },
        { name: "_signatures", type: "bytes[]" },
        { name: "balance", type: "uint128" },
        { name: "_initializer", type: "address" },
        { name: "_meta", type: "cell" },
        { name: "_requiredVotes", type: "uint32" },
      ],
    },
    {
      name: "status",
      inputs: [],
      outputs: [{ name: "value0", type: "uint8" }],
    },
    {
      name: "receiveRoundAddress",
      inputs: [
        { name: "roundContract", type: "address" },
        { name: "roundNum", type: "uint32" },
      ],
      outputs: [],
    },
    {
      name: "receiveRoundRelays",
      inputs: [{ name: "keys", type: "uint256[]" }],
      outputs: [],
    },
    {
      name: "getVoters",
      inputs: [
        { name: "answerId", type: "uint32" },
        { name: "vote", type: "uint8" },
      ],
      outputs: [{ name: "voters", type: "uint256[]" }],
    },
    {
      name: "getVote",
      inputs: [
        { name: "answerId", type: "uint32" },
        { name: "voter", type: "uint256" },
      ],
      outputs: [{ name: "vote", type: "optional(uint8)" }],
    },
    {
      name: "getApiVersion",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "value0", type: "uint32" }],
    },
    {
      name: "votes",
      inputs: [],
      outputs: [{ name: "votes", type: "map(uint256,uint8)" }],
    },
    {
      name: "initializer",
      inputs: [],
      outputs: [{ name: "initializer", type: "address" }],
    },
    {
      name: "meta",
      inputs: [],
      outputs: [{ name: "meta", type: "cell" }],
    },
    {
      name: "requiredVotes",
      inputs: [],
      outputs: [{ name: "requiredVotes", type: "uint32" }],
    },
    {
      name: "confirms",
      inputs: [],
      outputs: [{ name: "confirms", type: "uint16" }],
    },
    {
      name: "rejects",
      inputs: [],
      outputs: [{ name: "rejects", type: "uint16" }],
    },
    {
      name: "relay_round",
      inputs: [],
      outputs: [{ name: "relay_round", type: "address" }],
    },
    {
      name: "round_number",
      inputs: [],
      outputs: [{ name: "round_number", type: "uint32" }],
    },
    {
      name: "createdAt",
      inputs: [],
      outputs: [{ name: "createdAt", type: "uint32" }],
    },
    {
      name: "signatures",
      inputs: [],
      outputs: [{ name: "signatures", type: "map(uint256,bytes)" }],
    },
  ],
  data: [
    {
      components: [
        {
          components: [
            { name: "eventTransactionLt", type: "uint64" },
            { name: "eventTimestamp", type: "uint32" },
            { name: "eventData", type: "cell" },
          ],
          name: "voteData",
          type: "tuple",
        },
        { name: "configuration", type: "address" },
        { name: "staking", type: "address" },
      ],
      key: 1,
      name: "eventInitData",
      type: "tuple",
    },
  ],
  events: [
    {
      name: "Confirm",
      inputs: [
        { name: "relay", type: "uint256" },
        { name: "signature", type: "bytes" },
      ],
      outputs: [],
    },
    {
      name: "Reject",
      inputs: [{ name: "relay", type: "uint256" }],
      outputs: [],
    },
    {
      name: "Closed",
      inputs: [],
      outputs: [],
    },
    {
      name: "Confirmed",
      inputs: [],
      outputs: [],
    },
    {
      name: "Rejected",
      inputs: [{ name: "reason", type: "uint32" }],
      outputs: [],
    },
  ],
  fields: [
    { name: "_pubkey", type: "uint256" },
    { name: "_timestamp", type: "uint64" },
    { name: "_constructorFlag", type: "bool" },
    { name: "_status", type: "uint8" },
    { name: "votes", type: "map(uint256,uint8)" },
    { name: "initializer", type: "address" },
    { name: "meta", type: "cell" },
    { name: "requiredVotes", type: "uint32" },
    { name: "confirms", type: "uint16" },
    { name: "rejects", type: "uint16" },
    { name: "relay_round", type: "address" },
    { name: "round_number", type: "uint32" },
    { name: "createdAt", type: "uint32" },
    {
      components: [
        {
          components: [
            { name: "eventTransactionLt", type: "uint64" },
            { name: "eventTimestamp", type: "uint32" },
            { name: "eventData", type: "cell" },
          ],
          name: "voteData",
          type: "tuple",
        },
        { name: "configuration", type: "address" },
        { name: "staking", type: "address" },
      ],
      name: "eventInitData",
      type: "tuple",
    },
    { name: "signatures", type: "map(uint256,bytes)" },
  ],
} as const;
```

</details>

<br/>

<details>
<summary>EverScaleEthereumEventConfiguration Contract Abi</summary>

```typescript
const EverscaleEthereumEventConfigurationABI = {
  "ABI version": 2,
  version: "2.2",
  header: ["time", "expire"],
  functions: [
    {
      name: "constructor",
      inputs: [
        { name: "_owner", type: "address" },
        { name: "_meta", type: "cell" },
      ],
      outputs: [],
    },
    {
      name: "setMeta",
      inputs: [{ name: "_meta", type: "cell" }],
      outputs: [],
    },
    {
      name: "setEndTimestamp",
      inputs: [{ name: "endTimestamp", type: "uint32" }],
      outputs: [],
    },
    {
      name: "setFlags",
      inputs: [{ name: "_flags", type: "uint64" }],
      outputs: [],
    },
    {
      name: "setEventInitialBalance",
      inputs: [{ name: "eventInitialBalance", type: "uint64" }],
      outputs: [],
    },
    {
      name: "deployEvent",
      inputs: [
        {
          components: [
            { name: "eventTransactionLt", type: "uint64" },
            { name: "eventTimestamp", type: "uint32" },
            { name: "eventData", type: "cell" },
          ],
          name: "eventVoteData",
          type: "tuple",
        },
      ],
      outputs: [],
    },
    {
      name: "deriveEventAddress",
      inputs: [
        { name: "answerId", type: "uint32" },
        {
          components: [
            { name: "eventTransactionLt", type: "uint64" },
            { name: "eventTimestamp", type: "uint32" },
            { name: "eventData", type: "cell" },
          ],
          name: "eventVoteData",
          type: "tuple",
        },
      ],
      outputs: [{ name: "eventContract", type: "address" }],
    },
    {
      name: "getDetails",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [
        {
          components: [
            { name: "eventABI", type: "bytes" },
            { name: "staking", type: "address" },
            { name: "eventInitialBalance", type: "uint64" },
            { name: "eventCode", type: "cell" },
          ],
          name: "_basicConfiguration",
          type: "tuple",
        },
        {
          components: [
            { name: "eventEmitter", type: "address" },
            { name: "proxy", type: "uint160" },
            { name: "startTimestamp", type: "uint32" },
            { name: "endTimestamp", type: "uint32" },
          ],
          name: "_networkConfiguration",
          type: "tuple",
        },
        { name: "_meta", type: "cell" },
      ],
    },
    {
      name: "getType",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "_type", type: "uint8" }],
    },
    {
      name: "getFlags",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "_flags", type: "uint64" }],
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
      name: "basicConfiguration",
      inputs: [],
      outputs: [
        {
          components: [
            { name: "eventABI", type: "bytes" },
            { name: "staking", type: "address" },
            { name: "eventInitialBalance", type: "uint64" },
            { name: "eventCode", type: "cell" },
          ],
          name: "basicConfiguration",
          type: "tuple",
        },
      ],
    },
    {
      name: "networkConfiguration",
      inputs: [],
      outputs: [
        {
          components: [
            { name: "eventEmitter", type: "address" },
            { name: "proxy", type: "uint160" },
            { name: "startTimestamp", type: "uint32" },
            { name: "endTimestamp", type: "uint32" },
          ],
          name: "networkConfiguration",
          type: "tuple",
        },
      ],
    },
    {
      name: "meta",
      inputs: [],
      outputs: [{ name: "meta", type: "cell" }],
    },
    {
      name: "flags",
      inputs: [],
      outputs: [{ name: "flags", type: "uint64" }],
    },
  ],
  data: [
    {
      components: [
        { name: "eventABI", type: "bytes" },
        { name: "staking", type: "address" },
        { name: "eventInitialBalance", type: "uint64" },
        { name: "eventCode", type: "cell" },
      ],
      key: 1,
      name: "basicConfiguration",
      type: "tuple",
    },
    {
      components: [
        { name: "eventEmitter", type: "address" },
        { name: "proxy", type: "uint160" },
        { name: "startTimestamp", type: "uint32" },
        { name: "endTimestamp", type: "uint32" },
      ],
      key: 2,
      name: "networkConfiguration",
      type: "tuple",
    },
  ],
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
      name: "NewEventContract",
      inputs: [{ name: "eventContract", type: "address" }],
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
        { name: "eventABI", type: "bytes" },
        { name: "staking", type: "address" },
        { name: "eventInitialBalance", type: "uint64" },
        { name: "eventCode", type: "cell" },
      ],
      name: "basicConfiguration",
      type: "tuple",
    },
    {
      components: [
        { name: "eventEmitter", type: "address" },
        { name: "proxy", type: "uint160" },
        { name: "startTimestamp", type: "uint32" },
        { name: "endTimestamp", type: "uint32" },
      ],
      name: "networkConfiguration",
      type: "tuple",
    },
    { name: "meta", type: "cell" },
    { name: "flags", type: "uint64" },
  ],
} as const;
```

</details>

<br/>
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

#### Encoding payload relevant to Everscale Ethereum Event Alien

<br/>
<details>
<summary>Encoding Payload</summary>

```typescript
// Import the required libraries
import { mapTonCellIntoEthBytes } from "eth-ton-abi-converter";
import * as web3 from "web3";
import { ethers } from "ethers";

//Initial the Tvm provider as mentioned in prerequisites section

/**
 * @param EverscaleEthereumBaseEventABI {JSON} Event contract abi
 * @param EverEvmAlienEventContractAddress {Address} Relevant deployed event contract address
 */
const EverEvmEventContract = new provider.Contract(
  EverscaleEthereumBaseEventABI,
  EverscaleEthereumBaseEventAddr
);

// Fetching the event contract details
const eventDetails = await EverEvmEventContract.methods
  .getDetails({ answerId: 0 })
  .call({});

/**
 * @param EverscaleEthereumEventConfigurationABI {JSON} Event contract abi
 * @param EverscaleEthereumEventConfigurationAddr {Address} Config contract address which is fetched from event contract details
 */
const EverEvmAlienEventConf = new provider.Contract(
  EverscaleEthereumEventConfiguration,
  eventDetails._eventInitData.configuration
);

// Fetching the event config contract details
const [eventConfigDetails, flags] = await Promise.all([
  await EverEvmAlienEventConf.methods.getDetails({ answerId: 0 }).call({}),
  (await EverEvmAlienEventConf.methods.getFlags({ answerId: 0 }).call({}))
    ._flags,
]);

// Preparing the payload
const eventDataEncoded = mapTonCellIntoEthBytes(
  Buffer.from(
    (await EverEvmAlienEventConf.methods.getDetails({ answerId: 0 }).call({}))
      ._basicConfiguration.eventABI,
    "base64"
  ).toString(),
  eventDetails._eventInitData.voteData.eventData,
  flags
);

const roundNumber = (
  await EverEvmEventContract.methods.round_number({}).call({})
).round_number;

const payload = web3.eth.abi.encodeParameters(
  [
    {
      EverscaleEvent: {
        eventTransactionLt: "uint64",
        eventTimestamp: "uint32",
        eventData: "bytes",
        configurationWid: "int8",
        configurationAddress: "uint256",
        eventContractWid: "int8",
        eventContractAddress: "uint256",
        proxy: "address",
        round: "uint32",
      },
    },
  ],
  [
    {
      eventTransactionLt:
        eventDetails._eventInitData.voteData.eventTransactionLt,
      eventTimestamp: eventDetails._eventInitData.voteData.eventTimestamp,
      eventData: eventDataEncoded,
      configurationWid: eventDetails._eventInitData.configuration
        .toString()
        .split(":")[0],
      configurationAddress: `0x${
        eventDetails._eventInitData.configuration.toString().split(":")[1]
      }`,
      eventContractWid:
        EverEvmAlienEventContractAddress.toString().split(":")[0],
      eventContractAddress: `0x${
        EverEvmAlienEventContractAddress.toString().split(":")[1]
      }`,
      proxy: `0x${ethers
        .toBigInt(eventConfigDetails._networkConfiguration.proxy)
        .toString(16)
        .padStart(40, "0")}`,
      round: roundNumber,
    },
  ]
);
```

</details>

<br/>

#### Encoding signatures relevant to Everscale Ethereum Event Alien

<br/>
<details>
<summary>Encoding Signatures</summary>

```typescript
// Import the required libraries
import * as web3 from "web3";

//Initial the Tvm provider as mentioned in prerequisites section

/**
 * @param EverscaleEthereumBaseEventABI {JSON} ABI of event contract
 * @param EverscaleEthereumBaseEventAddr {Address} address of the relevant deployed event contract
 */
const eventContract = new provider.Contract(
  EverscaleEthereumBaseEventABI,
  EverscaleEthereumBaseEventAddr
);

// fetching the  signatures array from event contract
let rawSignatures = (
  await eventContract.methods.getDetails({ answerId: 0 }).call({})
)._signatures;

// Encoding signatures
const signatures = rawSignatures.map((sign) => {
  const signature = `0x${Buffer.from(sign, "base64").toString("hex")}`;
  const address = web3.eth.accounts.recover(
    web3.utils.sha3(payload as string) as string,
    signature
  );
  return {
    address,
    order: new BigNumber(address.slice(2).toUpperCase(), 16),
    signature,
  };
});

signatures.sort((a, b) => {
  if (a.order.eq(b.order)) {
    return 0;
  }

  if (a.order.gt(b.order)) {
    return 1;
  }

  return -1;
});
```

</details>
<br/>

#### Releasing token on EVM network

<br/>
<details>
<summary>Release Tokens</summary>

```typescript
// Import the required libraries
import { ethers } from "ethers";

//Initial the Evm provider as mentioned in prerequisites section

/**
 * @param MultiVaultAddress {Address} contract address of MultiVault contract on Evm network, can be found in addresses section
 * @param MultiVaultAbi {JSON} MultiVault contract ABI
 * @param signer Signer of the transaction. see prerequisites section
 * @dev Use JSON.parse(JSON.stringify(MultiVaultAbi)) as the abi if encountering json parse error
 */
let MultiVault = new ethers.Contract(MultiVaultAddress, MultiVaultAbi, signer);

/**
 * @param Payload {bytes} The operational payload
 * @param Signatures {bytes[]} The relayers signatures
 */
await MultiVault.saveWithdrawAlien(
  Payload,
  signatures.map(({ signature }) => signature)
);
```

</details>
<br/>

::: warning
Only EverscaleEthereumAlienEvent contract addresses from incomplete bridging transactions can be used
:::

<label for="eventAddr">Everscale Alien Event Address </label>
<input ref="eventAddr" type="text"/>

<br/>
<button @click="HandleSaveWithdrawAlien" style="{background-color : gray, border-radius: 100px}">saveWithdrawAlien</button>

<p class="output-p" ref="saveWithdrawAlienOutput"></p>

</div>

<script lang="ts" >
import { useSaveWithdraws } from "../../../providers/useSaveWithdraws";
import { defineComponent, ref, onMounted } from "vue";
import { Address} from "everscale-inpage-provider";

export default defineComponent({
  name: "saveWithdrawAlien",

  setup() {
    const { saveWithdrawAlien } = useSaveWithdraws();
    async function HandleSaveWithdrawAlien() {
      this.$refs.saveWithdrawAlienOutput.innerHTML = "processing ...";
      let output = await saveWithdrawAlien(new Address(this.$refs.eventAddr.value));
      this.$refs.saveWithdrawAlienOutput.innerHTML = output;
    }
    return {
      HandleSaveWithdrawAlien,
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
