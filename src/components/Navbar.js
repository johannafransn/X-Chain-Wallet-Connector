import { NavLink } from "react-router-dom";

const Navbar = ({
  handleConnectMetamask,
  connectedAddrValue,
  userAccountAddress,
}) => {
  return (
    <div className="container-fluid m-0 py-3 bg-black align-middle text-center text-banner">
      {/*      <a href="/#/" className="text-white hov">
        Home
      </a>
      <a href="/#/chainlink" className="text-white hov">
        Mock Chainlink Keepers Bridge
      </a>
      <a href="/#/debridge" className="text-white hov">
        deBridge Swap
      </a>
      <a href="/#/X-Chain-Wallet-Connector" className="text-white hov">
        X-Chain-Wallet-Connector
      </a> */}
    </div>
  );
};

export default Navbar;
