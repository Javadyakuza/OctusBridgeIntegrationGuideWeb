# Everscale to Evm Work Flow

## Building Payloads

To facilitate the transfer of a token from Everscale to an EVM network, it is necessary to provide payloads that specify the operations to be executed. Once the payloads have been prepared, the token transfer can be carried out.

## Transferring Tokens

The second step involved in transferring a token from Everscale to an EVM network is to initiate the token transfer from Everscale by either locking or burning the tokens. Additionally, an event contract will be automatically deployed at this stage to ensure confirmation of token transfer on the Everscale side by relayers. Following this, asset releasing can be executed on the EVM side.

## Asset Releasing

The final step entails releasing the assets on the EVM side, which can be accomplished by minting or releasing the token based on the target [token type](../../../../docs/Concepts/TokenTypes.md#evm-token-types). This step completes the process of transferring the token from Everscale to the EVM network.
