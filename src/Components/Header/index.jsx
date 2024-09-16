import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import { LuUser2 } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
// import { IoSearch } from "react-icons/io5";

import CountryDropdown from "../CountryDropdown";
import SearchBox from "./SearchBox/SearchBox";

const Header = () => {
  return (
    <div>
      <div className="headerWrapper">
        {/*-----------------------------Notification----------------------------*/}
        <div className="top-strip bg-black">
          <div className="container">
            <p className=" lh-lg mb-0 mt-0 text-center ">
              Due to the <b>Yagi</b> Storm come, orders maybe processed with
              slight delay
            </p>
          </div>
        </div>

        {/*---------------------------------header-------------------------------*/}
        <header className="header d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              {/*   --------------LOGO  ------------- */}
              <div className="logoWrapper col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="Golf Land Logo" />
                </Link>
              </div>

              {/*   ---CountryDropdown & SearchBox---- */}
              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropdown />
                <SearchBox />

                {/* ------------User Menu ---------- */}
                <div className="part3  col-sm-2  d-flex align-items-center ml-auto">
                  <Button className="circle mr-3 ">
                    <LuUser2 />
                  </Button>
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">$3.29</span>
                    <div className="position-relative ml-2">
                      <Button className="circle ml-3">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center ">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*---------------------------------Nav-------------------------------*/}
        <nav>
          <div className="container">
            <div className="row">
              <div className="col-sm-3 navPart1">
                <Button className="allCatTab">
                  <span>All Categories</span>
                </Button>
              </div>
              <div className="col-sm-9 navPart2">123</div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
