import React from "react";
import "../sass/Cart.scss";

const CartItem = (props) => {
  return (
    <li>
      <div className="cart-list-item">
        <div className="cart-list-item-1">
          <p className="prod-name">{props.name}</p>
          <div className="price-n-amount">
            <p>{props.price} FCFA</p>
            <p>x{props.amount}</p>
          </div>
        </div>
        <div className="cart-list-item-2">
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
