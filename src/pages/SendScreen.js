import "../index.scss";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { chainOptions } from "../chainOptions";
import { assetOptions } from "../chainOptions";
import Web3 from "web3";
import { DataContext } from "../DataContext";
import { wormholeTestBridge } from "../utils/utils";

//Custom hook to create interval that is clearable
function useInterval(callback, interval) {
  const savedCallback = React.useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (interval !== null) {
      let id = setInterval(tick, interval * 1000);
      return () => clearInterval(id);
    }
  }, [interval]);
}
const DeBridge = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [gasData, setGasData] = useState([]);
  const [inputGasPrice, setInputGasPrice] = useState(0);
  const [count, setCount] = useState(1);
  const [metamaskChainId, setMetamaskChainId] = useState(true);
  const [isRunning, setIsRunning] = useState(true);

  const [selectedAsset, setSelectedAsset] = useState("");
  const [selectedTargetChain, setSelectedTargetChain] = useState({});
  const [assetAmount, setAssetAmount] = useState(0);

  const interval = 15;

  const { userAccountAddress, setUserAccountAddress } =
    React.useContext(DataContext);
  let web3 = new Web3(window.web3.currentProvider);

  const fetchApiData = async () => {
    const gasInWei = await web3.eth.getGasPrice();

    //Sets the raw gas state
    console.log("REFETCH!");
    //Set gas data in GWEI instead
    setGasData(gasInWei / 1000000000);
  };

  //Fetch on mounting component
  useEffect(() => {
    fetchApiData();
    web3.eth.getChainId().then((result) => {
      setMetamaskChainId(result);
    });
  }, []);

  //Fetch continously during the interval set
  useInterval(
    () => {
      fetchApiData();
      setCount(count + 1);
    },
    isRunning ? interval : null
  );

  const initiateSend = async () => {
    console.log("Send inited");
    const txHash = await wormholeTestBridge(userAccountAddress);
    console.log(txHash, "Send TX hash");
  };
  let sendButtonEnabled =
    assetAmount && selectedTargetChain.value && selectedAsset;

  return (
    <div className="container py-5 app-market">
      <div class="alert alert-secondary" role="alert">
        <div className="row p-1">
          <label>From</label>
          <input
            class="sc-bGbJRg iBXRhG"
            inputmode="decimal"
            title="Token Amount"
            autocomplete="off"
            autocorrect="off"
            type="text"
            pattern="^[0-9]*[.,]?[0-9]*$"
            placeholder="0.0"
            minlength="1"
            maxlength="79"
            spellcheck="false"
            value={assetAmount}
            onInput={(e) => setAssetAmount(e.target.value)}
          />{" "}
          <div className="col">
            {" "}
            <label for="cars">Asset</label>
            <Select
              options={assetOptions}
              value={selectedAsset}
              onChange={(val) => setSelectedAsset(val)}
            />
          </div>
        </div>
      </div>{" "}
      <div class="alert alert-secondary" role="alert">
        <div className="row p-1">
          <label>To</label>
          <input
            class="sc-bGbJRg iBXRhG"
            inputmode="text"
            title="Public Address"
            autocomplete="off"
            autocorrect="off"
            type="text"
            pattern="^[0-9]*[.,]?[0-9]*$"
            placeholder="Public address..."
            minlength="1"
            readOnly="true"
            value={userAccountAddress}
          />{" "}
          <div className="col">
            <label for="cars">Network/Chain</label>
            <Select
              options={chainOptions}
              value={selectedTargetChain}
              onChange={(value) => setSelectedTargetChain(value)}
            />
          </div>
        </div>
      </div>{" "}
      <div className="col">
        {" "}
        <button
          style={{
            width: "100%",
            marginBottom: 20,
            backgroundColor: "cadetblue",
          }}
          onClick={() => initiateSend()}
          className="btn"
          disabled={!sendButtonEnabled}
        >
          Send
        </button>
      </div>
      <div className="row p-1">
        <div className="col">
          <p>
            Latest gas price <b>{gasData}</b> GWEI on chainid{" "}
            <b>{metamaskChainId}</b>
          </p>
          <p>
            {" "}
            Please note gas estimation will vary depending on source to
            destination chain
          </p>
        </div>
        {/*       <div className="col">
       
        </div> */}
      </div>
      {errorMsg || successMsg ? (
        <div
          className={errorMsg ? "alert alert-error" : "alert alert-secondary"}
          role="alert"
        >
          {errorMsg} {successMsg}
        </div>
      ) : null}
    </div>
  );
};

export default DeBridge;
