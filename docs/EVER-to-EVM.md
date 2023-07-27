# Overview of Ever to EVM Transfer Mechanics 

1. Locking or Burning the Target Tokens Based on Their [Type](./Concepts/TokenTypes.md#token-types):
   - If the target token is a Native token, it will be locked on Everscale. 
   - If it is an Alien token, it will be burned. 

2. Event Contract Deployment and Confirmation: 
   - The event contract is deployed on Everscale through a previous transaction. 
   - After a few seconds relayers confirm the event contract by voting on it. 

3. Releasing or Minting Tokens on the EVM Network: 

   3.1 Paying Gas Fees in EVM Network with EVER: 

    In this case, the process of token release or minting on the EVM network is automated.
      - The [Credit Modules](./Concepts/CreditModules.md#Credit-Modules) will call the relevant function on the MultiVault contract,
      After that MultiVault contract handles minting or releasing the token based on its type.

   3.2 Paying Gas Fees in EVM Network with the [EVM Gas Token](./Concepts/TokenTypes.md#evm-gas-tokens):

    In this case, the process of token release or minting on the EVM network is done manually.
    - For Native tokens, call the `saveWithdrawNative` function to mint tokens. 
    - For Alien tokens, call the `saveWithdrawAlien` function to release tokens. 
    - 
    ::: tip
    Note that these functions must be called on the `MultiVault` contract. 
    :::
    
4. At this point the desired amount of target token must be deposited to the recipient EVM address.

## Step-by-Step Guide: Ever to EVM Transfer

## Native Coin transfer

- 1 - Call the `wrap` function on the `WEVERVault` contract and mint WEVER tokens :

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

| Param  | Description         |
| ------ | ------------------- |
| tokens | Amount of the token |
| owner_address | Compounder address|
| gas_back_address | Address to send the change back |
| payload | Operational payload, see [wrap payload](./Concepts/Payloads.md#transfer-Ever--wrap-payload). |

> NOTE : gas_back_address will be the user's address if the EVM network fees are paid with its gas token and will be EventCloser if it is paid with Ever.

:::

---

::: warning
The next step is only necessary if EVM network fees is paid with its gas token.
:::

---

- 2 - Mint `WEVER` tokens in the EVM network by calling the `saveWithdrawNative` function on the `MultiVault` contract :

### Function

```solidity
    function saveWithdrawNative(
        bytes memory payload,
        bytes[] memory signatures
    ) external;
```

::: details

### Parameters

| Param   | Description                        |
| ------- | ---------------------------------- |
| payload | Operational payload, see [payload](./Concepts/Payloads.md#payload-for-savewithdrawAlien-and-savewithdrawNative).|
| signatures | Relayers signatures see [signatures](./Concepts/Payloads.md#payload-for-savewithdrawAlien-and-savewithdrawNative). |

:::

---

## Native Token Transfer

> `BRIDGE` is used in this example.

1 - Transfer the tokens to the `ProxyMultiVaultNativeV-4`'s `TokenWallet` contract by calling the `transfer` function on your `TokenWallet` contract :

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

| Param             | Description                                                                                                 |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| amount            | Amount of the token                                                                                         |
| recipient         | Recipient address which is proxyMultivaultNativeV_4 address       |
| deployWalletValue | Token Wallet deploy value if not deployed before                                                            |
| remainingGasTo    | Address to send the change back                                                                                      |
| notify            | Notify receiver on incoming transfer                                                                        |
| payload           | Operational payload, see [transfer payload](./Concepts/Payloads.md#transfer-Native-token--transer-payload). |

> NOTE : remainingGasTo will be the user's address if the EVM network fees are paid with its gas token and will be EventCloser if it is paid with Ever.

:::

---

::: warning
The next step is only necessary if EVM network fees is paid with its gas token.
:::

---

- 2 - Mint the tokens in the EVM network by calling the `saveWithdrawNative` function on the `MultiVault` contract:

### Function

```solidity
    function saveWithdrawNative(
        bytes memory payload,
        bytes[] memory signatures
    ) external;
```

::: details

### Parameters

| Param      | Description                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| payload    | Operational payload, see [payload](./Concepts/Payloads.md#payload-for-savewithdrawAlien-and-savewithdrawNative).   |
| signatures | Relayers signatures see [signatures](./Concepts/Payloads.md#payload-for-savewithdrawAlien-and-savewithdrawNative). |

:::

---

## Alien Token Transfer

> `USDT` is used in this example.

1 - Burn the tokens on Everscale network by calling the `burn` function on your `tokenWallet` contract :

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

| Param          | Description                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| amount         | Amount of the target token token                                                                          |
| callBackTo     | Callback Receiver contract which is MergePoolV_4 in this case |
| remainingGasTo | Address to send the change back                                                                                    |
| payload        | Operational payload, see [burn payload](./Concepts/Payloads.md#transfer-Alien-token--burn-payload).       |

> NOTE : remainingGasTo will be the user's address if the EVM network fees are paid with its gas token and will be EventCloser if it is paid with Ever.


:::

---

::: warning
The next step is only necessary if EVM network fees is paid with its gas token.
:::

---

- 2 - Release the tokens in the EVM network by calling the `saveWithdrawAlien` function on the `MultiVault` contract:

### Function

```solidity
    function saveWithdrawAlien(
        bytes memory payload,
        bytes[] memory signatures
    ) external;
```

::: details

### Parameters

| Param      | Description                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| payload    | Operational payload, see [payload](./Concepts/Payloads.md#payload-for-savewithdrawAlien-and-savewithdrawNative).   |
| signatures | Relayers signatures see [signatures](./Concepts/Payloads.md#payload-for-savewithdrawAlien-and-savewithdrawNative). |

:::

---

## EVM Gas Token Transfer

> `WBNB` is used in this example.

1 - Burn the tokens on Everscale network by calling the `burn` function on your `tokenWallet` contract :

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

| Param          | Description                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| amount         | Amount of the token                                                                                         |
| callBackTo     | Callback Receiver contract.ProxyMultiVaultAlienV_7 in this case |
| remainingGasTo | Address to send the change back                                                                                      |
| payload        | Operational payload, see [burn payload](./Concepts/Payloads.md#transfer-Alien-token--burn-payload).         |

> NOTE : remainingGasTo will be the user's address if the EVM network fees are paid with its gas token and will be EventCloser if it is paid with Ever.

:::

---

::: warning
The next step is only necessary if EVM network fees is paid with its gas token.
:::

---

- 2 - Release the tokens in EVM network by calling the `saveWithdrawAlien` function on the `MultiVault` contract:

### Function

```solidity
    function saveWithdrawAlien(
        bytes memory payload,
        bytes[] memory signatures
    ) external;
```

::: details

### Parameters

| Param      | Description                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| payload    | Operational payload, see [payload](./Concepts/Payloads.md#payload-for-savewithdrawAlien-and-savewithdrawNative).   |
| signatures | Relayers signatures see [signatures](./Concepts/Payloads.md#payload-for-savewithdrawAlien-and-savewithdrawNative). |

:::

---

> Interactive code samples related to examples above can be found [here](../src/codeSamples/md/EverToEvm/workFlow.md)

> The addresses of all the referenced contracts and tokens can be found at [Links](./addresses.md).