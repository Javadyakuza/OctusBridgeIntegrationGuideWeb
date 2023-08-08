# Operations

## EVM Operations

At the Everscale -> EVM direction, the actions on the EVM network are as follows :

- Token Minting: If the token is a Native token.

- Token Releasing: If the token is an Alien token.

### Approving Alien Tokens

If the token being transferred from EVM to Everscale is an Alien token, the MultiVault contract must be able to transfer the token to itself, therefore it is necessary to approve the "MultiVault" contract first. If the transferable token is the EVM gas token, the desired amount of the gas token should be attached to the transaction when calling the deposit function.
::: info
Note that the deposit functions for Alien tokens and EVM gas tokens are not the same!

- `deposit` function is utilized when transferring an Alien or Native token.
- `depositByNativeToken` function is utilized when transferring an EVM gas token.

:::

### Event Contract Deploy Value (expected_evers)

In the EVM -> Everscale direction, when paying Everscale fees with EVM gas tokens, it is necessary to set a specific value for this parameter. \
The user must set it to zero if paying the fees with Ever. \
see [how to set expected_evers](../FAQ.md##how-to-set-expected_evers).

## Everscale Operations

In the EVM -> Everscale direction, The actions on Everscale are as follows:

- Event Deployment : Deploying an event contract referring to the token deposit on the EVM network.
- Token Releasing : If the token is a Native token.
- Token Minting : If the token is an Alien token.

## Alien & Native Token Operational Differences in Everscale


 ### Everscale -> EVM

- When transferring a Native token, it will be locked on Everscale and minted on the EVM network.

- When transferring an Alien token, it will be burnt on Everscale and released on the EVM network.

### EVM -> Everscale 

- When transferring an EVM gas token, it will be wrapped into an ERC-20 (WETH, WBNB, etc.) token. Subsequently, it will be locked on the EVM network and minted on Everscale.

- When transferring an Alien token, it will be locked on the EVM network and then minted on Everscale.

- When transferring a Native token (WEVER, BRIDGE, and QUBE), it will be burnt on the EVM network and released on Everscale.

## Manual Asset Releasing

- In the Everscale -> EVM direction, if the EVM fees are paid with EVM gas tokens, the target assets need to be manually released or minted. To perform this operation for Native tokens, use the  `saveWithdrawNative`  function and for Alien tokens, use the  `saveWithdrawAlien`  function. 

- In the EVM -> Everscale direction, if Everscale fees are paid with Ever, the assets on Everscale need to be manually released or minted by deploying an event contract. For instructions on deploying an event contract, refer to the [Event Contract Deployment](../../src/codeSamples/md/EvmToEver/DeployEvents/Toc.md) guide. 

## Automatic Asset Releasing

- In the Everscale -> EVM direction assets will be released or minted on the EVM network by attaching enough Ever and proper [payload](./Payloads.md) to the transaction.

- In the EVM -> Everscale direction assets will be released or minted on Everscale by attaching enough EVM gas tokens to the transaction and setting the expected_Ever to the event contract's initial balance. see [how to set expected_Evers](../FAQ.md#how-to-set-expected_Evers).

## Directions

The following table contains operations that are done on each network to perform a cross-chain transfer.

| Direction   | What happens on Everscale                 | What happens on EVM                       |
| ----------- | ----------------------------------------- | ----------------------------------------- |
| EVM -> Everscale | Release(Native Token) - Mint(Alien Token) | Burn(Native Token) - Lock(Alien Token)    |
| Everscale -> EVM | Lock(Native Token) Burn(Alien Token)      | Mint(Native Token) - Release(Alien Token) |

> The addresses of all the referenced contracts and tokens can be found at [Links](../addresses.md).
