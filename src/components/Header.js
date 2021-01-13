import React from "react";
const cats = require("../images/cats1.jpg").default;

function Header() {
  return (
    <header>
      <h1>CATS-LAND</h1>
      <img src={cats} alt="cats avatar" />
    </header>
  );
}

export default Header;
