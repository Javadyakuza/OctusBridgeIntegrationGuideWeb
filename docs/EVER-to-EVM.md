# Ever to Evm Transfer Mechanics Overview

1. Locking or burning the target token based on its type.\
   If the target token is an native token it will be locked on Everscale and if its an alien token it will be burned. see [token types](./Concepts/TokenTypes.md#token-types).

2. Through previous transaction the event contract is deployed on Everscale and after few second the relayers will confirm it by voting on it.

3.

- 3.1

  If paying the [operations](./Concepts/Operations.md#Evm-operations) gas fees in Evm network with Ever, The [Credit Modules](./Concepts/CreditModules.md#Credit-Modules) will equalizes balances on both sides and calls the relevant function on the MultiVault contract.\
   After that MultiVault contract handles minting or releasing the token based on its type.\

- 3.2

  If paying the [operations](./Concepts/Operations.md#Evm-operations) gas fees in Evm network with is [gas tokens](./Concepts/TokenTypes.md#evm-gas-tokens), its time to mint or release the tokens on Evm network based on its type.\
  If the targe token is an native token, calling the `saveWithdrawNative` function will mint tokens and if its an alien token, calling `saveWithdrawAlien` will release the tokens.
  Note that the saveWithdraw functions must be called on `multiVault` contract.

4. At this point desired amount of target token must be deposited to recipient Evm address.

> NOTICE : All of the referenced contracts addresses can be found at [addresses](./addresses.md).

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

::: details

### Parameters

| param  | description         |
| ------ | ------------------- |
| tokens | amount of the token |
| owner_address | [Compounder](./addresses.md#Everscale-smart-contracts) |
| gas_back_address | address to send the change back |
| payload | operational payload, see [wrap payload](./Concepts/Payloads.md#transfer-Ever--wrap-payload). |

> NOTE : gas_back_address will be user's address ie paying the Evm network [operations](./Concepts/Operations.md#Evm-operations) gas fees with its gas token and will be [EventCloser](./addresses.md#Everscale-smart-contracts) if paying with Ever.

:::

---

::: warning
The next step is only necessary if paying Evm network fees with its gas token.
:::

---

- 2 - Mint `WEVER` in the Evm network by calling the `saveWithdrawNative` :

### Function

```solidity
    function saveWithdrawNative(
        bytes memory payload,
        bytes[] memory signatures
    ) external;
```

::: details

### Parameters

| param   | description                        |
| ------- | ---------------------------------- |
| payload | operational payload, see [payload](./Concepts/Payloads.md#payload-for-savewithdrawalien-and-savewithdrawnative).|
| signatures | relayers signatures see [signatures](./Concepts/Payloads.md#payload-for-savewithdrawalien-and-savewithdrawnative). |

:::

---

## Transferring [Native Token](./Concepts/TokenTypes.md#native-tokens)

> `BRIDGE` is used in this example.

1 - Lock the the desired amount of the token in `ProxyMultiVaultNativeV-4`'s `TokenWallet` contract by calling the `transfer` function on our `TokenWallet` contract :

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

::: details

### Parameters

| param             | description                                                                                                 |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| amount            | amount of the token                                                                                         |
| recipient         | recipient address which is [proxyMultivaultNativeV_4](./addresses.md#Everscale-smart-contracts)             |
| deployWalletValue | Token Wallet deploy value if not deployed before                                                            |
| remainingGasTo    | Remaining gas receiver                                                                                      |
| notify            | Notify receiver on incoming transfer                                                                        |
| payload           | operational payload, see [transfer payload](./Concepts/Payloads.md#transfer-native-token--transer-payload). |

> NOTE : remainingGasTo will be user's address if paying the Evm network [operations](./Concepts/Operations.md#Evm-operations) gas fees with its gas token and will be [EventCloser](./addresses.md#Everscale-smart-contracts) if paying with Ever.

:::

---

::: warning
The next step is only necessary if paying Evm network fees with its gas token.
:::

---

- 2 - Mint `BRIDGE` in the Evm network by calling the `saveWithdrawNative` :

### Function

```solidity
    function saveWithdrawNative(
        bytes memory payload,
        bytes[] memory signatures
    ) external;
```

::: details

### Parameters

| param      | description                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| payload    | operational payload, see [payload](./Concepts/Payloads.md#payload-for-savewithdrawalien-and-savewithdrawnative).   |
| signatures | relayers signatures see [signatures](./Concepts/Payloads.md#payload-for-savewithdrawalien-and-savewithdrawnative). |

:::

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

::: details

### Parameters

| param          | description                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| amount         | amount of the target token token                                                                          |
| callBackTo     | callback Receiver contract which is [MergePoolV_4](./addresses.md#Everscale-smart-contracts) in this case |
| remainingGasTo | Remaining gas receiver                                                                                    |
| payload        | operational payload, see [burn payload](./Concepts/Payloads.md#transfer-alien-token--burn-payload).       |

> NOTE : remainingGasTo will be user's address if paying the Evm network [operations](./Concepts/Operations.md#Evm-operations) gas fees with its gas token and will be [EventCloser](./addresses.md#Everscale-smart-contracts) if paying with Ever.

:::

---

::: warning
The next step is only necessary if paying Evm network fees with its gas token.
:::

---

- 2 - Release `USDT` in the Evm network by calling the `saveWithdrawAlien` :

### Function

```solidity
    function saveWithdrawAlien(
        bytes memory payload,
        bytes[] memory signatures
    ) external;
```

::: details

### Parameters

| param      | description                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| payload    | operational payload, see [payload](./Concepts/Payloads.md#payload-for-savewithdrawalien-and-savewithdrawnative).   |
| signatures | relayers signatures see [signatures](./Concepts/Payloads.md#payload-for-savewithdrawalien-and-savewithdrawnative). |

:::

---

## Transferring Evm Gas Token

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

::: details

### Parameters

| param          | description                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| amount         | amount of the token                                                                                         |
| callBackTo     | callback Receiver contract.[ProxyMultiVaultAlienV_7](./addresses.md#Everscale-smart-contracts) in this case |
| remainingGasTo | Remaining gas receiver                                                                                      |
| payload        | operational payload, see [burn payload](./Concepts/Payloads.md#transfer-alien-token--burn-payload).         |

> NOTE : remainingGasTo will be user's address if paying the Evm network [operations](./Concepts/Operations.md#Evm-operations) gas fees with its gas token and will be [EventCloser](./addresses.md#Everscale-smart-contracts) if paying with Ever.

:::

---

::: warning
The next step is only necessary if paying Evm network fees with its gas token.
:::

---

- 2 - Release `BNB` in Evm network by calling the `saveWithdrawAlien` :

### Function

```solidity
    function saveWithdrawAlien(
        bytes memory payload,
        bytes[] memory signatures
    ) external;
```

::: details

### Parameters

| param      | description                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| payload    | operational payload, see [payload](./Concepts/Payloads.md#payload-for-savewithdrawalien-and-savewithdrawnative).   |
| signatures | relayers signatures see [signatures](./Concepts/Payloads.md#payload-for-savewithdrawalien-and-savewithdrawnative). |

:::

---

> Interactive code samples related to examples above can be found [here](../src/codeSamples/md/EverToEvm/workFlow.md)
