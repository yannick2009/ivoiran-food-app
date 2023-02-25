import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import "../sass/HeaderCartBtn.scss";
import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../context/cart-context";

const HeaderCartBtn = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemsLength = cartCtx.items.length;

  const [animBump, setAnimBump] = useState("");
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setAnimBump("bump");
    const timer = setTimeout(() => {
      setAnimBump("");
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button onClick={props.onClick} className={`btn_header ${animBump}`}>
      <FontAwesomeIcon icon={faShoppingBag} />
      <p>Panier</p>
      <p className="btn_header--num">{cartItemsLength}</p>
    </button>
  );
};

export default HeaderCartBtn;
