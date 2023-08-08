# Overview of Ever to EVM Transfer Mechanics 

1. Locking or Burning the Target Tokens Based on Their [Type](./Concepts/TokenTypes.md#token-types):
   - If the target token is a Native token, it will be locked on Everscale. 
   - If it is an Alien token, it will be burned. 

2. Event Contract Deployment and Confirmation: 
   - The event contract is deployed on Everscale through a previous transaction. 
   - After a few seconds, relayers confirm the event contract by voting on it. 

3. Releasing or Minting Tokens on the EVM Network: 

   3.1 Paying Gas Fees for an EVM Network with EVER: 

    In this case, the process of token release or minting on the EVM network is automated.
      - The [Credit Modules](./Concepts/CreditModules.md#Credit-Modules) will call the relevant function on the MultiVault contract.
      After that the MultiVault contract handles the minting or releasing the token based on its type.

   3.2 Paying Gas Fees for an EVM Network with an [EVM Gas Token](./Concepts/TokenTypes.md#evm-gas-tokens):

    In this case, the process of token release or minting on the EVM network is done manually.
    - For Native tokens, call the `saveWithdrawNative` function to mint tokens. 
    - For Alien tokens, call the `saveWithdrawAlien` function to release tokens. 
    “Locking or Burning Target Tokens Based on Their Type:
    
    ::: tip
    Note that these functions must be called on the `MultiVault` contract. 
    :::
    
4. At this point, the desired amount of target tokens must be deposited to the recipient EVM address.

## Step-by-Step Guide: Ever to EVM Transfer

## Native Coin transfer

  <ImgContainer src= '/EverEVMNativeCoin.png' width="100%" altText="EverEVMNativeCoin" />
<br/>

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

### Example Transactions

- [Everscale transaction - Auto mint on EVM](https://everscan.io/transactions/71ae5978b9257fa4af27ca451cfa66c2fe55efcb8e8391e4a2006a76fb5616aa)   

- [Everscale transaction - Manual mint on EVM](https://everscan.io/transactions/0f3ea0439cddb3a4814f15ed2091c93a72e236338d75d33fa94fae4e8e8cb66f)

:::

---

::: warning
The next step is only necessary if EVM network fees are paid with its gas token.
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

### Example Transactions

- [EVM transaction - Manual mint on EVM](https://bscscan.com/tx/0xe1655727b752d553a90dd1b352b0c721b4518dab35a572a3d00b547a039eb52c)

:::

---

## Native Token Transfer 

  <ImgContainer src= '/EverEVMNativeToken.png' width="100%" altText="EverEVMNativeToken" />
<br/>

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

### Example Transactions

- [Everscale transaction - Auto mint on EVM](https://everscan.io/transactions/2edae42cda0943436455e1b4e81b462e4e6fb552244a4a53363efcb5c5ed48e1)   

- [Everscale transaction - Manual mint on EVM](https://everscan.io/transactions/f7c568ae0baf7547721be36d947a4df243b3f6b45810b50f724e1721665e80dd)

:::

---

::: warning
The next step is only necessary if EVM network fees are paid with its gas token.
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

### Example Transactions

- [EVM transaction - Manual mint on EVM](https://bscscan.com/tx/0x4358963d03cd66ac79b247b7b08bdce48a986566dc6f7f7193e9a1867840037f)

:::

---

## Alien Token Transfer 

  <ImgContainer src= '/EverEVMAlienToken.png' width="100%" altText="EverEVMAlienToken" />
<br/>
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

### Example Transactions

- [Everscale transaction - Auto release on EVM](https://everscan.io/transactions/afd6506185c95b20bbff62c8da0d54178ea0785ca3a13e1672e831407eef1820)   

- [Everscale transaction - Manual release on EVM](https://everscan.io/transactions/54a9adf2d0960416cbc13df34e02b760828b15a2a32770631b0828a1782e2585)

:::

---

::: warning
The next step is only necessary if EVM network fees are paid with its gas token.
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

### Example Transactions

- [EVM transaction - Manual release on EVM](https://bscscan.com/tx/0xa5d3b0c8d14b7dae3f8ea5fc5b18224a57fda1ae3567ff9e89f851a6eff1cace)

:::

---

## EVM Gas Token Transfer

  <ImgContainer src= '/EverEVMAlienToken.png' width="100%" altText="EverEVMGasToken" />
<br/>

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

### Example Transactions

- [Everscale transaction - Manual release on EVM](https://everscan.io/transactions/27030361242c3193a771c324aa94109d80212af30322b45909a88690ca36f527)
:::

---

::: warning
The next step is only necessary if EVM network fees are paid with its gas token.
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

### Example Transactions

- [EVM transaction - Manual release on EVM](https://bscscan.com/tx/0x932e95423c37693608e9b6e52c56693c3c8931fc026278f581313660fda4a561)
:::

---

> Interactive code samples related to examples above can be found [here](../src/codeSamples/md/EverToEvm/workFlow.md)

> The addresses of all the referenced contracts and tokens can be found at [Links](./addresses.md).

<script lang="ts" >
import { defineComponent, ref, onMounted } from "vue";
import ImgContainer from "../.vitepress/theme/components/shared/BKDImgContainer.vue"

export default defineComponent({
  name: "Diagrams",
  components :{
    ImgContainer
  },
  setup() {
    return {
    };
  },
});

</script>
<style>
  details{
  background-color: var(--vp-c-bg-mute);
  transition: background-color 0.1s;
  padding: 0 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-weight: 600;
  margin-right: 0.5rem;
  cursor : pointer;  
}
</style>