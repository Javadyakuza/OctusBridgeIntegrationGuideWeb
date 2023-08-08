# Everscale to EVM Transfer Workflow

## Building Payloads

To facilitate the transfer of a token from Everscale to an EVM network, it is necessary to provide payloads that specify the operations to be executed. Once the payloads have been prepared, the token transfer can be carried out.

### Table of Contents

- [Payload for EVER](./buildingPayloads/BuildingPayloads.md#ever-native-coin-payload)
- [Payload for Native token](./buildingPayloads/BuildingPayloads.md#native-token-payload)
- [Payload for Alien Token](./buildingPayloads/BuildingPayloads.md#alien-token-payload)
- [Payload for EVM gas Token](./buildingPayloads/BuildingPayloads.md#evm-gas-token-payload)

## Transferring Tokens from Everscale

The second step involved in transferring a token from Everscale to an EVM network is to initiate the token transfer from Everscale by either locking or burning the tokens. Additionally, an event contract will be automatically deployed at this stage to ensure confirmation of token transfer on the Everscale network by relayers. Consequently, asset releasing or minting can be executed on the EVM network.

### Table of Contents

- [transfer EVER](./transfers/transferEverNativeCoin.md)
- [transfer Native token](./transfers/transferEverNativeToken.md)
- [transfer Alien Token](./transfers/transferEverAlienToken.md)
- [transfer EVM gas Token](./transfers//transferEvmNativeCoin.md)

## Asset Releasing or Minting on EVM

The final step entails releasing or minting the assets on the EVM network based on the [type](../../../../docs/Concepts/TokenTypes.md#EVM-token-types) of the target token. This step completes the process of transferring the token from Everscale to an EVM network.

### Table of Contents

- [Mint Native Token](./saveWithdraw/saveWithdrawNative.md)
- [Release Alien Token](./saveWithdraw/saveWithdrawAlien.md)

---

> The addresses of all the referenced contracts and tokens can be found at [Links](../../../../docs/addresses.md).