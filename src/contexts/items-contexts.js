import { createContext, useState } from "react";

export const ItemsContext = createContext({});

export const ItemsContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cart") === null
      ? []
      : JSON.parse(localStorage.getItem("cart"))
  );

  const value = {
    items,
    setItems,
    cartItems,
    setCartItems,
  };

  return (
    <ItemsContext.Provider value={value}>
      {props.children}
    </ItemsContext.Provider>
  );
};
