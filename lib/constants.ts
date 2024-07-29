import { FarmData } from "@/types/farm";
import { VaultData } from "@/types/vault";
import { BorrowData } from "@/types/borrow";

export const socialLinks = [
  {
    imageSrc: "/icons/social/twitter.png",
    url: "https://twitter.com/VicunaFinance",
  },
  {
    imageSrc: "/icons/social/medium.png",
    url: "https://medium.com/@vicunafinance",
  },
  {
    imageSrc: "/icons/social/github.png",
    url: "",
  },
  {
    imageSrc: "/icons/social/discord.png",
    url: "",
  },
  {
    imageSrc: "/icons/social/dune.png",
    url: "https://dune.com/vicunafinance",
  },
  {
    imageSrc: "/icons/social/docs.png",
    url: "https://vicuna-finance.gitbook.io/vicuna-finance",
  },
  // {
  //   imageSrc: "/icons/social/telegram.png",
  //   url: "",
  // },
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
    value: "$27.33",
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
    imageSrc2: "/icons/coins/ethereum.png",
    imageSrc1: "/icons/coins/usdc.png",
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
    imageSrc1: "/icons/coins/ethereum.png",
    imageSrc2: "/icons/coins/wsteth.png",
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
    imageSrc1: "/icons/coins/ethereum.png",
    imageSrc2: "/icons/coins/arbitrum one.png",
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
    imageSrc1: "/icons/coins/ethereum.png",
    imageSrc2: "/icons/coins/gmx.png",
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
    imageSrc2: "/icons/coins/wbtc.png",
    imageSrc1: "/icons/coins/usdt.png",
  },
];

export const farmsData: FarmData[] = [
  {
    farmName: "ETH-USDC",
    tokenSymbol1: "ETH",
    tokenSymbol2: "USDC",
    farmTVL: 318000000,
    farmDexTVL: 1103000000,
    apy: { from: 15.2, to: 19.6 },
    leverage: 2,
    apr: {
      yield_percentage: 15.3,
      token_borrowing_interest: 2.5,
      total_apr: 17.8,
      daily_apr: 0.0487,
    },
    imageSrc1: "/icons/coins/ethereum.png",
    imageSrc2: "/icons/coins/usdc.png",
  },
  {
    farmName: "wstETH-ETH",
    tokenSymbol1: "wstETH",
    tokenSymbol2: "ETH",
    farmTVL: 345140000,
    farmDexTVL: 1090000000,
    apy: { from: 8.7, to: 11.0 },
    leverage: 2,
    apr: {
      yield_percentage: 8.5,
      token_borrowing_interest: 1.8,
      total_apr: 10.3,
      daily_apr: 0.0282,
    },
    imageSrc1: "/icons/coins/ethereum.png",
    imageSrc2: "/icons/coins/wsteth.png",
  },
  {
    farmName: "ARB-ETH",
    tokenSymbol1: "ARB",
    tokenSymbol2: "ETH",
    farmTVL: 521180000,
    farmDexTVL: 840000000,
    apy: { from: 11.8, to: 14.5 },
    leverage: 2,
    apr: {
      yield_percentage: 11.2,
      token_borrowing_interest: 2.1,
      total_apr: 13.3,
      daily_apr: 0.0364,
    },
    imageSrc1: "/icons/coins/ethereum.png",
    imageSrc2: "/icons/coins/arbitrum one.png",
  },
  {
    farmName: "GMX-ETH",
    tokenSymbol1: "GMX",
    tokenSymbol2: "ETH",
    farmTVL: 636210000,
    farmDexTVL: 916530000,
    apy: { from: 95.3, to: 117.0 },
    leverage: 2,
    apr: {
      yield_percentage: 85.5,
      token_borrowing_interest: 5.2,
      total_apr: 90.7,
      daily_apr: 0.2485,
    },
    imageSrc1: "/icons/coins/ethereum.png",
    imageSrc2: "/icons/coins/gmx.png",
  },
  {
    farmName: "wBTC-USDT",

    farmTVL: 287530000,
    farmDexTVL: 2170000000,
    apy: { from: 10.1, to: 12.5 },
    leverage: 2,
    apr: {
      yield_percentage: 9.8,
      token_borrowing_interest: 1.9,
      total_apr: 11.7,
      daily_apr: 0.0321,
    },
    imageSrc2: "/icons/coins/wbtc.png",
    imageSrc1: "/icons/coins/usdt.png",
  },
];

export const borrowData: BorrowData[] = [
  {
    asset: {
      name: "Ethereum",
      symbol: "ETH",
      imageSrc: "/icons/coins/ethereum.png",
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
      imageSrc: "/icons/coins/wsteth.png",
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
      imageSrc: "/icons/coins/usdc.png",
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
      imageSrc: "/icons/coins/usdt.png",
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
      name: "Dai",
      symbol: "DAI",
      imageSrc: "/icons/coins/dai.png",
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
      imageSrc: "/icons/coins/wbtc.png",
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
      imageSrc: "/icons/coins/chainlink.png",
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
      name: "Radiant Capital",
      symbol: "RADIANT",
      imageSrc: "/icons/coins/radiant.png",
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
      name: "Arbitrum",
      symbol: "ARB",
      imageSrc: "/icons/coins/arbitrum one.png",
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
      name: "Camelot Token ",
      symbol: "GRAIL",
      imageSrc: "/icons/coins/grail.png",
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
      name: "GMX",
      symbol: "GMX",
      imageSrc: "/icons/coins/gmx.png",
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
];
