# Overview of EVM to Ever Transfer Mechanics 

1. Locking or Burning the Target Tokens Based on Their [Type](./Concepts/TokenTypes.md#token-types):
  
   - To initiate the transfer on the EVM network, deposit the desired amount of the target token into the `MultiVault` contract on the EVM network. Please note that if the token is an [Alien token](./Concepts/TokenTypes.md#Alien-tokens) (e.g., DAI, USDT, WBTC, etc.), the token owner must approve the `MultiVault` contract before making the deposit. For detailed instructions, refer to the guide on [Approving Alien Tokens](./Concepts/Operations.md#approving-Alien-tokens). 
   
   - Once the deposit is complete, the `MultiVault` contract will handle the burning or locking of the token based on its [type](./Concepts/TokenTypes.md). Native tokens will be burned while Alien tokens will be locked. 
 
2. Emitting Events: 
  
   - During this process, two events will be emitted, the `Deposit` event and either the `AlienTransfer` or `NativeTransfer` event, depending on the token type.
  
   Transactions and logs examples can be found below:


    ::: details 
    <div class="EventsLogs">

      - Deposit Event [Example Transaction](https://bscscan.com/tx/0x4d41b3ff4319f1a80ac037e2d856cba36043c9c87425fe982c68fa27b1d2e5ec)
      - Deposit Event Example Log
      <ImgContainer src= './public/Deposit.png' width="100%" altText="DepositEventLog" />

      - AlienTransfer Event [Example Transaction](https://bscscan.com/tx/0xa2fc51d0f27f95f58cc425d2c9211d4d067a6b60396e28ffc9ecbf92678d1e6d)
      - AlienTransfer Event Example Log
      <ImgContainer src= './public/AlienTransfer.png' width="100%" altText="AlienTransferEventLog" />

      - NativeTransfer Event [Example Transaction](https://bscscan.com/tx/0x4d41b3ff4319f1a80ac037e2d856cba36043c9c87425fe982c68fa27b1d2e5ec)
      - NativeTransfer Event Example Log
      <ImgContainer src= './public/NativeTransfer.png' width="100%" altText="NativeTransferEventLog" />
    </div>
    :::
 
3. Deploying and Confirming the Event Contract: 
   
   - After the events are emitted by the `MultiVault` contract, it is necessary to deploy an event contract on the Everscale network. 
   
   - Relayers will then vote on the event contract to confirm the deposit on the EVM network, it will take `blocksToConfirm` blocks for relayers to confirm the event contract.
    
   - Methods for deploying the Event contract: 
  
   #### 3.1 Paying Everscale Operations Gas Fees with EVM Gas Tokens: 

      - If Everscale [operations](./Concepts/Operations.md#everscale-operations) gas fees are paid with EVM gas tokens, the user must attach enough gas tokens to the transaction. The [Credit Modules](./Concepts/CreditModules.md) will deploy the event contract on Everscale. Afterward, tokens will be automatically minted or released on Everscale. To perform this operation, besides attaching sufficient EVM gas tokens to the transaction, the [expected_evers](./Concepts/Operations.md#event-contract-deploy-value-expected_evers) parameter must be set to a [certain amount](./FAQ.md#how-to-set-expected_evers). 
 
   3.2 Paying Everscale Operations Gas Fees with EVER: 

      - If Everscale operations gas fees are paid with EVER, the user can proceed without attaching enough EVM gas tokens and set expected_evers to zero. At this point, the user needs to manually deploy the event contract by calling the `deployEvent` function on the `EthereumEverscaleEventConfiguration` contract. This will deploy an Event contract, and after exceeding the quorum confirm votes by relayers, the token will be released if it's a Native token and minted if it's an Alien token. 

4. At this point the tokens must be deposited to the recipient Ever wallet.

::: tip
`blocksToConfirm` value can be fetched from the relevant event config contract
:::

## Step-by-Step Guide: EVM to Ever Transfer

## Alien & Native Token Transfer


1. If the the target token was an Alien or a Native token we must use the `deposit` function on `MultiVault` contract,
  but if the token was an Alien token, we must approve `MultiVault` for the desired token amount before depositing the tokens.\
  Once approved deposit function can be called.

  Notice that if the token was a Native token the approval is not needed.

### Function

  ```solidity
  function deposit(depositParams memory d) external payable override;
  ```

  ::: details

  ### Parameters

  ```solidity
  struct DepositParams {
      IEverscale.EverscaleAddress recipient;
      address token;
      uint amount;
      uint expected_Evers;
      bytes payload;
  }
  ```

  | Param          | Description                                                                               |
  | -------------- | ----------------------------------------------------------------------------------------- |
  | recipient      | Ever address of recipient                                                                 |
  | token          | Target token                                                                              |
  | amount         | Amount of the target token                                                                |
  | expected_Evers | See [expected_Evers](./Concepts/Operations.md#event-contract-deploy-value-expected_Evers) |
  | payload        | Operational payload, see [payloads](./Concepts/Payloads.md#payloads)                      |


  ### Example Transaction
  - [Alien token - EVM transaction - Auto mint on Everscale](https://bscscan.com/tx/0x7eda3d5ccf603d629611dccc43d922e748be72385501f48a56f4f47cb0a0bbac)
  - [Alien token - EVM transaction - Manual mint on Everscale](https://bscscan.com/tx/0x5232ef4c820275f9d2e92a85b821842b059a9b67c20215e6118adeffd651b731)
  - [Native token - EVM transaction - Auto release on Everscale](https://bscscan.com/tx/0x8756f1bc2fc69136c83f5574fd0ae711d2090b677d4bf7cd4afbdad8caedf4f4)
  - [Native token - EVM transaction - Manual release on Everscale](https://bscscan.com/tx/0xbca02dd8705d9a0463820bf5fafb190b3554b35517bcc4c7c9caab97f5daf9c7)
  
  :::


- - -

 1. Now it's time to deploy the event contract which can be accomplished through two ways:

- 2.1: See [Overview of Ever to EVM transfer mechanics: 3.1](#overview-of-evm-to-ever-transfer-mechanics).

- 2.2: Deploy event contract manually by calling `deployEvent` function on `EthereumEverscaleEventConfiguration` contract:

### Function

```solidity
function deployEvent(IEthereumEverscaleEvent.EthereumEverscaleEventVoteData eventVoteData) external override;
```

::: details

### Parameters

```solidity
struct EthereumEverscaleEventVoteData {
    uint eventTransaction;
    uint32 eventIndex;
    TvmCell eventData;
    uint32 eventBlockNumber;
    uint eventBlock;
}
```

The previous deposit functions emit `AlienTransfer` or `NativeTransfer` events. The following parameters can be fetched and prepared from the emitted event data and its root transaction. see [Deploy Events](../src/codeSamples/md/EvmToEver/DeployEvents/Toc.md).

| Param            | Description           |
| ---------------- | --------------------- |
| eventTransaction | EventTransaction Hash |
| eventIndex       | EventIndex            |
| eventData        | EventData             |
| eventBlockNumber | EventBlockNumber      |
| eventBlock       | EventBlock Hash       |

Instructions on how to get these values can be found in [deploy Events](../.../../src/codeSamples/md/EvmToEver/DeployEvents/Toc.md)

### Example Transactions
- [Deploy Event - Alien token](https://everscan.io/transactions/be0203cd95bd0e36b17d4ea2db6173b7a3bc73c036f666110569d924ba8556a5)
- [Deploy Event - Native token](https://everscan.io/transactions/5b8a1feac42ea2da8b4ae860566aecf53f8c8341ae2b2fa7fa128628917a09c9)
:::


---
## EVM Gas Token Transfer

 1. If target token was the EVM network gas token, we must use `depositByNativeToken` function on the `MultiVault` contract and attach the desired amount of the gas token equal to the amount value parameter of the function call to the transaction:

  > NOTE : In the `MultiVault` contract the EVM gas token will be converted to its wrapped version and become an ERC20 token, then rest of the operation will be resumed.

### Function

```solidity
function depositByNativeToken(DepositNativeTokenParams memory d) external payable override;
```

::: details

### Parameters

```solidity
struct DepositNativeTokenParams {
    IEverscale.EverscaleAddress recipient;
    uint amount;
    uint expected_Evers;
    bytes payload;
}
```

| Param          | Description                                                                               |
| -------------- | ----------------------------------------------------------------------------------------- |
| recipient      | Ever address of recipient                                                                 |
| amount         | Amount of the EVM gas token                                                               |
| expected_Evers | See [expected_Evers](./Concepts/Operations.md#event-contract-deploy-value-expected_Evers) |
| payload        | Operational payload, see [payloads](./Concepts/Payloads.md#payloads)                      |

### Example Transactions
- [EVM gas token EVM transaction - Auto mint on Everscale](https://bscscan.com/tx/0xf5c09c459d03a0e15536019b27f6156eb913aa660c16c6fb77d87e9950f8eb34)
- [EVM gas token EVM transaction - Manual mint on Everscale](https://bscscan.com/tx/0xf7de0756932b32624323054a9e878f23a953cd76461a17d7933622b217c9b90f)
:::

---

::: warning
Next step is only necessary if Everscale operations fees are paid with Ever
:::


2. Now it's time to deploy the event contract which can be accomplished through two ways:

- 2.1: See [Overview of Ever to EVM transfer mechanics: 3.1](#overview-of-evm-to-ever-transfer-mechanics).

- 2.2: Deploy event contract manually by calling `deployEvent` function on `EthereumEverscaleEventConfiguration` contract:

### Function

```solidity
function deployEvent(IEthereumEverscaleEvent.EthereumEverscaleEventVoteData eventVoteData) external override;
```

::: details

### Parameters

- 2.2.1

```solidity
struct EthereumEverscaleEventVoteData {
    uint eventTransaction;
    uint32 eventIndex;
    TvmCell eventData;
    uint32 eventBlockNumber;
    uint eventBlock;
}
```

The previous deposit functions emit `AlienTransfer` or `NativeTransfer` events. The following parameters can be fetched and prepared from the emitted event data and its root transaction. see [Deploy Events](../src/codeSamples/md/EvmToEver/DeployEvents/Toc.md).

| Param            | Description           |
| ---------------- | --------------------- |
| eventTransaction | EventTransaction Hash |
| eventIndex       | EventIndex            |
| eventData        | EventData             |
| eventBlockNumber | EventBlockNumber      |
| eventBlock       | EventBlock Hash       |

Instructions on how to get these values can be found in [deploy Events](../.../../src/codeSamples/md/EvmToEver/DeployEvents/Toc.md)

### Example Transactions
- [Deploy Event - EVM gas token](https://everscan.io/transactions/b0a40b2c4371d9435277de4b50e3c8ce6cde7f788e66f4a82d9d32f91d1bf076)
:::


---

> Interactive code samples related to examples above can be found [here](../src/codeSamples/md/EvmToEver/workFlow.md)

> The addresses of all the referenced contracts and tokens can be found at [Links](./addresses.md).


<script lang="ts" >
import { defineComponent, ref, onMounted } from "vue";
import ImgContainer from "../.vitepress/theme/components/shared/BKDImgContainer.vue"

export default defineComponent({
  name: "EventsLogss",
  components :{
    ImgContainer
  },
  setup() {
    return {
    };
  },
});

</script>