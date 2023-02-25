import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // const newItemsArray = state.items.concat(action.item);
    const newItemsArray = [...state.items, action.item];

    return {
      items: newItemsArray,
      totalAmount: newTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    let newItems;
    let newTotalAmount;

    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    const itemConcerned = state.items[itemIndex];
    const newItem = { ...itemConcerned };
    newItem.amount = newItem.amount - 1;
    if (newItem.amount === 0) {
      newItems = state.items.filter((x) => x.id !== itemConcerned.id);
      newTotalAmount = state.totalAmount - newItem.price;
    } else {
      newItems = [...state.items];
      newItems[itemIndex] = newItem;
      newTotalAmount = state.totalAmount - newItem.price;
    }
    return {
      items: newItems,
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
