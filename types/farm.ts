export type FarmData = {
  farmName: string;
  farmTVL: number;
  farmDexTVL: number;
  apy: number;
  apr: {
    yield_percentage: number;
    token_borrowing_interest: number;
    total_apr: number;
    daily_apr: number;
  };
};
