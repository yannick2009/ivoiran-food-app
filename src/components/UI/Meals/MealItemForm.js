import React from "react";
import "../../sass/Meals.scss";

const MealItemForm = () => {
  return (
    <form className="meal-form">
      <div className="meal-form__amount">
        <label htmlFor=""></label>
        <input type="number" />
      </div>
      <div className="meal-form__submit">
        <button type="submit"> + Ajouter</button>
      </div>
    </form>
  );
};

export default MealItemForm;
