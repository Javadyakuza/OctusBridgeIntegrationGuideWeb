# Ever to Evm Transfer Mechanics Overview

1 - Locking the target token in Everscale if native token and burning it if alien token. see [token types](./Concepts/TokenTypes.md#token-types).

2 - Through previous transaction the event contract is deployed on Everscale and after few second the relayers will confirm it by voting on the event contract.

3.1 : If paying the [operations](./Concepts/Operations.md#Evm-operations) gas fees in Evm network with Ever, the [Credit Modules](./Concepts/CreditModules.md#Credit-Modules) will equalizes balances on both sides and calls the related function on the MultiVault contract, and then MultiVault contract handles minting or releasing the token based on its type. \
Note that the native token will be released as its wrapped version.

3.2 : If paying the [operations](./Concepts/Operations.md#Evm-operations) gas fees in Evm network with is gas tokens, its time to mint the tokens if they are native tokens by calling `saveWithdrawNative` or release them by calling `saveWithdrawAlien` on `MultiVault` contract.

4 - At this point desired amount of target token must be deposited to recipient Evm address.

> NOTICE : All of the referenced contracts addresses can be found at [addresses.md](./addresses.md).

## Step-by-Step Guide: Ever to EVM Transfer

## Transferring Native Coin

- 1 - Call the `wrap` method on the [`WEVERVault`](./addresses.md#Everscale-smart-contracts) contract and mint WEVER token :

### Function

```solidity
    function wrap(
        uint128 tokens,
        address owner_address,
        address gas_back_address,
        TvmCell payload
    ) external;
```

### Parameters

| param            | description                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------- |
| tokens           | amount of the target transferable token                                                      |
| owner_address    | [Compounder](./addresses.md#Everscale-smart-contracts)                                       |
| gas_back_address | addresses to send the change back                                                            |
| payload          | operational payload, see [wrap payload](./Concepts/Payloads.md#transfer-Ever--wrap-payload). |

> NOTE : gas_back_address will be user's address if we were paying the Evm network [operations](./Concepts/Operations.md#Evm-operations) gas fees with its gas token and will be [EventCloser](./addresses.md#Everscale-smart-contracts) if paying with Ever.

---

#### :exclamation: Next step is only necessary if paying Evm network fess with it gas token

---

- 2 - Mint `WEVER` in the Evm network by calling the `saveWithdrawNative` :

### Function

```solidity
    function saveWithdrawNative(
        bytes memory payload,
        bytes[] memory signatures
    ) external;
```

### Parameters

| param      | description                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| payload    | operational payload, see [payload](./Concepts/Payloads.md#payload-for-savewithdrawalien-and-savewithdrawnative).   |
| signatures | relayers signatures see [signatures](./Concepts/Payloads.md#payload-for-savewithdrawalien-and-savewithdrawnative). |

---

## Transferring [Native Token](./Concepts/TokenTypes.md#native-tokens)

> `BRIDGE` is used in this example.

1 - Lock the the target token to `ProxyMultiVaultNative`'s `TokenWallet` contract by calling the `transfer` function on our `TokenWallet` contract :

### Function

```solidity
    function transfer(
        uint128 amount,
        address recipient,
        uint128 deployWalletValue,
        address remainingGasTo,
        bool notify,
        TvmCell payload
    ) external;
```

### Parameters

| param             | description                                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| amount            | amount of the target transferable token                                                                      |
| recipient         | recipient address which is [proxyMultivaultNativeV_4](./addresses.md#Everscale-smart-contracts)              |
| deployWalletValue | Token Wallet deploy value if not deployed before                                                             |
| remainingGasTo    | Remaining gas receiver                                                                                       |
| notify            | Notify receiver on incoming transfer                                                                         |
| payload           | Notification payload, see [transfer payload](./Concepts/Payloads.md#transfer-native-token--transer-payload). |

> NOTE : remainingGasTo will be user's address if we were paying the Evm network [operations](./Concepts/Operations.md#Evm-operations) gas fees with its gas token and will be [EventCloser](./addresses.md#Everscale-smart-contracts) if paying with Ever.

---

#### :exclamation: Next step is only necessary if paying Evm network fess with it gas token

---

- 2 - Mint `BRIDGE` in the Evm network by calling the `saveWithdrawNative` :

### Function

```solidity
    function saveWithdrawNative(
        bytes memory payload,
        bytes[] memory signatures
    ) external;
```

### Parameters

| param      | description                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| payload    | operational payload, see [payload](./Concepts/Payloads.md#payload-for-savewithdrawalien-and-savewithdrawnative).   |
| signatures | relayers signatures see [signatures](./Concepts/Payloads.md#payload-for-savewithdrawalien-and-savewithdrawnative). |

---

## Transferring Alien Token

> `USDT` is used in this example.

1 - Burn the token on Everscale network by calling the `burn` function on our `tokenWallet` contract :

### Function

```solidity
    function burn(
        uint128 amount,
        address remainingGasTo,
        address callbackTo,
        TvmCell payload
    ) external;
```

### Parameters

| param          | description                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------- |
| amount         | amount of the target token token                                                                    |
| callBackTo     | callback Receiver contract.[MergePoolV_4](./addresses.md#Everscale-smart-contracts) in this case    |
| remainingGasTo | Remaining gas receiver                                                                              |
| payload        | operational payload, see [burn payload](./Concepts/Payloads.md#transfer-alien-token--burn-payload). |

> NOTE : remainingGasTo will be user's address if we were paying the Evm network [operations](./Concepts/Operations.md#Evm-operations) gas fees with its gas token and will be [EventCloser](./addresses.md#Everscale-smart-contracts) if paying with Ever.

---

#### :exclamation: Next step is only necessary if paying Evm network fess with it gas token

---

- 2 - Release `USDT` in the Evm network by calling the `saveWithdrawAlien` :

### Function

```solidity
    function saveWithdrawAlien(
        bytes memory payload,
        bytes[] memory signatures
    ) external;
```

### Parameters

| param      | description                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| payload    | operational payload, see [payload](./Concepts/Payloads.md#payload-for-savewithdrawalien-and-savewithdrawnative).   |
| signatures | relayers signatures see [signatures](./Concepts/Payloads.md#payload-for-savewithdrawalien-and-savewithdrawnative). |

---

## Transferring Alien Token

> `WBNB` is used in this example.

1 - Burn the token on Everscale network by calling the `burn` function on our `tokenWallet` contract :

### Function

```solidity
    function burn(
        uint128 amount,
        address remainingGasTo,
        address callbackTo,
        TvmCell payload
    ) external;
```

### Parameters

| param          | description                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| amount         | amount of the target transferable token                                                                     |
| callBackTo     | callback Receiver contract.[ProxyMultiVaultAlienV_7](./addresses.md#Everscale-smart-contracts) in this case |
| remainingGasTo | Remaining gas receiver                                                                                      |
| payload        | operational payload, see [burn payload](./Concepts/Payloads.md#transfer-alien-token--burn-payload).         |

> NOTE : remainingGasTo will be user's address if we were paying the Evm network [operations](./Concepts/Operations.md#Evm-operations) gas fees with its gas token and will be [EventCloser](./addresses.md#Everscale-smart-contracts) if paying with Ever.

---

#### :exclamation: Next step is only necessary if paying Evm network fess with it gas token

---

- 2 - Release `BNB` in Evm network by calling the `saveWithdrawAlien` :

### Function

```solidity
    function saveWithdrawAlien(
        bytes memory payload,
        bytes[] memory signatures
    ) external;
```

### Parameters

| param      | description                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| payload    | operational payload, see [payload](./Concepts/Payloads.md#payload-for-savewithdrawalien-and-savewithdrawnative).   |
| signatures | relayers signatures see [signatures](./Concepts/Payloads.md#payload-for-savewithdrawalien-and-savewithdrawnative). |

---

> All of the scripts related to examples above can be found [here](../src/webInteraction/md/EverToEvm/workFlow.md)
