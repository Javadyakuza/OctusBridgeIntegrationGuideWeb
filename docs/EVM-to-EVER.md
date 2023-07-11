# Evm to Ever Transfer Mechanics Overview

1. Deposit desired amount of the target token that is going to be transferred to the Everscale in a contract named [`MultiVault`](./addresses.md#contractaddresses) which is in the Evm network.

2. Through the previous operation, two events will be emitted. one of them is always `Deposit` and another one depended on the token type is either `AlienTransfer` or `NativeTransfer`.\
   see [alien token approve ](./Concepts/Operations.md#approving-erc-20-tokens).
3. Once depositing the target token to MultiVault is done, it's time for deploying an event Contract on the Everscale network.\
   relayers will vote on event contract and confirm the deposit in Evm network.\
   Now the event contract is confirmed, following steps can be performed based on the situation :

   - 3.1: If Everscale [operations](./Concepts/Operations.md#Ever-network-operations) gas fees are payed with the Evm gas tokens, user must attach enough gas tokens to the transaction, the [credit Modules](./Concepts/CreditModules.md) will equalizes balances on both sides and deploys the event contract on Everscale and after that tokens will be minted or released on Everscale automatically.

   In order to perform such a operation, besides attaching sufficient Evm gas tokens to transaction, [expected_evers](./Concepts/Operations.md#event-contract-deploy-value-expected_Evers) parameter must be set to a [certain amount](FAQ.md#how-to-set-expected_Evers).

   - 3.2: If Everscale [operations](./Concepts/Operations.md#Ever-network-operations) gas fees are payed Ever, which is operable by not attaching enough Evm gas tokens and setting expected_evers to zero, it's time for the user to deploy the event contract manually. Such an operation will be done calling `deployEvent` on `EthereumEverscaleEventConfiguration` which deploys an event contract and after exceeding the quorum confirm votes by relayers, the token will be released if its native Token and minted if alien token.

> NOTICE : All of the referenced contracts addresses can be found at [addresses.md](./addresses.md).

## Step-by-Step Guide: Evm to Ever Transfer

## Transfer Alien token

1. Deposit the desired amount of target token to `MultiVault` contract, which has two ways:

   ### Function

- 1.1: If target token was an ERC-20 token we must use the `deposit` function on `MultiVault` contract,
  but before that we must approve [MultiVault](./addresses.md#Evm-smart-contracts) for desired token amount, once approved deposit function can be called.

  ```solidity
  function deposit(depositParams memory d) external payable override;
  ```

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

## Transfer Evm Gas Tokens

- 1.2: If target token was the Evm network gas token, we must use `depositByNativeToken` on `MultiVault` contract and attach the desired amount of the gas token equal to the amount value parameter to transaction:

  > NOTE : In `MultiVault` the Evm gas token will be converted to its wrapped version and then rest of the operation will be resumed.

### Function

```solidity
function depositByNativeToken(DepositNativeTokenParams memory d) external payable override;
```

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
| amount         | amount of native coin                                                                     |
| expected_Evers | see [expected_Evers](./Concepts/Operations.md#event-contract-deploy-value-expected_Evers) |
| payload        | operational payload, see [payloads](./Concepts/Payloads.md#payloads)                      |

---

#### :exclamation: Next step is only necessary if paying Everscale operations fees with Ever

## Deploy Events

2. Now it's time to deploy the event contract which has two ways:

- 2.1: See {[Evm to Ever Transfer Mechanics Overview : 3.1](#31-if-the-user-at-the-time-of-deposit-accepted-to-pay-the-event-contract-deployment-fee-with-the-origin-Evm-network-native-coin-the-relayers-will-automatically-swap-that-to-Ever-which-is-the-Everscale-native-coin-and-deploy-the-event-contract-themselves)}.

- 2.2: Deploy event contract manually by calling `deployEvent` function on `EthereumEverscaleEventConfiguration` contract:

### Function

```solidity
function deployEvent(IEthereumEverscaleEvent.EthereumEverscaleEventVoteData eventVoteData) external override;
```

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

The previous deposit functions emit `AlienTransfer` or `NativeTransfer` events. following parameters can be fetched and prepared from event data and its root tx. see [Deploy Events](../src/webInteraction/md/EvmToEver/DeployEvents/Toc.md).

| param            | description           |
| ---------------- | --------------------- |
| eventTransaction | eventTransaction Hash |
| eventIndex       | eventIndex            |
| eventData        | eventData             |
| eventBlockNumber | eventBlockNumber      |
| eventBlock       | eventBlock Hash       |

3. After this step tokens must be deposited to recipient EverWallet.

---

> All of the scripts related to examples above can be found [here](../src/webInteraction/md/EvmToEver/workFlow.md)
