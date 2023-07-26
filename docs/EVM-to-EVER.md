# EVM To Ever transfer mechanics overview

1.  Deposit desired amount of the target token into the [`MultiVault`](./addresses.md#contractaddresses) contract which is in the EVM network.\
    Note that if the token is an ERC-20 token regardless if it's an native or alien token, such as **DAI**, **USDT**, **WBTC** and others, the token owner must approve the `MultiVault` contract before depositing the token into it. see [approving erc-20 tokens](./Concepts/Operations.md#approving-erc-20-tokens).\
    After it all the `MultiVault` contract will handle burning or locking the token based on it's [type](./Concepts/TokenTypes.md).
    The target token will be burned if its an native token and locked if an alien token.

2.  Through the previous operation, two events will be emitted. one of them is always `Deposit` and another one depended on the token type is either `AlienTransfer` or `NativeTransfer`.

3.  Once the relevant events are emitted by `MultiVault` contract, it's time for deploying an event Contract on the Everscale network.\
     Relayers will vote on event contract and confirm the deposit in EVM network.\
     Deploying the event contract can be done through two methods:

    - #### 3.1

      If Everscale [operations](./Concepts/Operations.md#Ever-network-operations) gas fees are payed with the EVM gas tokens, user must attach enough gas tokens to the transaction, the [credit Modules](./Concepts/CreditModules.md) will equalizes balances on both sides and deploys the event contract on Everscale and after that tokens will be minted or released on Everscale automatically.
      In order to perform such a operation, besides attaching sufficient EVM gas tokens to transaction, [expected_evers](./Concepts/Operations.md#event-contract-deploy-value-expected_Evers) parameter must be set to a [certain amount](FAQ.md#how-to-set-expected_Evers).

    - 3.2

      If Everscale [operations](./Concepts/Operations.md#Ever-network-operations) gas fees are payed Ever, which is operable by not attaching enough EVM gas tokens and setting expected_evers to zero, it's time for the user to deploy the event contract manually. Such an operation can be done with calling the `deployEvent` on function `EthereumEverscaleEventConfiguration` contract which deploys an event contract and after exceeding the quorum confirm votes by relayers, the token will be released if its native token and minted if alien token.

4. At this point the tokens must be deposited to the recipient ever wallet.

> NOTICE : All of the referenced contracts addresses can be found at [addresses](./addresses.md).

## Step-by-Step Guide: EVM to Ever transfer

## Alien Token transfer

1. Deposit the desired amount of target token to `MultiVault` contract, which has two ways:

### Function

- 1.1: If target token was an ERC-20 token we must use the `deposit` function on `MultiVault` contract,
  but before that we must approve [MultiVault](./addresses.md#EVM-smart-contracts) for desired token amount, once approved deposit function can be called.\

  > Notice if the token is an native token approval is not needed

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

  | param          | description                                                                               |
  | -------------- | ----------------------------------------------------------------------------------------- |
  | recipient      | Ever address of recipient                                                                 |
  | token          | target token                                                                              |
  | amount         | amount of the target token                                                                |
  | expected_Evers | see [expected_Evers](./Concepts/Operations.md#event-contract-deploy-value-expected_Evers) |
  | payload        | operational payload, see [payloads](./Concepts/Payloads.md#payloads)                      |

  :::

## EVM Gas Token transfer

- 1.2: If target token was the EVM network gas token, we must use `depositByNativeToken` on `MultiVault` contract and attach the desired amount of the gas token equal to the amount value parameter to transaction:

  > NOTE : In `MultiVault` the EVM gas token will be converted to its wrapped version and become a erc-20, Then rest of the operation will be resumed.

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

| param          | description                                                                               |
| -------------- | ----------------------------------------------------------------------------------------- |
| recipient      | Ever address of recipient                                                                 |
| amount         | amount of the EVM gas token                                                               |
| expected_Evers | see [expected_Evers](./Concepts/Operations.md#event-contract-deploy-value-expected_Evers) |
| payload        | operational payload, see [payloads](./Concepts/Payloads.md#payloads)                      |

:::

---

::: warning
Next step is only necessary if paying Everscale operations fees with Ever
:::

## Deploy Events

2. Now it's time to deploy the event contract which has two ways:

- 2.1: See [EVM to Ever Transfer Mechanics Overview : 3.1](#_3-1).

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

The previous deposit functions emit `AlienTransfer` or `NativeTransfer` events. following parameters can be fetched and prepared from event data and its root tx. see [Deploy Events](../src/codeSamples/md/EVMToEver/DeployEvents/Toc.md).

| param            | description           |
| ---------------- | --------------------- |
| eventTransaction | eventTransaction Hash |
| eventIndex       | eventIndex            |
| eventData        | eventData             |
| eventBlockNumber | eventBlockNumber      |
| eventBlock       | eventBlock Hash       |

instructions on how to get these values can be found in [deploy Events](../.../../src/codeSamples/md/EVMToEver/DeployEvents/Toc.md)
:::

3. After this step tokens must be deposited to recipient EverWallet.

---

> Interactive code samples related to examples above can be found [here](../src/codeSamples/md/EVMToEver/workFlow.md)
