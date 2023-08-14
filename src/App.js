import { Route, Routes } from "react-router-dom";
import { DataContext } from "./DataContext";
import React, { useState } from "react";
import Web3 from "web3";
import Navbar from "./components/Navbar";
import SendScreen from "./pages/SendScreen";

import { ethers } from "ethers";

function App() {
  const [userAccountAddress, setUserAccountAddress] = useState("");
  const [connectedAddrValue, setConnectedAddrValue] = useState(" ");

  const handleConnectMetamask = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    // const network = await web3.eth.net.getNetworkType();

    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    App.web3Provider = window.ethereum;

    //Fetch account data:
    const accountFromMetaMask = await web3.eth.getAccounts();
    setUserAccountAddress(accountFromMetaMask);
    setConnectedAddrValue(
      String(accountFromMetaMask).substr(0, 5) +
        "..." +
        String(accountFromMetaMask).substr(38, 4)
    );
    const name = await provider.lookupAddress(accountFromMetaMask[0]);
    if (name) {
      setConnectedAddrValue(name);
    }
  };

  return (
    <DataContext.Provider value={{ userAccountAddress: userAccountAddress }}>
      <body class="stretched device-xl bg-white no-transition">
        {" "}
        <div className="container-fluid m-0 py-2 align-middle text-center text-banner">
          <button
            onClick={() => handleConnectMetamask()}
            className="btn-light mm"
          >
            {userAccountAddress ? connectedAddrValue : "Connect Wallet"}
          </button>
        </div>
        <Navbar
          handleConnectMetamask={handleConnectMetamask}
          connectedAddrValue={connectedAddrValue}
          userAccountAddress={userAccountAddress}
        />
        <Routes>
          <Route path="/" element={<SendScreen />} />
        </Routes>
        {/*         <Footer></Footer>
         */}{" "}
      </body>
    </DataContext.Provider>
  );
}

export default App;
