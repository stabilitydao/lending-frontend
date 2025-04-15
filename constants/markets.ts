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
  VAULT_BEETS_WS_STS,
  VAULT_SWAPX_ICHI_SCETH_WETH_WETH,
  VAULT_SWAPX_ICHI_SCETH_WETH_SCETH,
} from "@/constants";

const subMarketHealthBar = new HealthBarDefinition(
  [1.03, 1.07, 1.12, 2],
  ["red", "orange", "yellow", "green"]
);

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
  // sonic: {
  //   id: 1,
  //   name: "Sonic Market",
  //   description:
  //     "A market exclusively made of Sonic-based assets. Its high correlation makes liquidation much less of a risk.",
  //   tokens: [
  //     VAULT_SWAPX_ICHI_WS_OS_OS.receipt,
  //     VAULT_SWAPX_ICHI_WS_OS_WS.receipt,
  //     VAULT_SWAPX_ICHI_WS_STS_STS.receipt,
  //     VAULT_SWAPX_ICHI_WS_STS_WS.receipt,
  //     VAULT_BEETS_WS_STS.receipt,
  //     S,
  //     wOS,
  //     stS,
  //   ],
  //   POOL_ADDRESS_PROVIDER: "0x64592138883327Ab8009E458231a4b731f2FD8F5",
  //   AAVE_POOL: "0x3C7FEA4d4c3EbBf19E73b6C99CE4B8884B87Bfa6",
  //   NATIVE_TOKEN_GATEWAY: "0x70a0D1635b810F6ca284D4982C32C839587a538F",
  //   LOOPING: {
  //     LOOPING_CONTRACT: "0x144f2A9316509fe23FE2D184CCAc5330ab8bcB15",
  //     UNLOOPING_CONTRACT: "0x6E0B40dAaF2083211A85975aCF7A0f4468129042",
  //     VAULTS: [
  //       VAULT_SWAPX_ICHI_WS_STS_STS.receipt,
  //       VAULT_SWAPX_ICHI_WS_STS_WS.receipt,
  //       VAULT_SWAPX_ICHI_WS_OS_OS.receipt,
  //       VAULT_SWAPX_ICHI_WS_OS_WS.receipt,
  //       // VAULT_BEETS_WS_STS.receipt,
  //     ],
  //     IO: [wS, stS, wOS],
  //   },
  //   chainId: sonic.id,
  //   healthBar: subMarketHealthBar,
  // },
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
