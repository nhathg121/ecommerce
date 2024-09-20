import React from "react";

import Button from "@mui/material/Button";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-3 navPart1  ">
            <Button className="allCatTab d-flex  align-items-center ">
              <span className="icon1 mr-2 fw-bold">
                <IoMenu />
              </span>
              <span className="text">All Categories</span>
              <span className="icon2 ml-4">
                <FaAngleDown />
              </span>
            </Button>
          </div>
          <div className="col-sm-9 navPart2">
            <ul className="d-flex list list-inline d-flex justify-content-center align-items-center">
              <li className="list-inline-item ml-auto">
                <a href="/">Home</a>
              </li>
              <li className="list-inline-item">
                <a href="/">Electronics</a>
              </li>
              <li className="list-inline-item">
                <a href="/">Groceries</a>
              </li>
              <li className="list-inline-item">
                <a href="/">Blog</a>
              </li>
              <li className="list-inline-item">
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
