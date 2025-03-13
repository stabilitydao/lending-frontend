export const UiHelperAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "enum UiHelper.MarketType",
            name: "marketType",
            type: "uint8",
          },
        ],
        internalType: "struct UiHelper.TokenId",
        name: "tokenId",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "oracle",
            type: "address",
          },
          {
            internalType: "enum UiHelper.TokenType",
            name: "tokenType",
            type: "uint8",
          },
        ],
        internalType: "struct UiHelper.MarketInfos",
        name: "marketInfos",
        type: "tuple",
      },
    ],
    name: "addToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "enum UiHelper.MarketType",
            name: "marketType",
            type: "uint8",
          },
        ],
        internalType: "struct UiHelper.TokenId[]",
        name: "tokenIds",
        type: "tuple[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "getTokensForInput",
    outputs: [
      {
        components: [
          {
            internalType: "address[]",
            name: "tokens",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct UiHelper.TokenAmounts[]",
        name: "result",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "enum UiHelper.MarketType",
        name: "",
        type: "uint8",
      },
    ],
    name: "tokens",
    outputs: [
      {
        internalType: "address",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "enum UiHelper.TokenType",
        name: "tokenType",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
