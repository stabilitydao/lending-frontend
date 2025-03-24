import { frxETH, frxUSD, scBTC, sfrxETH, Token, wBTC } from "@/constants";

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
import { Address } from "viem";

export let ALL_VAULTS: VaultDefinition[] = [];

export const getVaultById = (id: string) =>
  ALL_VAULTS.find((vault) => vault.id === id);

export const getVaultByAddress = (address: Address) =>
  ALL_VAULTS.find(
    (vault) => vault.receipt.address.toLowerCase() === address.toLowerCase()
  );

export const getVaultByLPAddress = (address: Address) =>
  ALL_VAULTS.find(
    (vault) => vault.lp.address.toLowerCase() === address.toLowerCase()
  );

export class VaultDefinition {
  id: string;
  receipt: Token;
  lp: Token;
  tokens: Token[];
  chainId: number;

  constructor({
    id,
    name,
    symbol,
    pair,
    vaultAddress,
    lpAddress,
    icon,
    buyLink,
    decimals = 18,
  }: {
    id: string;
    name: string;
    symbol: string;
    pair: Token[];
    vaultAddress: Address;
    lpAddress: Address;
    icon: string;
    buyLink: string;
    decimals?: number;
  }) {
    this.id = id;
    if (pair[0].chainId !== pair[1].chainId) {
      throw new Error("Tokens must be on the same chain");
    }
    this.chainId = pair[0].chainId;
    this.receipt = new Token({
      name,
      symbol,
      address: vaultAddress,
      decimals,
      icon,
      chainId: this.chainId,
      pair,
      buyLink,
    });
    this.lp = new Token({
      name: name + " LP",
      symbol,
      address: lpAddress,
      decimals,
      icon,
      chainId: this.chainId,
      pair,
      buyLink,
    });
    this.tokens = pair;
    ALL_VAULTS.push(this);
  }
}
export const VAULT_SWAPX_WS_TYSG = new VaultDefinition({
  id: "swapx-ws-tysg",
  name: "wS-TYSG",
  symbol: "wS-TYSG",
  pair: [wS, TYSG],
  vaultAddress: "0x90decf248b0e386d7538437cb548dad9d61bce24",
  lpAddress: "0x24f5cd888057A721F1ACD7CBA1Afa7A8384c3e12",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Ftysg",
});

export const VAULT_SWAPX_WS_GOGLZ = new VaultDefinition({
  id: "swapx-ws-goglz",
  name: "wS-GOGLZ",
  symbol: "wS-GOGLZ",
  pair: [wS, GOGLZ],
  vaultAddress: "0xe3243b741a54a1a5d29bcd7856c7b70cfdd76f1b",
  lpAddress: "0xE6aA7CA47DDb6203e71d4D1497959Da51F87AA98",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fgoglz",
});

export const VAULT_SWAPX_WS_HEDGY = new VaultDefinition({
  id: "swapx-ws-hedgy",
  name: "wS-HEDGY",
  symbol: "wS-HEDGY",
  pair: [wS, HEDGY],
  vaultAddress: "0x517cf3dd00b7bae948b42adb5532d32c5e665580",
  lpAddress: "0x36e0c9ee4DA91101B6509586B820190015E9114f",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fhedgy",
});

export const VAULT_SWAPX_WS_SDOG = new VaultDefinition({
  id: "swapx-ws-sdog",
  name: "wS-sDOG",
  symbol: "wS-sDOG",
  pair: [wS, sDOG],
  vaultAddress: "0xbae81e65ff1a9e3170afadb23d7a2b6cec6079b8",
  lpAddress: "0xbF23E7fC58b7094D17fe52ef8bdE979aa06b8916",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fsdog",
});

export const VAULT_SWAPX_WS_ECO = new VaultDefinition({
  id: "swapx-ws-eco",
  name: "wS-ECO",
  symbol: "wS-ECO",
  pair: [wS, ECO],
  vaultAddress: "0x975ba9fcaeb197c3e615f9dffcafe8c7fcd4d8ea",
  lpAddress: "0x03281b6F11D943157A973cDB6B39B747501BDBBa",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Feco",
});

export const VAULT_SWAPX_WS_SHIBA = new VaultDefinition({
  id: "swapx-ws-shiba",
  name: "wS-SHIBA",
  symbol: "wS-SHIBA",
  pair: [wS, SHIBA],
  vaultAddress: "0xdf78107cf7d4568e1e5a750a3cc9558034b07502",
  lpAddress: "0xb624F982eEc46B97893F0fE19FB27A4C6FB7BC48",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fshiba",
});

export const VAULT_SWAPX_ICHI_USDC_USDT_USDC = new VaultDefinition({
  id: "swapx-ichi-usdt-usdc-usdc",
  name: "USDT-USDC.e (USDC.e)",
  symbol: "USDC-USDT",
  pair: [USDCe, USDT],
  vaultAddress: "0xb8330F4027b6cb4402C5d02D535c87579cab2477",
  lpAddress: "0xC751b73E97e2Bd7D141989Ba418772223dB93664",
  icon: "/icons/coins/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fusdt",
});

export const VAULT_SWAPX_ICHI_USDC_USDT_USDT = new VaultDefinition({
  id: "swapx-ichi-usdt-usdc-usdt",
  name: "USDT-USDC.e (USDT)",
  symbol: "USDT-USDC",
  pair: [USDT, USDCe],
  vaultAddress: "0xe10a0F4F7831fC7049F271686005F9a8D274fCeE",
  lpAddress: "0x7c0e966462208dDBC7bC7621a458aa09C0e4A525",
  icon: "/icons/coins/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fusdt",
});

export const VAULT_SWAPX_ICHI_WS_SWAPX_WS = new VaultDefinition({
  id: "swapx-ichi-ws-swapx-ws",
  name: "wS-SWPx (wS)",
  symbol: "wS-SWPx",
  pair: [wS, SWPx],
  vaultAddress: "0x183d7f69F581A97A5343dF8828b1303bf9eC27b0",
  lpAddress: "0xfDEc32751Faade573B285C8CC606677beE656A4C",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fs",
});

export const VAULT_SWAPX_ICHI_WS_USDC_WS = new VaultDefinition({
  id: "swapx-ichi-ws-usdc-ws",
  name: "wS-USDC.e (wS)",
  symbol: "wS-USDC.e",
  pair: [wS, USDCe],
  vaultAddress: "0xb57A91b7DD83E2E3B7cDf17D0912B03Bc0bf7327",
  lpAddress: "0x5F62d612c69fF7BE3FBd9a0cD530D57bCbC7b642",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2FUSDC.e",
});

export const VAULT_SWAPX_ICHI_WS_SACRA_SACRA = new VaultDefinition({
  id: "swapx-ichi-ws-sacra-sacra",
  name: "wS-SACRA (SACRA)",
  symbol: "wS-SACRA",
  pair: [wS, SACRA],
  vaultAddress: "0xE253373E5e424BE330DC41837054462f6e6d66aE",
  lpAddress: "0x13939Ac0f09dADe88F8b1d86C26daD934d973081",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fsacra",
});

export const VAULT_SWAPX_ICHI_USDC_SWAPX_USDC = new VaultDefinition({
  id: "swapx-ichi-usdc-swapx-usdc",
  name: "USDC.e-SWPx (USDC.e)",
  symbol: "USDC.e-SWPx",
  pair: [USDCe, SWPx],
  vaultAddress: "0xc90781e2fbBb748Dae79EE179173eF0C783476e8",
  lpAddress: "0x5De651be21beeDe8ABE808D1425b278ac4a3604B",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fs",
});

export const VAULT_SWAPX_ICHI_USDC_WETH_USDC = new VaultDefinition({
  id: "swapx-ichi-usdc-weth-usdc",
  name: "USDC.e-wETH (USDC.e)",
  symbol: "USDC.e-wETH",
  pair: [USDCe, wETH],
  vaultAddress: "0x1d9cf65B2468075A38fFE5d32D83E31AC1539Ccc",
  lpAddress: "0x048d4F8DdeE53dD41c35a1a2a691C0Ef91eff3D6",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fweth",
});

export const VAULT_SWAPX_ICHI_USDC_WETH_WETH = new VaultDefinition({
  id: "swapx-ichi-usdc-weth-weth",
  name: "USDC.e-wETH (wETH)",
  symbol: "USDC.e-wETH",
  pair: [wETH, USDCe],
  vaultAddress: "0x953fB377Ef19D29117C4F7020F4492a1692A493a",
  lpAddress: "0x6c7b6f02e9f5E525fc70f120f47D4A893f977d0E",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fweth",
});

export const VAULT_SWAPX_ICHI_WS_SCETH_WS = new VaultDefinition({
  id: "swapx-ichi-ws-sceth-ws",
  name: "wS-scETH (wS)",
  symbol: "wS-scETH",
  pair: [wS, scETH],
  vaultAddress: "0xD6141D887E6A16f7AAbdFAf77ACfFC1b3Ee27be5",
  lpAddress: "0x1854D5432657D1B82C60Ce0F8FCB49f915b1d18D",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fsceth",
});

export const VAULT_SWAPX_ICHI_USDC_SCUSD_USDC = new VaultDefinition({
  id: "swapx-ichi-usdc-scusd-usdc",
  name: "USDC.e-scUSD (USDC.e)",
  symbol: "USDC.e-scUSD",
  pair: [USDCe, scUSD],
  vaultAddress: "0xC36F478888dDDfa1a50f27442c610ac5dbA8C22A",
  lpAddress: "0xF77CeeD15596BfC127D17bA45dEA9767BC349Be0",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fscusd",
});

export const VAULT_SWAPX_ICHI_USDC_SCUSD_SCUSD = new VaultDefinition({
  id: "swapx-ichi-usdc-scusd-scusd",
  name: "USDC.e-scUSD (scUSD)",
  symbol: "USDC.e-scUSD",
  pair: [scUSD, USDCe],
  vaultAddress: "0x6De36C1Af417A438a69d4AAa3655022E52bbC606",
  lpAddress: "0x776C31466F19D4e2c71bCE16c0549a8Bc0E37e17",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fscusd",
});

export const VAULT_SWAPX_ICHI_WS_WETH_WS = new VaultDefinition({
  id: "swapx-ichi-ws-weth-ws",
  name: "wS-wETH (wS)",
  symbol: "wS-wETH",
  pair: [wS, wETH],
  vaultAddress: "0xB59f7edC55760DB39b4a69dc44eb0B34d66589d6",
  lpAddress: "0x0f5AcFC6D67410232589265a71E80661d0352848",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fweth",
});

export const VAULT_SWAPX_ICHI_WS_STS_WS = new VaultDefinition({
  id: "swapx-ichi-ws-sts-ws",
  name: "wS-stS (wS)",
  symbol: "wS-stS",
  pair: [wS, stS],
  vaultAddress: "0xd50190C922f252dA3A8106f527F41dFFe1B16067",
  lpAddress: "0xfD10ac67449C16F368a4BB49f544E0A865A77614",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fsts",
});

export const VAULT_SWAPX_ICHI_USDC_STS_USDC = new VaultDefinition({
  id: "swapx-ichi-usdc-sts-usdc",
  name: "USDC.e-stS (USDC.e)",
  symbol: "USDC.e-stS",
  pair: [USDCe, stS],
  vaultAddress: "0x51D5871a9c865FEA9fAF86e48Cc5e999106baEe4",
  lpAddress: "0x86D13feF5e2F4F96c2c592aE7Fd096EB5AC424AC",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fsts",
});

export const VAULT_SWAPX_ICHI_WS_OS_OS = new VaultDefinition({
  id: "swapx-ichi-ws-os-os",
  name: "wS-oS (oS)",
  symbol: "wS-oS",
  pair: [wS, oS],
  vaultAddress: "0xfe4812f9e6c7a098CBA5c43B8F2c4D9F87a4D6a7",
  lpAddress: "0xc4A71981DC8ee8ee704b6217DaebAd6ECe185aeb",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fos",
});

export const VAULT_SWAPX_ICHI_WS_OS_WS = new VaultDefinition({
  id: "swapx-ichi-ws-os-ws",
  name: "wS-oS (wS)",
  symbol: "wS-oS",
  pair: [wS, oS],
  vaultAddress: "0xF58653cCE3E68F769A75924dd83dD3bd24C04104",
  lpAddress: "0x36dA3b8156C421118d1cc27956454C49eeC5fC1B",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fos",
});

export const VAULT_SWAPX_ICHI_WS_STS_STS = new VaultDefinition({
  id: "swapx-ichi-ws-sts-sts",
  name: "wS-stS (stS)",
  symbol: "wS-stS",
  pair: [stS, wS],
  vaultAddress: "0xf462864B174d7A084881A6F1E61553318E3D6471",
  lpAddress: "0xa68D5DbAe00960De66DdEaD4d53faea39f21983b",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fsts",
});

export const VAULT_SWAPX_ICHI_SCETH_WETH_SCETH = new VaultDefinition({
  id: "swapx-ichi-sceth-weth-sceth",
  name: "scETH-wETH (scETH)",
  symbol: "scETH-wETH",
  pair: [scETH, wETH],
  vaultAddress: "0x96bd19f2E314864Bd312a25A1b1A6D0f8777c8e7",
  lpAddress: "0x6E8A8037533aA74FfFEb92390E443294d034d769",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=sceth%2Fweth",
});

export const VAULT_SWAPX_ICHI_SCETH_WETH_WETH = new VaultDefinition({
  id: "swapx-ichi-sceth-weth-weth",
  name: "scETH-wETH (wETH)",
  symbol: "wETH-scETH",
  pair: [wETH, scETH],
  vaultAddress: "0x652cFe2c05fC3db8EFa74C5F68E91D799fd3eFa7",
  lpAddress: "0x0f385EEa80cB6909A1dbA5CDc763e97F8589f47D",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=sceth%2Fweth",
});

export const VAULT_SWAPX_ICHI_SFRXETH_FRXETH_SFRXETH = new VaultDefinition({
  id: "swapx-ichi-sfrxeth-frxeth-sfrxeth",
  name: "sfrxETH-frxETH (sfrxETH)",
  symbol: "sfrxETH-frxETH",
  pair: [sfrxETH, frxETH],
  vaultAddress: "0x1fd420F08FcF167435128B2c4733C5b9356CB9ea",
  lpAddress: "0x5746f9777954e8dd2835020ba8b7c950f52c6251",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=sfrxeth%2Ffrxeth",
});

export const VAULT_SWAPX_ICHI_SFRXETH_FRXETH_FRXETH = new VaultDefinition({
  id: "swapx-ichi-sfrxeth-frxeth-frxeth",
  name: "sfrxETH-frxETH (frxETH)",
  symbol: "frxETH-sfrxETH",
  pair: [frxETH, sfrxETH],
  vaultAddress: "0x1B8eA629672c404BFB4E8Fe394630e1d3d6c59F6",
  lpAddress: "0x8c30686dc5aa85c5861163174bdeb22a011bb749",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=frxeth%2Fsfrxeth",
});

export const VAULT_SWAPX_ICHI_SCUSD_FRXUSD_FRXUSD = new VaultDefinition({
  id: "swapx-ichi-scusd-frxusd-frxusd",
  name: "frxUSD-scUSD (frxUSD)",
  symbol: "frxUSD-scUSD",
  pair: [frxUSD, scUSD],
  vaultAddress: "0x572Bf78e77881C8749013CbC8F7d5433c6864112",
  lpAddress: "0x1B282d69a54a983714bB6Bea8cAAcB29D4cb45B5",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=frxusd%2Fscusd",
});

export const VAULT_SWAPX_ICHI_SCUSD_FRXUSD_SCUSD = new VaultDefinition({
  id: "swapx-ichi-scusd-frxusd-scusd",
  name: "scUSD-frxUSD (scUSD)",
  symbol: "scUSD-frxUSD",
  pair: [scUSD, frxUSD],
  vaultAddress: "0xBd50954903a090b252Cc6E07E081173a664b3263",
  lpAddress: "0x8BCF8AD9c16f455b54a077F48717C08AFA326296",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=scusd%2Ffrxusd",
});

export const VAULT_SWAPX_ICHI_WBTC_SCBTC_WBTC = new VaultDefinition({
  id: "swapx-ichi-wbtc-scbtc-wbtc",
  name: "scBTC-wBTC (wBTC)",
  symbol: "wBTC-scBTC",
  pair: [wBTC, scBTC],
  vaultAddress: "0x3589e818b967E02c1FE7bbAbC421d6F74AD5beAc",
  lpAddress: "0x59bfaa386ccbf648eacd28c91834ce7c6c8e773a",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=scbtc%2Fwbtc",
});

export const VAULT_SWAPX_ICHI_SCBTC_WBTC_SCBTC = new VaultDefinition({
  id: "swapx-ichi-wbtc-scbtc-scbtc",
  name: "wBTC-scBTC (scBTC)",
  symbol: "scBTC-wBTC",
  pair: [scBTC, wBTC],
  vaultAddress: "0x443F09B472ec2eF5626f1738f4B18CBE644eAAa6",
  lpAddress: "0xe1d0c34d6a7eea99c87005147d950be89294c632",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=wbtc%2Fscbtc",
});

export const VAULT_SWAPX_ICHI_SCETH_FRXETH_SCETH = new VaultDefinition({
  id: "swapx-ichi-sceth-frxeth-sceth",
  name: "frxETH-scETH (scETH)",
  symbol: "scETH-frxETH",
  pair: [scETH, frxETH],
  vaultAddress: "0xDA59dc781B376a33698c4405A426Eee74929D02E",
  lpAddress: "0x587be5ab130d972e737e4873770b8e63965b8aaa",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=sceth%2Ffrxeth",
});

export const VAULT_SWAPX_ICHI_FRXETH_SCETH_FRXETH = new VaultDefinition({
  id: "swapx-ichi-sceth-frxeth-frxeth",
  name: "frxETH-scETH (frxETH)",
  symbol: "frxETH-scETH",
  pair: [frxETH, scETH],
  vaultAddress: "0x6Fb9B6e36c2471b9F9A8852bB3063b63B50b7147",
  lpAddress: "0xa1b27a7060b38a4d54921bcacd5d3e312e3f2afa",
  icon: "/icons/dex/SwapX_Black.svg",
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=frxeth%2Fsceth",
});

//----------------------
//   BEETS Vaults
//----------------------

export const VAULT_BEETS_WS_STS = new VaultDefinition({
  id: "beets-ws-sts",
  name: "Staked Sonic Symphony",
  symbol: "wS-stS",
  pair: [wS, stS],
  vaultAddress: "0x02D742f182D2a588c54E7DC998aD19f9D795bC51",
  lpAddress: "0x374641076B68371e69D03C417DAc3E5F236c32FA",
  icon: "/icons/dex/beets.fi.svg",
  buyLink:
    "https://beets.fi/pools/sonic/v2/0x374641076b68371e69d03c417dac3e5f236c32fa000000000000000000000006/add-liquidity",
});

export const VAULT_BEETS_USDC_SCUSD = new VaultDefinition({
  id: "beets-usdc-scusd",
  name: "Ringing Stable Beets",
  symbol: "BeetsRSB",
  pair: [USDCe, scUSD],
  vaultAddress: "0x037BB13Fb35dA590d1144B082F4b08Ff7C8c531C",
  lpAddress: "0xCd4D2b142235D5650fFA6A38787eD0b7d7A51c0C",
  icon: "/icons/dex/beets.fi.svg",
  buyLink:
    "https://beets.fi/pools/sonic/v2/0xcd4d2b142235d5650ffa6a38787ed0b7d7a51c0c000000000000000000000037/add-liquidity",
});

export const VAULT_BEETS_SCUSD_STS = new VaultDefinition({
  id: "beets-scusd-sts",
  name: "Put A Ring On It",
  symbol: "scUSD-stS",
  pair: [scUSD, stS],
  vaultAddress: "0xca830eaE0b3F65c6FB4fD824F1b442956fE5D424",
  lpAddress: "0x25ca5451CD5a50AB1d324B5E64F32C0799661891",
  icon: "/icons/dex/beets.fi.svg",
  buyLink:
    "https://beets.fi/pools/sonic/v2/0x25ca5451cd5a50ab1d324b5e64f32c0799661891000200000000000000000018/add-liquidity",
});

//----------------------
// EQUALIZER Vaults
//----------------------

export const VAULT_EQUALIZER_WS_USDC = new VaultDefinition({
  id: "equalizer-ws-usdc",
  name: "wS-USDC.e",
  symbol: "wS-USDC.e",
  pair: [wS, USDCe],
  vaultAddress: "0xc83CE82CEb536a6bCf6678EC4B308A6739057050",
  lpAddress: "0xdc85F86d5E3189e0d4a776e6Ae3B3911eC7B0133",
  icon: "/icons/dex/equalizer.svg",
  buyLink:
    "https://equalizer.exchange/liquidity/0xdc85F86d5E3189e0d4a776e6Ae3B3911eC7B0133/add",
});

export const VAULT_EQUALIZER_WS_EQUAL = new VaultDefinition({
  id: "equalizer-ws-equal",
  name: "wS-EQUAL",
  symbol: "wS-EQUAL",
  pair: [wS, EQUAL],
  vaultAddress: "0x3D66328c513ed56D5dB02eE7dFBF5D0E1d90836D",
  lpAddress: "0x139f8eCC5fC8Ef11226a83911FEBecC08476cfB1",
  icon: "/icons/dex/equalizer.svg",
  buyLink:
    "https://equalizer.exchange/liquidity/0x139f8eCC5fC8Ef11226a83911FEBecC08476cfB1/add",
});

export const VAULT_EQUALIZER_WS_STS = new VaultDefinition({
  id: "equalizer-ws-sts",
  name: "wS-stS",
  symbol: "wS-stS",
  pair: [wS, stS],
  vaultAddress: "0x9418FDfcDdC546ADb990a575e2a31E4D30c2e36C",
  lpAddress: "0xB75C9073ea00AbDa9ff420b5Ae46fEe248993380",
  icon: "/icons/dex/equalizer.svg",
  buyLink:
    "https://equalizer.exchange/liquidity/0xB75C9073ea00AbDa9ff420b5Ae46fEe248993380/add",
});

export const VAULT_EQUALIZER_USDC_WETH = new VaultDefinition({
  id: "equalizer-usdc-weth",
  name: "USDC.e-wETH",
  symbol: "USDC.e-wETH",
  pair: [USDCe, wETH],
  vaultAddress: "0x8079B4700d90ACF56d820C706Ac3cB922e5f2eC2",
  lpAddress: "0xbCbC5777537c0D0462fb82BA48Eeb6cb361E853f",
  icon: "/icons/dex/equalizer.svg",
  buyLink:
    "https://equalizer.exchange/liquidity/0xbCbC5777537c0D0462fb82BA48Eeb6cb361E853f/add",
});

export const VAULT_EQUALIZER_WS_BRUSH = new VaultDefinition({
  id: "equalizer-ws-brush",
  name: "wS-BRUSH",
  symbol: "wS-BRUSH",
  pair: [wS, BRUSH],
  vaultAddress: "0x585A8941a9faeD644829Ce5CF7919776DBd53990",
  lpAddress: "0x38cFA6cB37d074B6E954C52d10a4cf0e4268607b",
  icon: "/icons/dex/equalizer.svg",
  buyLink:
    "https://equalizer.exchange/liquidity/0x38cFA6cB37d074B6E954C52d10a4cf0e4268607b/add",
});

export const VAULT_EQUALIZER_WS_FSONIC = new VaultDefinition({
  id: "equalizer-ws-fsonic",
  name: "wS-fSonic",
  symbol: "wS-fSonic",
  pair: [wS, fSonic],
  vaultAddress: "0x1Fc31fFefEe5726d4011aeD65ddB928F95027219",
  lpAddress: "0x822B6E8D0A3EAf306A6A604f6AF370F6d893292d",
  icon: "/icons/dex/equalizer.svg",
  buyLink:
    "https://equalizer.exchange/liquidity/0x822B6E8D0A3EAf306A6A604f6AF370F6d893292d/add",
});

export const VAULT_EQUALIZER_WS_GOGLZ = new VaultDefinition({
  id: "equalizer-ws-goglz",
  name: "wS-GOGLZ",
  symbol: "wS-GOGLZ",
  pair: [wS, GOGLZ],
  vaultAddress: "0xf82d99F2a745e479f27b191fdF74b338887e73e2",
  lpAddress: "0x832e2bb9579f6fF038d3E704Fa1BB5B6B18a6521",
  icon: "/icons/dex/equalizer.svg",
  buyLink:
    "https://equalizer.exchange/liquidity/0x832e2bb9579f6fF038d3E704Fa1BB5B6B18a6521/add",
});

export const VAULT_EQUALIZER_WS_FIERY = new VaultDefinition({
  id: "equalizer-ws-fiery",
  name: "wS-FIERY",
  symbol: "wS-FIERY",
  pair: [wS, FIERY],
  vaultAddress: "0x95043378f9BC0c192c367450a2114F63907F4755",
  lpAddress: "0xeFEeD7deAEa6dceb1A777AD5Cc8C6b1329B71afd",
  icon: "/icons/dex/equalizer.svg",
  buyLink:
    "https://equalizer.exchange/liquidity/0xeFEeD7deAEa6dceb1A777AD5Cc8C6b1329B71afd/add",
});

export const VAULT_EQUALIZER_WS_ECO = new VaultDefinition({
  id: "equalizer-ws-eco",
  name: "wS-ECO",
  symbol: "wS-ECO",
  pair: [wS, ECO],
  vaultAddress: "0x845Df2f5f394879caB662247cFF77fE18787e7Ad",
  lpAddress: "0x93B3Db87d07e4925274174CbD650EFdcd8885Cc6",
  icon: "/icons/dex/equalizer.svg",
  buyLink:
    "https://equalizer.exchange/liquidity/0x93B3Db87d07e4925274174CbD650EFdcd8885Cc6/add",
});

export const VAULT_EQUALIZER_WS_ANON = new VaultDefinition({
  id: "equalizer-ws-anon",
  name: "wS-ANON",
  symbol: "wS-ANON",
  pair: [wS, ANON],
  vaultAddress: "0x15be5c53Aa95e6c418BCB365081ab3e786904b04",
  lpAddress: "0xA16664163f13540CD45d0A67654bCB99BF511c3f",
  icon: "/icons/dex/equalizer.svg",
  buyLink:
    "https://equalizer.exchange/liquidity/0xA16664163f13540CD45d0A67654bCB99BF511c3f/add",
});

export const VAULT_EQUALIZER_WS_HEDGY = new VaultDefinition({
  id: "equalizer-ws-hedgy",
  name: "wS-HEDGY",
  symbol: "wS-HEDGY",
  pair: [wS, HEDGY],
  vaultAddress: "0xFE79b76B88c0aeD9Ce16f9A5834a34C45a2f4862",
  lpAddress: "0x04F1b3Ce71Cde381097A0601213DEF55CF336589",
  icon: "/icons/dex/equalizer.svg",
  buyLink:
    "https://equalizer.exchange/liquidity/0x04F1b3Ce71Cde381097A0601213DEF55CF336589/add",
});

export const VAULT_EQUALIZER_WS_THC = new VaultDefinition({
  id: "equalizer-ws-thc",
  name: "wS-THC",
  symbol: "wS-THC",
  pair: [wS, THC],
  vaultAddress: "0x89fcD4093719e1d539F4A7953c53020C7b6d2e2E",
  lpAddress: "0x3E6daa42268a5097De68ab39e48B860B9B55f589",
  icon: "/icons/dex/equalizer.svg",
  buyLink:
    "https://equalizer.exchange/liquidity/0x3E6daa42268a5097De68ab39e48B860B9B55f589/add",
});

export const VAULT_EQUALIZER_WS_WHALE = new VaultDefinition({
  id: "equalizer-ws-whale",
  name: "wS-WHALE",
  symbol: "wS-WHALE",
  pair: [wS, WHALE],
  vaultAddress: "0x85C404ea674651851daA1e62A33bF145b1153E65",
  lpAddress: "0x8D2b12D0DC9BB13C62d213EFbEa10fD0bfCe3C88",
  icon: "/icons/dex/equalizer.svg",
  buyLink:
    "https://equalizer.exchange/liquidity/0x8D2b12D0DC9BB13C62d213EFbEa10fD0bfCe3C88/add",
});

export const SWAPX_VAULTS: VaultDefinition[] = [
  VAULT_SWAPX_WS_TYSG,
  VAULT_SWAPX_WS_GOGLZ,
  VAULT_SWAPX_WS_HEDGY,
  VAULT_SWAPX_WS_SDOG,
  VAULT_SWAPX_WS_ECO,
  VAULT_SWAPX_WS_SHIBA,
  VAULT_SWAPX_ICHI_WS_SWAPX_WS,
  VAULT_SWAPX_ICHI_WS_USDC_WS,
  VAULT_SWAPX_ICHI_WS_SACRA_SACRA,
  VAULT_SWAPX_ICHI_WS_WETH_WS,
  VAULT_SWAPX_ICHI_WS_SCETH_WS,
  VAULT_SWAPX_ICHI_USDC_STS_USDC,
  VAULT_SWAPX_ICHI_USDC_SWAPX_USDC,
  VAULT_SWAPX_ICHI_USDC_WETH_USDC,
  VAULT_SWAPX_ICHI_USDC_WETH_WETH,
  VAULT_SWAPX_ICHI_USDC_SCUSD_USDC,
  VAULT_SWAPX_ICHI_USDC_SCUSD_SCUSD,
  VAULT_SWAPX_ICHI_USDC_USDT_USDC,
  VAULT_SWAPX_ICHI_USDC_USDT_USDT,
  VAULT_SWAPX_ICHI_WS_OS_OS,
  VAULT_SWAPX_ICHI_WS_OS_WS,
  VAULT_SWAPX_ICHI_WS_STS_WS,
  VAULT_SWAPX_ICHI_WS_STS_STS,
  VAULT_SWAPX_ICHI_SCETH_WETH_SCETH,
  VAULT_SWAPX_ICHI_SCETH_WETH_WETH,
  VAULT_SWAPX_ICHI_SCUSD_FRXUSD_FRXUSD,
  VAULT_SWAPX_ICHI_SCUSD_FRXUSD_SCUSD,
  VAULT_SWAPX_ICHI_SFRXETH_FRXETH_SFRXETH,
  VAULT_SWAPX_ICHI_SFRXETH_FRXETH_FRXETH,
  VAULT_SWAPX_ICHI_SCBTC_WBTC_SCBTC,
  VAULT_SWAPX_ICHI_WBTC_SCBTC_WBTC,
  VAULT_SWAPX_ICHI_FRXETH_SCETH_FRXETH,
  VAULT_SWAPX_ICHI_SCETH_FRXETH_SCETH,
];

export const BEETS_VAULTS: VaultDefinition[] = [
  VAULT_BEETS_WS_STS,
  VAULT_BEETS_USDC_SCUSD,
  VAULT_BEETS_SCUSD_STS,
];

export const EQUALIZER_VAULTS: VaultDefinition[] = [
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

export const ALL_DISPLAYED_VAULTS: VaultDefinition[] = [
  ...SWAPX_VAULTS,
  ...BEETS_VAULTS,
  ...EQUALIZER_VAULTS,
];

export const DEFAULT_VAULTS_ID = "All Vaults";

export const VAULT_GROUPS: Record<string, VaultDefinition[]> = {
  [DEFAULT_VAULTS_ID]: ALL_DISPLAYED_VAULTS,
  SwapX: SWAPX_VAULTS,
  Beets: BEETS_VAULTS,
  Equalizer: EQUALIZER_VAULTS,
};
