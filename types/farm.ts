export type FarmData = {
  farmName: string;
  farmTVL: number;
  farmDexTVL: number;
  apy: {
    from: number;
    to: number;
  };
  apr: {
    yield_percentage: number;
    token_borrowing_interest: number;
    total_apr: number;
    daily_apr: number;
  };
  leverage: number;
  imageSrc1?: string;
  imageSrc2?: string;
};
