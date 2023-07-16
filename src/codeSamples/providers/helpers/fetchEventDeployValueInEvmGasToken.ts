import axios from "axios";
export async function calculateEventContractDeployValueInEvmGasToken(
  tokenName: string
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

    // fetch other token price
    const ALienTokenConf = {
      currency: "USD",
      code: tokenName,
      meta: false,
    };
    // fetching the tokens data
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
