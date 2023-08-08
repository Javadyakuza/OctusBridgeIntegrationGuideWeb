import axios from "axios";
import { BrowserProvider, ethers } from "ethers";

import { transfer_fees } from "./constants";
import { useEvmProvider } from "../../../providers/useEvmProvider";
/**
 * calculate the exchange rate between an token and EVER in order to derive the event initial balance in Evm gas token
 * @param tokenSymbol Token symbol. e.g. BNB, ETH, ...
 * @returns An array of strings which ether contains an error message or the exchange rate of both tokens
 */

export async function calculateEventContractDeployValueInEvmGasToken(
  tokenSymbol: string
): Promise<[string, string]> {
  try {
    // Fetch EVER price
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

/**
 * calculate the exchange rate between an token and EVER in order to derive the event initial balance in Evm gas token
 * @param tokenSymbol Token symbol. e.g. BNB, ETH, ...
 * @returns An array of strings which ether contains an error message or the exchange rate of both tokens
 */
export async function calculateEvmSaveWithdrawFeeInEver(
  isNative: boolean,
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
    const [Ever, EvmGasTokenPrice] = await Promise.all([
      await axios.post(url, EverConf, { headers }),
      await axios.post(url, ALienTokenConf, { headers }),
    ]);

    // Setting up the provider
    const provider: BrowserProvider = new ethers.BrowserProvider(
      useEvmProvider().MetaMaskProvider()
    );
    // Fetching the required gas amount
    const gasAmount: string =
      transfer_fees[`${tokenSymbol}${isNative ? "Native" : "Alien"}`];

    // Fetching the gas price
    const gasPrice = (await provider.getFeeData()).gasPrice?.toString();

    const feesInEvmGasToken = (Number(gasAmount) * Number(gasPrice)) / 10 ** 18;

    // Calculate exchange rate
    const exchangeRate = Number(
      (feesInEvmGasToken * EvmGasTokenPrice.data.rate) / Ever.data.rate + 6
    ).toFixed(6);

    return ["rate: ", exchangeRate];
  } catch (error: any) {
    return ["ERROR: ", error.message];
  }
}
