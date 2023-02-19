import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import "../sass/HeaderCartBtn.scss";
import React from "react";

const HeaderCartBtn = (props) => {
  return (
    <button onClick={props.onClick} className="btn_header">
      <FontAwesomeIcon icon={faShoppingBag} />
      <p>Panier</p>
      <p className="btn_header--num">0</p>
    </button>
  );
};

export default HeaderCartBtn;
