/* USDC links:
  https://goerli.etherscan.io/token/0x2f3a40a3db8a7e3d09b0adfefbce4f6f81927557?a=0x8ec7f2746d9098a627134091bc9afb4629a8642d
  https://goerli.arbiscan.io/token/0x179522635726710dd7d2035a81d856de4aa7836c
  https://mumbai.polygonscan.com/token/0xe6b8a5cf854791412c1f6efc7caf629f5df1c747
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
};
