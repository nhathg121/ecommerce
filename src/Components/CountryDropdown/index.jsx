import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";

const CountryDropdown = () => {
  return (
    <>
      {" "}
      <Button className="countryDrop d-flex justify-content-between">
        <div className="info d-flex flex-column align-items-start">
          <span className="label">Your Location</span>
          <span className="name">Viet Nam</span>
        </div>
        <span className="dropIcon mr-3">
          <FaAngleDown />
        </span>
      </Button>
    </>
  );
};

export default CountryDropdown;
