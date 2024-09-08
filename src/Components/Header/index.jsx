import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

import CountryDropdown from "../CountryDropdown";

const Header = () => {
  return (
    <div>
      <div className="headerWrapper">
        <div className="top-strip bg-black">
          <div className="container">
            <p className=" lh-lg mb-0 mt-0 text-center ">
              Due to the <b>Yagi</b> Storm come, orders maybe processed with
              slight delay
            </p>
          </div>
        </div>

        <div className="header">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="logoWrapper col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="Golf Land Logo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
