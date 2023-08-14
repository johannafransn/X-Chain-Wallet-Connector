import "../index.scss";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { goerliABI } from "../constants/chainlinkABI";
import {
  optimismABI,
  goerliToMumbai,
  mumbaiToGoerliABI,
} from "../constants/chainlinkABI";
import { DataContext } from "../DataContext";
import { chainOptionsGoerliOptimism, chainOptionsOwner } from "../chainOptions";
import Owner from "../pages/Owner";

const ChainlinkBridge = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [srcGoerliBridgeContract, setSrcGoerliBridgeContract] = useState(null);
  const [srcGoerliBridgeToMumbai, srcGoerliBridgeMumbai] = useState(null);
  const [srcMumbaiToGoerliContract, setSrcMumbaiToGoerliContract] =
    useState(null);
  const [srcOptimismBridgeContract, setSrcOptimismBridgeContract] =
    useState(null);
  const [selectedDstChain, setSelectedDstChain] = useState("Optimism Goerli");
  const [selectedAddLiquidityChain, setSelectedAddLiquidityChain] = useState(
    {}
  );

  const [showOwner, setShowOwner] = useState(false);
  const [selectedWithdrawal, setSelectedWithdrawal] = useState();

  const web3 = new Web3(window.web3.currentProvider);
  const optimismAddress = "0x0A0FDdB2f265d2De819C616ebe7cFFb7c9175Cdc";
  const goerliAddress = "0xdEa5F3E7d16D98177b66d3E874723C2bb299eeb6";
  const goerliMumbaiAddress = "0x420E50B601E92933638b29DD273d8b692CdB3a9D";
  const mumbaiToGoerliAddress = "0x5BFef6EA00a2B15c97Ddd68b76F03200a010e627";

  const { userAccountAddress, setUserAccountAddress } =
    React.useContext(DataContext);

  const [srcChainSelected, setSelected] = React.useState("");
  /*   
for each option there should be a lock, owner has to have funds check that and throw error
button for the locks. 
  Optimism -> goerli
  Mumbai -> goerli
  goerli -> optimism, mumbai  
  */

  useEffect(() => {
    const loadBlockchainData = async () => {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

      const chainId = await web3.eth.getChainId();
      if (chainId !== 5) {
        setErrorMsg("Please connect your address to the Goerli test network");
      }

      const goerliContract = new web3.eth.Contract(goerliABI, goerliAddress);
      const mumbaiContract = new web3.eth.Contract(
        goerliToMumbai,
        goerliMumbaiAddress
      );
      const mumbaiToGoerliContract = new web3.eth.Contract(
        mumbaiToGoerliABI,
        mumbaiToGoerliAddress
      );
      const optimismContract = new web3.eth.Contract(
        optimismABI,
        optimismAddress
      );
      setSrcGoerliBridgeContract(goerliContract);
      setSrcOptimismBridgeContract(optimismContract);
      srcGoerliBridgeMumbai(mumbaiContract);
      setSrcMumbaiToGoerliContract(mumbaiToGoerliContract);
    };
    loadBlockchainData();
  }, []);

  const selectSrcChain = (event) => {
    setSelected(event.target.value);
  };

  const selectDstChain = (event) => {
    setSelectedDstChain(event.target.value);
  };
  //Different arrays for different dropdowns
  const polygon = ["Ethereum Goerli"];
  const optimism = ["Ethereum Goerli"];
  const goerli = ["Optimsim Goerli", "Polygon Mumbai"];

  let type = null;
  let options = null;

  //Setting Type variable according to dropdown
  if (srcChainSelected === "Polygon Mumbai") {
    type = polygon;
  } else if (srcChainSelected === "Optimism Goerli") {
    type = optimism;
  } else if (srcChainSelected === "Ethereum Goerli") {
    type = goerli;
  }

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  const clickAddLiqudity = async () => {
    let connectedChainId = await web3.eth.net.getId();
    if (connectedChainId === 5 && userAccountAddress) {
      if (selectedAddLiquidityChain.value === "opt") {
        web3.eth.sendTransaction({
          to: optimismAddress,
          data: srcOptimismBridgeContract.methods
            .ownerAddBridgeLiqudity()
            .encodeABI(),
          value: 1000,
          from: userAccountAddress[0],
        });
      } else {
        web3.eth.sendTransaction({
          to: goerliAddress,
          data: srcGoerliBridgeContract.methods
            .ownerAddBridgeLiqudity()
            .encodeABI(),
          value: 1000,
          from: userAccountAddress[0],
        });
      }
    } else {
      setErrorMsg(
        "Please make sure you are connected to the Goerli network in your wallet!"
      );
    }
  };

  const initiateSwap = (type) => {
    if (userAccountAddress) {
      if (srcChainSelected === "Optimism Goerli") {
        web3.eth.sendTransaction({
          to: optimismAddress,
          data: srcOptimismBridgeContract.methods
            .lockTokensForGoerli()
            .encodeABI(),
          value: 1003,
          from: userAccountAddress[0],
        });
      } else if (srcChainSelected === "Polygon Mumbai") {
        web3.eth.sendTransaction({
          to: mumbaiToGoerliAddress,
          data: srcMumbaiToGoerliContract.methods
            .lockTokensForGoerli()
            .encodeABI(),
          value: 1003,
          from: userAccountAddress[0],
        });
      } else if (srcChainSelected === "Ethereum Goerli") {
        if (selectedDstChain === "Optimism Goerli") {
          web3.eth.sendTransaction({
            to: goerliAddress,
            data: srcGoerliBridgeContract.methods
              .lockTokensForOptimism()
              .encodeABI(),
            value: 1003,
            from: userAccountAddress[0],
          });
        } else if (selectedDstChain === "Polygon Mumbai")
          web3.eth.sendTransaction({
            to: goerliMumbaiAddress,
            data: srcGoerliBridgeToMumbai.methods
              .lockTokensForOptimism()
              .encodeABI(),
            value: 1003,
            from: userAccountAddress[0],
          });
      }
    } else {
      setErrorMsg(
        "You need to connect your wallet to the Goerli network to be able to bridge."
      );
    }
  };

  const handleWithdrawClick = () => {
    if (userAccountAddress) {
      if (selectedWithdrawal.value === "optimism") {
        web3.eth.sendTransaction({
          to: optimismAddress,
          data: srcOptimismBridgeContract.methods
            .ownerRemoveBridgeLiqudity()
            .encodeABI(),
          from: userAccountAddress[0],
        });
      } else if (selectedWithdrawal.value === "goerli") {
        web3.eth.sendTransaction({
          to: goerliAddress,
          data: srcGoerliBridgeContract.methods
            .ownerRemoveBridgeLiqudity()
            .encodeABI(),
          from: userAccountAddress[0],
        });
      } else if (selectedWithdrawal.value === "mumbai") {
        web3.eth.sendTransaction({
          to: mumbaiToGoerliAddress,
          data: srcMumbaiToGoerliContract.methods
            .ownerRemoveBridgeLiqudity()
            .encodeABI(),
          from: userAccountAddress[0],
        });
      } else if (selectedWithdrawal.value === "goerliMumbai") {
        web3.eth.sendTransaction({
          to: goerliMumbaiAddress,
          data: srcGoerliBridgeToMumbai.methods
            .ownerRemoveBridgeLiqudity()
            .encodeABI(),
          from: userAccountAddress[0],
        });
      }
    } else setErrorMsg("Please connect your wallet!");
  };

  return (
    <div className="container py-5 app-market">
      <button
        style={{ marginBottom: 40 }}
        onClick={() => setShowOwner(!showOwner)}
        className="btn btn-primary"
      >
        {showOwner ? "Go to User" : "Go to Owner"}
      </button>
      {showOwner ? (
        <Owner
          chainOptionsOwner={chainOptionsOwner}
          selectedWithdrawal={selectedWithdrawal}
          setSelectedWithdrawal={setSelectedWithdrawal}
          chainOptionsGoerliOptimism={chainOptionsGoerliOptimism}
          selectedAddLiquidityChain={selectedAddLiquidityChain}
          setSelectedAddLiquidityChain={setSelectedAddLiquidityChain}
          clickAddLiqudity={clickAddLiqudity}
          handleWithdrawClick={handleWithdrawClick}
        ></Owner>
      ) : (
        <>
          <div class="alert alert-secondary" role="alert">
            <div className="row p-1">
              <h3>User</h3>
            </div>

            <div className="row p-1">
              <label>From</label>

              <div className="col">
                <select className="form-select" onChange={selectSrcChain}>
                  <option>Choose...</option>
                  <option>Polygon Mumbai</option>
                  <option>Optimism Goerli</option>
                  <option>Ethereum Goerli</option>
                </select>
              </div>
            </div>
            <div className="row p-1">
              <label>To</label>
              <div className="col">
                <select
                  className="form-select"
                  onChange={(e) => selectDstChain(e)}
                >
                  {
                    // Render the options based on users first selection
                    options
                  }
                </select>
              </div>
            </div>
          </div>
          <div className="col">
            <button
              style={{
                width: "100%",
                marginBottom: 20,
                backgroundColor: "cadetblue",
              }}
              onClick={() => initiateSwap()}
              className="btn"
            >
              Lock 1000 WEI To Bridge
            </button>
          </div>
        </>
      )}

      {errorMsg ? (
        <div class="alert alert-error" role="alert">
          {errorMsg}
        </div>
      ) : null}
    </div>
  );
};

export default ChainlinkBridge;
