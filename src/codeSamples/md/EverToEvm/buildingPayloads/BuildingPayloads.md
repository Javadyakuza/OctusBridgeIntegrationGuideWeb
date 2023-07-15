# Building Payloads

<div class="buildPayload">

## Ever Native Coin Payload

The following payload is utilized when transferring **EVER**. It encompasses encoded operational data related to wrapping EVER into [WEVER](../../../../../docs/addresses.md#wever), as well as specifying the Evm network and recipient. The code sample below demonstrates how to construct such a payload.

<details>
<summary>show code</summary>

```typescript
//initial the Tvm provider as mentioned in prerequisites section

/**
* Encodes evm data into a cell
* @param addr {uint160} : Evm recipient address. Example: "0x0000000000000000000000000000000000000000"
* @param chainId {uint256} : Evm network chain id. Example: "56"
* @callback {tuple} default for child params because of direct token transferring between MultiVault contract and user
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

// base encoded data
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

// {remainingGasTo} will be Ever user address if asset releasing is done manually and Event closer if automatically.
const remainingGasTo = releaseByEver ? EventCloser : everSender;
/**
* Encodes data about the EVER wrapper
* @param to {address} : WEVER receiver, must be ProxyMultiVaultNativeV_4 which can be found in addresses.
* @param amount {uint128} : Ever amount. Example: "1000000000".
* @param remainingGasTo {address} : remaining gas receiver Ever address. Example: "0:0000000000000000000000000000000000000000000000000000000000000000".
*/
const compounderPayload = await provider.packIntoCell({
data: {
to: ProxyMultiVaultNativeV_4,
amount: locklift.utils.toNano(amount),
remainingGasTo,
payload: data.boc, // boc is payload string
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

<label for="amount">pay with EVER </label>
<input ref="everPay" type="checkbox"/>

<br/>
<button @click="HandleWrapPayload" style="{background-color : gray, border-radius: 100px}">Build wrap Payload</button>

<p class="output-p" ref="wrapPayloadOutput"></p>

## Native Token Payload

The following payload is utilized when transferring an native token such as [BRIDGE](../../../../../docs/addresses.md#bridge) or [QUBE](../../../../../docs/addresses.md#qube). It encompasses encoded operational data related to Evm network and Evm recipient. The code sample below demonstrates how to construct such a payload.

<details>
<summary>show code</summary>

```typescript
//initial the Tvm provider as mentioned in prerequisites section

/**
* Encodes evm data into a cell
* @param addr {uint160} : Evm recipient address. Example: "0x0000000000000000000000000000000000000000"
* @param chainId {uint256} : Evm network chain id. Example: "56"
* @callback {tuple} default for child params because of direct token transferring between MultiVault contract and user

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

  // base encoded data
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

  // boc contains the TvmCell payload string and is used as payload
  const boc: string = data.boc;

```

</details>

<button @click="HandleTransferPayload" style="{background-color : gray, border-radius: 100px}">Build transfer Payload</button>

<p class="output-p" ref="transferPayloadOutput"></p>

## Alien Token Payload

The following payload is utilized when transferring an Alien token which is not an Evm gas token, such as `USDT`, `USDC`, `WBTC` and others. It encompasses encoded operational data related to EVM network, Evm recipient and target alien Evm token on Everscale. The code sample below demonstrates how to construct such a payload.

<details>
<summary>show code</summary>

```typescript
//initial the Tvm provider as mentioned in prerequisites section

/**
 * Encodes evm data into a cell
 * @param addr {uint160} Evm recipient address. Example: "0x0000000000000000000000000000000000000000"
 * @callback {tuple} default for child params because of direct token transferring between MultiVault contract and user
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
  // base encoded data
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
   * @param targetToken {ever address} represents an alternative version of the token on Everscale, differing from its standard counterpart. Example: "0:0000000000000000000000000000000000000000000000000000000000000000".
   * @note all different versions of tokens can be found in addresses section
   * */
    const data = await provider.packIntoCell({
    data: {
      nonce: randNonce,
      type: 0,
      targetToken: TargetTokenRootAlienEvm, // TokenRootAlienEvm, different with normal tip3 tokens in Everscale
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
  <option value="WETH" >WETH</option>
  <option value="WBTC" >WBTC</option>
  <option value="DAI" >DAI</option>

</select>

<br/>

<button ref="buildBurnAlien" @click="HandleBurnPayload" style="{background-color : gray, border-radius: 100px}">build burn USDT Payload</button>

<p class="output-p" ref="burnPayloadOutput"></p>

## Evm Gas token Payload

The provided payload is utilized for transferring an Evm gas token (such as BNB, ETH, FTM, etc.), from Everscale to an Evm network. The payload contains encoded operational data that is relevant to the Evm recipient, EVM network and its unWrapper contract. The purpose of the unWrapper contract is to convert the wrapped version of the EVM network gas token back to its original form. The code sample below illustrates how to construct such a payload.

> ❗ this payload is only available on Binance Smart chain at the moment.

<details>
<summary>show code</summary>

```typescript
//initial the Tvm provider as mentioned in prerequisites section

  /**
   * Encodes data about unWrapper of wrapped version of the target Evm network native coin (BNB, ETH, ...).
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

  // base encoded data
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

<button ref="buildBurnNative" @click="HandleNativeBurnPayload" style="{background-color : gray, border-radius: 100px}">build burn {{BurnNativeBtnText(true)}} Payload </button>

<p class="output-p" ref="burnNativePayloadOutput"></p>

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
    const BurnNativeBtnText = (auto : boolean ) => {
      if (auto) return useEvmProvider().getSymbol()

      }
    async function HandleWrapPayload() {
      this.$refs.wrapPayloadOutput.innerHTML = "processing ...";
      var wrapPayloadOutput = await buildWrapPayload(
        Number(this.$refs.amount.value) <= 0
          ? "1"
          : this.$refs.amount.value.toString(),
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
      console.log(this.$refs.burnToken.value)
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

</style>
