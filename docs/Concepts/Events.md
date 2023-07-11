# Events

## Evm To Ever Events

There is two types of event contracts at mentioned direction that will be deployed on Everscale.

- `MultiVaultEVMEverscaleEventNative`
- `MultiVaultEVMEverscaleEventAlien`

Deployer of these event contract's is [`EthereumEverscaleEventConfiguration`](#ethereumEverscaleeventconfiguration) contract,\
which is deployed by `EthereumEverscaleEventConfigurationFactory`.

### EthereumEverscaleEventConfiguration

This contract has two version, one deploys `MultiVaultEVMEverscaleEventNative` contracts and another one deploys `MultiVaultEVMEverscaleEventAlien`.

These contracts can be called by the user with `deployEvent` function on config contract or by the [credit modules](./CreditModules.md) with `deployEvents`.

`MultiVaultEVMEverscaleEventNative` is deployed when transferring a native token and `MultiVaultEVMEverscaleEventAlien` are deployed when transferring alien token.

> `EthereumEverscaleEventConfiguration` contract has two deployed version for each network, OctusBridge support's 6 network's right now regardless of Everscale , so there is 12 `EthereumEverscaleEventConfiguration` contract's, all these addresses can be found [here](../addresses.md#event-configurations).

## Ever To Evm Events

There is two types of event contracts at this direction that will be deployed on Everscale.

- `MultiVaultEverscaleEVMEventNative`
- `MultiVaultEverscaleEVMEventAlien`

Deployer of these contract's is [`EverscaleEthereumEventConfiguration`](#EverscaleEthereumeventconfiguration) contract, \
Which is deployed by`EverscaleEthereumEventConfigurationFactory`.

### EverscaleEthereumEventConfiguration

this contract has two versions, one deploys `MultiVaultEverscaleEVMEventNative` contracts and another one deploys `MultiVaultEverscaleEVMEventAlien`.

`MultiVaultEverscaleEVMEventNative` deployer is `EverscaleEthereumEventConfiguration` contract and it's `deployEvent` function is only callable by `ProxyMultiVaultNative_V4`

`MultiVaultEverscaleEVMEventAlien` deployer is `EverscaleEthereumEventConfiguration` contract and it's `deployEvent` function is only callable by `ProxyMultiVaultAlien_V7`

`MultiVaultEverscaleEVMEventNative` is deployed when transferring a native token and `MultiVaultEverscaleEVMEventAlien` are deployed when transferring alien token.

> In the Ever -> Evm direction, event deploying is done automatically.
