import { ethers } from "ethers";
import { ExternalProvider } from "@ethersproject/providers";
import { Wormhole, Context, Network } from '@wormhole-foundation/connect-sdk';
import { EvmContext } from '@wormhole-foundation/connect-sdk-evm';


const NETWORK = Network.TESTNET;
const contexts = {
    [Context.EVM]: EvmContext,

}


export const wormholeTestBridge = async (pkOrProvider: string | ExternalProvider, targetChainId: number, targetPublicAddress: string): Promise<string> => {
    const wormholeSDK = new Wormhole(NETWORK, contexts);
    const receipt = wormholeSDK.startTransfer(
        {
            chain: 'ethereum',
            address: '0x123...',
        }, // token id (native chain and address)
        BigInt(10), // amount
        'ethereum', // sending chain
        '0x789...', // sender address
        'moonbeam', // destination chain
        '0x789...', // recipient address on destination chain
    )
    return receipt
}



export const shortenAddress = (address: string): string => {
    return String(address).substr(0, 5) +
        "..." +
        String(address).substr(38, 4)
}

export const sendFromAllChains = async (pkOrProvider: string | ExternalProvider, targetChainId: number, targetPublicAddress: string): Promise<string> => {
    return ""
}


