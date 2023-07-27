# Overview of EVM to Ever Transfer Mechanics 

1. Locking or Burning the Target Tokens: 
  
   - To initiate the transfer on the EVM network, deposit the desired amount of the target token into the `MultiVault` contract on the EVM network. Please note that if the token is an [Alien token](./Concepts/TokenTypes.md#Alien-tokens) (e.g., DAI, USDT, WBTC, etc.), the token owner must approve the `MultiVault` contract before making the deposit. For detailed instructions, refer to the guide on [approving Alien tokens](./Concepts/Operations.md#approving-Alien-tokens). 
   
   - Once the deposit is complete, the `MultiVault` contract will handle the burning or locking of the token based on its [type](./Concepts/TokenTypes.md). Native tokens will be burned while Alien tokens will be locked. 
 
2. Emitting Events: 
  
   - During this process, two events will be emitted: the `Deposit` event and either the `AlienTransfer` or `NativeTransfer` event, depending on the token type. 
 
3. Deploying and Confirming the Event Contract: 
   
   - After the events are emitted by the `MultiVault` contract, it is necessary to deploy an event contract on the Everscale network. 
   
   - Relayers will then vote on the event contract to confirm the deposit on the EVM network. 
   
   - Methods for deploying the Event contract: 
  
   #### 3.1 Paying Everscale Operations Gas Fees with EVM Gas Tokens: 

      - If Everscale [operations](./Concepts/Operations.md#everscale-operations) gas fees are paid with EVM gas tokens, the user must attach enough gas tokens to the transaction. The [Credit Modules](./Concepts/CreditModules.md) will deploy the event contract on Everscale. Afterward, tokens will be automatically minted or released on Everscale. To perform this operation, besides attaching sufficient EVM gas tokens to the transaction, the [expected_evers](./Concepts/Operations.md#event-contract-deploy-value-expected_evers) parameter must be set to a [certain amount](./FAQ.md#how-to-set-expected_evers). 
 
   3.2 Paying Everscale Operations Gas Fees with Ever: 

      - If Everscale operations gas fees are paid with Ever, the user can proceed without attaching enough EVM gas tokens and set expected_evers to zero. At this point, the user needs to manually deploy the event contract by calling the `deployEvent` function on the `EthereumEverscaleEventConfiguration` contract. This will deploy an Event contract, and after exceeding the quorum confirm votes by relayers, the token will be released if it's a Native token and minted if it's an Alien token. 

4. At this point the tokens must be deposited to the recipient Ever wallet.


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

  :::


- - -

 2. Now it's time to deploy the event contract which can be accomplished through two ways:

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

:::

---

::: warning
Next step is only necessary if Everscale operations fees is paid with Ever
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
:::


---

> Interactive code samples related to examples above can be found [here](../src/codeSamples/md/EvmToEver/workFlow.md)

> The addresses of all the referenced contracts and tokens can be found at [Links](./addresses.md).