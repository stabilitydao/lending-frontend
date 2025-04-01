import axios from "axios";
import { Address } from "viem";

interface TokenPriceResponse {
    currencyId: string;
    tokenPrices: {
        [address: string]: number;
    };
}

export const fetchTokenPrices = async (tokenAddresses: Address[], chainId = 146): Promise<TokenPriceResponse> => {
    try {
        const params = tokenAddresses
            .map((address) => `token_addresses=${address}`)
            .join('&');
        const url = `https://api.odos.xyz/pricing/token/${chainId}?${params}`;

        const response = await axios.get(url, {
            headers: {
                Accept: 'application/json',
            },
        });

        const lowercaseTokenPrices = Object.fromEntries(
            Object.entries(response.data.tokenPrices).map(([key, value]) => [key.toLowerCase(), Number(value)])
        );

        return {
            currencyId: response.data.currencyId,
            tokenPrices: lowercaseTokenPrices,
        };
    } catch (error) {
        console.error('Error fetching token prices:', error);
        throw error;
    }
};
