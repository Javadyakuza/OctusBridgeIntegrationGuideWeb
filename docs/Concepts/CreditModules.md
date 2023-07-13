# Credit Modules

Credit modules are a set of backend scripts that, in addition to their other responsibilities, are responsible for equalizing balances between associated networks during a transaction, deploying event contracts when the transfer direction is Evm -> Ever and calling the saveWithdraw function's when the transfer direction is Ever -> Evm which leads to asset releasing or minting.
