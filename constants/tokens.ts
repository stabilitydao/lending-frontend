import { Token } from "@/types";
import { Addresses } from ".";
import { sonic } from "viem/chains";
import { Address } from "viem";

export const S: Token = {
  name: "Sonic",
  symbol: "S",
  address: Addresses[sonic.id].TOKENS.S,
  decimals: 18,
  icon: "/icons/coins/sonic.png",
};

export const wS: Token = {
  name: "Wrapped Sonic",
  symbol: "S",
  address: Addresses[sonic.id].TOKENS.WS,
  decimals: 18,
  icon: "/icons/coins/wsonic.png",
};

export const USDCE: Token = {
  name: "Bridged USDC",
  symbol: "USDC.E",
  address: Addresses[sonic.id].TOKENS.USDC_E,
  decimals: 6,
  icon: "/icons/coins/usdc.png",
};

export const scUSD: Token = {
  name: "scUSD",
  symbol: "scUSD",
  address: Addresses[sonic.id].TOKENS.scUSD,
  decimals: 6,
  icon: "/icons/coins/scusdc.png",
};

export const USDT: Token = {
  name: "USDT",
  symbol: "USDT",
  address: Addresses[sonic.id].TOKENS.USDT,
  decimals: 6,
  icon: "/icons/coins/usdt.png",
};

export const wETH: Token = {
  name: "Wrapped ETH",
  symbol: "wETH",
  address: Addresses[sonic.id].TOKENS.wETH,
  decimals: 18,
  icon: "/icons/coins/weth.png",
};

export const wOS: Token = {
  name: "Wrapped Origin Sonic",
  symbol: "wOS",
  address: Addresses[sonic.id].TOKENS.wOS,
  decimals: 18,
  icon: "/icons/coins/wos.png",
};

export const stS: Token = {
  name: "Beets Staked Sonic",
  symbol: "stS",
  address: Addresses[sonic.id].TOKENS.stS,
  decimals: 18,
  icon: "/icons/coins/sts.png",
};

/*
VAULT TOKENS
*/

export const SWAPX_WS_OS: Token = {
  name: "SWAPX wS-oS (wS)",
  symbol: "wS-oS",
  address: Addresses[sonic.id].TOKENS.SWAPX_WS_OS,
  decimals: 18,
  icon: "/icons/coins/SwapX_Black.svg",
  pair: [wS, wOS],
};

export const SWAPX_OS_WS: Token = {
  name: "SWAPX oS-wS (oS)",
  symbol: "oS-wS",
  address: Addresses[sonic.id].TOKENS.SWAPX_OS_WS,
  decimals: 18,
  icon: "/icons/coins/SwapX_Black.svg",
  pair: [wOS, wS],
};

export const SWAPX_WS_STS: Token = {
  name: "SWAPX wS-stS (wS)",
  symbol: "wS-stS",
  address: Addresses[sonic.id].TOKENS.SWAPX_WS_STS,
  decimals: 18,
  icon: "/icons/coins/SwapX_Black.svg",
  pair: [wS, stS],
};

export const SWAPX_STS_WS: Token = {
  name: "SWAPX stS-wS (stS)",
  symbol: "stS-wS",
  address: Addresses[sonic.id].TOKENS.SWAPX_STS_WS,
  decimals: 18,
  icon: "/icons/coins/SwapX_Black.svg",
  pair: [stS, wS],
};

const ALL_MARKETS_TOKENS = [S, wS, USDCE, scUSD, wETH, USDT, wOS, stS];
const ALL_VAULTS_TOKENS = [
  SWAPX_OS_WS,
  SWAPX_WS_OS,
  SWAPX_STS_WS,
  SWAPX_WS_STS,
];
const ALL_TOKENS = [...ALL_MARKETS_TOKENS, ...ALL_VAULTS_TOKENS];

export const isNativeToken = (token: Address, chainID: number) => {
  if (!Addresses[chainID]) return false;
  return (
    token.toLowerCase() === Addresses[chainID].TOKENS.NATIVE_TOKEN.toLowerCase()
  );
};

export const isWrappedNativeToken = (token: Address, chainID: number) => {
  if (!Addresses[chainID]) return false;
  return (
    token.toLowerCase() ===
    Addresses[chainID].TOKENS.WRAPPED_NATIVE_TOKEN.toLowerCase()
  );
};

export const getTokenByAddress = (address: string) => {
  return ALL_TOKENS.find(
    (token) => token.address.toLowerCase() === address.toLowerCase()
  );
};

export const getNativeToken = (chainID: number) =>
  getTokenByAddress(Addresses[chainID].TOKENS.NATIVE_TOKEN)!;
export const getWrappedNativeToken = (chainID: number) =>
  getTokenByAddress(Addresses[chainID].TOKENS.WRAPPED_NATIVE_TOKEN)!;

export const getWrappedIfNative = (
  address: Address,
  chainId: number
): Address => {
  if (isNativeToken(address, chainId)) {
    return Addresses[chainId].TOKENS.WRAPPED_NATIVE_TOKEN;
  }
  return address;
};

export const getNativeIfWrapped = (
  address: Address,
  chainId: number
): Address => {
  if (isWrappedNativeToken(address, chainId)) {
    return Addresses[chainId].TOKENS.NATIVE_TOKEN;
  }
  return address;
};
