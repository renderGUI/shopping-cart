import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import classes from "./ItemDetails.module.scss";
import { useState, useEffect, useContext } from "react";
import { ItemsContext } from "../contexts/items-contexts";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState([]);
  const navigate = useNavigate();
  const { setCartQuantity } = useContext(ItemsContext);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`http://localhost:3001/items/${itemId}`);
      const data = await response.json();
      setItem(data);
    };

    fetchItem();
  }, [itemId]);

  const addToCartHandler = () => {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([item]));
      setCartQuantity(1);
      navigate("/cart");
      console.log("first item added to localstorage");
    } else {
      const allCartItems = JSON.parse(localStorage.getItem("cart"));
      const updatedShoppingCart = [...allCartItems, item];
      setCartQuantity(updatedShoppingCart.length);
      localStorage.setItem("cart", JSON.stringify(updatedShoppingCart));
      navigate("/cart");
      console.log("additional item added to localstorage");
    }
  };

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
      <button
        className={classes.addToCartButton}
        type="button"
        onClick={addToCartHandler}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ItemDetails;
