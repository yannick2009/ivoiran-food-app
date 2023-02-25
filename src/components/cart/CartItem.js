import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import "../sass/Cart.scss";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const removeItem = () => {
    cartCtx.removeItem(props.id);
  };
  return (
    <li id={props.id}>
      <div className="cart-list-item">
        <div className="cart-list-item-1">
          <p className="prod-name">{props.name}</p>
          <div className="price-n-amount">
            <p>{props.price} FCFA</p>
            <p>x{props.amount}</p>
          </div>
        </div>
        <div className="cart-list-item-2">
          <button onClick={removeItem}>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
