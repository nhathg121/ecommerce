import React from "react";
import Button from "@mui/material/Button";

const Navigation = () => {
  return (
    <nav>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-3 navPart1">
            <Button className="allCatTab">
              <span>All Categories</span>
            </Button>
          </div>
          <div className="col-sm-9 navPart2">
            <ul className="d-flex navMenu">
              <li>Fashion</li>
              <li>Electronics</li>
              <li>Groceries</li>
              <li>Footwear</li>
              <li>Beauty</li>
              <li>Wellness</li>
              <li>Bags</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
