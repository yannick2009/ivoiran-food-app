import { useState } from "react";
import "./style/App.css";
import Header from "./components/layout/Header";
import Desc from "./components/layout/Desc";
import Meals from "./components/layout/Meals";
import Cart from "./components/cart/Cart";
import CartProvider from "./context/CartProvider";

function App() {
  const [cartShowState, setCartShowState] = useState(false);
  const showCartHandling = () => {
    setCartShowState((cartShowState) => !cartShowState);
  };

  return (
    <CartProvider>
      {cartShowState && <Cart onCloseCart={showCartHandling} />}
      <Header onShowCart={showCartHandling} />
      <Desc />
      <Meals />
    </CartProvider>
  );
}

export default App;
