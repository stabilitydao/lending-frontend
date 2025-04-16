import { Address } from "viem";
import { sonic } from "viem/chains";

const ALL_TOKENS: Token[] = [];

export class Token {
  name: string;
  symbol: string;
  address: Address;
  decimals: number;
  icon: string;
  chainId: number;
  isNative?: boolean;
  wrappedToken?: Token;
  wrapperToken?: Token;
  pair?: Token[];
  buyLink: string;
  points?: { sonic: string; rings?: string };

  constructor({
    name,
    symbol,
    address,
    decimals,
    icon,
    chainId,
    isNative,
    wrappedToken,
    wrapperToken,
    pair,
    buyLink,
    points,
  }: {
    name: string;
    symbol: string;
    address: string;
    decimals: number;
    icon: string;
    chainId: number;
    isNative?: boolean;
    wrappedToken?: Token;
    wrapperToken?: Token;
    pair?: Token[];
    buyLink?: string;
    points?: { sonic: string; rings?: string };
  }) {
    this.name = name;
    this.symbol = symbol;
    this.address = address.toLowerCase() as Address;
    this.decimals = decimals;
    this.icon = icon;
    this.chainId = chainId;
    this.isNative = isNative;
    this.wrappedToken = wrappedToken;
    this.wrapperToken = wrapperToken;
    this.pair = pair;
    this.buyLink =
      buyLink ||
      "https://app.odos.xyz/swap?chainId=" +
        chainId +
        "&inputCurrency=" +
        address;

    this.points = points;

    ALL_TOKENS.push(this);
  }

  copy() {
    return new Token({
      name: this.name,
      symbol: this.symbol,
      address: this.address,
      decimals: this.decimals,
      icon: this.icon,
      chainId: this.chainId,
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
      chainId: this.chainId,
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
  chainId: sonic.id,
  points: { sonic: "8" },
});

export const wS = new Token({
  name: "Wrapped Sonic",
  symbol: "wS",
  address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
  decimals: 18,
  icon: "/icons/coins/wsonic.png",
  wrappedToken: S,
  chainId: sonic.id,
});

S.wrapperToken = wS;

export const USDCe = new Token({
  name: "Bridged USDC",
  symbol: "USDC.E",
  address: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
  decimals: 6,
  icon: "/icons/coins/usdc.png",
  chainId: sonic.id,
  points: { sonic: "12" },
});

export const scUSD = new Token({
  name: "Sonic USD",
  symbol: "scUSD",
  address: "0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE",
  decimals: 6,
  icon: "/icons/coins/scusdc.png",
  chainId: sonic.id,
  points: { sonic: "12", rings: "1.5" },
});

export const USDT = new Token({
  name: "USDT",
  symbol: "USDT",
  address: "0x6047828dc181963ba44974801ff68e538da5eaf9",
  decimals: 6,
  icon: "/icons/coins/usdt.png",
  chainId: sonic.id,
  points: { sonic: "4" },
});

export const wETH = new Token({
  name: "Wrapped ETH",
  symbol: "wETH",
  address: "0x50c42dEAcD8Fc9773493ED674b675bE577f2634b",
  decimals: 18,
  icon: "/icons/coins/weth.png",
  chainId: sonic.id,
  points: { sonic: "4" },
});

export const scETH = new Token({
  name: "Sonic ETH",
  symbol: "scETH",
  address: "0x3bce5cb273f0f148010bbea2470e7b5df84c7812",
  decimals: 18,
  icon: "/icons/coins/sceth.svg",
  chainId: sonic.id,
});

export const wOS = new Token({
  name: "Wrapped Origin Sonic",
  symbol: "wOS",
  address: "0x9F0dF7799f6FDAd409300080cfF680f5A23df4b1",
  decimals: 18,
  icon: "/icons/coins/wos.png",
  chainId: sonic.id,
  points: { sonic: "8" },
});

export const oS = new Token({
  name: "Origin Sonic",
  symbol: "oS",
  address: "0xb1e25689D55734FD3ffFc939c4C3Eb52DFf8A794",
  decimals: 18,
  icon: "/icons/coins/os.png",
  chainId: sonic.id,
});

export const stS = new Token({
  name: "Beets Staked Sonic",
  symbol: "stS",
  address: "0xE5DA20F15420aD15DE0fa650600aFc998bbE3955",
  decimals: 18,
  icon: "/icons/coins/sts.png",
  chainId: sonic.id,
  points: { sonic: "8" },
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
  chainId: sonic.id,
});

export const GOGLZ = new Token({
  name: "GOGLZ",
  symbol: "GOGLZ",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/goglz.png",
  chainId: sonic.id,
});

export const HEDGY = new Token({
  name: "HEDGY",
  symbol: "HEDGY",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/hedgy.png",
  chainId: sonic.id,
});

export const sDOG = new Token({
  name: "sDOG",
  symbol: "sDOG",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/sdog.png",
  chainId: sonic.id,
});

export const ECO = new Token({
  name: "ECO",
  symbol: "ECO",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/eco.png",
  chainId: sonic.id,
});

export const SHIBA = new Token({
  name: "SHIBA",
  symbol: "SHIBA",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/shiba.png",
  chainId: sonic.id,
});

export const SWPx = new Token({
  name: "SWPx",
  symbol: "SWPx",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/SwapX_White.svg",
  chainId: sonic.id,
});

export const SACRA = new Token({
  name: "SACRA",
  symbol: "SACRA",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/sacra.png",
  chainId: sonic.id,
});

export const EQUAL = new Token({
  name: "EQUAL",
  symbol: "EQUAL",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/equal.png",
  chainId: sonic.id,
});

export const BRUSH = new Token({
  name: "BRUSH",
  symbol: "BRUSH",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/brush.png",
  chainId: sonic.id,
});

export const fSonic = new Token({
  name: "fSonic",
  symbol: "fSonic",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/fsonic.png",
  chainId: sonic.id,
});

export const FIERY = new Token({
  name: "FIERY",
  symbol: "FIERY",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/fiery.png",
  chainId: sonic.id,
});

export const ANON = new Token({
  name: "ANON",
  symbol: "ANON",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/anon.png",
  chainId: sonic.id,
});

export const THC = new Token({
  name: "THC",
  symbol: "THC",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/thc.png",
  chainId: sonic.id,
});

export const WHALE = new Token({
  name: "WHALE",
  symbol: "WHALE",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/whale.png",
  chainId: sonic.id,
});

export const sfrxETH = new Token({
  name: "sfrxETH",
  symbol: "sfrxETH",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/sfrxeth.png",
  chainId: sonic.id,
});

export const frxETH = new Token({
  name: "frxETH",
  symbol: "frxETH",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/frxeth.png",
  chainId: sonic.id,
});

export const frxUSD = new Token({
  name: "frxUSD",
  symbol: "frxUSD",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/frxusd.png",
  chainId: sonic.id,
});

export const wBTC = new Token({
  name: "Wrapped BTC",
  symbol: "wBTC",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/wbtc.png",
  chainId: sonic.id,
});

export const scBTC = new Token({
  name: "Sonic BTC",
  symbol: "scBTC",
  address: "0x0",
  decimals: 0,
  icon: "/icons/coins/scbtc.png",
  chainId: sonic.id,
});

export const getTokenByAddress = (
  address: string | undefined
): Token | undefined => {
  return address
    ? ALL_TOKENS.find((token) => token.address === address.toLowerCase())
    : undefined;
};

export const getOrCreateTokenByAddress = (
  address: string,
  chainId: number
): Token => {
  const existingToken = getTokenByAddress(address);
  if (existingToken) return existingToken;

  return new Token({
    name: "",
    symbol: "",
    address,
    decimals: 0,
    icon: "",
    chainId,
  });
};
