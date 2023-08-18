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
   */

export const tokenContractsToChains = {
  USDC: {
    decimals: 6,
    tokenContractAddress: {
      goerli: 0x8ec7f2746d9098a627134091bc9afb4629a8642d,
      arbitrumGoerli: 0x179522635726710dd7d2035a81d856de4aa7836c,
      mumbai: 0xe6b8a5cf854791412c1f6efc7caf629f5df1c747,
    },
  },
  USDT: {
    decimals: 6,
    tokenContractAddress: {
      goerli: 0x509ee0d083ddf8ac028f2a56731412edd63223b9,
      arbitrumGoerli: 0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9,
      mumbai: 0xa02f6adc7926efebbd59fd43a84f4e0c0c91e832,
      1: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      42161: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
      137: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    },
  },

  goerliETH: {
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
};
