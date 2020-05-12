import React from "react";
import logo from "../../assets/virus.svg";

const Header = () => {
  return (
    <header className="header">
      <span className="item">
        C
        <img src={logo} className="App-logo" alt="logo" />
        vid-19 Update
      </span>
    </header>
  );
};

export default Header;
