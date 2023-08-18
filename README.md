# x-chain-wallet-connector app

A simple MVP demonstrating a function that could be called `batch_bridging` or `sendFromAllChains` user picks an asset like USDC, and also selects a target chain like Avalanche. All of the users USDC from all chains where he/she has USDC balance is sent as USDC to target chain.

Supported chains right now include Polygon, Arbitrum, Ethereum, Avalanche, Optimism.
Selected assets right now include USDC & USDT

This dapp is supposed to be run alongside a wallet that has `batch_signing` functionality implemented. Otherwise user will have to sign all of the bridge transfers individually.

# Run the app

`npm install`
`npm start`
