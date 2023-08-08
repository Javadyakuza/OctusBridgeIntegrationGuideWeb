# Payloads

**Octus Bridge provides a feature to attach payloads to bridge transfers in order to perform various operations such as cross-chain transfers, swapping, arbitrage and more**.

Payloads are not necessary and can be empty when transferring a token from an EVM network to the Everscale network.

Payloads are essential in transferring tokens from Everscale to an EVM network. Detailed instructions on constructing these payloads can be found below:

## Instructions 

- Transfer EVER : [wrap payload](../../src/codeSamples/md/EverToEvm/buildingPayloads/BuildingPayloads.md#ever-Native-coin-payload)
- Transfer Native Token : [transfer payload](../../src/codeSamples/md/EverToEvm/buildingPayloads/BuildingPayloads.md#native-token-payload)
- Transfer Alien Token : [burn payload](../../src/codeSamples/md/EverToEvm/buildingPayloads/BuildingPayloads.md#alien-token-payload)
- To mint Native tokens and release Alien tokens on the EVM network, you can utilize the following functions on the `MultiVault` contract:
   
  - `saveWithdrawNative`  for minting Native tokens.  
  - `saveWithdrawAlien`  for releasing Alien tokens. 
   
   The required inputs for these functions are as follows:


    - [Alien Events payload](../../src/codeSamples/md/EverToEvm/saveWithdraw/saveWithdrawAlien.md#encoding-payload-relevant-to-everscale-ethereum-event-Alien)
    - [Native Events payload](../../src/codeSamples/md/EverToEvm/saveWithdraw/saveWithdrawNative.md#encoding-payload-relevant-to-everscale-ethereum-event-Native)
    - [Alien Events Signatures](../../src/codeSamples/md/EverToEvm/saveWithdraw/saveWithdrawAlien.md#encoding-signatures-relevant-to-everscale-ethereum-event-Alien)
    - [Native Events Signatures](../../src/codeSamples/md/EverToEvm/saveWithdraw/saveWithdrawNative.md#encoding-signatures-relevant-to-everscale-ethereum-event-Native)


## TVM Payloads vs EVM Payloads
During the bridging process, the encoded data from the source network is utilized in the destination network to perform a cross-chain transfer. 
The encoding and decoding rules in EVM networks are not similar to TVM encoding and decoding rules:
 
### TVM-to-EVM ABI Mapping Rules:
- bytes => Same
- string => Same
- uintX => Same
- intX => Same
- bool => Same
- fixedbytes => Same
- fixedarray => Same but mapped
- array => Same but mapped
- tuple => Same but mapped
- _ => Unsupported

### EVM-to-TVM ABI Mapping Rules:
- address => bytes (of length 20)
- bytes => bytes or cell (*)
- string => Same
- intX => Same
- uintX => Same
- bool => Same
- array => Same but mapped
- fixedbytes1 => Depends on context (**)
- fixedbytesX => Same 
- fixedarray => Same but mapped
- tuple => same but mapped or cell (***)
- _ => Unsupported

:::tip
The library used for value conversion is [ eth-ton-abi-converter ](https://github.com/broxus/eth-ton-abi-converter), which enables the conversion and utilization of these values in the frontend.
:::

> The addresses of all the referenced contracts and tokens can be found at [Links](../addresses.md).


