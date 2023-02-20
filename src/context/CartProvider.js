import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newItemsArray = state.items.concat(action.item);
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: newItemsArray,
      totalAmount: newTotalAmount,
    };
  }
};
const cartInitState = { items: [], totalAmount: 0 };

const CartProvider = (props) => {
  const [cartItems, dispatchCartItems] = useReducer(cartReducer, cartInitState);

  const addItemToCardHandler = (item) => {
    dispatchCartItems({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartItems({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartItems.items,
    totalAmount: cartItems.totalAmount,
    addItem: addItemToCardHandler,
    removeItem: removeItemFromCartHandler,
  };
  //   const [value, setValue] = useReducer(reducer, { items: [], totalAmount: 0 });
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
