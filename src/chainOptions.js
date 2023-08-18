import ethereumIcon from "./assets/icons/meth.svg";
import arbIcon from "./assets/icons/arbitrum.svg";
import avaxIcon from "./assets/icons/avax.svg";
import polygonIcon from "./assets/icons/polygon.svg";

import optIcon from "./assets/icons/optimism.svg";
import usdcIcon from "./assets/icons/arbusdc.svg";
import usdtIcon from "./assets/icons/arbusdt.svg";

/* export const chainOptions = [
  {
    value: {
      chainId: 80001,
      chain_testnet: "mumbai",
    },
    label: (
      <>
        <img src={polygonIcon} width={20} height={20}></img> Polygon Mumbai
      </>
    ),
    color: "#00B8D9",
    isFixed: true,
  },
  {
    value: {
      chainId: 421613,
      chain_testnet: "arbitrum",
    },
    label: (
      <>
        <img src={arbIcon} width={20} height={20}></img> Arbitrum Goerli
      </>
    ),
    color: "#0052CC",
  },
  {
    value: {
      chainId: 5,
      chain_testnet: "ethereum",
    },
    label: (
      <>
        <img src={ethereumIcon} width={20} height={20}></img> Ethereum Goerli
      </>
    ),
    color: "#5243AA",
  },
  {
    value: {
      chainId: 420,
      chain_testnet: "optimism",
    },
    label: (
      <>
        <img src={optIcon} width={20} height={20}></img> Optimism Goerli
      </>
    ),
    color: "#5243AA",
  },


];
 */

export const chainOptions = [
  {
    value: {
      chainId: 137,
      chain_mainnet: "polygon",
    },
    label: (
      <>
        <img src={polygonIcon} width={20} height={20}></img> Polygon
      </>
    ),
    color: "#00B8D9",
    isFixed: true,
  },
  {
    value: {
      chainId: 42161,
      chain_mainnet: "arbitrum",
    },
    label: (
      <>
        <img src={arbIcon} width={20} height={20}></img> Arbitrum
      </>
    ),
    color: "#0052CC",
  },
  {
    value: {
      chainId: 1,
      chain_mainnet: "ethereum",
    },
    label: (
      <>
        <img src={ethereumIcon} width={20} height={20}></img> Ethereum
      </>
    ),
    color: "#5243AA",
  },
  {
    value: {
      chainId: 10,
      chain_mainnet: "optimism",
    },
    label: (
      <>
        <img src={optIcon} width={20} height={20}></img> Optimism
      </>
    ),
    color: "#5243AA",
  },
];

export const assetOptions = [
  {
    value: "USDC",
    label: (
      <>
        <img src={usdcIcon} width={20} height={20}></img> USDC
      </>
    ),
    color: "#00B8D9",
    isFixed: true,
  },
  {
    value: "USDT",
    label: (
      <>
        <img src={usdtIcon} width={20} height={20}></img> USDT
      </>
    ),
    color: "#00B8D9",
    isFixed: true,
  },

  {
    value: "ETH",
    label: (
      <>
        <img src={ethereumIcon} width={20} height={20}></img> ETH
      </>
    ),
    color: "#5243AA",
  },
];
