// import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
// import { ethers } from "hardhat";
// import { deployedContracts } from "../../constants";
// import { ContractTransactionResponse } from "ethers/src.ts/ethers";

// async function TransferEVMEverNativeToken(): Promise<ContractTransactionResponse | null> {
//   // setting the signer
//   const evmSigner: HardhatEthersSigner = await ethers.provider.getSigner(0);
//   console.log("user wallet address : ", evmSigner.address);
//   // getting the contracts
//   let MultiVault = await ethers.getContractFactory("MultiVault");
//   // attaching them to on-chain addresses
//   MultiVault = await MultiVault.attach(deployedContracts.BSCMultiVault);

//   // deposititng
//   const MultiVaultNativeDeposit = await MultiVault.connect(evmSigner)[
//     "depositByNativeToken(((int8,uint256),uint256,uint256,bytes))"
//   ];

//   const amount = ethers.parseEther("0.00001");

//   const recipient = {
//     wid: "0",
//     addr: deployedContracts.SampleEverReceiverAddress,
//   };

//   const deposit_value = ethers.parseEther("0.0016");
//   const deposit_expected_evers = 5000000000;
//   const deposit_payload = "0x";

//   try {
//     const res = await MultiVaultNativeDeposit(
//       [recipient, amount, deposit_expected_evers, deposit_payload],
//       {
//         value: deposit_value + amount,
//       }
//     );
//     console.log("tx hash ; ", res?.hash);
//     return res;
//   } catch (e) {
//     console.log(e);
//     return null;
//   }
// }
// TransferEVMEverNativeToken()
//   .then((res) => {
//     console.log("successful , tx hash : ", res?.hash);
//   })
//   .catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
//   });
