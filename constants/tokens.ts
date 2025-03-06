import { Address } from "viem";
import { sonic } from "viem/chains";

const ALL_TOKENS: Token[] = [];

export class Token {
  name: string;
  symbol: string;
  address: Address;
  decimals: number;
  icon: string;
  chainID: number;
  isNative?: boolean;
  wrappedToken?: Token;
  wrapperToken?: Token;
  pair?: Token[];
  buyLink: string;

  constructor({
    name,
    symbol,
    address,
    decimals,
    icon,
    chainID,
    isNative,
    wrappedToken,
    wrapperToken,
    pair,
    buyLink,
  }: {
    name: string;
    symbol: string;
    address: string;
    decimals: number;
    icon: string;
    chainID: number;
    isNative?: boolean;
    wrappedToken?: Token;
    wrapperToken?: Token;
    pair?: Token[];
    buyLink?: string;
  }) {
    this.name = name;
    this.symbol = symbol;
    this.address = address.toLowerCase() as Address;
    this.decimals = decimals;
    this.icon = icon;
    this.chainID = chainID;
    this.isNative = isNative;
    this.wrappedToken = wrappedToken;
    this.wrapperToken = wrapperToken;
    this.pair = pair;
    this.buyLink =
      buyLink ||
      "https://app.odos.xyz/swap?chainId=" +
        chainID +
        "&inputCurrency=" +
        address;

    ALL_TOKENS.push(this);
  }

  copy() {
    return new Token({
      name: this.name,
      symbol: this.symbol,
      address: this.address,
      decimals: this.decimals,
      icon: this.icon,
      chainID: this.chainID,
      isNative: this.isNative,
      wrappedToken: this.wrappedToken,
      wrapperToken: this.wrapperToken,
      pair: this.pair,
      buyLink: this.buyLink,
    });
  }

  makeLP(address: Address) {
    return new Token({
      name: this.name + " LP",
      symbol: this.symbol,
      address: address,
      decimals: 18,
      icon: this.icon,
      chainID: this.chainID,
      pair: this.pair,
      buyLink: this.buyLink,
    });
  }
}

export const S = new Token({
  name: "Sonic",
  symbol: "S",
  address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  decimals: 18,
  icon: "/icons/coins/sonic.png",
  isNative: true,
  chainID: sonic.id,
});

export const wS = new Token({
  name: "Wrapped Sonic",
  symbol: "wS",
  address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
  decimals: 18,
  icon: "/icons/coins/wsonic.png",
  wrappedToken: S,
  chainID: sonic.id,
});

S.wrapperToken = wS;

export const USDCe = new Token({
  name: "Bridged USDC",
  symbol: "USDC.E",
  address: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
  decimals: 6,
  icon: "/icons/coins/usdc.png",
  chainID: sonic.id,
});

export const scUSD = new Token({
  name: "Sonic USD",
  symbol: "scUSD",
  address: "0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE",
  decimals: 6,
  icon: "/icons/coins/scusdc.png",
  chainID: sonic.id,
});

export const USDT = new Token({
  name: "USDT",
  symbol: "USDT",
  address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
  decimals: 6,
  icon: "/icons/coins/usdt.png",
  chainID: sonic.id,
});

export const wETH = new Token({
  name: "Wrapped ETH",
  symbol: "wETH",
  address: "0x50c42dEAcD8Fc9773493ED674b675bE577f2634b",
  decimals: 18,
  icon: "/icons/coins/weth.png",
  chainID: sonic.id,
});

export const scETH = new Token({
  name: "Sonic ETH",
  symbol: "scETH",
  address: "0x3bce5cb273f0f148010bbea2470e7b5df84c7812",
  decimals: 18,
  icon: "/icons/coins/sceth.svg",
  chainID: sonic.id,
});

export const wOS = new Token({
  name: "Wrapped Origin Sonic",
  symbol: "wOS",
  address: "0x9F0dF7799f6FDAd409300080cfF680f5A23df4b1",
  decimals: 18,
  icon: "/icons/coins/wos.png",
  chainID: sonic.id,
});

export const oS = new Token({
  name: "Origin Sonic",
  symbol: "oS",
  address: "0xb1e25689D55734FD3ffFc939c4C3Eb52DFf8A794",
  decimals: 18,
  icon: "/icons/coins/os.png",
  chainID: sonic.id,
});

export const stS = new Token({
  name: "Beets Staked Sonic",
  symbol: "stS",
  address: "0xE5DA20F15420aD15DE0fa650600aFc998bbE3955",
  decimals: 18,
  icon: "/icons/coins/sts.png",
  chainID: sonic.id,
});

/*
DUMMY TOKENS
*/

export const TYSG = new Token({
  name: "TYSG",
  symbol: "TYSG",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/tysg.png",
  chainID: sonic.id,
});

export const GOGLZ = new Token({
  name: "GOGLZ",
  symbol: "GOGLZ",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/goglz.png",
  chainID: sonic.id,
});

export const HEDGY = new Token({
  name: "HEDGY",
  symbol: "HEDGY",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/hedgy.png",
  chainID: sonic.id,
});

export const sDOG = new Token({
  name: "sDOG",
  symbol: "sDOG",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/sdog.png",
  chainID: sonic.id,
});

export const ECO = new Token({
  name: "ECO",
  symbol: "ECO",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/eco.png",
  chainID: sonic.id,
});

export const SHIBA = new Token({
  name: "SHIBA",
  symbol: "SHIBA",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/shiba.png",
  chainID: sonic.id,
});

export const SWPx = new Token({
  name: "SWPx",
  symbol: "SWPx",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/SwapX_Black.svg",
  chainID: sonic.id,
});

export const SACRA = new Token({
  name: "SACRA",
  symbol: "SACRA",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/sacra.png",
  chainID: sonic.id,
});

export const EQUAL = new Token({
  name: "EQUAL",
  symbol: "EQUAL",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/equal.png",
  chainID: sonic.id,
});

export const BRUSH = new Token({
  name: "BRUSH",
  symbol: "BRUSH",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/brush.png",
  chainID: sonic.id,
});

export const fSonic = new Token({
  name: "fSonic",
  symbol: "fSonic",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/fsonic.png",
  chainID: sonic.id,
});

export const FIERY = new Token({
  name: "FIERY",
  symbol: "FIERY",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/fiery.png",
  chainID: sonic.id,
});

export const ANON = new Token({
  name: "ANON",
  symbol: "ANON",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/anon.png",
  chainID: sonic.id,
});

export const THC = new Token({
  name: "THC",
  symbol: "THC",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/thc.png",
  chainID: sonic.id,
});

export const WHALE = new Token({
  name: "WHALE",
  symbol: "WHALE",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/whale.png",
  chainID: sonic.id,
});

/*
VAULT TOKENS
*/

export const SWAPX_ICHI_WS_TYSG = new Token({
  name: "wS-TYSG",
  symbol: "wS-TYSG",
  address: "0x90decf248b0e386d7538437cb548dad9d61bce24",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [wS, TYSG],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?search=ws%2Ftysg&orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=classic-volatile",
});

export const SWAPX_ICHI_WS_TYSG_LP = SWAPX_ICHI_WS_TYSG.makeLP(
  "0x24f5cd888057A721F1ACD7CBA1Afa7A8384c3e12"
);

export const SWAPX_ICHI_WS_GOGLZ = new Token({
  name: "wS-GOGLZ",
  symbol: "wS-GOGLZ",
  address: "0xe3243b741a54a1a5d29bcd7856c7b70cfdd76f1b",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [wS, GOGLZ],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?search=ws%2Fgoglz&orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=classic-volatile",
});

export const SWAPX_ICHI_WS_GOGLZ_LP = SWAPX_ICHI_WS_GOGLZ.makeLP(
  "0xE6aA7CA47DDb6203e71d4D1497959Da51F87AA98"
);

export const SWAPX_ICHI_WS_HEDGY = new Token({
  name: "wS-HEDGY",
  symbol: "wS-HEDGY",
  address: "0x517cf3dd00b7bae948b42adb5532d32c5e665580",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [wS, HEDGY],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?search=ws%2FHEDGY&orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=classic-volatile",
});

export const SWAPX_ICHI_WS_HEDGY_LP = SWAPX_ICHI_WS_HEDGY.makeLP(
  "0x36e0c9ee4DA91101B6509586B820190015E9114f"
);

export const SWAPX_ICHI_WS_SDOG = new Token({
  name: "wS-sDOG",
  symbol: "wS-sDOG",
  address: "0xbae81e65ff1a9e3170afadb23d7a2b6cec6079b8",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [wS, sDOG],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?search=ws%2Fsdog&orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=classic-volatile",
});

export const SWAPX_ICHI_WS_SDOG_LP = SWAPX_ICHI_WS_SDOG.makeLP(
  "0xbF23E7fC58b7094D17fe52ef8bdE979aa06b8916"
);

export const SWAPX_ICHI_WS_ECO = new Token({
  name: "wS-ECO",
  symbol: "wS-ECO",
  address: "0x975ba9fcaeb197c3e615f9dffcafe8c7fcd4d8ea",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [wS, ECO],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?search=ws%2Feco&orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=classic-volatile",
});

export const SWAPX_ICHI_WS_ECO_LP = SWAPX_ICHI_WS_ECO.makeLP(
  "0x03281b6F11D943157A973cDB6B39B747501BDBBa"
);

export const SWAPX_ICHI_WS_SHIBA = new Token({
  name: "wS-SHIBA",
  symbol: "wS-SHIBA",
  address: "0xdf78107cf7d4568e1e5a750a3cc9558034b07502",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [wS, SHIBA],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?search=ws%2Fshiba&orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=classic-volatile",
});

export const SWAPX_ICHI_WS_SHIBA_LP = SWAPX_ICHI_WS_SHIBA.makeLP(
  "0xb624F982eEc46B97893F0fE19FB27A4C6FB7BC48"
);

export const SWAPX_ICHI_USDC_USDT_USDC = new Token({
  name: "USDT-USDC.e (USDC.e)",
  symbol: "USDC-USDT",
  address: "0xb8330F4027b6cb4402C5d02D535c87579cab2477",
  decimals: 18,
  icon: "/icons/coins/SwapX_Black.svg",
  pair: [USDCe, USDT],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fusdt",
});

export const SWAPX_ICHI_USDC_USDT_USDC_LP = SWAPX_ICHI_USDC_USDT_USDC.makeLP(
  "0xC751b73E97e2Bd7D141989Ba418772223dB93664"
);

export const SWAPX_ICHI_USDC_USDT_USDT = new Token({
  name: "USDT-USDC.e (USDT)",
  symbol: "USDT-USDC",
  address: "0xe10a0F4F7831fC7049F271686005F9a8D274fCeE",
  decimals: 18,
  icon: "/icons/coins/SwapX_Black.svg",
  pair: [USDT, USDCe],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fusdt",
});

export const SWAPX_ICHI_USDC_USDT_USDT_LP = SWAPX_ICHI_USDC_USDT_USDT.makeLP(
  "0x7c0e966462208dDBC7bC7621a458aa09C0e4A525"
);

export const SWAPX_ICHI_WS_SWAPX_WS = new Token({
  name: "wS-SWPx (wS)",
  symbol: "wS-SWPx",
  address: "0x183d7f69F581A97A5343dF8828b1303bf9eC27b0",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [wS, SWPx],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fs",
});
export const SWAPX_ICHI_WS_SWAPX_WS_LP = SWAPX_ICHI_WS_SWAPX_WS.makeLP(
  "0xfDEc32751Faade573B285C8CC606677beE656A4C"
);

export const SWAPX_ICHI_WS_USDC_WS = new Token({
  name: "wS-USDC.e (wS)",
  symbol: "wS-USDC.e",
  address: "0xb57A91b7DD83E2E3B7cDf17D0912B03Bc0bf7327",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [wS, USDCe],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2FUSDC.e",
});
export const SWAPX_ICHI_WS_USDC_WS_LP = SWAPX_ICHI_WS_USDC_WS.makeLP(
  "0x5F62d612c69fF7BE3FBd9a0cD530D57bCbC7b642"
);

export const SWAPX_ICHI_WS_SACRA_SACRA = new Token({
  name: "wS-SACRA (SACRA)",
  symbol: "wS-SACRA",
  address: "0xE253373E5e424BE330DC41837054462f6e6d66aE",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [wS, SACRA],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fsacra",
});
export const SWAPX_ICHI_WS_SACRA_SACRA_LP = SWAPX_ICHI_WS_SACRA_SACRA.makeLP(
  "0x13939Ac0f09dADe88F8b1d86C26daD934d973081"
);

export const SWAPX_ICHI_USDC_SWAPX_USDC = new Token({
  name: "USDC.e-SWPx (USDC.e)",
  symbol: "USDC.e-SWPx",
  address: "0xc90781e2fbBb748Dae79EE179173eF0C783476e8",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [USDCe, SWPx],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fs",
});
export const SWAPX_ICHI_USDC_SWAPX_USDC_LP = SWAPX_ICHI_USDC_SWAPX_USDC.makeLP(
  "0x5De651be21beeDe8ABE808D1425b278ac4a3604B"
);

export const SWAPX_ICHI_USDC_WETH_USDC = new Token({
  name: "USDC.e-wETH (USDC.e)",
  symbol: "USDC.e-wETH",
  address: "0x1d9cf65B2468075A38fFE5d32D83E31AC1539Ccc",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [USDCe, wETH],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fweth",
});
export const SWAPX_ICHI_USDC_WETH_USDC_LP = SWAPX_ICHI_USDC_WETH_USDC.makeLP(
  "0x048d4F8DdeE53dD41c35a1A2a691C0Ef91eff3D6"
);

export const SWAPX_ICHI_USDC_WETH_WETH = new Token({
  name: "USDC.e-wETH (wETH)",
  symbol: "USDC.e-wETH",
  address: "0x953fB377Ef19D29117C4F7020F4492a1692A493a",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [wETH, USDCe],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fweth",
});
export const SWAPX_ICHI_USDC_WETH_WETH_LP = SWAPX_ICHI_USDC_WETH_WETH.makeLP(
  "0x6c7b6f02e9f5E525fc70f120f47D4A893f977d0E"
);

export const SWAPX_ICHI_WS_SCETH_WS = new Token({
  name: "wS-scETH (wS)",
  symbol: "wS-scETH",
  address: "0xD6141D887E6A16f7AAbdFAf77ACfFC1b3Ee27be5",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [wS, scETH],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fsceth",
});
export const SWAPX_ICHI_WS_SCETH_WS_LP = SWAPX_ICHI_WS_SCETH_WS.makeLP(
  "0x1854D5432657D1B82C60Ce0F8FCB49f915b1d18D"
);

export const SWAPX_ICHI_USDC_SCUSD_USDC = new Token({
  name: "USDC.e-scUSD (USDC.e)",
  symbol: "USDC.e-scUSD",
  address: "0xC36F478888dDDfa1a50f27442c610ac5dbA8C22A",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [USDCe, scUSD],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fscusd",
});
export const SWAPX_ICHI_USDC_SCUSD_USDC_LP = SWAPX_ICHI_USDC_SCUSD_USDC.makeLP(
  "0xF77CeeD15596BfC127D17bA45dEA9767BC349Be0"
);

export const SWAPX_ICHI_WS_WETH_WS = new Token({
  name: "wS-wETH (wS)",
  symbol: "wS-wETH",
  address: "0xB59f7edC55760DB39b4a69dc44eb0B34d66589d6",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [wS, wETH],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fweth",
});
export const SWAPX_ICHI_WS_WETH_WS_LP = SWAPX_ICHI_WS_WETH_WS.makeLP(
  "0x0f5AcFC6D67410232589265a71E80661d0352848"
);

export const SWAPX_ICHI_WS_STS_WS = new Token({
  name: "wS-stS (wS)",
  symbol: "wS-stS",
  address: "0xd50190C922f252dA3A8106f527F41dFFe1B16067",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [wS, stS],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fsts",
});
export const SWAPX_ICHI_WS_STS_WS_LP = SWAPX_ICHI_WS_STS_WS.makeLP(
  "0xfD10ac67449C16F368a4BB49f544E0A865A77614"
);

export const SWAPX_ICHI_USDC_STS_USDC = new Token({
  name: "USDC.e-stS (USDC.e)",
  symbol: "USDC.e-stS",
  address: "0x51D5871a9c865FEA9fAF86e48Cc5e999106baEe4",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [USDCe, stS],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fsts",
});
export const SWAPX_ICHI_USDC_STS_USDC_LP = SWAPX_ICHI_USDC_STS_USDC.makeLP(
  "0x86D13feF5e2F4F96c2c592aE7Fd096EB5AC424AC"
);

export const SWAPX_ICHI_WS_OS_OS = new Token({
  name: "wS-oS (oS)",
  symbol: "wS-oS",
  address: "0xfe4812f9e6c7a098CBA5c43B8F2c4D9F87a4D6a7",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [oS, wS],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fos",
});
export const SWAPX_ICHI_WS_OS_OS_LP = SWAPX_ICHI_WS_OS_OS.makeLP(
  "0xc4A71981DC8ee8ee704b6217DaebAd6ECe185aeb"
);

export const SWAPX_ICHI_USDC_SCUSD_SCUSD = new Token({
  name: "USDC.e-scUSD (scUSD)",
  symbol: "USDC.e-scUSD",
  address: "0x6De36C1Af417A438a69d4AAa3655022E52bbC606",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [scUSD, USDCe],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fscusd",
});
export const SWAPX_ICHI_USDC_SCUSD_SCUSD_LP =
  SWAPX_ICHI_USDC_SCUSD_SCUSD.makeLP(
    "0x776C31466F19D4e2c71bCE16c0549a8Bc0E37e17"
  );

export const SWAPX_ICHI_WS_OS_WS = new Token({
  name: "wS-oS (wS)",
  symbol: "wS-oS",
  address: "0xF58653cCE3E68F769A75924dd83dD3bd24C04104",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [wS, oS],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fos",
});
export const SWAPX_ICHI_WS_OS_WS_LP = SWAPX_ICHI_WS_OS_WS.makeLP(
  "0x36dA3b8156C421118d1cc27956454C49eeC5fC1B"
);

export const SWAPX_ICHI_WS_STS_STS = new Token({
  name: "wS-stS (stS)",
  symbol: "wS-stS",
  address: "0xf462864B174d7A084881A6F1E61553318E3D6471",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [stS, wS],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fsts",
});
export const SWAPX_ICHI_WS_STS_STS_LP = SWAPX_ICHI_WS_STS_STS.makeLP(
  "0xa68D5DbAe00960De66DdEaD4d53faea39f21983b"
);

export const SWAPX_ICHI_SCETH_WETH_SCETH = new Token({
  name: "scETH-wETH (scETH)",
  symbol: "scETH-wETH",
  address: "0x96bd19f2E314864Bd312a25A1b1A6D0f8777c8e7",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [scETH, wETH],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=sceth%2Fweth",
});
export const SWAPX_ICHI_SCETH_WETH_SCETH_LP =
  SWAPX_ICHI_SCETH_WETH_SCETH.makeLP(
    "0x6E8A8037533aA74FfFEb92390E443294d034d769"
  );

export const SWAPX_ICHI_SCETH_WETH_WETH = new Token({
  name: "scETH-wETH (wETH)",
  symbol: "wETH-scETH",
  address: "0x652cFe2c05fC3db8EFa74C5F68E91D799fd3eFa7",
  decimals: 18,
  icon: "/icons/dex/SwapX_Black.svg",
  pair: [wETH, scETH],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=sceth%2Fweth",
});
export const SWAPX_ICHI_SCETH_WETH_WETH_LP = SWAPX_ICHI_SCETH_WETH_WETH.makeLP(
  "0x0f385EEa80cB6909A1dbA5CDc763e97F8589f47D"
);

export const BEETS_WS_STS = new Token({
  name: "Staked Sonic Symphony",
  symbol: "wS-stS",
  address: "0x02D742f182D2a588c54E7DC998aD19f9D795bC51",
  decimals: 18,
  icon: "/icons/dex/beets.fi.svg",
  pair: [wS, stS],
  chainID: sonic.id,
  buyLink:
    "https://beets.fi/pools/sonic/v2/0x374641076b68371e69d03c417dac3e5f236c32fa000000000000000000000006/add-liquidity",
});
export const BEETS_WS_STS_LP = BEETS_WS_STS.makeLP(
  "0x374641076B68371e69D03C417DAc3E5F236c32FA"
);

export const BEETS_USDC_SCUSD = new Token({
  name: "Ringing Stable Beets",
  symbol: "BeetsRSB",
  address: "0x037BB13Fb35dA590d1144B082F4b08Ff7C8c531C",
  decimals: 18,
  icon: "/icons/dex/beets.fi.svg",
  pair: [USDCe, scUSD],
  chainID: sonic.id,
  buyLink:
    "https://beets.fi/pools/sonic/v2/0xcd4d2b142235d5650ffa6a38787ed0b7d7a51c0c000000000000000000000037/add-liquidity",
});

export const BEETS_USDC_SCUSD_LP = BEETS_USDC_SCUSD.makeLP(
  "0xCd4D2b142235D5650fFA6A38787eD0b7d7A51c0C"
);

export const BEETS_SCUSD_STS = new Token({
  name: "Put A Ring On It",
  symbol: "scUSD-stS",
  address: "0xca830eaE0b3F65c6FB4fD824F1b442956fE5D424",
  decimals: 18,
  icon: "/icons/dex/beets.fi.svg",
  pair: [scUSD, stS],
  chainID: sonic.id,
  buyLink:
    "https://beets.fi/pools/sonic/v2/0x25ca5451cd5a50ab1d324b5e64f32c0799661891000200000000000000000018/add-liquidity",
});
export const BEETS_SCUSD_STS_LP = BEETS_SCUSD_STS.makeLP(
  "0x25ca5451CD5a50AB1d324B5E64F32C0799661891"
);

// EQUALIZER:

export const EQUALIZER_WS_USDC = new Token({
  name: "wS-USDC.e",
  symbol: "wS-USDC.e",
  address: "0xc83CE82CEb536a6bCf6678EC4B308A6739057050",
  decimals: 18,
  icon: "/icons/dex/equalizer.svg",
  pair: [wS, USDCe],
  chainID: sonic.id,
  buyLink:
    "https://equalizer.exchange/liquidity/0xdc85F86d5E3189e0d4a776e6Ae3B3911eC7B0133/add ",
});
export const EQUALIZER_WS_USDC_LP = EQUALIZER_WS_USDC.makeLP(
  "0xdc85F86d5E3189e0d4a776e6Ae3B3911eC7B0133"
);

export const EQUALIZER_WS_EQUAL = new Token({
  name: "wS-EQUAL",
  symbol: "wS-EQUAL",
  address: "0x3D66328c513ed56D5dB02eE7dFBF5D0E1d90836D",
  decimals: 18,
  icon: "/icons/dex/equalizer.svg",
  pair: [wS, EQUAL],
  chainID: sonic.id,
  buyLink:
    "https://equalizer.exchange/liquidity/0x139f8eCC5fC8Ef11226a83911FEBecC08476cfB1/add ",
});
export const EQUALIZER_WS_EQUAL_LP = EQUALIZER_WS_EQUAL.makeLP(
  "0x139f8eCC5fC8Ef11226a83911FEBecC08476cfB1"
);

export const EQUALIZER_WS_STS = new Token({
  name: "wS-stS",
  symbol: "wS-stS",
  address: "0x9418FDfcDdC546ADb990a575e2a31E4D30c2e36C",
  decimals: 18,
  icon: "/icons/dex/equalizer.svg",
  pair: [wS, stS],
  chainID: sonic.id,
  buyLink:
    "https://equalizer.exchange/liquidity/0xB75C9073ea00AbDa9ff420b5Ae46fEe248993380/add ",
});
export const EQUALIZER_WS_STS_LP = EQUALIZER_WS_STS.makeLP(
  "0xB75C9073ea00AbDa9ff420b5Ae46fEe248993380"
);

export const EQUALIZER_USDC_WETH = new Token({
  name: "USDC.e-wETH",
  symbol: "USDC.e-wETH",
  address: "0x8079B4700d90ACF56d820C706Ac3cB922e5f2eC2",
  decimals: 18,
  icon: "/icons/dex/equalizer.svg",
  pair: [USDCe, wETH],
  chainID: sonic.id,
  buyLink:
    "https://equalizer.exchange/liquidity/0xbCbC5777537c0D0462fb82BA48Eeb6cb361E853f/add ",
});
export const EQUALIZER_USDC_WETH_LP = EQUALIZER_USDC_WETH.makeLP(
  "0xbCbC5777537c0D0462fb82BA48Eeb6cb361E853f"
);

export const EQUALIZER_WS_BRUSH = new Token({
  name: "wS-BRUSH",
  symbol: "wS-BRUSH",
  address: "0x585A8941a9faeD644829Ce5CF7919776DBd53990",
  decimals: 18,
  icon: "/icons/dex/equalizer.svg",
  pair: [wS, BRUSH],
  chainID: sonic.id,
  buyLink:
    "https://equalizer.exchange/liquidity/0x38cFA6cB37d074B6E954C52d10a4cf0e4268607b/add",
});
export const EQUALIZER_WS_BRUSH_LP = EQUALIZER_WS_BRUSH.makeLP(
  "0x38cFA6cB37d074B6E954C52d10a4cf0e4268607b"
);

export const EQUALIZER_WS_FSONIC = new Token({
  name: "wS-fSonic",
  symbol: "wS-fSonic",
  address: "0x1Fc31fFefEe5726d4011aeD65ddB928F95027219",
  decimals: 18,
  icon: "/icons/dex/equalizer.svg",
  pair: [wS, fSonic],
  chainID: sonic.id,
  buyLink:
    "https://equalizer.exchange/liquidity/0x822B6E8D0A3EAf306A6A604f6AF370F6d893292d/add",
});
export const EQUALIZER_WS_FSONIC_LP = EQUALIZER_WS_FSONIC.makeLP(
  "0x822B6E8D0A3EAf306A6A604f6AF370F6d893292d"
);

export const EQUALIZER_WS_GOGLZ = new Token({
  name: "wS-GOGLZ",
  symbol: "wS-GOGLZ",
  address: "0xf82d99F2a745e479f27b191fdF74b338887e73e2",
  decimals: 18,
  icon: "/icons/dex/equalizer.svg",
  pair: [wS, GOGLZ],
  chainID: sonic.id,
  buyLink:
    "https://equalizer.exchange/liquidity/0x832e2bb9579f6fF038d3E704Fa1BB5B6B18a6521/add",
});
export const EQUALIZER_WS_GOGLZ_LP = EQUALIZER_WS_GOGLZ.makeLP(
  "0x832e2bb9579f6fF038d3E704Fa1BB5B6B18a6521"
);

export const EQUALIZER_WS_FIERY = new Token({
  name: "wS-FIERY",
  symbol: "wS-FIERY",
  address: "0x95043378f9BC0c192c367450a2114F63907F4755",
  decimals: 18,
  icon: "/icons/dex/equalizer.svg",
  pair: [wS, FIERY],
  chainID: sonic.id,
  buyLink:
    "https://equalizer.exchange/liquidity/0xeFEeD7deAEa6dceb1A777AD5Cc8C6b1329B71afd/add",
});
export const EQUALIZER_WS_FIERY_LP = EQUALIZER_WS_FIERY.makeLP(
  "0xeFEeD7deAEa6dceb1A777AD5Cc8C6b1329B71afd"
);

export const EQUALIZER_WS_ECO = new Token({
  name: "wS-ECO",
  symbol: "wS-ECO",
  address: "0x845Df2f5f394879caB662247cFF77fE18787e7Ad",
  decimals: 18,
  icon: "/icons/dex/equalizer.svg",
  pair: [wS, ECO],
  chainID: sonic.id,
  buyLink:
    "https://equalizer.exchange/liquidity/0x93B3Db87d07e4925274174CbD650EFdcd8885Cc6/add",
});
export const EQUALIZER_WS_ECO_LP = EQUALIZER_WS_ECO.makeLP(
  "0x93B3Db87d07e4925274174CbD650EFdcd8885Cc6"
);

export const EQUALIZER_WS_ANON = new Token({
  name: "wS-ANON",
  symbol: "wS-ANON",
  address: "0x15be5c53Aa95e6c418BCB365081ab3e786904b04",
  decimals: 18,
  icon: "/icons/dex/equalizer.svg",
  pair: [wS, ANON],
  chainID: sonic.id,
  buyLink:
    "https://equalizer.exchange/liquidity/0xA16664163f13540CD45d0A67654bCB99BF511c3f/add",
});
export const EQUALIZER_WS_ANON_LP = EQUALIZER_WS_ANON.makeLP(
  "0xA16664163f13540CD45d0A67654bCB99BF511c3f"
);

export const EQUALIZER_WS_HEDGY = new Token({
  name: "wS-HEDGY",
  symbol: "wS-HEDGY",
  address: "0xFE79b76B88c0aeD9Ce16f9A5834a34C45a2f4862",
  decimals: 18,
  icon: "/icons/dex/equalizer.svg",
  pair: [wS, HEDGY],
  chainID: sonic.id,
  buyLink:
    "https://equalizer.exchange/liquidity/0x04F1b3Ce71Cde381097A0601213DEF55CF336589/add",
});
export const EQUALIZER_WS_HEDGY_LP = EQUALIZER_WS_HEDGY.makeLP(
  "0x04F1b3Ce71Cde381097A0601213DEF55CF336589"
);

export const EQUALIZER_WS_THC = new Token({
  name: "wS-THC",
  symbol: "wS-THC",
  address: "0x89fcD4093719e1d539F4A7953c53020C7b6d2e2E",
  decimals: 18,
  icon: "/icons/dex/equalizer.svg",
  pair: [wS, THC],
  chainID: sonic.id,
  buyLink:
    "https://equalizer.exchange/liquidity/0x3E6daa42268a5097De68ab39e48B860B9B55f589/add ",
});
export const EQUALIZER_WS_THC_LP = EQUALIZER_WS_THC.makeLP(
  "0x3E6daa42268a5097De68ab39e48B860B9B55f589"
);

export const EQUALIZER_WS_WHALE = new Token({
  name: "wS-WHALE",
  symbol: "wS-WHALE",
  address: "0x85C404ea674651851daA1e62A33bF145b1153E65",
  decimals: 18,
  icon: "/icons/dex/equalizer.svg",
  pair: [wS, WHALE],
  chainID: sonic.id,
  buyLink:
    "https://equalizer.exchange/liquidity/0x8D2b12D0DC9BB13C62d213EFbEa10fD0bfCe3C88/add ",
});
export const EQUALIZER_WS_WHALE_LP = EQUALIZER_WS_WHALE.makeLP(
  "0x8D2b12D0DC9BB13C62d213EFbEa10fD0bfCe3C88"
);

export const getTokenByAddress = (address: string): Token | undefined => {
  return ALL_TOKENS.find((token) => token.address === address.toLowerCase());
};

export const getOrCreateTokenByAddress = (
  address: string,
  chainID: number
): Token => {
  const existingToken = getTokenByAddress(address);
  if (existingToken) return existingToken;

  return new Token({
    name: "",
    symbol: "",
    address,
    decimals: 0,
    icon: "",
    chainID,
  });
};
