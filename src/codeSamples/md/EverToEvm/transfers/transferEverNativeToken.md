<div class="EverNativeTokenTransfer">

# Transfer Native Token

Everscale native tokens such as [BRIDGE](../../../../../docs/addresses.md#bridge) or [QUBE](../../../../../docs/addresses.md#qube) can be transferred to another EVM network through two methods. The first method involves manual asset minting on Evm network, while the second method automatically mints the assets on the target EVM network. The code sample provided below demonstrates the implementation of your preferred approach.

In order to have a complete token bridging if the Everscale fees are payed with Ever, Once you have initialed a transaction on this section, get your event address and use it to complete the token bridging on [saveWithdrawNative](../saveWithdraw/saveWithdrawNative.md) section.

to perform such a operation we need Tip3 TokenRoot and TokenWalletUpgradable Abi's which are as follows :

<details>
<summary>TokenRoot Contract Abi</summary>

```typescript
const TokenRootAbi = {
  "ABI version": 2,
  version: "2.2",
  header: ["pubkey", "time", "expire"],
  functions: [
    {
      name: "constructor",
      inputs: [
        { name: "initialSupplyTo", type: "address" },
        { name: "initialSupply", type: "uint128" },
        { name: "deployWalletValue", type: "uint128" },
        { name: "mintDisabled", type: "bool" },
        { name: "burnByRootDisabled", type: "bool" },
        { name: "burnPaused", type: "bool" },
        { name: "remainingGasTo", type: "address" },
      ],
      outputs: [],
    },
    {
      name: "supportsInterface",
      inputs: [
        { name: "answerId", type: "uint32" },
        { name: "interfaceID", type: "uint32" },
      ],
      outputs: [{ name: "value0", type: "bool" }],
    },
    {
      name: "disableMint",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "value0", type: "bool" }],
    },
    {
      name: "mintDisabled",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "value0", type: "bool" }],
    },
    {
      name: "burnTokens",
      inputs: [
        { name: "amount", type: "uint128" },
        { name: "walletOwner", type: "address" },
        { name: "remainingGasTo", type: "address" },
        { name: "callbackTo", type: "address" },
        { name: "payload", type: "cell" },
      ],
      outputs: [],
    },
    {
      name: "disableBurnByRoot",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "value0", type: "bool" }],
    },
    {
      name: "burnByRootDisabled",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "value0", type: "bool" }],
    },
    {
      name: "burnPaused",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "value0", type: "bool" }],
    },
    {
      name: "setBurnPaused",
      inputs: [
        { name: "answerId", type: "uint32" },
        { name: "paused", type: "bool" },
      ],
      outputs: [{ name: "value0", type: "bool" }],
    },
    {
      name: "transferOwnership",
      inputs: [
        { name: "newOwner", type: "address" },
        { name: "remainingGasTo", type: "address" },
        {
          components: [
            { name: "value", type: "uint128" },
            { name: "payload", type: "cell" },
          ],
          name: "callbacks",
          type: "map(address,tuple)",
        },
      ],
      outputs: [],
    },
    {
      name: "name",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "value0", type: "string" }],
    },
    {
      name: "symbol",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "value0", type: "string" }],
    },
    {
      name: "decimals",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "value0", type: "uint8" }],
    },
    {
      name: "totalSupply",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "value0", type: "uint128" }],
    },
    {
      name: "walletCode",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "value0", type: "cell" }],
    },
    {
      name: "rootOwner",
      inputs: [{ name: "answerId", type: "uint32" }],
      outputs: [{ name: "value0", type: "address" }],
    },
    {
      name: "walletOf",
      inputs: [
        { name: "answerId", type: "uint32" },
        { name: "walletOwner", type: "address" },
      ],
      outputs: [{ name: "value0", type: "address" }],
    },
    {
      name: "deployWallet",
      inputs: [
        { name: "answerId", type: "uint32" },
        { name: "walletOwner", type: "address" },
        { name: "deployWalletValue", type: "uint128" },
      ],
      outputs: [{ name: "tokenWallet", type: "address" }],
    },
    {
      name: "mint",
      inputs: [
        { name: "amount", type: "uint128" },
        { name: "recipient", type: "address" },
        { name: "deployWalletValue", type: "uint128" },
        { name: "remainingGasTo", type: "address" },
        { name: "notify", type: "bool" },
        { name: "payload", type: "cell" },
      ],
      outputs: [],
    },
    {
      name: "acceptBurn",
      id: "0x192B51B1",
      inputs: [
        { name: "amount", type: "uint128" },
        { name: "walletOwner", type: "address" },
        { name: "remainingGasTo", type: "address" },
        { name: "callbackTo", type: "address" },
        { name: "payload", type: "cell" },
      ],
      outputs: [],
    },
    {
      name: "sendSurplusGas",
      inputs: [{ name: "to", type: "address" }],
      outputs: [],
    },
  ],
  data: [
    { key: 1, name: "name_", type: "string" },
    { key: 2, name: "symbol_", type: "string" },
    { key: 3, name: "decimals_", type: "uint8" },
    { key: 4, name: "rootOwner_", type: "address" },
    { key: 5, name: "walletCode_", type: "cell" },
    { key: 6, name: "randomNonce_", type: "uint256" },
    { key: 7, name: "deployer_", type: "address" },
  ],
  events: [],
  fields: [
    { name: "_pubkey", type: "uint256" },
    { name: "_timestamp", type: "uint64" },
    { name: "_constructorFlag", type: "bool" },
    { name: "name_", type: "string" },
    { name: "symbol_", type: "string" },
    { name: "decimals_", type: "uint8" },
    { name: "rootOwner_", type: "address" },
    { name: "walletCode_", type: "cell" },
    { name: "totalSupply_", type: "uint128" },
    { name: "burnPaused_", type: "bool" },
    { name: "burnByRootDisabled_", type: "bool" },
    { name: "mintDisabled_", type: "bool" },
    { name: "randomNonce_", type: "uint256" },
    { name: "deployer_", type: "address" },
  ],
} as const;
```

</details>
<br/>
<details>
<summary>TokenWalletUpgradable Contract Abi</summary>

```typescript
const TokenWalletUpgradableAbi{
	"ABI version": 2,
	"version": "2.2",
	"header": ["pubkey", "time", "expire"],
	"functions": [
		{
			"name": "supportsInterface",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"interfaceID","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"bool"}
			]
		},
		{
			"name": "platformCode",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"cell"}
			]
		},
		{
			"name": "onDeployRetry",
			"id": "0x15A038FB",
			"inputs": [
				{"name":"value0","type":"cell"},
				{"name":"value1","type":"uint32"},
				{"name":"sender","type":"address"},
				{"name":"remainingGasTo","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "version",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"uint32"}
			]
		},
		{
			"name": "upgrade",
			"inputs": [
				{"name":"remainingGasTo","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "acceptUpgrade",
			"inputs": [
				{"name":"newCode","type":"cell"},
				{"name":"newVersion","type":"uint32"},
				{"name":"remainingGasTo","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "burnByRoot",
			"inputs": [
				{"name":"amount","type":"uint128"},
				{"name":"remainingGasTo","type":"address"},
				{"name":"callbackTo","type":"address"},
				{"name":"payload","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "destroy",
			"inputs": [
				{"name":"remainingGasTo","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "burn",
			"inputs": [
				{"name":"amount","type":"uint128"},
				{"name":"remainingGasTo","type":"address"},
				{"name":"callbackTo","type":"address"},
				{"name":"payload","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "balance",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "owner",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"address"}
			]
		},
		{
			"name": "root",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"address"}
			]
		},
		{
			"name": "walletCode",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"cell"}
			]
		},
		{
			"name": "transfer",
			"inputs": [
				{"name":"amount","type":"uint128"},
				{"name":"recipient","type":"address"},
				{"name":"deployWalletValue","type":"uint128"},
				{"name":"remainingGasTo","type":"address"},
				{"name":"notify","type":"bool"},
				{"name":"payload","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "transferToWallet",
			"inputs": [
				{"name":"amount","type":"uint128"},
				{"name":"recipientTokenWallet","type":"address"},
				{"name":"remainingGasTo","type":"address"},
				{"name":"notify","type":"bool"},
				{"name":"payload","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "acceptTransfer",
			"id": "0x67A0B95F",
			"inputs": [
				{"name":"amount","type":"uint128"},
				{"name":"sender","type":"address"},
				{"name":"remainingGasTo","type":"address"},
				{"name":"notify","type":"bool"},
				{"name":"payload","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "acceptMint",
			"id": "0x4384F298",
			"inputs": [
				{"name":"amount","type":"uint128"},
				{"name":"remainingGasTo","type":"address"},
				{"name":"notify","type":"bool"},
				{"name":"payload","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "sendSurplusGas",
			"inputs": [
				{"name":"to","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "constructor",
			"inputs": [
			],
			"outputs": [
			]
		}
	],
	"data": [
		{"key":1,"name":"root_","type":"address"},
		{"key":2,"name":"owner_","type":"address"}
	],
	"events": [
	],
	"fields": [
		{"name":"_pubkey","type":"uint256"},
		{"name":"_timestamp","type":"uint64"},
		{"name":"_constructorFlag","type":"bool"},
		{"name":"root_","type":"address"},
		{"name":"owner_","type":"address"},
		{"name":"balance_","type":"uint128"},
		{"name":"version_","type":"uint32"},
		{"name":"platformCode_","type":"cell"}
	]
} as const

```

</details>

<br/>

#### Initiating the token transfer on Everscale

<br/>
<details>
<summary>Transfer Native Token</summary>

```typescript
// Import the required libraries
import { ethers } from "ethers";

//initial the Tvm provider as mentioned in prerequisites section

/**
 * @param TokenRootAbi abi of the token root
 * @param tokenAddress address of the token root, some token root addresses can be found in addresses section
 */
const NativeTokenRoot = new provider.Contract(TokenRootAbi, tokenAddress);

/**
 * @param TokenWalletUpgradableAbi abi of the token wallet upgradable
 * @param everSender users wallet account contract address
 */
const AlienTokenWalletUpgradable = new provider.Contract(
  TokenWalletUpgradableAbi,
  (
    await NativeTokenRoot.methods
      .walletOf({ answerId: 0, walletOwner: everSender })
      .call({})
  ).value0
);

/**
 * @param amount ever amount top be transferred
 * @param payWithEver determines if paying the evm operations with ever or its native coin
 * @param auto_value value to attach to transaction if paying evm fees with ever
 * @param manual_value value to attach to transaction if paying evm fees with it native coin
 */
const amount: number = 1;
const payWithEver: boolean = true;
const auto_value: number = 13;
const manual_value: number = 6;

// preparing the payloads. see building payloads section
const transferPayload: [string, string] = await buildTransferPayload();

/**
 *  @param amount amount os target token to transfer
 *  @param deployWalletValue value to deploy the token wallet if not deployed already
 *  @param notify let recipient know that token are received
 *  @param payload operational payload
 *  @param recipient always ProxyMultiVaultNativeV_4, can be found in addresses section
 *  @param remainingGasTo who to send the remaining tx gas. will be event closer if releasing assets are done automatically on evm side and users address if manual
 *  @param from sender address
 *  @notice @param amount this parameter is important when asset releasing is done automatically on evm side, must be set to certain amounts
 *  @param bounce return remaining gas ? always true
 */
await AlienTokenWalletUpgradable.methods
  .transfer({
    amount: ethers.parseUnits(amount.toString(), 9).toString(),
    deployWalletValue: "200000000",
    notify: true,
    payload: transferPayload[0],
    recipient: ProxyMultiVaultNativeV_4,
    remainingGasTo: payWithEver ? EventCloser : everSender, // event closer address can be found in addresses section
  })
  .send({
    from: everSender,
    amount: ethers
      .parseUnits((payWithEver ? auto_value : manual_value).toString(), 9)
      .toString(),

    bounce: true,
  });
```

</details>
<br/>
<label for="NativeToken">select the token </label>
<select ref="NativeToken" @change="HandleSelectionChange">

  <option value="EVERBRIDGE" selected >BRIDGE</option>
  <option value="EVERQUBE"  >QUBE</option>
</select>
<br/>

<label for="amount">amount </label>
<input ref="amount" type="number"/>
<br/>

<label for="everPay">pay with EVER </label>
<input ref="everPay" type="checkbox"/>

<br/>
<button ref="transferNativeTokenButton" @click="HandleTransferEverNativeToken" style="{background-color : gray, border-radius: 100px}">Transfer BRIDGE</button>

<p class="output-p" ref="EverNativeTokenOutput"></p>

</div>

<script lang="ts" >
import { usePayloadBuilders } from "../../../providers/usePayloadBuilders";
import { useEverToEvmTransfers } from "../../../providers/useEverToEvmTransfers";
import { defineComponent, ref, onMounted } from "vue";
import { Address } from "everscale-inpage-provider";
import * as constants from "../../../providers/helpers/constants";

export default defineComponent({
  name: "EverNativeTokenTransfer",
  setup() {
    const { transferEverNativeToken } = useEverToEvmTransfers();
    async function HandleSelectionChange(){
    this.$refs.transferNativeTokenButton.innerHTML = `transfer ${this.$refs.NativeToken.value.split("EVER")[1]}`;
    }
    async function HandleTransferEverNativeToken() {
      this.$refs.EverNativeTokenOutput.innerHTML = "processing ...";
      if (Number(this.$refs.amount.value) <= 0) {
        this.$refs.EverNativeTokenOutput.innerHTML = "ERROR: please enter valid number !!"
        return;
      }
      var EverNativeTokenOutput = await transferEverNativeToken(
        constants[this.$refs.NativeToken.value],
        this.$refs.amount.value.toString(),
        this.$refs.everPay.checked
      );
      this.$refs.EverNativeTokenOutput.innerHTML = EverNativeTokenOutput;
    }
    return {
      HandleTransferEverNativeToken,
      HandleSelectionChange
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
