import React, { Fragment, useContext } from "react";
import Modal from "../layout/Modal";
import CartItem from "./CartItem";
import "../sass/Cart.scss";
import CartContext from "../../context/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
    />
  ));
  return (
    <Fragment>
      <Modal onClick={props.onCloseCart}>
        <ul className="cart-list">
          {/* <CartItem name={"product name"} price={4000} amount={2} /> */}
          {cartItems}
        </ul>
        <p className="total-amount">
          Total: <span>{cartCtx.totalAmount} FCFA</span>
        </p>
        <div className="decision">
          <button onClick={props.onCloseCart}>Fermer</button>
          <button>Commander</button>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Cart;
