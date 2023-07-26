# Events

## EVM to Ever Events

There is two types of event contracts at mentioned direction that will be deployed on Everscale.

- `MultiVaultEVMEverscaleEventNative`
- `MultiVaultEVMEverscaleEventAlien`

Deployer of these event contract's is [`EthereumEverscaleEventConfiguration`](../addresses.md#event-configurations) contract,\
which is deployed by `EthereumEverscaleEventConfigurationFactory`.

### EthereumEverscaleEventConfiguration

This contract has two version, one deploys `MultiVaultEVMEverscaleEventNative` contracts and another one deploys `MultiVaultEVMEverscaleEventAlien`.

These contracts can be deployed by the user with calling `deployEvent` function or by [credit modules](./CreditModules.md) with calling `deployEvents` function on config contract.

`MultiVaultEVMEverscaleEventNative` is deployed when transferring a native token and `MultiVaultEVMEverscaleEventAlien` are deployed when transferring alien token.

> `EthereumEverscaleEventConfiguration` contract has two deployed version for each network, OctusBridge support's 6 network's right now regardless of Everscale , so there is 12 `EthereumEverscaleEventConfiguration` contract's, all these addresses can be found [here](../addresses.md#event-configurations).

## Ever to EVM Events

There is two types of event contracts at this direction that will be deployed on Everscale.

- `MultiVaultEverscaleEVMEventNative`
- `MultiVaultEverscaleEVMEventAlien`

Deployer of these contract's is [`EverscaleEthereumEventConfiguration`](../addresses.md#event-configurations) contract, \
Which is deployed by`EverscaleEthereumEventConfigurationFactory`.

### EverscaleEthereumEventConfiguration

this contract has two versions, one deploys `MultiVaultEverscaleEVMEventNative` contracts and another one deploys `MultiVaultEverscaleEVMEventAlien`.

`MultiVaultEverscaleEVMEventNative` deployer is `EverscaleEthereumEventConfiguration` contract and it's `deployEvent` function is only callable by `ProxyMultiVaultNative_V4`

`MultiVaultEverscaleEVMEventAlien` deployer is `EverscaleEthereumEventConfiguration` contract and it's `deployEvent` function is only callable by `ProxyMultiVaultAlien_V7`

`MultiVaultEverscaleEVMEventNative` is deployed when transferring a native token and `MultiVaultEverscaleEVMEventAlien` are deployed when transferring alien token.

**In the Ever -> EVM direction, event deploying is done automatically.**
