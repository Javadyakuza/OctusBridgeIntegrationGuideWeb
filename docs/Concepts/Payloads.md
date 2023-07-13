# Payloads

**OctusBridge provides a feature to attach payload to bridge transfer's in order to perform various operations such as Cross Chain transfer, swapping, arbitrage, and more**.

For token transfers from Evm to Ever direction payloads can be empty.

For token transfers from Ever to Evm, payloads are needed. The instructions on how to build these payloads can be found below:

- Transfer Ever : [wrap payload](../../src/webInteraction/md/EverToEvm/buildingPayloads/BuildingPayloads.md#ever-native-coin-payload)
- Transfer Native Token : [transfer payload](../../src/webInteraction/md/EverToEvm/buildingPayloads/BuildingPayloads.md#native-token-payload)
- Transfer Alien Token : [burn payload](../../src/webInteraction/md/EverToEvm/buildingPayloads/BuildingPayloads.md#alien-token-payload)
- Mint native and release alien token on Evm network:\
  The two mentioned operations can be performed using two functions: `saveWithdrawNative` for minting native tokens and `saveWithdrawAlien` for releasing alien tokens. The inputs for these functions are as follows:

- [Alien Events payload](../../src/webInteraction/md/EverToEvm/saveWithdraw/saveWithdrawAlien.md#encoding-payload-relevant-to-everscale-ethereum-event-alien)
- [Native Events payload](../../src/webInteraction/md/EverToEvm/saveWithdraw/saveWithdrawNative.md#encoding-payload-relevant-to-everscale-ethereum-event-native)
- [Alien Events Signatures](../../src/webInteraction/md/EverToEvm/saveWithdraw/saveWithdrawAlien.md#encoding-signatures-relevant-to-everscale-ethereum-event-alien)
- [Native Events Signatures](../../src/webInteraction/md/EverToEvm/saveWithdraw/saveWithdrawNative.md#encoding-signatures-relevant-to-everscale-ethereum-event-native)
