import React from "react";
import HeaderCartBtn from "../UI/HeaderCartBtn";
import "../sass/Header.scss";
import HeaderLogo from "../UI/HeaderLogo";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="header-nav">
        <HeaderLogo />
        <HeaderCartBtn onClick={props.onShowCart} />
      </nav>
      <div className="header-sub"></div>
    </header>
  );
};

export default Header;
