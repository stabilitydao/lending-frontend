export const abi = [
    {
        type: 'function',
        name: 'deposit',
        stateMutability: 'nonpayable',
        inputs: [{ name: 'amount', type: 'uint256' }],
        outputs: [],
    },
    {
        type: 'function',
        name: 'depositAll',
        stateMutability: 'nonpayable',
        inputs: [],
        outputs: [],
    },
    {
        type: 'function',
        name: 'withdraw',
        stateMutability: 'nonpayable',
        inputs: [{ name: 'amount', type: 'uint256' }],
        outputs: [],
    },
    {
        type: 'function',
        name: 'withdrawAll',
        stateMutability: 'nonpayable',
        inputs: [],
        outputs: [],
    },
    {
        type: 'function',
        name: 'getPricePerFullShare',
        stateMutability: 'view',
        inputs: [],
        outputs: [{ name: 'price', type: 'uint256' }],
    },
    {
        type: 'function',
        name: 'balance',
        stateMutability: 'view',
        inputs: [],
        outputs: [{ name: 'balance', type: 'uint256' }],
    },
] as const;
