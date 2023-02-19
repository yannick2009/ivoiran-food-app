import React from "react";
import "../../sass/Meals.scss";
import MealItemForm from "./MealItemForm";


const MealItem = (props) => {
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
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
