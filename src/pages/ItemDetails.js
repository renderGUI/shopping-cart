import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import classes from "./ItemDetails.module.scss";
import { useState, useEffect } from "react";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`http://localhost:3001/items/${itemId}`);
      const data = await response.json();
      setItem(data);
    };

    fetchItem();
  }, [itemId]);

  const addToCartHandler = () => {
    console.log('e')
  }

  return (
    <div className={classes.detailsContainer}>
      <FontAwesomeIcon className={classes.detailsImage} icon={faShirt} />
      <h2 className={classes.detailsItem}>{item.itemName}</h2>
      <p className={classes.detailsDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <h3 className={classes.detailsPrice}>${item.price}</h3>
      <button className={classes.addToCartButton} type="button" onClick={addToCartHandler}>
        Add to cart
      </button>
    </div>
  );
};

export default ItemDetails;
