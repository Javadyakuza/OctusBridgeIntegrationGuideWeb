# Transfer EVM Gas Token

<div class="EvmNativeCoinTransfer">

To transfer an EVM network gas token such as **BNB**, **ETH**, **FTM**, or any other supported token, it is necessary to initiate a transaction in Everscale to authorize the transfer. Once the event contract is confirmed, the assets can be released on the EVM network. The asset releasing step can be executed either manually or automatically depending on your preferred method.
Below, you will find code samples illustrating the implementation of your chosen approach:

In order to have a complete token bridging, if the EVM fees are paid with an Evm gas token, once you have initiated a transaction on this section, get your event address and use it to complete the token bridging on [saveWithdrawAlien](../saveWithdraw/saveWithdrawAlien.md) section.
To perform such an operation we need the Tip3 TokenRoot and TokenWalletUpgradable ABIs which are as follows:


<details>
<summary>TokenRoot Contract ABI</summary>

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
<summary>TokenWalletUpgradable Contract ABI</summary>

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
<summary>Transfer EVM Gas Token</summary>

```typescript
// Import the required libraries
import { ethers } from "ethers";
import { Address } from "everscale-inpage-provider";

// Initiate the Tvm provider as mentioned in prerequisites section

// User's Everscale  address
const everSender: Address = new Address("0:12345");

/**
 * @param TokenRootAbi {JSON} The ABI of the token root contract
 * @param tokenAddress {Address} Address of the token root contract
 */
const AlienTokenRoot = new provider.Contract(TokenRootAbi, tokenAddress);

/**
 * @param TokenWalletUpgradableAbi {JSON} The ABI of the token wallet upgradable contract
 * @param everSender {Address} User's Everscale address
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

// Pay EVM network fees with EVER ?
let payWithEver: boolean;

// Amount to attach to the transaction if payWithEver = true
/// @dev This parameter represents the estimated gas fees for one of the saveWithdraws functions in EVER coins.
const auto_value: string;

// Amount to attach to the transaction if payWithEver = false
const manual_value: string = 6;

// See building payloads -> EVM Gas Token Payload
let EvmGasTokenPayload: string;

/**
 *  @param amount {string} Token amount
 *  @param callbackTo {Address} Callback receiver
 *  @param payload {string} Operational payload
 *  @param remainingGasTo {Address} Address to send the change back.
 *  @param from {Address} Sender address
 *  @notice @param amount {string} This parameter is important when asset releasing on EVM side is done automatically
 *  @param bounce {boolean} Return remaining gas ? always true
 */
await AlienTokenWalletUpgradable.methods
  .burn({
    amount: ethers.parseEther(amount).toString(),
    callbackTo: ProxyMultiVaultAlienV_7,
    payload: EvmGasTokenPayload,
    remainingGasTo: payWithEver ? EventCloser : everSender,
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

::: warning
Kindly be aware that you are signing a transaction on the mainnet (this is not a testnet).
:::

<label for="amount">amount </label>
<input ref="amount" type="number"/>
<br/>

<label class="container">pay with EVER
<input class="checkboxInput" ref="everPay" type="checkbox">
<span class="checkmark"></span>
</label>

<br/>
<button @click="HandleTransferEvmNativeCoin" style="{background-color : gray, border-radius: 100px}">Transfer {{BurnNativeBtnText()}}</button>

<p class="output-p" ref="EvmNativeCoinOutput"><loading :text="loadingText"/></p>

</div>

<script lang="ts" >
import { usePayloadBuilders } from "../../../providers/usePayloadBuilders";
import { useEverToEvmTransfers } from "../../../providers/useEverToEvmTransfers";
import { defineComponent, ref, onMounted } from "vue";
import { Address } from "everscale-inpage-provider";
import * as constants from "../../../providers/helpers/constants";
import {useEvmProvider} from "../../../../providers/useEvmProvider"
import {toast} from "../../../providers/helpers/toaster.ts"
import loading from "../../../../../.vitepress/theme/components/shared/BKDLoading.vue"

export default defineComponent({
  name: "EvmNativeCoinTransfer",
    components:{
    loading
  },
  data(){
    return{
      loadingText: " "
    }
  },
  setup() {
    const { transferEverAlienEvmNativeCoin } = useEverToEvmTransfers();
    onMounted(async ()=>{
      await useEvmProvider().MetaMaskProvider().on('chainChanged', (chainId) => window.location.reload());
    })
    const BurnNativeBtnText = () => {
     return useEvmProvider().getSymbol()

      }
    async function HandleTransferEvmNativeCoin(){
        this.loadingText = "";

        if (Number(this.$refs.amount.value) <= 0) {
        toast("Please enter a valid number !!", 0);
        this.loadingText = " ";
        return
        }

        const EvmNativeCoinOutput = await transferEverAlienEvmNativeCoin(
            constants[`EVERW${BurnNativeBtnText()}`],
            this.$refs.amount.value,
            this.$refs.everPay.checked
        );

        if (EvmNativeCoinOutput[0] != "ERROR :" ){
        toast("Operation successful", 1)
        }else{
        toast(EvmNativeCoinOutput[1], 0);
        this.loadingText = " ";
        return;
        }

        this.loadingText = EvmNativeCoinOutput;
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
