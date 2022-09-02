import { useContext, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import { ItemsContext } from "../contexts/items-contexts";

const Items = () => {
  const { items, setItems } = useContext(ItemsContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/items");
      const data = await response.json();
      setItems(data);
    };

    fetchData();
  }, [setItems]);

  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <ItemCard />
          </div>
        );
      })}
    </div>
  );
};

export default Items;
