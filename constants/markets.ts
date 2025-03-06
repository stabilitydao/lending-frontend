import { MarketDefinition } from "@/types";
import { sonic } from "viem/chains";
import {
  S,
  scUSD,
  USDCe,
  wETH,
  USDT,
  wOS,
  stS,
  SWAPX_ICHI_WS_OS_OS,
  SWAPX_ICHI_WS_OS_WS,
  SWAPX_ICHI_WS_STS_STS,
  SWAPX_ICHI_WS_STS_WS,
  scETH,
  SWAPX_ICHI_USDC_SCUSD_SCUSD,
  SWAPX_ICHI_USDC_SCUSD_USDC,
  SWAPX_ICHI_USDC_USDT_USDC,
  SWAPX_ICHI_USDC_USDT_USDT,
  BEETS_USDC_SCUSD,
} from "@/constants";

export const MARKET_DEFINITIONS: {
  [key: string]: MarketDefinition;
} = {
  "Main Protocol": {
    tokens: [S, USDCe, scUSD, wETH, /*scETH,*/ USDT, wOS, stS],
    POOL_ADDRESS_PROVIDER: "0x24835e3Da1B402f8037e3ce6dE4a701677fa1b54",
    AAVE_POOL: "0xaa1C02a83362BcE106dFf6eB65282fE8B97A1665",
    NATIVE_TOKEN_GATEWAY: "0xbE0B2230B842be6A37188038a58755534dC9E999",
    chainID: sonic.id,
  },
  "Sonic Market": {
    tokens: [
      SWAPX_ICHI_WS_OS_OS,
      SWAPX_ICHI_WS_OS_WS,
      SWAPX_ICHI_WS_STS_STS,
      SWAPX_ICHI_WS_STS_WS,
      S,
      wOS,
      stS,
    ],
    POOL_ADDRESS_PROVIDER: "0x8047c361318704340d8736D187Fc80a0277687d5",
    AAVE_POOL: "0xF2C096338B9bEbBbEc6c4e5d0Fd58ee5Af2E4a45",
    NATIVE_TOKEN_GATEWAY: "0x9318B8D3C7C3Ec17AE3197268EacA80881C69Cd7",
    chainID: sonic.id,
  },
  "Stable Market": {
    tokens: [
      SWAPX_ICHI_USDC_SCUSD_SCUSD,
      SWAPX_ICHI_USDC_SCUSD_USDC,
      SWAPX_ICHI_USDC_USDT_USDC,
      SWAPX_ICHI_USDC_USDT_USDT,
      BEETS_USDC_SCUSD,
      scUSD,
      USDCe,
      USDT,
    ],
    POOL_ADDRESS_PROVIDER: "0xEe2d2A17216830Add21cC3616552266d7233989e",
    AAVE_POOL: "0xAC00f2Bd7849f7Ce2C8EEDCe7C962c9535b4c606",
    NATIVE_TOKEN_GATEWAY: "0x0",
    chainID: sonic.id,
  },
};

export const DEFAULT_MARKET_ID = "Main Protocol";

export const HEALTHBAR_COLORS = [
  {
    name: "Liquidation",
    bg: "bg-black",
    text: "text-black",
    min: -Infinity,
    max: 1,
  },
  {
    name: "red",
    bg: "bg-red-500",
    text: "text-red-500",
    min: 1,
    max: 1.1,
  },
  {
    name: "orange",
    bg: "bg-orange-500",
    text: "text-orange-500",
    min: 1.1,
    max: 1.2,
  },
  {
    name: "yellow",
    bg: "bg-yellow-500",
    text: "text-yellow-500",
    min: 1.2,
    max: 1.4,
  },
  {
    name: "green",
    bg: "bg-green-500",
    text: "text-green-500",
    min: 1.4,
    max: Infinity,
  },
];

export const healthData = (health: number) =>
  HEALTHBAR_COLORS.find(({ min, max }) => health > min && health <= max) || {
    name: "",
    bg: "",
    text: "",
    min: 0,
    max: 0,
  };
