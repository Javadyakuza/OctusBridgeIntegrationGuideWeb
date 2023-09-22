<div class="EverNativeCoinTransfer">

# Transfer EVER

The Native coin of Everscale, known as EVER, can be transferred to another EVM network through two methods. The first method involves manual asset minting on EVM network, while the second method automatically mints the assets on the EVM network. The code sample provided below demonstrates the implementation of your preferred approach.

In order to have a complete token bridging, if the EVM fees are paid with an Evm gas token, once you have initiated a transaction on this section, get your event address and use it to complete the token bridging on [saveWithdrawNative](../saveWithdraw/saveWithdrawNative.md) section.

To perform such an operation we need WEVERVaultContract ABI which is as follows :

<details>
<summary>WEVERVault Contract ABI</summary>

```typescript
abstract class EverAbi {
  static WeverVault = {
    "ABI version": 2,
    version: "2.2",
    header: ["pubkey", "time", "expire"],
    functions: [
      {
        name: "constructor",
        inputs: [
          { name: "owner_", type: "address" },
          { name: "root", type: "address" },
          { name: "root_tunnel", type: "address" },
          { name: "receive_safe_fee", type: "uint128" },
          { name: "settings_deploy_wallet_grams", type: "uint128" },
          { name: "initial_balance", type: "uint128" },
        ],
        outputs: [],
      },
      {
        name: "receiveTokenWalletAddress",
        inputs: [{ name: "wallet", type: "address" }],
        outputs: [],
      },
      {
        name: "drain",
        inputs: [{ name: "receiver", type: "address" }],
        outputs: [],
      },
      {
        name: "setConfiguration",
        inputs: [
          {
            components: [
              { name: "root_tunnel", type: "address" },
              { name: "root", type: "address" },
              { name: "receive_safe_fee", type: "uint128" },
              { name: "settings_deploy_wallet_grams", type: "uint128" },
              { name: "initial_balance", type: "uint128" },
            ],
            name: "_configuration",
            type: "tuple",
          },
        ],
        outputs: [],
      },
      {
        name: "withdraw",
        inputs: [{ name: "amount", type: "uint128" }],
        outputs: [],
      },
      {
        name: "grant",
        inputs: [{ name: "amount", type: "uint128" }],
        outputs: [],
      },
      {
        name: "wrap",
        inputs: [
          { name: "tokens", type: "uint128" },
          { name: "owner_address", type: "address" },
          { name: "gas_back_address", type: "address" },
          { name: "payload", type: "cell" },
        ],
        outputs: [],
      },
      {
        name: "onAcceptTokensTransfer",
        inputs: [
          { name: "tokenRoot", type: "address" },
          { name: "amount", type: "uint128" },
          { name: "sender", type: "address" },
          { name: "senderWallet", type: "address" },
          { name: "remainingGasTo", type: "address" },
          { name: "payload", type: "cell" },
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
        name: "_randomNonce",
        inputs: [],
        outputs: [{ name: "_randomNonce", type: "uint256" }],
      },
      {
        name: "owner",
        inputs: [],
        outputs: [{ name: "owner", type: "address" }],
      },
      {
        name: "configuration",
        inputs: [],
        outputs: [
          {
            components: [
              { name: "root_tunnel", type: "address" },
              { name: "root", type: "address" },
              { name: "receive_safe_fee", type: "uint128" },
              { name: "settings_deploy_wallet_grams", type: "uint128" },
              { name: "initial_balance", type: "uint128" },
            ],
            name: "configuration",
            type: "tuple",
          },
        ],
      },
      {
        name: "token_wallet",
        inputs: [],
        outputs: [{ name: "token_wallet", type: "address" }],
      },
      {
        name: "total_wrapped",
        inputs: [],
        outputs: [{ name: "total_wrapped", type: "uint128" }],
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
    ],
    fields: [
      { name: "_pubkey", type: "uint256" },
      { name: "_timestamp", type: "uint64" },
      { name: "_constructorFlag", type: "bool" },
      { name: "_randomNonce", type: "uint256" },
      { name: "owner", type: "address" },
      {
        components: [
          { name: "root_tunnel", type: "address" },
          { name: "root", type: "address" },
          { name: "receive_safe_fee", type: "uint128" },
          { name: "settings_deploy_wallet_grams", type: "uint128" },
          { name: "initial_balance", type: "uint128" },
        ],
        name: "configuration",
        type: "tuple",
      },
      { name: "token_wallet", type: "address" },
      { name: "total_wrapped", type: "uint128" },
    ],
  } as const;
}
```

</details>

<br/>

#### Initiating the token transfer on Everscale

<br/>
<details>
<summary>Transfer EVER</summary>

```typescript
// Import the required libraries
import { ethers } from "ethers";
import { Address } from "everscale-inpage-provider";

// Initiate the Tvm provider as mentioned in prerequisites section

// User's Everscale address
const everSender: Address = new Address("0:12345");

/**
 * @param WeverVaultAbi {JSON} WEVER contract ABI
 * @param WEVERVaultAddress {Address} address of the WEVERVault contract
 */
const WEVERVaultContract: =
  new provider.Contract(WeverVaultAbi, WEVERVaultAddress);

// Token amount
let amount: string;

// Pay EVM network fees with EVER ?
let payWithEver: boolean;

// Amount to attach to the transaction if payWithEver = true
/// @dev This parameter represents the estimated gas fees for one of the saveWithdraws functions in EVER coins.
const auto_value: string;

// Amount to attach to the transaction if payWithEver = false
const manual_value: string = 6;

// See building payloads -> Everscale Native Coin Payload
let EverNativeCoinPayload: string;

/**
 * @param tokens {string} EVER amount
 * @param owner_address {Address} Always compounder address
 * @param gas_back_address {Address} Address to send the change back
 * @param payload {string} Operational payload
 * @param from {Address} Sender address
 * @notice @param amount {string} this parameter is important when asset releasing on EVM network is done automatically
 * @param bounce {boolean} return remaining gas ? always true
 */
  await WEVERVaultContract.methods
    .wrap({
      tokens: ethers.parseUnits(amount, 9).toString(),
      owner_address: Compounder,
      gas_back_address: payWithEver ? EventCloser : everSender,
      payload: EverNativeCoinPayload,
    })
    .send({
      from: everSender,
      amount: ethers.parseUnits((payWithEver ? auto_value : manual_value ), 9).toString(),
      bounce: true,
    });
```

</details>

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
<button @click="HandleTransferEverNativeCoin" style="{background-color : gray, border-radius: 100px}">Transfer EVER</button>

<p class="output-p" ref="EverNativeCoinOutput"><loading :text="loadingText"/></p>

---

> The addresses of all the referenced contracts and tokens can be found at [Links](../../../../../docs/addresses.md).

</div>

<script lang="ts" >
import { usePayloadBuilders } from "../../../providers/usePayloadBuilders";
import { useEverToEvmTransfers } from "../../../providers/useEverToEvmTransfers";
import { defineComponent, ref, onMounted } from "vue";
import { Address } from "everscale-inpage-provider";
import {toast} from "../../../providers/helpers/toaster.ts"
import {useEvmProvider} from "../../../../providers/useEvmProvider"
import loading from "../../../../../.vitepress/theme/components/shared/BKDLoading.vue"

export default defineComponent({
  name: "EverNativeCoinTransfer",
    components:{
    loading
  },
  data(){
    return{
      loadingText: " "
    }
  },
  setup() {
    const { transferEverNativeCoin } = useEverToEvmTransfers();
    onMounted(async ()=>{
      await useEvmProvider().MetaMaskProvider().on('chainChanged', (chainId) => window.location.reload());
    })
    async function HandleTransferEverNativeCoin() {
      this.loadingText = "";

      if (Number(this.$refs.amount.value) <= 0) {
        toast("Please enter a valid number !!", 0);
        this.loadingText = " "
        return
      }

      var EverNativeCoinOutput = await transferEverNativeCoin(
        this.$refs.amount.value.toString(),
        this.$refs.everPay.checked
      );

      if (EverNativeCoinOutput[0] != "ERROR :" ){
      toast("Operation successful", 1)
      }else{
      toast(EverNativeCoinOutput[1], 0);
      this.loadingText = " ";
      return;
      }
      this.loadingText = EverNativeCoinOutput;
    }
    return {
      HandleTransferEverNativeCoin,
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
