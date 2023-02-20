import React from "react";
import "../../sass/Meals.scss";

const MealItemForm = React.forwardRef((props, ref) => {
  return (
    <form onSubmit={props.onSubmit} className="meal-form">
      <div className="meal-form__amount">
        <label htmlFor=""></label>
        <input
          ref={ref}
          min="1"
          max="5"
          step="1"
          defaultValue="1"
          id={props.id}
          type="number"
        />
      </div>
      <div className="meal-form__submit">
        <button type="submit"> + Ajouter</button>
      </div>
    </form>
  );
});

export default MealItemForm;
