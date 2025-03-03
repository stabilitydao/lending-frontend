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

export const USDCE = new Token({
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
VAULT TOKENS
*/

export const SWAPX_WS_OS = new Token({
  name: "wS-oS (wS)",
  symbol: "wS-oS",
  address: "0xF58653cCE3E68F769A75924dd83dD3bd24C04104",
  decimals: 18,
  icon: "/icons/coins/SwapX_Black.svg",
  pair: [wS, oS],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fos",
});

export const SWAPX_OS_WS = new Token({
  name: "wS-oS (oS)",
  symbol: "oS-wS",
  address: "0xfe4812f9e6c7a098CBA5c43B8F2c4D9F87a4D6a7",
  decimals: 18,
  icon: "/icons/coins/SwapX_Black.svg",
  pair: [oS, wS],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fos",
});

export const SWAPX_WS_STS = new Token({
  name: "wS-stS (wS)",
  symbol: "wS-stS",
  address: "0xd50190C922f252dA3A8106f527F41dFFe1B16067",
  decimals: 18,
  icon: "/icons/coins/SwapX_Black.svg",
  pair: [wS, stS],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fsts",
});

export const SWAPX_STS_WS = new Token({
  name: "wS-stS (stS)",
  symbol: "stS-wS",
  address: "0xf462864B174d7A084881A6F1E61553318E3D6471",
  decimals: 18,
  icon: "/icons/coins/SwapX_Black.svg",
  pair: [stS, wS],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=ws%2Fsts",
});

export const SWAPX_SCUSD_USDC = new Token({
  name: "USDC.e-scUSD (scUSD)",
  symbol: "scUSD-USDC",
  address: "0x6De36C1Af417A438a69d4AAa3655022E52bbC606",
  decimals: 18,
  icon: "/icons/coins/SwapX_Black.svg",
  pair: [scUSD, USDCE],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fscusd",
});

export const SWAPX_USDC_SCUSD = new Token({
  name: "USDC.e-scUSD (USDC.e)",
  symbol: "USDC-scUSD",
  address: "0xC36F478888dDDfa1a50f27442c610ac5dbA8C22A",
  decimals: 18,
  icon: "/icons/coins/SwapX_Black.svg",
  pair: [USDCE, scUSD],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fscusd",
});

export const SWAPX_USDC_USDT = new Token({
  name: "USDT-USDC.e (USDC.e)",
  symbol: "USDC-USDT",
  address: "0xb8330F4027b6cb4402C5d02D535c87579cab2477",
  decimals: 18,
  icon: "/icons/coins/SwapX_Black.svg",
  pair: [USDCE, USDT],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fusdt",
});

export const SWAPX_USDT_USDC = new Token({
  name: "USDT-USDC.e (USDT)",
  symbol: "USDT-USDC",
  address: "0xe10a0F4F7831fC7049F271686005F9a8D274fCeE",
  decimals: 18,
  icon: "/icons/coins/SwapX_Black.svg",
  pair: [USDT, USDCE],
  chainID: sonic.id,
  buyLink:
    "https://swapx.fi/earn?orderBy=totalValueLockedUSD&orderDirection=desc&orderByCore=totalValueLockedUSD&orderDirectionCore=desc&ownerType=pools&filter=conc-liquidity&search=usdc.e%2Fusdt",
});

export const BEETS_USDC_SCUSD = new Token({
  name: "Ringing Stable Beets",
  symbol: "BeetsRSB",
  address: "0x037BB13Fb35dA590d1144B082F4b08Ff7C8c531C",
  decimals: 18,
  icon: "/icons/dex/beets.fi.svg",
  pair: [USDCE, scUSD],
  chainID: sonic.id,
  buyLink:
    "https://beets.fi/pools/sonic/v2/0xcd4d2b142235d5650ffa6a38787ed0b7d7a51c0c000000000000000000000037/add-liquidity",
});

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
