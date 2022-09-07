import { useContext, useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import { ItemsContext } from "../contexts/items-contexts";
import classes from "./Items.module.scss";

const Items = () => {
  const { items, setItems } = useContext(ItemsContext);
  const [loadingItems, setLoadingItems] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingItems(true);
      try {
        const response = await fetch(
          "https://items-rendergui.herokuapp.com/items"
        );
        const data = await response.json();
        setItems(data);
        setLoadingItems(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [setItems]);

  return (
    <div>
      {loadingItems && (
        <div className={classes.loadingItemsContainer}>
          <p>Loading...</p>
        </div>
      )}
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
    </div>
  );
};

export default Items;
