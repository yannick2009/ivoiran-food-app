import React from "react";
import HeaderCartBtn from "./HeaderCartBtn";
import "./sass/Header.scss";


const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <p></p>
        <HeaderCartBtn></HeaderCartBtn>
      </nav>
      <div className="header-sub"></div>
    </header>
  );
};

export default Header;
