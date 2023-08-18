import { ethers } from "ethers";
import { ExternalProvider } from "@ethersproject/providers";

import { tokenContractsToChains } from "../constants/db";
import { Web3Provider, JsonRpcSigner, JsonRpcProvider, TransactionReceipt } from '@ethersproject/providers';
import { Squid, TransactionRequest, RouteResponse } from "@0xsquid/sdk";
import { ABI } from "../config";



export default function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider, 'any');
    library.pollingInterval = 15000;
    return library;
}
export const initSquid = async () => {
    const squid = new Squid({
        // baseUrl: "https://testnet.api.squidrouter.com", // for mainnet use "https://api.0xsquid.com"
        baseUrl: "https://api.0xsquid.com",
        integratorId: "liquality-sdk",
    });
    await squid.init();

    squid.setConfig({
        // baseUrl: "https://testnet.api.squidrouter.com", // for mainnet use "https://api.0xsquid.com"
        baseUrl: "https://api.0xsquid.com",
        integratorId: "liquality-sdk",
    });

    // init the SDK
    await squid.init();
    console.log("Squid inited");
    return squid
}

export const testBridge = async (senderAddress: string, params: any): Promise<TransactionReceipt | any> => {
    try {
        const squid = await initSquid()

        //TODO: See which balances user has across chains, and loop through the params and function based on that

        console.log(params, 'params sent in?', params.fromChain)


        const provider = new ethers.providers.JsonRpcProvider(squid.chains.find((c) => c.chainId === params.fromChain)!.rpc);
        const signer: JsonRpcSigner = await provider.getSigner();

        const { route } = await squid.getRoute(params)
        console.log(route, 'for params: FROM and TO chain:', params.fromChain, params.toChain,)
        const nonce = await getNonce(provider, senderAddress)
        const unsignedTx = await squid.getRawTxHex({ nonce, route })

        // Parse the serialized transaction
        /*  const parsedTransaction = ethers.utils.parseTransaction(unsignedTx);
         // Sign the transaction using the signer
         const signedTransaction = await signer.signTransaction(parsedTransaction);
 
         return signedTransaction; */
        return { route, unsignedTx }



        /*   const tx = await squid.executeRoute({
              signer,
              route
          }) */
        /*    const txReceipt = await tx.wait()
           console.log(txReceipt)
           return txReceipt */


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



export const getBalances = async (
    publicAddress: string,
    tokenSymbol: string
): Promise<Array<{ balance: string; tokenSymbol: string; tokenContractAddress: string }>> => {
    const squid = await initSquid(); // Assuming you have this function defined
    const balancesArray = [];

    const tokenData = tokenContractsToChains[tokenSymbol];
    if (!tokenData) {
        throw new Error(`Token ${tokenSymbol} not found in tokenContractsToChains data`);
    }

    for (const chainId in tokenData.tokenContractAddress) {
        const tokenContractAddress = tokenData.tokenContractAddress[chainId];
        const provider = new ethers.providers.JsonRpcProvider(
            squid.chains.find((c) => c.chainId === parseInt(chainId))!.rpc
        );

        const contract = new ethers.Contract(tokenContractAddress, ABI, provider);
        const balanceInWei = await contract.balanceOf(publicAddress[0]);
        const balanceInToken = balanceInWei.toString();

        const balanceObject = {
            balance: balanceInToken,
            tokenSymbol: tokenSymbol,
            tokenContractAddress: tokenContractAddress,
        };

        balancesArray.push({ [chainId]: balanceObject });
    }

    return balancesArray;
};






