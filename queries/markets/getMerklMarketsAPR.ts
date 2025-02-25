import axios from "axios";
import { Address } from "viem";

export const getMerklMarketsAPR = async () => {
  try {
    const response = await axios.get(
      "https://api.merkl.xyz/v4/opportunities?name=Vicuna&items=1000"
    );

    const markets = response.data;
    const aprData: { [key: string]: { supply: number; borrow: number } } = {};
    console.log("markets", markets);
    markets.forEach(
      (market: {
        chainId: number;
        identifier: Address;
        name: string;
        apr: number;
      }) => {
        if (market.chainId !== 146) return;
        const tokenAddress = market.identifier.toLowerCase();
        if (!tokenAddress) return;

        if (!aprData[tokenAddress]) {
          aprData[tokenAddress] = { supply: 0, borrow: 0 };
        }

        if (market.name.toLowerCase().includes("supply")) {
          aprData[tokenAddress].supply = market.apr || 0;
        } else if (market.name.toLowerCase().includes("borrow")) {
          aprData[tokenAddress].borrow = market.apr || 0;
        }
      }
    );

    return aprData;
  } catch (error) {
    console.error("Error fetching Merkl market APRs:", error);
    return {};
  }
};
