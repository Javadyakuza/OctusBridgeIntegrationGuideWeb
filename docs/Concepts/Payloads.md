# PAYLOADS

### OctusBridge provides a feature to attach payload to bridge transfer's in order to perform various operations such as swapping, arbitrage, and more.

### For token transfers at EVM -> EVER direction payloads can be empty.

### For token transfers at EVER -> EVM payloads are needed, their recipe's can be found below :

- ### Transfer EVER : [wrap payload](../EVER-TO-EVM/scripts/helpers/buildWrapPayload.ts)
- ### Transfer Native Token : [transfer payload](../EVER-TO-EVM/scripts/helpers/buildTransferPayload.ts)
- ### Transfer Alien Token : [burn payload](../EVER-TO-EVM/scripts/helpers/buildBurnPayload.ts)
- ### Payload for saveWithdrawAlien and saveWithdrawNative :
  Mentioned function's have two inputs (payload, signatures)
  - [payload](../EVER-TO-EVM/scripts/helpers/buildSaveWithdrawPayload.ts)
  - [signatures](../EVER-TO-EVM/scripts/helpers/getSignatures.ts)
