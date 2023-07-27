# Operations

## EVM operations

At the Ever -> EVM direction, The actions on the EVM network are as follows :

- Token Minting: If the token is an native token.

- Token Releasing: If the token is an Alien token.

### Approving Alien Tokens

If the token being transferred from EVM to Everscale is an Alien token, The MultiVault contract must be able to transfer the token to itself, Therefore it is necessary to approve the "MultiVault" contract first. If the transferable token is the EVM gas token, the desired amount of the gas token should be attached to the transaction when calling the deposit function.
::: info
Note that the deposit functions for Alien tokens and EVM gas tokens are not the same !

- `deposit` is utilized when transferring an Alien or native token.
- `depositByNativeToken` is utilized when transferring an EVM gas token.

:::

### Event Contract Deploy Value (expected_evers)

In the EVM to Ever direction, when paying Everscale fees with EVM gas tokens, it is necessary to set a specific value for this parameter. \
User must set it to zero if paying the fees with Ever. \
see [how to set expected_evers](../FAQ.md##how-to-set-expected_evers).

## Everscale operations

In the EVM to Ever direction, The actions on Everscale are as follows:

- Event Deployment : Deploying an event contract referring to the token deposit on the EVM network.
- Token Releasing : If the token is a native token.
- Token Minting : If the token is an Alien token.

## Alien & Native Tokens operational differences in Everscale


 ### Ever -> EVM

- When transferring a native token, it will be locked on Everscale and minted on the EVM network.

- When transferring an Alien token, it will be burnt on Everscale and released on the EVM network.

### EVM -> Ever

- When transferring the EVM gas token, it will be wrapped into an ERC-20 (WETH, WBNB, etc.). Subsequently, it will be locked on the EVM network and minted on Everscale.

- When transferring an Alien token, it will be locked on the EVM network and then minted on Everscale.

- When transferring a native token (WEVER, BRIDGE, and QUBE), it will be burnt on the EVM network and released on the Everscale network.

## Manual Asset releasing

- In the Ever -> EVM direction, if the EVM fees are paid with EVM gas tokens, the target assets need to be manually released or minted. To perform this operation for native tokens, use the  `saveWithdrawNative`  function, and for Alien tokens, use the  `saveWithdrawAlien`  function. 

- In the EVM -> Ever direction, if Everscale fees are paid with Ever, the assets on Everscale need to be manually released or minted by deploying an event contract. For instructions on deploying an event contract, refer to the [Event Contract Deployment](../../src/codeSamples/md/EvmToEver/DeployEvents/Toc.md) guide. 

## Automatic Asset releasing

- In Ever -> EVM direction assets will be released or minted on EVM network by attaching enough Ever and proper [payload](./Payloads.md) to the transaction.

- In EVM -> Ever direction assets will be released or minted on Everscale by attaching enough EVM native coin to tx and setting the expected_Ever to event contract initial balance. see [how to set expected_Evers](../FAQ.md#how-to-set-expected_Evers)

## Directions

Following table contains operations that are done at each network to perform a Cross Chain transfer

| Direction   | What happens on Everscale                 | What happens on EVM                       |
| ----------- | ----------------------------------------- | ----------------------------------------- |
| EVM -> Ever | Release(Native Token) - Mint(Alien Token) | Burn(Native Token) - Lock(Alien Token)    |
| Ever -> EVM | Lock(Native Token) Burn(Alien Token)      | Mint(Native Token) - Release(Alien Token) |
