import { http, createConfig } from 'wagmi'

import { defineChain } from "viem";

const sonic = /*#__PURE__*/ defineChain({
  id: 146,
  name: 'Sonic',
  nativeCurrency: {
    decimals: 18,
    name: 'Sonic',
    symbol: 'S',
  },
  rpcUrls: {
    default: { http: ['https://rpc.soniclabs.com'] },
  },
  blockExplorers: {
    default: {
      name: 'Sonic Explorer',
      url: 'https://explorer.soniclabs.com/',
    },
  },
  testnet: false,
})


export const config = createConfig({
    chains: [sonic],
    transports: {
        [sonic.id]: http('https://rpc.soniclabs.com'),
    },
})
