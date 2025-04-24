import { HealthBarDefinition, MarketDefinition } from "@/types";
import { sonic } from "viem/chains";
import { USDCe, wETH, USDT, wOS, stS, scUSD, S, sbUSD } from "@/constants";

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
    name: "Main Protocol",
  },
  sbUSD: {
    name: "sbUSD Market",
  },
};

export const MARKET_DEFINITIONS: {
  [key: string]: MarketDefinition;
} = {
  main: {
    id: 0,
    name: "Main Protocol",
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
  sbUSD: {
    id: 1,
    name: "sbUSD Market",
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
