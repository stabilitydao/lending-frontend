import { FarmData } from "@/types/farm";
import { VaultData } from "@/types/vault";
import { BorrowData } from "@/types/borrow";

export const socialLinks = [
  {
    imageSrc: "/icons/social/twitter.png",
    url: "https://x.com/llamafinance",
  },
  {
    imageSrc: "/icons/social/medium.png",
    url: "https://medium.com/llamafinance",
  },
  {
    imageSrc: "/icons/social/github.png",
    url: "https://github.com/llamafinance",
  },
  {
    imageSrc: "/icons/social/discord.png",
    url: "https://discord.gg/llamafinance",
  },
  {
    imageSrc: "/icons/social/dune.png",
    url: "https://dune.com/llamafinance",
  },
  {
    imageSrc: "/icons/social/docs.png",
    url: "https://linkedin.com/company/llamafinance",
  },
  {
    imageSrc: "/icons/social/telegram.png",
    url: "https://t.me/llamafinance",
  },
];

export const navLinks = [
  {
    label: "Borrow/Lend",
    href: "/borrow",
  },
  {
    label: "Farms",
    href: "/farms",
  },
  {
    label: "Vaults",
    href: "/vaults",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Governance",
    href: "/governance",
  },
];

export const portfolioData = [
  {
    title: "Deposited Collateral",
    value: "$3,000.00",
  },
  {
    title: "Borrowed Fund",
    value: "$1,521.93",
  },
  {
    title: "Net Value",
    value: "$2,478.07",
  },
  {
    title: "Fees and Interest",
    value: "$27.93",
  },
];

export const chainIcons = [
  "/icons/coins/ethereum.png",
  "/icons/coins/arbitrum one.png",
  "/icons/coins/op mainnet.png",
  "/icons/coins/polygon.png",
  "/icons/coins/base.png",
  "/icons/coins/bnb smart chain.png",
];

export const vaultData: VaultData[] = [
  {
    vaultName: "ETH-USDC",
    vaultTVL: 318000000,
    vaultDexTVL: 1103000000,
    vBoost: true,
    wallets: 0,
    deposited: 0,
    apy: 19.6,
    daily: 0.05,
  },
  {
    vaultName: "wstETH-ETH",
    vaultTVL: 345140000,
    vaultDexTVL: 1090000000,
    vBoost: false,
    wallets: 0,
    deposited: 0,
    apy: 11.0,
    daily: 0.03,
  },
  {
    vaultName: "ARB-ETH",
    vaultTVL: 521180000,
    vaultDexTVL: 840000000,
    vBoost: false,
    wallets: 0,
    deposited: 0,
    apy: 14.5,
    daily: 0.04,
  },
  {
    vaultName: "GMX-ETH",
    vaultTVL: 636210000,
    vaultDexTVL: 916530000,
    vBoost: false,
    wallets: 0,
    deposited: 0,
    apy: 117.0,
    daily: 0.32,
  },
  {
    vaultName: "wBTC-USDT",
    vaultTVL: 287530000,
    vaultDexTVL: 2170000000,
    vBoost: false,
    wallets: 0,
    deposited: 0,
    apy: 12.5,
    daily: 0.03,
  },
];

export const farmsData: FarmData[] = [
  {
    farmName: "ETH-USDC",
    farmTVL: 318000000,
    farmDexTVL: 1103000000,
    apy: 19.6,
    leverage: 2, // Added leverage property
    apr: {
      yield_percentage: 15.3,
      token_borrowing_interest: 2.5,
      total_apr: 17.8,
      daily_apr: 0.0487,
    },
  },
  {
    farmName: "wstETH-ETH",
    farmTVL: 345140000,
    farmDexTVL: 1090000000,
    apy: 11.0,
    leverage: 2, // Added leverage property
    apr: {
      yield_percentage: 8.5,
      token_borrowing_interest: 1.8,
      total_apr: 10.3,
      daily_apr: 0.0282,
    },
  },
  {
    farmName: "ARB-ETH",
    farmTVL: 521180000,
    farmDexTVL: 840000000,
    apy: 14.5,
    leverage: 2, // Added leverage property
    apr: {
      yield_percentage: 11.2,
      token_borrowing_interest: 2.1,
      total_apr: 13.3,
      daily_apr: 0.0364,
    },
  },
  {
    farmName: "GMX-ETH",
    farmTVL: 636210000,
    farmDexTVL: 916530000,
    apy: 117.0,
    leverage: 2, // Added leverage property
    apr: {
      yield_percentage: 85.5,
      token_borrowing_interest: 5.2,
      total_apr: 90.7,
      daily_apr: 0.2485,
    },
  },
  {
    farmName: "wBTC-USDT",
    farmTVL: 287530000,
    farmDexTVL: 2170000000,
    apy: 12.5,
    leverage: 2, // Added leverage property
    apr: {
      yield_percentage: 9.8,
      token_borrowing_interest: 1.9,
      total_apr: 11.7,
      daily_apr: 0.0321,
    },
  },
];

export const borrowData: BorrowData[] = [
  {
    asset: {
      name: "Ethereum",
      symbol: "ETH",
    },
    totalSupplied: {
      amount: 1000000,
      value: 1000000,
    },
    supplyAPY: 10,
    totalBorrowed: {
      amount: 500000,
      value: 500000,
    },
    borrowAPY: 15,
    collateralFactor: 0.5,
  },
  {
    asset: {
      name: "Wrapped Liquid Staked Ethereum",
      symbol: "wstETH",
    },
    totalSupplied: {
      amount: 1200000,
      value: 1200000,
    },
    supplyAPY: 10,
    totalBorrowed: {
      amount: 600000,
      value: 600000,
    },
    borrowAPY: 15,
    collateralFactor: 0.5,
  },
  {
    asset: {
      name: "USD Coin",
      symbol: "USDC",
    },
    totalSupplied: {
      amount: 1500000,
      value: 1500000,
    },
    supplyAPY: 10,
    totalBorrowed: {
      amount: 750000,
      value: 750000,
    },
    borrowAPY: 15,
    collateralFactor: 0.5,
  },
  {
    asset: {
      name: "Tether",
      symbol: "USDT",
    },
    totalSupplied: {
      amount: 900000,
      value: 900000,
    },
    supplyAPY: 10,
    totalBorrowed: {
      amount: 450000,
      value: 450000,
    },
    borrowAPY: 15,
    collateralFactor: 0.5,
  },
  {
    asset: {
      name: "Dai Stablecoin",
      symbol: "DAI",
    },
    totalSupplied: {
      amount: 800000,
      value: 800000,
    },
    supplyAPY: 10,
    totalBorrowed: {
      amount: 400000,
      value: 400000,
    },
    borrowAPY: 15,
    collateralFactor: 0.5,
  },
  {
    asset: {
      name: "Wrapped Bitcoin",
      symbol: "WBTC",
    },
    totalSupplied: {
      amount: 750000,
      value: 750000,
    },
    supplyAPY: 8.5,
    totalBorrowed: {
      amount: 375000,
      value: 375000,
    },
    borrowAPY: 12.5,
    collateralFactor: 0.7,
  },
  {
    asset: {
      name: "Chainlink",
      symbol: "LINK",
    },
    totalSupplied: {
      amount: 350000,
      value: 350000,
    },
    supplyAPY: 6.2,
    totalBorrowed: {
      amount: 175000,
      value: 175000,
    },
    borrowAPY: 9.8,
    collateralFactor: 0.6,
  },
  {
    asset: {
      name: "Uniswap",
      symbol: "UNI",
    },
    totalSupplied: {
      amount: 250000,
      value: 250000,
    },
    supplyAPY: 5.8,
    totalBorrowed: {
      amount: 125000,
      value: 125000,
    },
    borrowAPY: 8.7,
    collateralFactor: 0.5,
  },
  {
    asset: {
      name: "Aave",
      symbol: "AAVE",
    },
    totalSupplied: {
      amount: 200000,
      value: 200000,
    },
    supplyAPY: 7.1,
    totalBorrowed: {
      amount: 100000,
      value: 100000,
    },
    borrowAPY: 11.2,
    collateralFactor: 0.65,
  },
  {
    asset: {
      name: "Synthetix Network Token",
      symbol: "SNX",
    },
    totalSupplied: {
      amount: 150000,
      value: 150000,
    },
    supplyAPY: 9.5,
    totalBorrowed: {
      amount: 75000,
      value: 75000,
    },
    borrowAPY: 14.3,
    collateralFactor: 0.4,
  },
  {
    asset: {
      name: "Maker",
      symbol: "MKR",
    },
    totalSupplied: {
      amount: 280000,
      value: 280000,
    },
    supplyAPY: 6.8,
    totalBorrowed: {
      amount: 140000,
      value: 140000,
    },
    borrowAPY: 10.5,
    collateralFactor: 0.55,
  },
  {
    asset: {
      name: "Compound",
      symbol: "COMP",
    },
    totalSupplied: {
      amount: 180000,
      value: 180000,
    },
    supplyAPY: 7.5,
    totalBorrowed: {
      amount: 90000,
      value: 90000,
    },
    borrowAPY: 11.8,
    collateralFactor: 0.6,
  },
  {
    asset: {
      name: "yearn.finance",
      symbol: "YFI",
    },
    totalSupplied: {
      amount: 120000,
      value: 120000,
    },
    supplyAPY: 8.2,
    totalBorrowed: {
      amount: 60000,
      value: 60000,
    },
    borrowAPY: 13.1,
    collateralFactor: 0.5,
  },
  {
    asset: {
      name: "SushiSwap",
      symbol: "SUSHI",
    },
    totalSupplied: {
      amount: 100000,
      value: 100000,
    },
    supplyAPY: 6.5,
    totalBorrowed: {
      amount: 50000,
      value: 50000,
    },
    borrowAPY: 9.9,
    collateralFactor: 0.45,
  },
];
