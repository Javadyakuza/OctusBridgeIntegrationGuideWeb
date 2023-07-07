<div class="EverNativeCoinTransfer">

# Transfer Everscale native coin

The native coin of Everscale, known as EVER, can be transferred to another EVM chain through two methods. The first method involves manual asset releasing or minting on Evm side, while the second method automatically releases the assets on the target EVM chain. The code sample provided below demonstrates the implementation of your preferred approach.
to perform such a operation we need WEVERVaultContract Abi which is as follows :

<details>
<summary>show ABI</summary>

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
<summary>show code</summary>

```typescript

/**
 * fetches the contract to interact with
 * @param WeverVaultAbi WEVER contract Abi
 * @param WEVERVaultAddress address of the WEVERVault contract, WEVERVault address can be found in addresses section
 */
const WEVERVaultContract: =
  await new provider.Contract(WeverVaultAbi, WEVERVaultAddress);

/**
 * prepares an payload for transferring EVER to Evm
 * @param amount ever amount top be transferred
 * @param payWithEver determines if paying the evm operations with ever or its native coin
 * @notice to find out how buildWrapPayload works, check out building payloads part
 */
const amount : number = 1;
const payWithEver : boolean = true;
const wrapPayload: [string, string] = await buildWrapPayload(
  amount,
  payWithEver
);

/**
 * * calls the wrap function on WEVERVaultContract and after wrapping Evers will deploy an Event contract.
 * @param tokens amount of EVER to transfer
 * @param owner_address always will compounder address,
 * @param gas_back_address address to return the remained gas from tx, will be user if paying Evm operations with Evm native coin or EventCloser if paying with Ever
 * @param payload operational payload
 * @notice compounder and EventCLoser addresses can be found in addresses section.
 */
  await WEVERVaultContract.methods
    .wrap({
      tokens: amount,
      owner_address: constants.Compounder,
      gas_back_address: constants.EventCloser, // user address if payWithEver = false
      payload: wrapPayload[0],
    })
    .send({
      from: everSender,
      amount: constants.transfer_fees.EverToEvmAutoRelease.toString(),
      bounce: true,
    });
```

</details>

<label for="amount">amount </label>
<input ref="amount" type="number"/>
<br/>
<label for="amount">pay with EVER </label>
<input ref="everPay" type="checkbox"/>

<br/>
<button @click="HandleTransferEverNAtiveCoin" style="{background-color : gray, border-radius: 100px}">Transfer EVER</button>

<p class="output-p" ref="EverNativeCoinOutput"></p>

</div>

<script lang="ts" >
import { usePayloadBuilders } from "../../../providers/usePayloadBuilders";
import { useEverToEvmTransfers } from "../../../providers/useEverToEvmTransfers";
import { defineComponent, ref, onMounted } from "vue";
import { Address } from "everscale-inpage-provider";
import * as constants from "../../../providers/helpers/constants";

export default defineComponent({
  name: "EverNativeCoinTransfer",
  setup() {
    const { transferEverNativeCoin } = useEverToEvmTransfers();
    async function HandleTransferEverNAtiveCoin() {
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
      HandleTransferEverNAtiveCoin,
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
