import { Address, Chain } from "viem";
import { Token } from "@/constants";

export type MarketInfo = {
  asset: {
    name: string;
    symbol: string;
    imageSrc: string;
  };
  supply: {
    tvl: {
      amount: number;
      value: number;
    };
    remaining: {
      amount: number;
      value: number;
    };
    cap: {
      amount: number;
      value: number;
    };
    APR: number;
  };
  borrow: {
    tvl: {
      amount: number;
      value: number;
    };
    remaining: {
      amount: number;
      value: number;
    };
    cap: {
      amount: number;
      value: number;
    };
    APR: number;
  };
  collateralFactor: number;
  isBorrowEnabled: boolean;
  breakdown: {
    supply: Record<string, number>;
    borrow: Record<string, number>;
  };
};

export type UserDisplayData = {
  balanceValueUSD: number;
  balance: number;
  borrowedValueUSD: number;
  borrowed: number;
  borrowLimit: {
    current: number;
    future: number;
  };
  totalDebt: {
    current: number;
    future: number;
  };
  healthFactor: {
    current: number;
    future: number;
  };
  tokenPriceUSD: number;
};

type HealthBarPoint = {
  name: string;
  bg: string;
  text: string;
  min: number;
  max: number;
};

export class HealthBarDefinition {
  points: HealthBarPoint[];
  min: number;
  half: number;
  max: number;

  constructor(
    colorThresholds: number[],
    names: string[],
    bg?: string[],
    text?: string[]
  ) {
    if (names.length !== colorThresholds.length) {
      throw new Error("Invalid Color Definition In Healthbars");
    }
    this.min = 1;
    this.half = colorThresholds[colorThresholds.length - 2];
    this.max = colorThresholds.pop() as number;

    this.points = [];

    this.points.push({
      name: "Liquidation",
      bg: "bg-black",
      text: "text-black",
      min: -Infinity,
      max: 1,
    });

    this.points.push({
      name: names[0],
      bg: (bg && bg[0]) || `bg-${names[0]}-500`,
      text: (text && text[0]) || `text-${names[0]}-500`,
      min: 1,
      max: colorThresholds[0],
    });

    for (let i = 1; i < colorThresholds.length; i++) {
      this.points.push({
        name: names[i],
        bg: (bg && bg[i]) || `bg-${names[i]}-500`,
        text: (text && text[i]) || `text-${names[i]}-500`,
        min: colorThresholds[i - 1],
        max: colorThresholds[i],
      });
    }

    const lastIndex = names.length - 1;
    this.points.push({
      name: names[lastIndex],
      bg: (bg && bg[lastIndex]) || `bg-${names[lastIndex]}-500`,
      text: (text && text[lastIndex]) || `text-${names[lastIndex]}-500`,
      min: colorThresholds[lastIndex - 1],
      max: Infinity,
    });
  }

  getHealthData(health: number): HealthBarPoint {
    return (
      this.points.find(({ min, max }) => health > min && health <= max) || {
        name: "",
        bg: "",
        text: "",
        min: 0,
        max: 0,
      }
    );
  }

  bg(health: number): string {
    return this.getHealthData(health).bg;
  }

  display(health: number): string {
    return health >= this.max ? `${this.max}+` : health.toFixed(2);
  }

  text(health: number): string {
    return this.getHealthData(health).text;
  }

  progress(health: number): number {
    if (health <= this.min) {
      return 0;
    }
    if (health >= this.max) {
      return 100;
    }
    if (health <= this.half) {
      return (50 * (health - this.min)) / (this.half - this.min);
    }
    return 50 + (50 * (health - this.half)) / (this.max - this.half);
  }
}

export type MarketDefinition = {
  id: number;
  tokens: Token[];
  healthBar: HealthBarDefinition;
  POOL_ADDRESS_PROVIDER: Address;
  AAVE_POOL: Address;
  NATIVE_TOKEN_GATEWAY: Address;
  LOOPING?: {
    LOOPING_CONTRACT: Address;
    UNLOOPING_CONTRACT: Address;
    VAULTS: Token[];
    IO: Token[];
  };
  chainId: Chain["id"];
};
