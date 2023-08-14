import ethereumIcon from "./assets/icons/meth.svg";
import arbIcon from "./assets/icons/arbitrum.svg";
import avaxIcon from "./assets/icons/avax.svg";
import polygonIcon from "./assets/icons/polygon.svg";

import optIcon from "./assets/icons/optimism.svg";

export const chainOptions = [
  {
    value: {
      chainId: 137,
      tokenContractAddr: "0x0000000000000000000000000000000000000000",
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
      tokenContractAddr: "0x0000000000000000000000000000000000000000",
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
      tokenContractAddr: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
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
      chainId: 43114,
      tokenContractAddr: "0x1ce0c2827e2ef14d5c4f29a091d735a204794041",
    },
    label: (
      <>
        <img src={avaxIcon} width={20} height={20}></img> Avalanche
      </>
    ),
    color: "#5243AA",
  },
];

export const chainOptionsGoerliOptimism = [
  {
    value: "opt",
    label: (
      <>
        <img src={optIcon} width={20} height={20}></img> Optimism Goerli
      </>
    ),
    color: "#5243AA",
  },
  {
    value: "goerli",
    label: (
      <>
        <img src={ethereumIcon} width={20} height={20}></img> Ethereum Goerli
      </>
    ),
    color: "#5243AA",
  },
];

export const chainOptionsOwner = [
  {
    value: "optimism",
    label: (
      <>
        <img src={optIcon} width={20} height={20}></img> Optimsm Goerli ETH
      </>
    ),
    color: "#5243AA",
  },
  {
    value: "goerli",
    label: (
      <>
        <img src={ethereumIcon} width={20} height={20}></img> Ethereum Goerli
        ETH
      </>
    ),
    color: "#5243AA",
  },
  {
    value: "mumbai",
    label: (
      <>
        <img src={polygonIcon} width={20} height={20}></img> Polygon Mumbai WETH
      </>
    ),
    color: "#5243AA",
  },
  {
    value: "goerliMatic",
    label: (
      <>
        <img src={ethereumIcon} width={20} height={20}></img> Ethereum Goerli
        MATIC
      </>
    ),
    color: "#5243AA",
  },
];
