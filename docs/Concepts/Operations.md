# Operations

## EVM operations

At the Ever -> EVM direction the operation's on the EVM network are as follows :

- Minting: If the token is an native token.

- Releasing: If the token is an alien token.

### Approving ERC-20 Tokens

If the token being transferred from EVM to Everscale is an ERC-20 token, The MultiVault contract must be able to transfer the token to itself, Therefore it is necessary to approve the "MultiVault" contract first. If the transferable token is the EVM gas token, the desired amount of the gas token should be attached to the transaction when calling the deposit function for EVM gas tokens.
Note that the deposit functions for alien tokens and EVM gas tokens are not the same !

### Event Contract Deploy Value (expected_evers)

In the EVM to Ever direction, if the Everscale fees is payed with the EVM gas tokens, This parameter needs to be set to a certain amount. \
User must set it to zero if paying the fees with Ever. \
see [how to set expected_evers](../FAQ.md##how-to-set-expected_evers)

## Everscale operations

In the EVM to Ever direction, the following operations are performed on Everscale:

- Deploying the event contract referring to the token deposit on the EVM network.
- Releasing tokens if they are native tokens.
- Minting tokens if they are alien tokens.

## Alien & Native Tokens operational differences in Everscale

- Ever -> EVM \
  When transferring an native token, it will be locked on Everscale and minted on EVM network.\
  When transferring an alien token it will be burnt on Everscale and released on EVM network.
- EVM -> Ever \
  When transferring the EVM gas token, it will be wrapped into a ERC-20 (WETH, WBNB and etc), then will be locked on EVM network and minted on Everscale network.\
  When transferring an alien token it will be locked on EVM network and minted on Everscale network.\
  When transferring an native token (WEVER, BRIDGE and QUBE), it will be burnt on EVM network and released on Everscale network.

## Manual Asset releasing

- In the Ever to EVM direction, If the EVM fees is payed with EVM gas tokens, the target assets need to be manually released or minted. Calling saveWithdrawNative will perform this operation for native tokens, while calling saveWithdrawAlien will perform it for alien tokens.

- In the EVM to Ever direction, If Everscale fees are payed with Ever, the assets on Everscale need to be manually released or minted by deploying an event contract. \
  see [Event contract deployment](../../src/codeSamples/md/EVMToEver/DeployEvents/Toc.md).

## Automatic Asset releasing

- In Ever -> EVM direction assets will be released or minted on EVM network by attaching enough Ever and proper [payload](./Payloads.md) to the transaction.

- In EVM -> Ever direction assets will be released or minted on Everscale by attaching enough EVM native coin to tx and setting the expected_Ever to event contract initial balance. see [how to set expected_Evers](../FAQ.md#how-to-set-expected_Evers)

## Directions

Following table contains operations that are done at each network to perform a Cross Chain transfer

| Direction   | What happens on Everscale                 | What happens on EVM                       |
| ----------- | ----------------------------------------- | ----------------------------------------- |
| EVM -> Ever | Release(Native Token) - Mint(Alien Token) | Burn(Native Token) - Lock(Alien Token)    |
| Ever -> EVM | Lock(Native Token) Burn(Alien Token)      | Mint(Native Token) - Release(Alien Token) |
