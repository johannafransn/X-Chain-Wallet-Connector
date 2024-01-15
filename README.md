# x-chain-wallet-connector app

A simple MVP demonstrating a function that could be called `batch_bridging` or `sendFromAllChains` user picks an asset like USDC, and also selects a target chain like Avalanche. All of the users USDC from all chains where he/she has USDC balance is sent as USDC to target chain.

Supported chains right now include Polygon, Arbitrum, Ethereum, Avalanche, Optimism.
Selected assets right now include USDC & USDT

This dapp is supposed to be run alongside any wallet that has `batch_signing` functionality implemented. Otherwise user will have to sign all of the bridge transfers individually.

Proposal to introduce a new EIP standard for wallets and dapps to support batch signing would be recommended. 

Sequance wallet SDK offers such functionality, see here: https://docs.sequence.xyz/wallet/guides/send-batch-transactions/
# Run the app

`npm install` && `npm start`
