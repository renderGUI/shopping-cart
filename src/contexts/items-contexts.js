import { createContext, useState } from "react";

export const ItemsContext = createContext({});

export const ItemsContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(
    localStorage.getItem("cart") === null
      ? 0
      : JSON.parse(localStorage.getItem("cart")).length
  );

  const value = {
    items,
    setItems,
    cartQuantity,
    setCartQuantity,
  };

  return (
    <ItemsContext.Provider value={value}>
      {props.children}
    </ItemsContext.Provider>
  );
};
