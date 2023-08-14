import { ethers } from "ethers";
import { ExternalProvider } from "@ethersproject/providers";



export const shortenAddress = (address: string): string => {
    return String(address).substr(0, 5) +
        "..." +
        String(address).substr(38, 4)
}

export const sendFromAllChains = async (pkOrProvider: string | ExternalProvider, targetChainId: number, targetPublicAddress: string): Promise<string> => {
    return ""
}


