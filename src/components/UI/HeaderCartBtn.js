import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import "../sass/HeaderCartBtn.scss";
import React, { useContext } from "react";
import CartContext from "../../context/cart-context";

const HeaderCartBtn = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemsLength = cartCtx.items.length;
  return (
    <button onClick={props.onClick} className="btn_header">
      <FontAwesomeIcon icon={faShoppingBag} />
      <p>Panier</p>
      <p className="btn_header--num">{cartItemsLength}</p>
    </button>
  );
};

export default HeaderCartBtn;
