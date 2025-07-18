import axios from "axios";
import { Address } from "viem";

export const getMerklAPRs = async () => {
  return {};
  try {
    const response = await axios.get(
      "https://api.merkl.xyz/v4/opportunities?chainId=146&identifier=0x9154f0a385eef5d48ceF78D9FEA19995A92718a9,0x64d0071044EF8F98B8E5ecFCb4A6c12Cb8BC1Ec0,0x61bC5Ce0639aA0A24Ab7ea8B574D4B0D6b619833"
    );

    const aprs = response.data;

    const aprData: {
      [key: string]: { apr: number };
    } = {};

    aprs.forEach(
      (data: {
        chainId: number;
        identifier: Address;
        name: string;
        apr: number;
      }) => {
        if (data.chainId !== 146) return;
        const tokenAddress = data.identifier.toLowerCase();
        if (!tokenAddress) return;

        if (!aprData[tokenAddress]) {
          aprData[tokenAddress] = { apr: data.apr };
        }
      }
    );

    return aprData;
  } catch (error) {
    console.error("Error fetching Merkl market APRs:", error);
    return {};
  }
};
