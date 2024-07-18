import { FarmData } from "@/types/farm";
import { VaultData } from "@/types/vault";

export const socialLinks = [
  {
    imageSrc: "/icons/twitter.svg",
    url: "https://x.com/llamafinance",
  },
  {
    imageSrc: "/icons/medium.svg",
    url: "https://medium.com/llamafinance",
  },
  {
    imageSrc: "/icons/github.svg",
    url: "https://github.com/llamafinance",
  },
  {
    imageSrc: "/icons/discord.svg",
    url: "https://discord.gg/llamafinance",
  },
  {
    imageSrc: "/icons/dune.svg",
    url: "https://dune.com/llamafinance",
  },
  {
    imageSrc: "/icons/linkedin.svg",
    url: "https://linkedin.com/company/llamafinance",
  },
  {
    imageSrc: "/icons/telegram.svg",
    url: "https://t.me/llamafinance",
  },
];

export const navLinks = [
  {
    label: "Borrow/Lend",
    href: "/borrow-lend",
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
    apr: {
      yield_percentage: 9.8,
      token_borrowing_interest: 1.9,
      total_apr: 11.7,
      daily_apr: 0.0321,
    },
  },
];
