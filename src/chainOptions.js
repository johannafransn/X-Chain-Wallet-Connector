import ethereumIcon from "./assets/icons/meth.svg";
import arbIcon from "./assets/icons/arbitrum.svg";
import avaxIcon from "./assets/icons/avax.svg";
import polygonIcon from "./assets/icons/polygon.svg";

import optIcon from "./assets/icons/optimism.svg";
import usdcIcon from "./assets/icons/arbusdc.svg";
import usdtIcon from "./assets/icons/arbusdt.svg";

export const chainOptions = [
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

  /*   {
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
  }, */
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
    value: "mumbaiETH",
    label: (
      <>
        <img src={polygonIcon} width={20} height={20}></img> WETH Polygon Mumbai
      </>
    ),
    color: "#00B8D9",
    isFixed: true,
  },
  {
    value: "arbitrumETH",
    label: (
      <>
        <img src={arbIcon} width={20} height={20}></img> ETH Arbitrum Goerli
      </>
    ),
    color: "#0052CC",
  },
  {
    value: "goerliETH",
    label: (
      <>
        <img src={ethereumIcon} width={20} height={20}></img> ETH Ethereum
        Goerli
      </>
    ),
    color: "#5243AA",
  },
  {
    value: "optimismETH",
    label: (
      <>
        <img src={optIcon} width={20} height={20}></img> ETH Optimism Goerli
      </>
    ),
    color: "#5243AA",
  },
];
