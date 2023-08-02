import axios from "axios";
// import BigNumber from "bignumber.js";
// import { ethers, BrowserProvider } from "ethers";
// import * as web3 from "web3";

// import { useEvmProvider } from "../../../providers/useEvmProvider";
// import MultiVaultAbi from "../artifacts/EvmAbi/abi/MultiVault.json";
/**
 * calculate the exchange rate between an token and EVER in order to derive the event initial balance in Evm gas token
 * @param tokenSymbol Token symbol. e.g. BNB, ETH, ...
 * @returns An array of strings which ether contains an error message or the exchange rate of both tokens
 */

export async function calculateEventContractDeployValueInEvmGasToken(
  tokenSymbol: string
): Promise<[string, string]> {
  try {
    // Fetch Ever price
    const url = "https://api.livecoinwatch.com/coins/single";
    const apiKey = "085407a1-3c9b-4425-bb0b-96336cfd23af";
    const headers = {
      "content-type": "application/json",
      "x-api-key": apiKey,
    };
    const EverConf = {
      currency: "USD",
      code: "EVER",
      meta: false,
    };

    // Fetch other token price
    const ALienTokenConf = {
      currency: "USD",
      code: tokenSymbol,
      meta: false,
    };

    // Fetch the tokens data
    const [Ever, AlienTokenPrice] = await Promise.all([
      await axios.post(url, EverConf, { headers }),
      await axios.post(url, ALienTokenConf, { headers }),
    ]);

    // Calculate exchange rate
    const exchangeRate = String(
      Number((6 * Ever.data.rate) / AlienTokenPrice.data.rate).toFixed(6)
    );

    return ["rate: ", exchangeRate];
  } catch (error: any) {
    return ["ERROR: ", error.message];
  }
}

// /**
//  * calculate the exchange rate between an token and EVER in order to derive the event initial balance in Evm gas token
//  * @param tokenSymbol Token symbol. e.g. BNB, ETH, ...
//  * @returns An array of strings which ether contains an error message or the exchange rate of both tokens
//  */

// export async function calculateEvmSaveWithdrawFeeInEver(
//   native: boolean,
//   tokenSymbol: string
// ): Promise<[string, string]> {
//   try {
//     // Fetch Ever price
//     const url = "https://api.livecoinwatch.com/coins/single";
//     const apiKey = "085407a1-3c9b-4425-bb0b-96336cfd23af";
//     const headers = {
//       "content-type": "application/json",
//       "x-api-key": apiKey,
//     };
//     const EverConf = {
//       currency: "USD",
//       code: "EVER",
//       meta: false,
//     };

//     // Fetch other token price
//     const ALienTokenConf = {
//       currency: "USD",
//       code: tokenSymbol,
//       meta: false,
//     };

//     // Fetch the tokens data
//     const [Ever, AlienTokenPrice] = await Promise.all([
//       await axios.post(url, EverConf, { headers }),
//       await axios.post(url, ALienTokenConf, { headers }),
//     ]);

//     // initiating the EVM provider
//     const provider = new ethers.BrowserProvider(
//       useEvmProvider().MetaMaskProvider()
//     );

//     //fetching the estimated fee
//     const MultiVault = new ethers.Contract(
//       "0x54c55369a6900731d22eacb0df7c0253cf19dfff",
//       MultiVaultAbi.abi,
//       provider
//     );
//     const SamplePayloadEverAlienEvmNativeToken: string =
//       "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000002400e65610c700000000000000000000000000000000000000000000000000000000649ecde4000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000006b7e3255de478ff6b5d441235e6ea6c43764f897dd761d56c2fdf7199d80cf8600000000000000000000000000000000000000000000000000000000000000006087adab4f8d4724815a89e44a4aee47a1edc7dca3332032d41d7f44d602ad8e00000000000000000000000054c55369a6900731d22eacb0df7c0253cf19dfff00000000000000000000000000000000000000000000000000000000000000470000000000000000000000000000000000000000000000000000000000000120000000000000000000000000bb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c000000000000000000000000000000000000000000000000000009184e72a000000000000000000000000000a5cf4c57a7756943559b6b65f6cc67aa834f79f50000000000000000000000000000000000000000000000000000000000000038000000000000000000000000a5cf4c57a7756943559b6b65f6cc67aa834f79f500000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000f1b7b971da6715ecdf24f0c38352618a059309d7";
//     const SampleSignaturesEverAlienEvmNativeToken: string[] = [
//       "crD9GL0Q+IalAsuPTZ+zzJiTuT0gezpZqY6cNhzCyRQZRYBN7NiL1g7I1L+Qx7WKnGQeGsT/bwAzABxZ9d2TNhs=",
//       "8uhG/a4hWwxkQp0HouIro0xmM3TM5dIfscLfI1AMC/4pwOrn8yPdjnlgrIz++CsDv4KoaB0OO7d7aoFAMtKIRxs=",
//       "0qXPteQMQ4C4R8bfQa9XLUCArh3BeSm92RHpUeI8qMIxyu4rzzIWMQfz4a0vr/TeLe+sOMsnDubczVA2Zjfoqhs=",
//       "6G7s1c/vwZwdYDBruSl/PBaBhBd5YgxyuaYDsmwKCs8fOAae4L+N0br7CDk8KNYdHaU8K3wlDH4+8LRDB6ajNhw=",
//       "21Nb1Gla/QqND7s2o2D3gzjfSRMersrUWaqapP/hFJlBIlf+76wWB/ta32W7vVoy1xbvgX6WGI/0nNqXDXoSZRw=",
//       "cNefYLUeJWagwFw09+y5/3CySB5nnsWPGQIDF4UwC0Z0rnNU0ykdWzPKZC2wy3JmMIRhRzhjXDAh3grY3wxIYRs=",
//       "zoMuUKw7n6F0dYZj6ik+QmCGX9wuq/53tH/fMag7olEMm7mfBth3TT58U6gx/Yagk0GL+0ixUASbMkG9MwYeahs=",
//       "DASKp4f6yaRIKYsbiNj8NuxkPgDgeanb4z4+1SCeSqNxC69PzC1SNh+EovTa+YqRLDv3QTs8zPmn0IDIT+v7sxs=",
//       "HKtTIysPIqXDX71UM6CQVQsIUCzLRXOv0pIIoSmVxQg6RwIq2u6tgVeFX1BMHbdBs0qB0cN+GXLa183bdiJPOhw=",
//       "gfUHU8IioKi7bOBewhJp8z6UHT2L/nZhn8ictXyISEg6bqIgtMJJ7oPRPbT3r0QoOUJZ/IYfR783QDn5OeHsXxw=",
//       "1ygKUq3VQr/5NSKp2LOePIRvreWSIbm3AZu65tQgFmdIH74dFQ8Paf5W5UWCykBcuK42Ndec364gDfLO/2H6rBw=",
//       "0QPdK/Vj8ED+9/1hRDccrVP9aqiexeccy+kMn0SxpH1f5qPM/ldPGKvBNOVABaPS9UnHkXvXznB/cttr2q/12hw=",
//       "p8prYfxudOhjy3E0lhgvdjC/p5IWSRMnQOYkQnmMfDUgtmYS8lKdvZFs8g8GaMwnCA92dpfX7wqWxt1Vd+Oxzxw=",
//       "W+c5lo5fjbpMs+0f1hQSDNnhJMCeVqgxHOeZJpCRj8MxxJ8K6Y2R35gyraHBgDD6exhiMW9SgfBncJcYzM1sPRs=",
//       "5Up+cdPuMUWIUT8Me2J7p53VItJ+fL8Blpn/Q5CmJC87VFLdZ374P6KgKb5d6vVOII7Z6sytB1rAVYd/bxaCgBw=",
//       "BtU/sTn8t2COecpz6PVYdjtKmBoVQGJyRIhzzKIj8VZhuhpBlsysIAimogQJcFzjqXcPnvvmbLUSXdafNDR8Lxs=",
//       "PUu1zcMdX3JYm7ymm3MfpZVmt3MosYH4MNJs3Q0TZKIqQ7X0D00/Tc7NLkGsVrEwvBm38J8m5QXMvbfzSBVSrxw=",
//       "t89kv99vPaeIH1Ym+SxQSZJUWZeaoKtlukuUiVlK7HYxNyKGTCg3zi/adBTs21H/rK5Phzh5C/JrG0/EloSrFRs=",
//       "M1O3xa7/2pxwCYJVGS67fjuC1chUA/ALkx6uT15zcvMobszjacgmt3KK2L0LI2Y6g6aYOTjCivhzpOteuNFLfRw=",
//       "Lc8VDIRics7g2XtQa7QT67ecETVFOCWiNTPjJVoamOojaptKsrlvh1hHoxE9q1FVL43Ln2n5c4oRPiTWin05hxs=",
//       "CwZglqFchkM0lYKTgI6cstgxY4BUfif+B2TYclXhO6JBJLAmZbdKfu2n+IzSZctt6sl4mJVUk6i7xGQbYIJHlxw=",
//       "ycgUThTd0Ilw+dSl4nOy5mlH39P/HnuPf6dbQjN+9LlijsB5X+t8n1hUjRpINuZwyuScbAWQXxnlTZwu0fzwexw=",
//       "KR3hZ5uId36MLhc4WRoJFbZiOXAVsQJjykJ5lRjCsUhTncdRMQP9dYVMZnmKGDV77AdRNNbkh1ENW+5iVoNZ5Bw=",
//       "hYtWRGBYz+jNTSG1eY0bxqj1XAHIn2Xc3H90c/hYs50MIZFw8VmBAqQCZ3Oui3Fiv4IiQQwT9W6YSyA/QLawQBw=",
//     ];
//     //making the sig ready
//     const signatures = SampleSignaturesEverAlienEvmNativeToken.map((sign) => {
//       const signature = `0x${Buffer.from(sign, "base64").toString("hex")}`;
//       const address = web3.eth.accounts.recover(
//         web3.utils.sha3(
//           SamplePayloadEverAlienEvmNativeToken as string
//         ) as string,
//         signature
//       );
//       return {
//         address,
//         order: new BigNumber(address.slice(2).toUpperCase(), 16),
//         signature,
//       };
//     });

//     signatures.sort((a, b) => {
//       if (a.order.eq(b.order)) {
//         return 0;
//       }

//       if (a.order.gt(b.order)) {
//         return 1;
//       }

//       return -1;
//     });

//     let fee: string;
//     if (native) {
//       fee = (
//         await MultiVault.saveWithdrawNative.estimateGas(
//           SamplePayloadEverAlienEvmNativeToken,
//           signatures.map(({ signature }) => signature)
//         )
//       ).toString();
//     } else {
//       // fee = (
//       //   await MultiVault.saveWithdrawAlien.estimateGas("0x", ["0x"])
//       // ).toString();
//     }
//     // Calculate exchange rate
//     const exchangeRate = String(
//       Number(
//         (Number(fee) * Ever.data.rate) / AlienTokenPrice.data.rate
//       ).toFixed(6)
//     );
//     console.log(exchangeRate);
//     return ["rate: ", exchangeRate];
//   } catch (error: any) {
//     return ["ERROR: ", error.message];
//   }
// }
