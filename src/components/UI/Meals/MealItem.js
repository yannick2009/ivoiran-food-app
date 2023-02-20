import React, { useRef, useContext } from "react";
import CartContext from "../../../context/cart-context";
import "../../sass/Meals.scss";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const itemRef = useRef();
  const toAddToCart = (e) => {
    e.preventDefault();
    const amountValue = itemRef.current.value;
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amountValue,
    };
    cartCtx.addItem(item);
  };
  return (
    <li className="meal-item">
      <div className="meal-item-1">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="meal-item-2">
        <div className="meal-item-2__info">
          <p className="meal-item-2__info-name">{props.name}</p>
          <p className="meal-item-2__info-description">{props.description}</p>
          <p className="meal-item-2__info-price">{props.price} FCFA</p>
        </div>
        <MealItemForm ref={itemRef} onSubmit={toAddToCart} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
