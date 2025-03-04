import { VaultDefinition } from "@/types";
import { sonic } from "viem/chains";

import {
  SWAPX_ICHI_WS_TYSG,
  SWAPX_ICHI_WS_TYSG_LP,
  SWAPX_ICHI_WS_GOGLZ,
  SWAPX_ICHI_WS_GOGLZ_LP,
  SWAPX_ICHI_WS_HEDGY,
  SWAPX_ICHI_WS_HEDGY_LP,
  SWAPX_ICHI_WS_SDOG,
  SWAPX_ICHI_WS_SDOG_LP,
  SWAPX_ICHI_WS_ECO,
  SWAPX_ICHI_WS_ECO_LP,
  SWAPX_ICHI_WS_SHIBA,
  SWAPX_ICHI_WS_SHIBA_LP,
  SWAPX_ICHI_USDC_USDT_USDC,
  SWAPX_ICHI_USDC_USDT_USDC_LP,
  SWAPX_ICHI_USDC_USDT_USDT,
  SWAPX_ICHI_USDC_USDT_USDT_LP,
  SWAPX_ICHI_WS_SWAPX_WS,
  SWAPX_ICHI_WS_SWAPX_WS_LP,
  SWAPX_ICHI_WS_USDC_WS,
  SWAPX_ICHI_WS_USDC_WS_LP,
  SWAPX_ICHI_WS_SACRA_SACRA,
  SWAPX_ICHI_WS_SACRA_SACRA_LP,
  SWAPX_ICHI_USDC_SWAPX_USDC,
  SWAPX_ICHI_USDC_SWAPX_USDC_LP,
  SWAPX_ICHI_USDC_WETH_USDC,
  SWAPX_ICHI_USDC_WETH_USDC_LP,
  SWAPX_ICHI_USDC_WETH_WETH,
  SWAPX_ICHI_USDC_WETH_WETH_LP,
  SWAPX_ICHI_WS_SCETH_WS,
  SWAPX_ICHI_WS_SCETH_WS_LP,
  SWAPX_ICHI_USDC_SCUSD_USDC,
  SWAPX_ICHI_USDC_SCUSD_USDC_LP,
  SWAPX_ICHI_WS_WETH_WS,
  SWAPX_ICHI_WS_WETH_WS_LP,
  SWAPX_ICHI_WS_STS_WS,
  SWAPX_ICHI_WS_STS_WS_LP,
  SWAPX_ICHI_USDC_STS_USDC,
  SWAPX_ICHI_USDC_STS_USDC_LP,
  SWAPX_ICHI_WS_OS_OS,
  SWAPX_ICHI_WS_OS_OS_LP,
  SWAPX_ICHI_USDC_SCUSD_SCUSD,
  SWAPX_ICHI_USDC_SCUSD_SCUSD_LP,
  SWAPX_ICHI_WS_OS_WS,
  SWAPX_ICHI_WS_OS_WS_LP,
  SWAPX_ICHI_WS_STS_STS,
  SWAPX_ICHI_WS_STS_STS_LP,
  BEETS_WS_STS,
  BEETS_WS_STS_LP,
  BEETS_USDC_SCUSD,
  BEETS_USDC_SCUSD_LP,
  BEETS_SCUSD_STS,
  BEETS_SCUSD_STS_LP,
  EQUALIZER_WS_USDC,
  EQUALIZER_WS_USDC_LP,
  EQUALIZER_WS_EQUAL,
  EQUALIZER_WS_EQUAL_LP,
  EQUALIZER_WS_STS,
  EQUALIZER_WS_STS_LP,
  EQUALIZER_USDC_WETH,
  EQUALIZER_USDC_WETH_LP,
  EQUALIZER_WS_BRUSH,
  EQUALIZER_WS_BRUSH_LP,
  EQUALIZER_WS_FSONIC,
  EQUALIZER_WS_FSONIC_LP,
  EQUALIZER_WS_GOGLZ,
  EQUALIZER_WS_GOGLZ_LP,
  EQUALIZER_WS_FIERY,
  EQUALIZER_WS_FIERY_LP,
  EQUALIZER_WS_ECO,
  EQUALIZER_WS_ECO_LP,
  EQUALIZER_WS_ANON,
  EQUALIZER_WS_ANON_LP,
  EQUALIZER_WS_HEDGY,
  EQUALIZER_WS_HEDGY_LP,
  EQUALIZER_WS_THC,
  EQUALIZER_WS_THC_LP,
  EQUALIZER_WS_WHALE,
  EQUALIZER_WS_WHALE_LP,
} from "@/constants";

import {
  wS,
  TYSG,
  GOGLZ,
  HEDGY,
  sDOG,
  ECO,
  SHIBA,
  SWPx,
  USDCe,
  SACRA,
  wETH,
  scETH,
  scUSD,
  stS,
  oS,
  EQUAL,
  BRUSH,
  fSonic,
  FIERY,
  ANON,
  THC,
  WHALE,
  USDT,
} from "@/constants";

export const VAULT_SWAPX_WS_TYSG: VaultDefinition = {
  id: "swapx-ws-tysg",
  receipt: SWAPX_ICHI_WS_TYSG,
  lp: SWAPX_ICHI_WS_TYSG_LP,
  tokens: [wS, TYSG],
  chainId: sonic.id,
};

export const VAULT_SWAPX_WS_GOGLZ: VaultDefinition = {
  id: "swapx-ws-goglz",
  receipt: SWAPX_ICHI_WS_GOGLZ,
  lp: SWAPX_ICHI_WS_GOGLZ_LP,
  tokens: [wS, GOGLZ],
  chainId: sonic.id,
};

export const VAULT_SWAPX_WS_HEDGY: VaultDefinition = {
  id: "swapx-ws-hedgy",
  receipt: SWAPX_ICHI_WS_HEDGY,
  lp: SWAPX_ICHI_WS_HEDGY_LP,
  tokens: [wS, HEDGY],
  chainId: sonic.id,
};

export const VAULT_SWAPX_WS_SDOG: VaultDefinition = {
  id: "swapx-ws-sdog",
  receipt: SWAPX_ICHI_WS_SDOG,
  lp: SWAPX_ICHI_WS_SDOG_LP,
  tokens: [wS, sDOG],
  chainId: sonic.id,
};

export const VAULT_SWAPX_WS_ECO: VaultDefinition = {
  id: "swapx-ws-eco",
  receipt: SWAPX_ICHI_WS_ECO,
  lp: SWAPX_ICHI_WS_ECO_LP,
  tokens: [wS, ECO],
  chainId: sonic.id,
};

export const VAULT_SWAPX_WS_SHIBA: VaultDefinition = {
  id: "swapx-ws-shiba",
  receipt: SWAPX_ICHI_WS_SHIBA,
  lp: SWAPX_ICHI_WS_SHIBA_LP,
  tokens: [wS, SHIBA],
  chainId: sonic.id,
};

export const VAULT_SWAPX_ICHI_USDC_USDT_USDC: VaultDefinition = {
  id: "swapx-ichi-usdc-usdt-usdc",
  receipt: SWAPX_ICHI_USDC_USDT_USDC,
  lp: SWAPX_ICHI_USDC_USDT_USDC_LP,
  tokens: [USDCe, USDT],
  chainId: sonic.id,
};

export const VAULT_SWAPX_ICHI_USDC_USDT_USDT: VaultDefinition = {
  id: "swapx-ichi-usdc-usdt-usdt",
  receipt: SWAPX_ICHI_USDC_USDT_USDT,
  lp: SWAPX_ICHI_USDC_USDT_USDT_LP,
  tokens: [USDT, USDCe],
  chainId: sonic.id,
};

export const VAULT_SWAPX_ICHI_WS_SWAPX_WS: VaultDefinition = {
  id: "swapx-ichi-ws-swapx-ws",
  receipt: SWAPX_ICHI_WS_SWAPX_WS,
  lp: SWAPX_ICHI_WS_SWAPX_WS_LP,
  tokens: [wS, SWPx],
  chainId: sonic.id,
};

export const VAULT_SWAPX_ICHI_WS_USDC_WS: VaultDefinition = {
  id: "swapx-ichi-ws-usdc-ws",
  receipt: SWAPX_ICHI_WS_USDC_WS,
  lp: SWAPX_ICHI_WS_USDC_WS_LP,
  tokens: [wS, USDCe],
  chainId: sonic.id,
};

export const VAULT_SWAPX_ICHI_WS_SACRA_SACRA: VaultDefinition = {
  id: "swapx-ichi-ws-sacra-sacra",
  receipt: SWAPX_ICHI_WS_SACRA_SACRA,
  lp: SWAPX_ICHI_WS_SACRA_SACRA_LP,
  tokens: [wS, SACRA],
  chainId: sonic.id,
};

export const VAULT_SWAPX_ICHI_USDC_SWAPX_USDC: VaultDefinition = {
  id: "swapx-ichi-usdc-swapx-usdc",
  receipt: SWAPX_ICHI_USDC_SWAPX_USDC,
  lp: SWAPX_ICHI_USDC_SWAPX_USDC_LP,
  tokens: [USDCe, SWPx],
  chainId: sonic.id,
};

export const VAULT_SWAPX_ICHI_USDC_WETH_USDC: VaultDefinition = {
  id: "swapx-ichi-usdc-weth-usdc",
  receipt: SWAPX_ICHI_USDC_WETH_USDC,
  lp: SWAPX_ICHI_USDC_WETH_USDC_LP,
  tokens: [USDCe, wETH],
  chainId: sonic.id,
};

export const VAULT_SWAPX_ICHI_USDC_WETH_WETH: VaultDefinition = {
  id: "swapx-ichi-usdc-weth-weth",
  receipt: SWAPX_ICHI_USDC_WETH_WETH,
  lp: SWAPX_ICHI_USDC_WETH_WETH_LP,
  tokens: [USDCe, wETH],
  chainId: sonic.id,
};

export const VAULT_SWAPX_ICHI_WS_SCETH_WS: VaultDefinition = {
  id: "swapx-ichi-ws-sceth-ws",
  receipt: SWAPX_ICHI_WS_SCETH_WS,
  lp: SWAPX_ICHI_WS_SCETH_WS_LP,
  tokens: [wS, scETH],
  chainId: sonic.id,
};

export const VAULT_SWAPX_ICHI_USDC_SCUSD_USDC: VaultDefinition = {
  id: "swapx-ichi-usdc-scusd-usdc",
  receipt: SWAPX_ICHI_USDC_SCUSD_USDC,
  lp: SWAPX_ICHI_USDC_SCUSD_USDC_LP,
  tokens: [USDCe, scUSD],
  chainId: sonic.id,
};

export const VAULT_SWAPX_ICHI_WS_WETH_WS: VaultDefinition = {
  id: "swapx-ichi-ws-weth-ws",
  receipt: SWAPX_ICHI_WS_WETH_WS,
  lp: SWAPX_ICHI_WS_WETH_WS_LP,
  tokens: [wS, wETH],
  chainId: sonic.id,
};

export const VAULT_SWAPX_ICHI_WS_STS_WS: VaultDefinition = {
  id: "swapx-ichi-ws-sts-ws",
  receipt: SWAPX_ICHI_WS_STS_WS,
  lp: SWAPX_ICHI_WS_STS_WS_LP,
  tokens: [wS, stS],
  chainId: sonic.id,
};

export const VAULT_SWAPX_ICHI_USDC_STS_USDC: VaultDefinition = {
  id: "swapx-ichi-usdc-sts-usdc",
  receipt: SWAPX_ICHI_USDC_STS_USDC,
  lp: SWAPX_ICHI_USDC_STS_USDC_LP,
  tokens: [USDCe, stS],
  chainId: sonic.id,
};

export const VAULT_SWAPX_ICHI_WS_OS_OS: VaultDefinition = {
  id: "swapx-ichi-ws-os-os",
  receipt: SWAPX_ICHI_WS_OS_OS,
  lp: SWAPX_ICHI_WS_OS_OS_LP,
  tokens: [wS, oS],
  chainId: sonic.id,
};

export const VAULT_SWAPX_ICHI_USDC_SCUSD_SCUSD: VaultDefinition = {
  id: "swapx-ichi-usdc-scusd-scusd",
  receipt: SWAPX_ICHI_USDC_SCUSD_SCUSD,
  lp: SWAPX_ICHI_USDC_SCUSD_SCUSD_LP,
  tokens: [USDCe, scUSD],
  chainId: sonic.id,
};

export const VAULT_SWAPX_ICHI_WS_OS_WS: VaultDefinition = {
  id: "swapx-ichi-ws-os-ws",
  receipt: SWAPX_ICHI_WS_OS_WS,
  lp: SWAPX_ICHI_WS_OS_WS_LP,
  tokens: [wS, oS],
  chainId: sonic.id,
};

export const VAULT_SWAPX_ICHI_WS_STS_STS: VaultDefinition = {
  id: "swapx-ichi-ws-sts-sts",
  receipt: SWAPX_ICHI_WS_STS_STS,
  lp: SWAPX_ICHI_WS_STS_STS_LP,
  tokens: [wS, stS],
  chainId: sonic.id,
};

export const VAULT_BEETS_WS_STS: VaultDefinition = {
  id: "beets-ws-sts",
  receipt: BEETS_WS_STS,
  lp: BEETS_WS_STS_LP,
  tokens: [wS, stS],
  chainId: sonic.id,
};

export const VAULT_BEETS_USDC_SCUSD: VaultDefinition = {
  id: "beets-usdc-scusd",
  receipt: BEETS_USDC_SCUSD,
  lp: BEETS_USDC_SCUSD_LP,
  tokens: [scUSD, USDCe],
  chainId: sonic.id,
};

export const VAULT_BEETS_SCUSD_STS: VaultDefinition = {
  id: "beets-scusd-sts",
  receipt: BEETS_SCUSD_STS,
  lp: BEETS_SCUSD_STS_LP,
  tokens: [scUSD, stS],
  chainId: sonic.id,
};

export const VAULT_EQUALIZER_WS_USDC: VaultDefinition = {
  id: "equalizer-ws-usdc",
  receipt: EQUALIZER_WS_USDC,
  lp: EQUALIZER_WS_USDC_LP,
  tokens: [wS, USDCe],
  chainId: sonic.id,
};

export const VAULT_EQUALIZER_WS_EQUAL: VaultDefinition = {
  id: "equalizer-ws-equal",
  receipt: EQUALIZER_WS_EQUAL,
  lp: EQUALIZER_WS_EQUAL_LP,
  tokens: [wS, EQUAL],
  chainId: sonic.id,
};

export const VAULT_EQUALIZER_WS_STS: VaultDefinition = {
  id: "equalizer-ws-sts",
  receipt: EQUALIZER_WS_STS,
  lp: EQUALIZER_WS_STS_LP,
  tokens: [wS, stS],
  chainId: sonic.id,
};

export const VAULT_EQUALIZER_USDC_WETH: VaultDefinition = {
  id: "equalizer-usdc-weth",
  receipt: EQUALIZER_USDC_WETH,
  lp: EQUALIZER_USDC_WETH_LP,
  tokens: [USDCe, wETH],
  chainId: sonic.id,
};

export const VAULT_EQUALIZER_WS_BRUSH: VaultDefinition = {
  id: "equalizer-ws-brush",
  receipt: EQUALIZER_WS_BRUSH,
  lp: EQUALIZER_WS_BRUSH_LP,
  tokens: [wS, BRUSH],
  chainId: sonic.id,
};

export const VAULT_EQUALIZER_WS_FSONIC: VaultDefinition = {
  id: "equalizer-ws-fsonic",
  receipt: EQUALIZER_WS_FSONIC,
  lp: EQUALIZER_WS_FSONIC_LP,
  tokens: [wS, fSonic],
  chainId: sonic.id,
};

export const VAULT_EQUALIZER_WS_GOGLZ: VaultDefinition = {
  id: "equalizer-ws-goglz",
  receipt: EQUALIZER_WS_GOGLZ,
  lp: EQUALIZER_WS_GOGLZ_LP,
  tokens: [wS, GOGLZ],
  chainId: sonic.id,
};

export const VAULT_EQUALIZER_WS_FIERY: VaultDefinition = {
  id: "equalizer-ws-fiery",
  receipt: EQUALIZER_WS_FIERY,
  lp: EQUALIZER_WS_FIERY_LP,
  tokens: [wS, FIERY],
  chainId: sonic.id,
};

export const VAULT_EQUALIZER_WS_ECO: VaultDefinition = {
  id: "equalizer-ws-eco",
  receipt: EQUALIZER_WS_ECO,
  lp: EQUALIZER_WS_ECO_LP,
  tokens: [wS, ECO],
  chainId: sonic.id,
};

export const VAULT_EQUALIZER_WS_ANON: VaultDefinition = {
  id: "equalizer-ws-anon",
  receipt: EQUALIZER_WS_ANON,
  lp: EQUALIZER_WS_ANON_LP,
  tokens: [wS, ANON],
  chainId: sonic.id,
};

export const VAULT_EQUALIZER_WS_HEDGY: VaultDefinition = {
  id: "equalizer-ws-hedgy",
  receipt: EQUALIZER_WS_HEDGY,
  lp: EQUALIZER_WS_HEDGY_LP,
  tokens: [wS, HEDGY],
  chainId: sonic.id,
};

export const VAULT_EQUALIZER_WS_THC: VaultDefinition = {
  id: "equalizer-ws-thc",
  receipt: EQUALIZER_WS_THC,
  lp: EQUALIZER_WS_THC_LP,
  tokens: [wS, THC],
  chainId: sonic.id,
};

export const VAULT_EQUALIZER_WS_WHALE: VaultDefinition = {
  id: "equalizer-ws-whale",
  receipt: EQUALIZER_WS_WHALE,
  lp: EQUALIZER_WS_WHALE_LP,
  tokens: [wS, WHALE],
  chainId: sonic.id,
};

export const VAULTS: VaultDefinition[] = [
  VAULT_SWAPX_WS_TYSG,
  VAULT_SWAPX_WS_GOGLZ,
  VAULT_SWAPX_WS_HEDGY,
  VAULT_SWAPX_WS_SDOG,
  VAULT_SWAPX_WS_ECO,
  VAULT_SWAPX_WS_SHIBA,
  VAULT_SWAPX_ICHI_USDC_USDT_USDC,
  VAULT_SWAPX_ICHI_USDC_USDT_USDT,
  VAULT_SWAPX_ICHI_WS_SWAPX_WS,
  VAULT_SWAPX_ICHI_WS_USDC_WS,
  VAULT_SWAPX_ICHI_WS_SACRA_SACRA,
  VAULT_SWAPX_ICHI_USDC_SWAPX_USDC,
  VAULT_SWAPX_ICHI_USDC_WETH_USDC,
  VAULT_SWAPX_ICHI_USDC_WETH_WETH,
  VAULT_SWAPX_ICHI_WS_SCETH_WS,
  VAULT_SWAPX_ICHI_USDC_SCUSD_USDC,
  VAULT_SWAPX_ICHI_WS_WETH_WS,
  VAULT_SWAPX_ICHI_WS_STS_WS,
  VAULT_SWAPX_ICHI_USDC_STS_USDC,
  VAULT_SWAPX_ICHI_WS_OS_OS,
  VAULT_SWAPX_ICHI_USDC_SCUSD_SCUSD,
  VAULT_SWAPX_ICHI_WS_OS_WS,
  VAULT_SWAPX_ICHI_WS_STS_STS,
  VAULT_BEETS_WS_STS,
  VAULT_BEETS_USDC_SCUSD,
  VAULT_BEETS_SCUSD_STS,
  VAULT_EQUALIZER_WS_USDC,
  VAULT_EQUALIZER_WS_EQUAL,
  VAULT_EQUALIZER_WS_STS,
  VAULT_EQUALIZER_USDC_WETH,
  VAULT_EQUALIZER_WS_BRUSH,
  VAULT_EQUALIZER_WS_FSONIC,
  VAULT_EQUALIZER_WS_GOGLZ,
  VAULT_EQUALIZER_WS_FIERY,
  VAULT_EQUALIZER_WS_ECO,
  VAULT_EQUALIZER_WS_ANON,
  VAULT_EQUALIZER_WS_HEDGY,
  VAULT_EQUALIZER_WS_THC,
  VAULT_EQUALIZER_WS_WHALE,
];

export const getVaultById = (id: string) =>
  VAULTS.find((vault) => vault.id === id);
