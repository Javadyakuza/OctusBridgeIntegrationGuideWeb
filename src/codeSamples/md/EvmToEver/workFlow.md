# EVM to Everscale Transfer Workflow

## Transferring Tokens from EVM

The process of transferring tokens from an EVM network to the Everscale network involves two steps. The first step is to lock or mint the tokens on EVM network based on the target token type specified in the [token type documentation](../../../../docs/Concepts/TokenTypes.md#EVM-token-types). During this step, events will be emitted to confirm the deposit of the tokens into a specific smart contract on the EVM network.

### Table of Contents

- [Transfer EVM Gas Token](./transfers/transferEvmNativeCoin.md)
- [Transfer Native Token](./transfers/transferEvmMultiVaultToken.md)
- [Transfer Alien Token](./transfers/transferEvmAlienToken.md)

## Deploying Events on Everscale

The second step in transferring a token from an EVM network to the Everscale network is to deploy an event contract on Everscale that is related to the token depositing data on EVM network. This can be done either by user or by Credit Modules as described in the [Credit Modules documentation](../../../../docs/Concepts/CreditModules.md). Once the event contract is successfully deployed, the tokens will be automatically minted or released on the Everscale network.

### Table of Contents

- [Deploy Everscale Ethereum Alien Event](./DeployEvents/deployAlienEvent.md)
- [Deploy Everscale Ethereum Native Event](./DeployEvents/deployNativeEvent.md)

---

> The addresses of all the referenced contracts and tokens can be found at [Links](../../../../docs/addresses.md).