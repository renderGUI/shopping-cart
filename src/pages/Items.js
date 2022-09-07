import { useContext, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import { ItemsContext } from "../contexts/items-contexts";
import classes from "./Items.module.scss";

const Items = () => {
  const { items, setItems } = useContext(ItemsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://items-rendergui.herokuapp.com/items"
        );
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [setItems]);

  return (
    <div className={classes.itemsContainer}>
      {items.map((item) => {
        return (
          <ItemCard
            key={item.id}
            itemName={item.itemName}
            price={item.price}
            itemId={item.id}
          />
        );
      })}
    </div>
  );
};

export default Items;
