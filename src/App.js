import { Fragment, useState } from "react";
import "./style/App.css";
import Header from "./components/layout/Header";
import Desc from "./components/layout/Desc";
import Meals from "./components/layout/Meals";
import Cart from "./components/cart/Cart";

function App() {
  const [cartShowState, setCartShowState] = useState(false);
  const showCartHandling = () => {
    setCartShowState((cartShowState) => !cartShowState);
  };

  return (
    <Fragment>
      {cartShowState && <Cart onCloseCart={showCartHandling} />}
      <Header onShowCart={showCartHandling} />
      <Desc />
      <Meals />
    </Fragment>
  );
}

export default App;
