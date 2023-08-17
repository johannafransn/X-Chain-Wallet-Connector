import { ethers } from "ethers";
import { ExternalProvider } from "@ethersproject/providers";

import { tokenContractsToChains } from "../constants/db";
import { Web3Provider, JsonRpcSigner, JsonRpcProvider, TransactionReceipt } from '@ethersproject/providers';
import { Squid, } from "@0xsquid/sdk";



export default function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider, 'any');
    library.pollingInterval = 15000;
    return library;
}
export const initSquid = async () => {
    const squid = new Squid({
        baseUrl: "https://testnet.api.squidrouter.com", // for mainnet use "https://api.0xsquid.com"
        integratorId: "liquality-sdk",
    });
    await squid.init();

    squid.setConfig({
        baseUrl: "https://testnet.api.squidrouter.com", // for mainnet use "https://api.0xsquid.com"
        integratorId: "liquality-sdk",
    });

    // init the SDK
    await squid.init();
    console.log("Squid inited");
    return squid
}

export const testBridge = async (publicAddress: string): Promise<TransactionReceipt | string> => {
    try {
        const squid = await initSquid()
        const params = {
            fromChain: 5, // Goerli testnet
            fromToken: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", // WETH on Goerli
            fromAmount: "50000000000000000", // 0.05 WETH
            toChain: 43113, // Avalanche Fuji Testnet
            toToken: "0x57f1c63497aee0be305b8852b354cec793da43bb", // aUSDC on Avalanche Fuji Testnet
            toAddress: "0xAD3A87a43489C44f0a8A33113B2745338ae71A9D", // the recipient of the trade
            slippage: 3.00, // 3.00 = 3% max slippage across the entire route, acceptable value range is 1-99
            enableForecall: true, // instant execution service, defaults to true
            quoteOnly: false // optional, defaults to false
        };


        const provider = new ethers.providers.JsonRpcProvider(squid.chains.find((c) => c.chainId === params.fromChain)!.rpc);
        const signer: JsonRpcSigner = await provider.getSigner();


        const { route } = await squid.getRoute(params)
        console.log(route, 'squid routedata??')
        const nonce = await getNonce(provider, "0xb81B9B88e764cb6b4E02c5D0F6D6D9051A61E020")
        const unsignedTx = await squid.getRawTxHex({ nonce, route })
        console.log(unsignedTx, 'squid unsigned TX')

        /*   const tx = await squid.executeRoute({
              signer,
              route
          }) */
        /*    const txReceipt = await tx.wait()
           console.log(txReceipt)
           return txReceipt */
        return "Hello it worked"

    } catch (err) {
        console.log(err, 'error wormhole sdk send');
        return err + "send ERROR"
    }


}



export const shortenAddress = (address: string): string => {
    return String(address).substr(0, 5) +
        "..." +
        String(address).substr(38, 4)
}

export const getNonce = async (provider: JsonRpcProvider, senderAddress: string): Promise<number> => {
    const nonce = await provider.getTransactionCount(senderAddress);
    return nonce;
}


