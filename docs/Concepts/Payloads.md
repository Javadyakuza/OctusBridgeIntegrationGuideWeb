# Payloads

**OctusBridge provides a feature to attach payload to bridge transfers in order to perform various operations such as Cross Chain transfer, swapping, arbitrage, and more**.

Payloads are not necessary and can be empty when transferring a token from an EVM network to the Everscale network.

Payloads are essential in transferring tokens from Everscale to an EVM network. Detailed instructions on constructing these payloads can be found below:

- Transfer Ever : [wrap payload](../../src/codeSamples/md/EverToEvm/buildingPayloads/BuildingPayloads.md#ever-native-coin-payload)
- Transfer Native Token : [transfer payload](../../src/codeSamples/md/EverToEvm/buildingPayloads/BuildingPayloads.md#native-token-payload)
- Transfer Alien Token : [burn payload](../../src/codeSamples/md/EverToEvm/buildingPayloads/BuildingPayloads.md#Alien-token-payload)
- To mint native tokens and release Alien tokens on the EVM network, you can utilize the following functions:
   
  - `saveWithdrawNative`  for minting native tokens and   
  - `saveWithdrawAlien`  for releasing Alien tokens. 
   
   The required inputs for these functions are as follows:


    - [Alien Events payload](../../src/codeSamples/md/EverToEvm/saveWithdraw/saveWithdrawAlien.md#encoding-payload-relevant-to-everscale-ethereum-event-Alien)
    - [Native Events payload](../../src/codeSamples/md/EverToEvm/saveWithdraw/saveWithdrawNative.md#encoding-payload-relevant-to-everscale-ethereum-event-native)
    - [Alien Events Signatures](../../src/codeSamples/md/EverToEvm/saveWithdraw/saveWithdrawAlien.md#encoding-signatures-relevant-to-everscale-ethereum-event-Alien)
    - [Native Events Signatures](../../src/codeSamples/md/EverToEvm/saveWithdraw/saveWithdrawNative.md#encoding-signatures-relevant-to-everscale-ethereum-event-native)
