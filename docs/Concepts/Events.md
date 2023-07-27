# Events 
 
## EVM to Ever Events 
 
There are two types of event contracts deployed on Everscale for the mentioned direction: 
 
-  `MultiVaultEVMEverscaleEventNative`  
-  `MultiVaultEVMEverscaleEventAlien`  
 
These event contracts are deployed by the ` EthereumEverscaleEventConfiguration`  contract, which is created by the  `EthereumEverscaleEventConfigurationFactory`  contract. 
 
### EthereumEverscaleEventConfiguration 
 
This contract has two versions, one deploys  `MultiVaultEVMEverscaleEventNative`  contracts, and the other deploys  `MultiVaultEVMEverscaleEventAlien`  contracts. 
 
Users have the option to deploy these contracts by invoking the `deployEvent` function. Alternatively, if the bridging process is automated, the events can be deployed by [`credit modules`](./CreditModules.md) through the `deployEvents` function on the configuration contract.
 
The  `MultiVaultEVMEverscaleEventNative`  contract is used when transferring a Native token, while the  `MultiVaultEVMEverscaleEventAlien`  contract is used when transferring an Alien token. 
 
> Note: There are two deployed versions of the  `EthereumEverscaleEventConfiguration`  contract for each network. As OctusBridge supports 6 networks currently, there are a total of 12  `EthereumEverscaleEventConfiguration`  contracts. You can find all their addresses [here](../addresses.md#event-configurations). 
 
## Ever to EVM Events 
 
There are two types of event contracts deployed on Everscale for the mentioned direction:
 
-  `MultiVaultEverscaleEVMEventNative`  
-  `MultiVaultEverscaleEVMEventAlien`  
 
These contracts are deployed by the  `EverscaleEthereumEventConfiguration` contract, which is created by the  `EverscaleEthereumEventConfigurationFactory`  contract. 
 
### EverscaleEthereumEventConfiguration 
 
This contract also has two versions: one deploys  `MultiVaultEverscaleEVMEventNative`  contracts, and the other deploys  `MultiVaultEverscaleEVMEventAlien`  contracts. 
 
The  `MultiVaultEverscaleEVMEventNative`  contract is deployed by the  `EverscaleEthereumEventConfiguration`  contract, and its  `deployEvent`  function can only be called by the  `ProxyMultiVaultNative_V4`  contract. 
 
The  `MultiVaultEverscaleEVMEventAlien`  contract is deployed by the  `EverscaleEthereumEventConfiguration`  contract, and its  `deployEvent`  function can only be called by the  `ProxyMultiVaultAlien_V7`  contract. 
 
The  `MultiVaultEverscaleEVMEventNative`  contract is used when transferring a Native token, while the  `MultiVaultEverscaleEVMEventAlien`  contract is used when transferring an Alien token. 
::: info 
 **In the Ever -> EVM direction, event deployment is done automatically.** 
 :::
 > The addresses of all the referenced contracts and tokens can be found at [Links](./addresses.md).