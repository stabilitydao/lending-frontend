import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { TokenBalance } from "@/types/token";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function calculateTVL(
  balances: TokenBalance[],
  apiUrl: string
): Promise<number> {
  try {
    const tokenIds = balances.map((b) => b.token).join(",");
    const response = await fetch(`${apiUrl}?ids=${tokenIds}&vs_currencies=usd`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const prices = await response.json();

    const tvl = balances.reduce((total, balance) => {
      const price = prices[balance.token]?.usd || 0;
      return total + balance.balance * price;
    }, 0);

    return tvl;
  } catch (error) {
    console.error("Error calculating TVL:", error);
    return 0;
  }
}
