import React, { Fragment } from "react";
import Modal from "../layout/Modal";
import CartItem from "./CartItem";
import "../sass/Cart.scss";

const Cart = (props) => {
  return (
    <Fragment>
      <Modal onClick={props.onCloseCart}>
        <ul className="cart-list">
          <CartItem name={"product name"} price={4000} amount={2} />
          <CartItem name={"product name"} price={2500} amount={2} />
        </ul>
        <p className="total-amount">
          Total: <span>6500 FCFA</span>
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
