import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import { IoSearch } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";

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

        <header className="header">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="logoWrapper col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="Golf Land Logo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropdown />
                {/* Header Search Start Here*/}
                <div className="headerSearch ml-3 mr-3">
                  <input type="text" placeholder="Seacrh for product ..." />
                  <Button>
                    <IoSearch />
                  </Button>
                </div>
                {/* Header Search End Here*/}
                <div className="part3 d-flex align-items-center ml-auto">
                  <Button className="circle">
                    <LuUser2 />
                    <p>$650</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
