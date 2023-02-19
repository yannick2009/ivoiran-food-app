import React from "react";
import "../sass/Meals.scss";
import MealItem from "../UI/Meals/MealItem";
import garba from "../../assets/img/garba.jpeg";
import alloco from "../../assets/img/alloco.jpeg";
import pouletBraise from "../../assets/img/poulet-braise.jpeg";
import kedjenou from "../../assets/img/kedjenou.jpeg";
import tchep from "../../assets/img/tchep.jpeg";

const DUMMY_DATA = [
  {
    id: "m1",
    name: "Garba",
    description: "Attieke + possion thon",
    price: 2000,
    image: garba,
  },
  {
    id: "m2",
    name: "Alloco",
    description: "Banane plantin frit",
    price: 2500,
    image: alloco,
  },
  {
    id: "m3",
    name: "Tchep",
    description: "Spécialité sénégalaise (Riz)",
    price: 1500,
    image: tchep,
  },
  {
    id: "m4",
    name: "Poulet braisé",
    description: "poulet braisé au feu de bois",
    price: 4000,
    image: pouletBraise,
  },
  {
    id: "m5",
    name: "Kedejnou",
    description: "Kedjenou de poulet",
    price: 5000,
    image: kedjenou,
  },
];

const meals = DUMMY_DATA.map((item) => (
  <MealItem
    key={item.id}
    id={item.id}
    name={item.name}
    description={item.description}
    price={item.price}
    image={item.image}
  />
));

const Meals = () => {
  return (
    <div className="meals">
      <ul className="meals-box">{meals}</ul>
    </div>
  );
};

export default Meals;
