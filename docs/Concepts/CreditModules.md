# Credit Modules

Credit modules are a set of backend scripts which, in addition to their other responsibilities, are responsible for deploying event contracts when the transfer direction is EVM -> Ever and calling the `saveWithdraw` functions on the MultiVault contract when the transfer direction is Ever -> EVM which leads to asset releasing or minting.

> The addresses of all the referenced contracts and tokens can be found at [Links](../addresses.md).