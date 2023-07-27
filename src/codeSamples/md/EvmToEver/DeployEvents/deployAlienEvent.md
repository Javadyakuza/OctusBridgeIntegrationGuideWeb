<div class="DeployAlienEvent">

# Deploy Alien Events

An [Ethereum Everscale Alien Event](../../../../../docs/Concepts/Events.md#evm-to-ever-events) contract is deployed on Everscale when transferring an [Alien token](../../../../../docs/Concepts/TokenTypes.md) from an EVM network to Everscale.
These tokens can be either the EVM gas tokens, such as **BNB** or **ETH**, or ERC-20 tokens, like **USDT** or **WBTC**.
When a user wants to transfer a token from an EVM network to Everscale and chooses to pay for the event contract deployment with the EVM gas tokens, the event contract is automatically deployed. But, if the user decides to pay for deploying the event contract with Ever instead of the EVM gas tokens, the deployment of the event contract must be done manually. The following code sample demonstrates how to perform such an operation.

To perform such an operation, the EthereumEverscaleEventConfiguration contract ABI is needed which is as follows:

<details>
<summary>EthereumEverscaleEventConfiguration Contract ABI</summary>

```typescript
const EthereumEverscaleEventConfAbi = {
  "ABI version": 2,
  version: "2.2",
  header: ["time"],
  functions: [
    {
      name: "constructor",
      inputs: [{ name: "_configurationCode", type: "cell" }],
      outputs: [],
    },
    {
      name: "deploy",
      inputs: [
        { name: "_owner", type: "address" },
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
            { name: "chainId", type: "uint32" },
            { name: "eventEmitter", type: "uint160" },
            { name: "eventBlocksToConfirm", type: "uint16" },
            { name: "proxy", type: "address" },
            { name: "startBlockNumber", type: "uint32" },
            { name: "endBlockNumber", type: "uint32" },
          ],
          name: "networkConfiguration",
          type: "tuple",
        },
      ],
      outputs: [],
    },
    {
      name: "deriveConfigurationAddress",
      inputs: [
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
            { name: "chainId", type: "uint32" },
            { name: "eventEmitter", type: "uint160" },
            { name: "eventBlocksToConfirm", type: "uint16" },
            { name: "proxy", type: "address" },
            { name: "startBlockNumber", type: "uint32" },
            { name: "endBlockNumber", type: "uint32" },
          ],
          name: "networkConfiguration",
          type: "tuple",
        },
      ],
      outputs: [{ name: "value0", type: "address" }],
    },
    {
      name: "_randomNonce",
      inputs: [],
      outputs: [{ name: "_randomNonce", type: "uint256" }],
    },
    {
      name: "configurationCode",
      inputs: [],
      outputs: [{ name: "configurationCode", type: "cell" }],
    },
  ],
  data: [{ key: 1, name: "_randomNonce", type: "uint256" }],
  events: [],
  fields: [
    { name: "_pubkey", type: "uint256" },
    { name: "_timestamp", type: "uint64" },
    { name: "_constructorFlag", type: "bool" },
    { name: "_randomNonce", type: "uint256" },
    { name: "configurationCode", type: "cell" },
  ],
} as const;
```

</details>

<br/>

#### Building event vote data relevant to AlienTransfer event emitted by MultiVault contract

<br/>
<details>
<summary>Building Alien Event Vote Data</summary>

```typescript
//Import following libraries
import { ethers } from "ethers";

// Initiate the EVM provider as mentioned in prerequisites section

// AlienTransfer event ABI interface
let abi = new ethers.Interface([
  `event AlienTransfer(
        uint256 base_chainId,
        uint160 base_token,
        string name,
        string symbol,
        uint8 decimals,
        uint128 amount,
        int8 recipient_wid,
        uint256 recipient_addr,
        uint value,
        uint expected_evers,
        bytes payload
    )`,
]);

/**
 * Fetches the transaction receipt from a tx hash to extract the logs and use them to build event vote data.
 * @param txHash {string} The initializer function call transaction hash 
 */
const txReceipt = await provider.getTransactionReceipt(txHash);
if (!txReceipt) {
  throw new Error("Transaction receipt not found");
}

// Fetching the logs from the receipt
const logs = txReceipt.logs
  .map((log) => {
    try {
      let abiArgs = { topics: [log.topics[0]], data: log.data };
      return {
        index: log.index,
        data: log.data,
        parsedLog: abi.parseLog(abiArgs),
      };
    } catch (e) {
      return null;
    }
  })
  .filter((log) => log?.parsedLog !== null) as {
  index: number;
  data: string;
  parsedLog: any;
}[];

// Finding the AlienTransfer event from fetched logs
const log = logs.find((log) => log.parsedLog.name === "AlienTransfer");

// Building the event vote data
const eventLog = {
  eventTransaction: txReceipt.hash,
  eventIndex: log?.index!,
  eventData: log?.data!,
  eventBlockNumber: txReceipt.blockNumber,
  eventBlock: txReceipt.blockHash,
};
```

</details>

<br/>

#### Deploying the Ethereum Everscale Event Alien contract

<br/>
<details>
<summary>Deploy Alien Event</summary>

```typescript
// Import following libraries
import init, { mapEthBytesIntoTonCell } from "eth-ton-abi-converter";
import { Address } from "everscale-inpage-provider";

// Initiate the Tvm provider as mentioned in prerequisites section

// User's Everscale  address
const everSender: Address = new Address("0:12345");

/**
 * @param EthereumEverscaleEventConfAbi {JSON} The event config contract ABI
 * @param EthereumEverscaleAlienEventConfigurationAddr {Address} The alien event config contract address. 
 */
const EvmEverEventConf = new provider.Contract(
  EthereumEverscaleEventConfAbi,
  EthereumEverscaleAlienEventConfigurationAddr
);

// Fetching the details from config contract to extract the event contract ABI and use it when encoding event data
const ethConfigDetails = await EvmEverEventConf.methods
  .getDetails({ answerId: 0 })
  .call({});

// Fetching the flags from the config contract to use when encoding the event data
const flags = (
  await EvmEverEventConf.methods.getFlags({ answerId: 0 }).call({})
)._flags;

// Encoding the event data
await init(); // initializing the wasm
const eventData: string = await mapEthBytesIntoTonCell(
  Buffer.from(
    ethConfigDetails._basicConfiguration.eventABI,
    "base64"
  ).toString(),
  eventLog.eventData,
  flags
);

// Event vote data interface
interface EventVoteData {
  eventTransaction: string;
  eventIndex: number;
  eventData: string;
  eventBlockNumber: number;
  eventBlock: string;
}

// Preparing the parameters
const eventVoteData: EventVoteData = {
  eventTransaction: eventLog.eventTransaction,
  eventIndex: eventLog.eventIndex,
  eventData: eventData,
  eventBlockNumber: eventLog.eventBlockNumber,
  eventBlock: eventLog.eventBlock,
};

/**
 * @param eventVoteData {EventVoteData} Prepared event vote data
 * @param from {Address} User Ever address
 * @param amount {string} Event initial value
 * @param bounce {boolean} Should return remained gas ?
 */
await EvmEverEventConf.methods
  .deployEvent({ eventVoteData: eventVoteData })
  .send({
    from: everSender,
    amount: ethers.parseUnits("6", 9).toString(),
    bounce: true,
  });
```

</details>

<label for="txHash">EVM Transaction Hash </label>
<input ref="txHash" type="text"/>

<br/>
<button @click="HandleDeployAlienEvent" style="{background-color : gray, border-radius: 100px}">Deploy Alien Event</button>

<p class="output-p" ref="deployAlienEventOutput"></p>

---

> The addresses of all the referenced contracts and tokens can be found at [Links](../../../../../docs/addresses.md).

</div>

<script lang="ts" >
import { defineComponent, ref, onMounted } from "vue";
import { Address } from "everscale-inpage-provider";
import { useEventDeployer } from "../../../providers/useEventDeployer"
const { deployAlienEvent } = useEventDeployer();

export default defineComponent({
  name: "DeployAlienEvent",
  setup() {
    async function HandleDeployAlienEvent() {
      this.$refs.deployAlienEventOutput.innerHTML = "processing ...";
      if (this.$refs.txHash.value == "") {
        this.$refs.deployAlienEventOutput.innerHTML = "ERROR: please enter valid transaction hash  !!"
        return;
      }
      var deployAlienEventOutput = await deployAlienEvent(
        this.$refs.txHash.value.toString(),
      );
      this.$refs.deployAlienEventOutput.innerHTML = deployAlienEventOutput;
    }
    return {
      HandleDeployAlienEvent,
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
