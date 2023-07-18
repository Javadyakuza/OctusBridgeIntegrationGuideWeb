# Transfer Evm Gas Token

<div class="EvmNativeCoinTransfer">

To transfer an Evm network gas token such as **BNB**, **ETH**, **FTM**, or any other supported token, it is necessary to initiate a transaction in Everscale to authorize the transfer. Once the event contract is confirmed, the assets can be released on the Evm network. The asset releasing step can be executed either manually or automatically, depending on your preferred method.
Below, you will find code samples illustrating the implementation of your chosen approach:

In order to have a complete token bridging, if the Evm network fees are payed with Ever, Once you have initialed a transaction on this section, get your event address and use it to complete the token bridging on [saveWithdrawAlien](../saveWithdraw/saveWithdrawAlien.md) section.

To perform such a operation Tip3 Token Root and wallet upgradable Abi's are required which are as follows :

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
<summary>Transfer Evm Gas Token</summary>

```typescript
// Import the required libraries
import { ethers } from "ethers";
import { Address } from "everscale-inpage-provider";

// Initial the Tvm provider as mentioned in prerequisites section

// Everscale user address
const everSender: Address = new Address("0:12345");

/**
 * @param TokenRootAbi {JSON} The abi of the token root
 * @param tokenAddress {Address} Address of the token root
 */
const AlienTokenRoot = new provider.Contract(TokenRootAbi, tokenAddress);

/**
 * @param TokenWalletUpgradableAbi {JSON} The abi of the token wallet upgradable
 * @param everSender {Address} User address
 */
const AlienTokenWalletUpgradable = new provider.Contract(
  TokenWalletUpgradableAbi,
  (
    await AlienTokenRoot.methods
      .walletOf({ answerId: 0, walletOwner: everSender })
      .call({})
  ).value0
);

// Token amount
let amount: string;

// Pay evm network fee's with Ever ?
let payWithEver: boolean;

// Amount to attach to tx if payWithEver == true
const auto_value: string = 13;

// Amount to attach to tx if payWithEver == false
const manual_value: string = 6;

// See building payloads -> Evm Gas Token Payload
let EvmGasTokenPayload: string;

/**
 *  @param amount {string} Token amount
 *  @param callbackTo {Address} Callback receiver
 *  @param payload {string} Operational payload
 *  @param remainingGasTo {Address} Remaining gas receiver.
 *  @param from {Address} Sender address
 *  @notice @param amount {string} This parameter is important when asset releasing on evm side is done automatically
 *  @param bounce {boolean} Return remaining gas ? always true
 */
await AlienTokenWalletUpgradable.methods
  .burn({
    amount: ethers.parseEther(amount).toString(),
    callbackTo: ProxyMultiVaultAlienV_7,
    payload: EvmGasTokenPayload,
    remainingGasTo: payWithEver ? EventCloser : everSender, // event closer address can be found in addresses section
  })
  .send({
    from: everSender,
    amount: ethers
      .parseUnits(payWithEver ? auto_value : manual_value, 9)
      .toString(),
    bounce: true,
  });
```

</details>

<br/>

<label for="amount">amount </label>
<input ref="amount" type="number"/>
<br/>

<label class="container">pay with Ever
<input class="checkboxInput" ref="everPay" type="checkbox">
<span class="checkmark"></span>
</label>

<br/>
<button @click="HandleTransferEvmNativeCoin" style="{background-color : gray, border-radius: 100px}">Transfer {{BurnNativeBtnText()}}</button>

<p class="output-p" ref="EvmNativeCoinOutput"></p>

</div>

<script lang="ts" >
import { usePayloadBuilders } from "../../../providers/usePayloadBuilders";
import { useEverToEvmTransfers } from "../../../providers/useEverToEvmTransfers";
import { defineComponent, ref, onMounted } from "vue";
import { Address } from "everscale-inpage-provider";
import * as constants from "../../../providers/helpers/constants";
import {useEvmProvider} from "../../../../providers/useEvmProvider"

export default defineComponent({
  name: "EvmNativeCoinTransfer",
  setup() {
    const { transferEverAlienEvmNativeCoin } = useEverToEvmTransfers();
    onMounted(async ()=>{
      await useEvmProvider().MetaMaskProvider().on('chainChanged', (chainId) => window.location.reload());
    })
    const BurnNativeBtnText = () => {
     return useEvmProvider().getSymbol()

      }
    async function HandleTransferEvmNativeCoin(){
        this.$refs.EvmNativeCoinOutput.innerHTML = "processing ...";
        if (Number(this.$refs.amount.value) <= 0){
          this.$refs.EvmNativeCoinOutput.innerHTML = "ERROR: please enter valid number !!"
          return 
        }
        const EvmNativeCoinOutput = await transferEverAlienEvmNativeCoin(
            constants[`EVERW${BurnNativeBtnText()}`],
            this.$refs.amount.value,
            this.$refs.everPay.checked 
        );
        this.$refs.EvmNativeCoinOutput.innerHTML = EvmNativeCoinOutput;
    }
    return {
      HandleTransferEvmNativeCoin,
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
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
