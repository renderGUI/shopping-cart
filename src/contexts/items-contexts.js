import { createContext, useState } from "react";

export const ItemsContext = createContext({});

export const ItemsContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const value = {
    items,
    setItems,
  };

  return (
    <ItemsContext.Provider value={value}>
      {props.children}
    </ItemsContext.Provider>
  );
};
