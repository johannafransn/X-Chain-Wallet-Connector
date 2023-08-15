import { ethers } from "ethers";
import { ExternalProvider } from "@ethersproject/providers";
import { Wormhole, Context, Network } from '@wormhole-foundation/connect-sdk';
import { EvmContext } from '@wormhole-foundation/connect-sdk-evm';
import { tokenContractsToChains } from "../constants/db";


const NETWORK = Network.TESTNET;
const contexts = {
    [Context.EVM]: EvmContext,

}


export const wormholeTestBridge = async (publicAddress: string): Promise<string> => {
    try {
        const wormholeSDK = new Wormhole(NETWORK, contexts);
        const receipt = wormholeSDK.startTransfer(
            {
                chain: 'ethereum', //native chain
                address: tokenContractsToChains.USDC.tokenContractAddress.goerli.toString(), //token contract address
            }, // this object constitutes as token id (native chain and token contract address)
            BigInt(10), // amount
            'ethereum', // sending chain
            publicAddress, // sender address
            'polygon', // destination chain
            publicAddress, // recipient address on destination chain
        )
        return receipt
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

export const sendFromAllChains = async (pkOrProvider: string | ExternalProvider, targetChainId: number, targetPublicAddress: string): Promise<string> => {
    return ""
}


