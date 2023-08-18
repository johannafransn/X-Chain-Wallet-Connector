/* USDC links:
  https://goerli.etherscan.io/token/0x2f3a40a3db8a7e3d09b0adfefbce4f6f81927557?a=0x8ec7f2746d9098a627134091bc9afb4629a8642d
  https://goerli.arbiscan.io/token/0x179522635726710dd7d2035a81d856de4aa7836c
  https://mumbai.polygonscan.com/token/0xe6b8a5cf854791412c1f6efc7caf629f5df1c747

  USDT links:
   https://goerli.etherscan.io/token/0x509ee0d083ddf8ac028f2a56731412edd63223b9
   https://arbiscan.io/token/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9
   https://mumbai.polygonscan.com/token/0xa02f6adc7926efebbd59fd43a84f4e0c0c91e832?a=0xe84d601e5d945031129a83e5602be0cc7f182cf3

   ETH Links:
   https://etherscan.io/token/0xdd69db25f6d620a7bad3023c5d32761d353d3de9
https://arbiscan.io/token/0xf14b1793423a9643b8c8b601cc38af3e9e6aede6

USDT mainnet:
https://polygonscan.com/token/0xc2132d05d31c914a87c6611c10748aeb04b58e8f
https://arbiscan.io/token/0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9
https://etherscan.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7

USDC mainnet:
https://arbiscan.io/token/0xaf88d065e77c8cc2239327c5edb3a432268e5831
https://polygonscan.com/token/0x2791bca1f2de4661ed88a30c99a7a9449aa84174?a=0x447016eec356e01eb62854cb1058c4553f864cce
https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48
   */

export const tokenContractsToChains = {
  USDC: {
    decimals: 6,
    tokenContractAddress: {
      1: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      42161: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      137: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    },
  },
  USDT: {
    decimals: 6,
    tokenContractAddress: {
      1: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      42161: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
      137: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    },
  },
};

/* goerliETH: {
  decimals: 18,
  tokenContractAddress: "0xdd69db25f6d620a7bad3023c5d32761d353d3de9",
},
arbitrumGoerliETH: {
  decimals: 9,
  tokenContractAddress: "0xf14b1793423a9643b8c8b601cc38af3e9e6aede6",
},
optimismGoerliETH: {
  decimals: 9,
  tokenContractAddress: "0x4200000000000000000000000000000000000006",
},
mumbaiETH: {
  decimals: 0,
  tokenContractAddress: "0x0",
},
 */

export const exampleWalletConnectData = {
  topic: "session.topic",
  chainId: "eip155:1",
  request: {
    method: "batch_request",
    params: [
      {
        chainId: "eip155:1",
        method: "personal_sign",
        params: [
          "0x7468697320697320612074657374206d65737361676520746f206265207369676e6564",
          "0x1d85568eEAbad713fBB5293B45ea066e552A90De",
        ],
      },
      {
        chainId: "eip155:1",
        method: "personal_sign",
        params: [
          "0x7468697320697320612074657374206d65737361676520746f206265207369676e6564",
          "0x1d85568eEAbad713fBB5293B45ea066e552A90De",
        ],
      },
    ],
  },
};
