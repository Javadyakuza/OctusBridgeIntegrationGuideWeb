# Everscale to Evm Work Flow

## Building Payloads

To facilitate the transfer of a token from Everscale to an Evm network, it is necessary to provide payloads that specify the operations to be executed. Once the payloads have been prepared, the token transfer can be carried out.

## Transferring Tokens from Everscale

The second step involved in transferring a token from Everscale to an Evm network is to initiate the token transfer from Everscale by either locking or burning the tokens. Additionally, an event contract will be automatically deployed at this stage to ensure confirmation of token transfer on the Everscale side by relayers. Following this, asset releasing or minting can be executed on the Evm network.

## Asset Releasing or minting on Evm

The final step entails releasing or minting the assets on the Evm network based on the target [token type](../../../../docs/Concepts/TokenTypes.md#Evm-token-types). This step completes the process of transferring the token from Everscale to an Evm network.