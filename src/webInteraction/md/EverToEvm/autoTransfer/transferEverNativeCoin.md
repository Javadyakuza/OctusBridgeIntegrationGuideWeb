<div>
# Transfer Everscale native coin

The native coin of Everscale, known as EVER, can be transferred to another EVM chain through two methods. The first method involves manual asset releasing or minting, while the second method automatically releases the assets on the target EVM chain. The code sample provided below demonstrates the implementation of your preferred approach.

<details>
<summary>show code</summary>w

```typescript

```

</details>
</div>

<script lang="ts" >
import { usePayloadBuilders } from "../../../providers/usePayloadBuilders";
import { defineComponent, ref, onMounted } from "vue";
import { Address } from "everscale-inpage-provider";
import * as constants from "../../../providers/helpers/constants";

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

    async function HandleWrapPayload() {
      var wrapPayloadOutput = await buildWrapPayload(
        Number(this.$refs.amount.value) <= 0
          ? "1"
          : this.$refs.amount.value.toString(),
        this.$refs.everPay.checked
      );
      this.$refs.wrapPayloadOutput.innerHTML = format(wrapPayloadOutput);
    }
    async function HandleTransferPayload() {
      var transferPayloadOutput = await buildTransferPayload();
      this.$refs.transferPayloadOutput.innerHTML = format(
        transferPayloadOutput
      );
    }
    async function HandleBurnPayload() {
      var burnPayloadOutput = await buildBurnPayloadForEvmAlienToken(
        constants[this.$refs.burnToken.value]
      );
      this.$refs.burnPayloadOutput.innerHTML = format(burnPayloadOutput);
    }
    async function HandleNativeBurnPayload() {
      var burnNativePayloadOutput = await buildBurnPayloadForEvmNativeToken();
      this.$refs.burnNativePayloadOutput.innerHTML = format(
        burnNativePayloadOutput
      );
    }
    return {
      HandleWrapPayload,
      HandleTransferPayload,
      HandleBurnPayload,
      HandleNativeBurnPayload,
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
  font-size: 0.9em;
  font-weight: 600;
  margin-right: 0.5rem;
  cursor : pointer;  
}

</style>
