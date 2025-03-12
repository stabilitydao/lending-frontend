import { HealthBarDefinition, MarketDefinition } from "@/types";
import { sonic } from "viem/chains";
import {
  S,
  scUSD,
  USDCe,
  wETH,
  USDT,
  wOS,
  stS,
  VAULT_SWAPX_ICHI_WS_OS_OS,
  VAULT_SWAPX_ICHI_WS_OS_WS,
  VAULT_SWAPX_ICHI_WS_STS_STS,
  VAULT_SWAPX_ICHI_WS_STS_WS,
  scETH,
  VAULT_SWAPX_ICHI_USDC_SCUSD_SCUSD,
  VAULT_SWAPX_ICHI_USDC_SCUSD_USDC,
  VAULT_SWAPX_ICHI_USDC_USDT_USDC,
  VAULT_SWAPX_ICHI_USDC_USDT_USDT,
  VAULT_BEETS_USDC_SCUSD,
  wS,
} from "@/constants";

const subMarketHealthBar = new HealthBarDefinition(
  [1.03, 1.07, 1.12, 2],
  ["red", "orange", "yellow", "green"]
);

export const MARKET_DEFINITIONS: {
  [key: string]: MarketDefinition;
} = {
  "Main Protocol": {
    tokens: [S, USDCe, scUSD, wETH, /*scETH,*/ USDT, wOS, stS],
    POOL_ADDRESS_PROVIDER: "0x24835e3Da1B402f8037e3ce6dE4a701677fa1b54",
    AAVE_POOL: "0xaa1C02a83362BcE106dFf6eB65282fE8B97A1665",
    NATIVE_TOKEN_GATEWAY: "0xbE0B2230B842be6A37188038a58755534dC9E999",
    chainId: sonic.id,
    healthBar: new HealthBarDefinition(
      [1.1, 1.2, 1.4, 5],
      ["red", "orange", "yellow", "green"]
    ),
  },
  "Sonic Market": {
    tokens: [
      // VAULT_SWAPX_ICHI_WS_OS_OS.receipt,
      // VAULT_SWAPX_ICHI_WS_OS_WS.receipt,
      VAULT_SWAPX_ICHI_WS_STS_STS.receipt,
      VAULT_SWAPX_ICHI_WS_STS_WS.receipt,
      S,
      // wOS,
      stS,
    ],
    POOL_ADDRESS_PROVIDER: "0x64592138883327Ab8009E458231a4b731f2FD8F5",
    AAVE_POOL: "0x3C7FEA4d4c3EbBf19E73b6C99CE4B8884B87Bfa6",
    NATIVE_TOKEN_GATEWAY: "0x70a0D1635b810F6ca284D4982C32C839587a538F",
    LOOPING: {
      CONTRACT: "0xa2fD8cf9D7e1FE254876D741eC8F7c8eBC2924FE",
      VAULTS: [
        VAULT_SWAPX_ICHI_WS_STS_STS.receipt,
        VAULT_SWAPX_ICHI_WS_STS_WS.receipt,
      ],
      IO: [wS, stS],
    },
    chainId: sonic.id,
    healthBar: subMarketHealthBar,
  },
  "Stable Market": {
    tokens: [
      VAULT_SWAPX_ICHI_USDC_SCUSD_SCUSD.receipt,
      VAULT_SWAPX_ICHI_USDC_SCUSD_USDC.receipt,
      VAULT_SWAPX_ICHI_USDC_USDT_USDC.receipt,
      VAULT_SWAPX_ICHI_USDC_USDT_USDT.receipt,
      // VAULT_BEETS_USDC_SCUSD.receipt,
      scUSD,
      USDCe,
      USDT,
    ],
    POOL_ADDRESS_PROVIDER: "0xd01A2DE5e1Dd7a0826D8B3367A82FE12b4A640b8",
    AAVE_POOL: "0x220fc1bEcC9bbE1a9dD81795F0505cC36E1B2563",
    NATIVE_TOKEN_GATEWAY: "0x0",
    LOOPING: {
      CONTRACT: "0x90141c29FBc7EcaDAA1Aa3A5BF49ae9312949Cf8",
      VAULTS: [
        VAULT_SWAPX_ICHI_USDC_SCUSD_SCUSD.receipt,
        VAULT_SWAPX_ICHI_USDC_SCUSD_USDC.receipt,
        VAULT_SWAPX_ICHI_USDC_USDT_USDC.receipt,
        VAULT_SWAPX_ICHI_USDC_USDT_USDT.receipt,
      ],
      IO: [scUSD, USDCe, USDT],
    },
    chainId: sonic.id,
    healthBar: subMarketHealthBar,
  },
};

export const DEFAULT_MARKET_ID = "Main Protocol";
