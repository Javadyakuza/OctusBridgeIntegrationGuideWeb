<div class="EverNativeCoinTransfer">

# Transfer Ever

The native coin of Everscale, known as EVER, can be transferred to another EVM network through two methods. The first method involves manual asset minting on Evm network, while the second method automatically mints the assets on the target Evm network. The code sample provided below demonstrates the implementation of your preferred approach.

In order to have a complete token bridging, Once you have initialed a transaction on this section, get your event address and use it to complete the token bridging on [saveWithdrawNative](../saveWithdraw/saveWithdrawNative.md) section.

to perform such a operation we need WEVERVaultContract Abi which is as follows :

<details>
<summary>WEVERVault Contract Abi</summary>

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
<details>
<summary>Transfer EVER</summary>

```typescript
// Import the required libraries
import { ethers } from "ethers";

//initial the Tvm provider as mentioned in prerequisites section

/**
 * fetches the contract to interact with
 * @param WeverVaultAbi WEVER contract Abi
 * @param WEVERVaultAddress address of the WEVERVault contract, WEVERVault address can be found in addresses section
 */
const WEVERVaultContract: =
  await new provider.Contract(WeverVaultAbi, WEVERVaultAddress);

/**
 * @param amount ever amount top be transferred
 * @param payWithEver determines if paying the evm operations with ever or its native coin

 * @param auto_value value to attach to transaction if paying evm fees with ever
 * @param manual_value value to attach to transaction if paying evm fees with it native coin
 */
const amount : number = 1;
const payWithEver : boolean = true;
const auto_value : number = 13
const manual_value : number = 6
// preparing payload. see payload building section
const wrapPayload: [string, string] = await buildWrapPayload(
  amount,
  payWithEver
);

/**
 * calls the wrap function on WEVERVaultContract and after wrapping Evers will deploy an Event contract.
 * @param tokens amount of EVER to transfer
 * @param owner_address always compounder address,
 * @param gas_back_address address to return the remained gas from tx, will be user if paying Evm operations with Evm native coin or EventCloser if paying with Ever
 * @param payload operational payload
 * @param from sender address
 * @notice @param amount this parameter is important when asset releasing is done automatically on evm side, must be set to certain amounts
 * @param bounce return remaining gas ? always true
 * @notice compounder and EventCLoser addresses can be found in addresses section.
 */
  await WEVERVaultContract.methods
    .wrap({
      tokens: ethers.parseUnits(amount.toString(), 9).toString(),
      owner_address: Compounder,
      gas_back_address: payWithEver ? EventCloser : everSender, // event closer address can be found in addresses section
      payload: wrapPayload[0],
    })
    .send({
      from: everSender,
      amount: ethers.parseUnits((payWithEver ? auto_value : manual_value ).toString(), 9).toString(),
      bounce: true,
    });
```

</details>

<label for="amount">amount </label>
<input ref="amount" type="number"/>
<br/>

<label for="everPay">pay with EVER </label>
<input ref="everPay" type="checkbox"/>

<br/>
<button @click="HandleTransferEverNativeCoin" style="{background-color : gray, border-radius: 100px}">Transfer EVER</button>

<p class="output-p" ref="EverNativeCoinOutput"></p>

</div>

<script lang="ts" >
import { usePayloadBuilders } from "../../../providers/usePayloadBuilders";
import { useEverToEvmTransfers } from "../../../providers/useEverToEvmTransfers";
import { defineComponent, ref, onMounted } from "vue";
import { Address } from "everscale-inpage-provider";

export default defineComponent({
  name: "EverNativeCoinTransfer",
  setup() {
    const { transferEverNativeCoin } = useEverToEvmTransfers();
    async function HandleTransferEverNativeCoin() {
      this.$refs.EverNativeCoinOutput.innerHTML = "processing ...";
      if (Number(this.$refs.amount.value) <= 0) {
        this.$refs.EverNativeCoinOutput.innerHTML = "ERROR: please enter valid number !!"
        return;
      }
      var EverNativeCoinOutput = await transferEverNativeCoin(
        this.$refs.amount.value.toString(),
        this.$refs.everPay.checked
      );
      this.$refs.EverNativeCoinOutput.innerHTML = EverNativeCoinOutput;
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

</style>
