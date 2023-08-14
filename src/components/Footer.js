import "../index.scss";

const Footer = () => {
  return (
    <footer className="container-fluid bg-fnox-pumpkin text-white p-md-4 p-4">
      <div className="container">
        <div className="row">
          <div className="col-12 offset-md-0 col-md-6 pl-md-0">
            <h4>About</h4>
            <div className="mt-4">
              <h5>X-Chain-Wallet-Connector</h5>
              <p>
                This project was created during ETHGlobal's flagship hackathon,
                ETHOnline September 2nd-28th, 2022.
              </p>
              <p className="m-0">
                <a href="https://online.ethglobal.com/">
                  <button
                    className="btn btn-sm rounded-pill px-3 text-white btn-border-white text-uppercase"
                    type="button"
                  >
                    Read more
                  </button>
                </a>
              </p>
            </div>
          </div>

          <div className="col-12 col-md-3 pt-3 pt-md-0">
            <h4>Developer</h4>
            <div className="logo-bottom">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link px-0"
                    href="https://github.com/X-Chain-Wallet-Connector"
                  >
                    Github
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link px-0"
                    target="_blank"
                    href="https://ethglobal.com/events/ethonline2022/home"
                    rel="noopener"
                  >
                    Hackathon Project
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-3 pt-3 pt-md-0">
            <h4 className="text-nowrap">Services Used</h4>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link px-0" href="https://debridge.finance/">
                  DeBridge
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-0" href="https://www.optimism.io/">
                  Optimism
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-0" href="https://geth.ethereum.org/">
                  Geth
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
