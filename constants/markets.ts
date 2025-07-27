import { HealthBarDefinition, MarketDefinition } from "@/types";
import { sonic } from "viem/chains";
import {
  USDCe,
  wETH,
  USDT,
  wOS,
  stS,
  scUSD,
  S,
  sbUSD,
  YTscUSD,
  xUSD,
  cxScUSD,
  cxUSDC,
  cxWS,
  wS,
  wmetaUSD,
} from "@/constants";

const subMarketHealthBar = new HealthBarDefinition(
  [1.03, 1.07, 1.12, 2],
  ["red", "orange", "yellow", "green"]
);

export const LEGACY_MARKET_DEFINITIONS: {
  [key: string]: {
    name: string;
  };
} = {
  main: {
    name: "Main Market",
  },
  brunch: {
    name: "Brunch Market",
  },
  stablejack: {
    name: "Stable Jack Market",
  },
  stream: {
    name: "Stream Market",
  },
  credix: {
    name: "Credix Market",
  },
  wmetaUSD: {
    name: "wmetaUSD Market",
  },
};

export const MARKET_DEFINITIONS: {
  [key: string]: MarketDefinition;
} = {
  main: {
    id: 0,
    name: "Main Market",
    description: "A simple market to lend and borrow assets.",
    tokens: [S, USDCe, scUSD, wETH, USDT, wOS, stS],
    POOL_ADDRESS_PROVIDER: "0x24835e3Da1B402f8037e3ce6dE4a701677fa1b54",
    AAVE_POOL: "0xaa1C02a83362BcE106dFf6eB65282fE8B97A1665",
    NATIVE_TOKEN_GATEWAY: "0xbE0B2230B842be6A37188038a58755534dC9E999",
    chainId: sonic.id,
    healthBar: new HealthBarDefinition(
      [1.1, 1.2, 1.4, 5],
      ["red", "orange", "yellow", "green"]
    ),
  },
  brunch: {
    id: 1,
    name: "Brunch Market",
    description:
      "A market exclusively made of Sonic-based assets. Its high correlation makes liquidation much less of a risk.",
    tokens: [sbUSD, USDCe],
    POOL_ADDRESS_PROVIDER: "0xC0512947845cCe3a32e58Efc3B4526Dd1D11F6af",
    AAVE_POOL: "0x680F8A574b0273f26A314cA61466c0A4f1E2d95e",
    NATIVE_TOKEN_GATEWAY: "0x7B41ed35bB96c193202eb8F79B8f8a8B05d45234",
    LOOPING: {
      LOOPING_CONTRACT: "0x0",
      UNLOOPING_CONTRACT: "0x0",
      VAULTS: [],
      IO: [],
    },
    chainId: sonic.id,
    healthBar: subMarketHealthBar,
  },
  stablejack: {
    id: 2,
    name: "Stable Jack Market",
    description: "",
    tokens: [YTscUSD, USDCe, scUSD],
    POOL_ADDRESS_PROVIDER: "0x3E3aAB589Ba86fB8f40CEB69332bb44E9B1411D4",
    AAVE_POOL: "0x4895151C8eB560c0DE6Bd29A3916610DdfCEB094",
    NATIVE_TOKEN_GATEWAY: "0x1528CF6A8Cf43399114F92802de0ef0D13577418",
    LOOPING: {
      LOOPING_CONTRACT: "0x0",
      UNLOOPING_CONTRACT: "0x0",
      VAULTS: [],
      IO: [],
    },
    chainId: sonic.id,
    healthBar: subMarketHealthBar,
  },
  stream: {
    id: 3,
    name: "Stream Market",
    description: "",
    tokens: [xUSD, USDCe],
    POOL_ADDRESS_PROVIDER: "0xCc31959682Ad726A9bcde9bbD41c89f36c03E743",
    AAVE_POOL: "0x1f672BD230D0FC2Ee9A75D2037a92CC1225A4Ad8",
    NATIVE_TOKEN_GATEWAY: "0xBEB0822A79FAbF01Cac932BC924e1734147Ee797",
    LOOPING: {
      LOOPING_CONTRACT: "0x0",
      UNLOOPING_CONTRACT: "0x0",
      VAULTS: [],
      IO: [],
    },
    chainId: sonic.id,
    healthBar: subMarketHealthBar,
  },
  credix: {
    id: 4,
    name: "Credix Market",
    description: "",
    tokens: [cxScUSD, cxWS, cxUSDC, scUSD, USDCe, wS],
    POOL_ADDRESS_PROVIDER: "0x4b139f6E816934D580D9305Ca0f115145f698973",
    AAVE_POOL: "0x0850A9759165B25832E2cAa3dB3f2d04dc583D4E",
    NATIVE_TOKEN_GATEWAY: "0x8510cEBf9803a18F45f9D346D024c75CE42B2e6b",
    LOOPING: {
      LOOPING_CONTRACT: "0x0",
      UNLOOPING_CONTRACT: "0x0",
      VAULTS: [],
      IO: [],
    },
    chainId: sonic.id,
    healthBar: subMarketHealthBar,
  },
  wmetaUSD: {
    id: 5,
    name: "wmetaUSD Market",
    description: "",
    tokens: [wmetaUSD, USDCe],
    POOL_ADDRESS_PROVIDER: "0x5CC16D46fdf657651e4F4eeA4470DD215E4Af7bd",
    AAVE_POOL: "0x2a32dA908B5E646c0afE567AC077f10d56F0af26",
    NATIVE_TOKEN_GATEWAY: "0x9450D69DF9D8eF8044B59218cF5CD74b0F63C370",
    LOOPING: {
      LOOPING_CONTRACT: "0x0",
      UNLOOPING_CONTRACT: "0x0",
      VAULTS: [],
      IO: [],
    },
    chainId: sonic.id,
    healthBar: subMarketHealthBar,
  },
  // stables: {
  //   id: 2,
  //   name: "Stable Market",
  //   description:
  //     "A market exclusively made of stablecoins. Its low volatility makes liquidation much less of a risk.",
  //   tokens: [
  //     VAULT_SWAPX_ICHI_USDC_SCUSD_SCUSD.receipt,
  //     VAULT_SWAPX_ICHI_USDC_SCUSD_USDC.receipt,
  //     VAULT_SWAPX_ICHI_USDC_USDT_USDC.receipt,
  //     VAULT_SWAPX_ICHI_USDC_USDT_USDT.receipt,
  //     VAULT_BEETS_USDC_SCUSD.receipt,
  //     scUSD,
  //     USDCe,
  //     USDT,
  //   ],
  //   POOL_ADDRESS_PROVIDER: "0xd01A2DE5e1Dd7a0826D8B3367A82FE12b4A640b8",
  //   AAVE_POOL: "0x220fc1bEcC9bbE1a9dD81795F0505cC36E1B2563",
  //   NATIVE_TOKEN_GATEWAY: "0x0",
  //   LOOPING: {
  //     LOOPING_CONTRACT: "0xa9a42940c45685FC52f6e9b0DC3Ec9e6F7A86E6A",
  //     UNLOOPING_CONTRACT: "0x55b06504b746b6b5CF2355F51E1cE08C2aEA2821",
  //     VAULTS: [
  //       VAULT_SWAPX_ICHI_USDC_SCUSD_SCUSD.receipt,
  //       VAULT_SWAPX_ICHI_USDC_SCUSD_USDC.receipt,
  //       VAULT_SWAPX_ICHI_USDC_USDT_USDC.receipt,
  //       VAULT_SWAPX_ICHI_USDC_USDT_USDT.receipt,
  //       // VAULT_BEETS_USDC_SCUSD.receipt,
  //     ],
  //     IO: [scUSD, USDCe, USDT],
  //   },
  //   chainId: sonic.id,
  //   healthBar: subMarketHealthBar,
  // },
  // eth: {
  //   id: 3,
  //   name: "Ethereum Market",
  //   description:
  //     "A market exclusively made of Ethereum-based assets. Its high correlation makes liquidation much less of a risk.",
  //   tokens: [
  //     wETH,
  //     scETH,
  //     VAULT_SWAPX_ICHI_SCETH_WETH_WETH.receipt,
  //     VAULT_SWAPX_ICHI_SCETH_WETH_SCETH.receipt,
  //   ],
  //   POOL_ADDRESS_PROVIDER: "0x0",
  //   AAVE_POOL: "0x0",
  //   NATIVE_TOKEN_GATEWAY: "0x0",
  //   LOOPING: {
  //     LOOPING_CONTRACT: "0x0",
  //     UNLOOPING_CONTRACT: "0x0",
  //     VAULTS: [
  //       VAULT_SWAPX_ICHI_SCETH_WETH_WETH.receipt,
  //       VAULT_SWAPX_ICHI_SCETH_WETH_SCETH.receipt,
  //     ],
  //     IO: [wETH, scETH],
  //   },
  //   chainId: sonic.id,
  //   healthBar: subMarketHealthBar,
  // },
};

export const DEFAULT_MARKET_ID = "main";
