import axios from "axios";

export const getGemPrice = async () => {
  try {
    const response = await axios.get(
      "https://api.dexscreener.com/latest/dex/pairs/sonic/0x579638b5A13068caAD302b39E64253056cb83ADe"
    );

    const priceUsd = response.data?.pair?.priceUsd;

    return priceUsd ? parseFloat(priceUsd) : 0;
  } catch (error) {
    console.error("Error fetching price:", error);
    return 0;
  }
};
