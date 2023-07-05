# Building Payloads

## Ever Native Coin Payload

The following payload is utilized when transferring [EVER](../../../../docs/addresses.md#wever). It encompasses encoded operational data related to wrapping EVER into WEVER, as well as specifying the target EVM network and recipient. The code sample below demonstrates how to construct such a payload.

<details>
<summary>Click to expand</summary>

```TS
// Encodes evm data into a cell
// @param evmRecipient {uint160} : Evm recipient address. Example: "0x0000000000000000000000000000000000000000".
// @param chainId {uint256} : Evm network chain id. Example: "56".
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
  return Math.abs(~~(Math.random() * 2 ** bits) | 0).toString();
  }
  let randomNonce: string = getRandomUint();

  // base encoded data
  const data = await provider.packIntoCell({
    data: {
      nonce: randomNonce,
      network: 1,
      transferPayload: transferPayload.boc,
    },
    structure: [
      { name: "nonce", type: "uint32" },
      { name: "network", type: "uint8" },
      { name: "transferPayload", type: "cell" },
    ] as const,
  });

// {remainingGasTo} will be Ever user address if asset releasing is done manually and Event closer if automatically.
const remainingGasTo = releaseByEver ? constants.EventCloser : everSender;

// Encodes data about the EVER wrapper
// @param to {address} : WEVER receiver, must be ProxyMultiVaultNativeV_4 which can be found in addresses.
// @param amount {uint128} : Ever amount. Example: "1000000000".
// @param remainingGasTo {address} : remaining gas receiver Ever address. Example: "0:0000000000000000000000000000000000000000000000000000000000000000".
const compounderPayload = await locklift.provider.packIntoCell({
data: {
to: constants.ProxyMultiVaultNativeV_4,
amount: locklift.utils.toNano(amount),
remainingGasTo,
payload: data.boc,
},
structure: [
{ name: "to", type: "address" },
{ name: "amount", type: "uint128" },
{ name: "remainingGasTo", type: "address" },
{ name: "payload", type: "cell" },
] as const,
});
// boc contains the payload TvmCell string and is used as payload.
const boc: string = compounderPayload.boc;
```

</details>

<div class="buildPayload">
<label>
amount
<input ref="amount" type="number"/>
<br/>
Release By EVER
<input ref="everPay" type="checkbox"/>
</label>
<br/>

<button @click="HandleWrapPayload" style="{background-color : gray, border-radius: 100px}">build wrap Payload</button>

<p ref="wrapPayloadOutput"></p>

</div>

## Ever Native Token Payload

## Ever Aline Token

## Evm Native Coin

<script lang="ts">
  import {usePayloadBuilders} from "../../hooks/usePayloadBuilders"
  import { defineComponent, ref, onMounted } from 'vue';

  const { buildWrapPayload} = usePayloadBuilders()

  export default defineComponent({
  name: 'buildPayload',
  setup() {
    async function HandleWrapPayload(){
    var wrapPayloadOutput = await buildWrapPayload(
        Number(this.$refs.amount.value) <=0  ? "1" : this.$refs.amount.value.toString()
      ,this.$refs.everPay.checked) 
      this.$refs.wrapPayloadOutput.innerHTML =
       `payload : ${wrapPayloadOutput[0]} <br/>
        random nonce : ${wrapPayloadOutput[1]}
      `;
    }
    return { HandleWrapPayload};
  },

  })
</script>
<style>
  button, input {
  background-color: var(--vp-c-bg-mute);
  transition: background-color 0.1s;
  padding: 5px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 0.9em;
  font-weight: 600;
  margin-right: 0.5rem;
}
</style>
