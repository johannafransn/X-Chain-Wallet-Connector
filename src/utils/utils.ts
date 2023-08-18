import { ethers } from "ethers";
import { ExternalProvider } from "@ethersproject/providers";

import { tokenContractsToChains } from "../constants/db";
import { Web3Provider, JsonRpcSigner, JsonRpcProvider, TransactionReceipt } from '@ethersproject/providers';
import { Squid, TransactionRequest, } from "@0xsquid/sdk";



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

export const testBridge = async (senderAddress: string): Promise<TransactionReceipt | string> => {
    try {
        const squid = await initSquid()

        //TODO: See which balances user has across chains, and loop through the params and function based on that

        const params = {
            fromChain: 5, // Goerli testnet
            fromToken: "0xdd69db25f6d620a7bad3023c5d32761d353d3de9", // ETH on Goerli
            fromAmount: "30000000000000000", // 0.03 ETH
            toChain: 421613, // Arbitrum Goerli Testnet
            toToken: "0xf14b1793423a9643b8c8b601cc38af3e9e6aede6", // eth on arbitrum testnet
            toAddress: senderAddress, // the recipient of the trade
            slippage: 3.00, // 3.00 = 3% max slippage across the entire route, acceptable value range is 1-99
            enableForecall: true, // instant execution service, defaults to true
            quoteOnly: false // optional, defaults to false
        };


        const provider = new ethers.providers.JsonRpcProvider(squid.chains.find((c) => c.chainId === params.fromChain)!.rpc);
        const signer: JsonRpcSigner = await provider.getSigner();


        const { route } = await squid.getRoute(params)
        console.log(route, 'squid routedata??')
        const nonce = await getNonce(provider, senderAddress)
        const unsignedTx = await squid.getRawTxHex({ nonce, route })

        // Parse the serialized transaction
        const parsedTransaction = ethers.utils.parseTransaction(unsignedTx);
        // Sign the transaction using the signer
        const signedTransaction = await signer.signTransaction(parsedTransaction);

        return signedTransaction;



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

export const getTokenContractAddress = (selectedAsset, selectedTargetChainId) => {
    if (!tokenContractsToChains[selectedAsset]) {
        throw new Error(`Token ${selectedAsset} not found in the tokenContractsToChains data`);
    }

    const tokenData = tokenContractsToChains[selectedAsset];
    console.log(tokenData, 'TOKENDATA BÄÄ')

    if (!tokenData.tokenContractAddress[selectedTargetChainId]) {
        throw new Error(`Token contract address not found for ${selectedAsset} on chainId ${selectedTargetChainId}`);
    }

    return tokenData.tokenContractAddress[selectedTargetChainId];

}


