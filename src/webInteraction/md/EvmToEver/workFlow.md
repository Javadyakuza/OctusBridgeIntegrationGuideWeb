# Evm to Everscale Workflow

## Transferring Tokens from Evm

The process of transferring tokens from an Evm network to the Everscale network involves two steps. The first step is to lock or mint the tokens on Evm network based on the target token type specified in the [token type documentation](../../../../docs/Concepts/TokenTypes.md#Evm-token-types). During this step, events will be emitted to confirm the deposit of the tokens into a specific smart contract on the Evm network.

## Deploying Events on Everscale

The second step in transferring a token from an Evm network to the Everscale network is to deploy an event contract on Everscale that is related to the token depositing data on Evm network. This can be done either by user or by Credit Modules as described in the [Credit Modules documentation](../../../../docs/Concepts/CreditModules.md). Once the event contract is successfully deployed, the tokens will be automatically minted or released on the Everscale network.
