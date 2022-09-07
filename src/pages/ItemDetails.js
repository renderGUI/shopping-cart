import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import classes from "./ItemDetails.module.scss";
import { useState, useEffect, useContext } from "react";
import { ItemsContext } from "../contexts/items-contexts";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState([]);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(ItemsContext);

  useEffect(() => {
    const fetchItem = async () => {
      setLoadingDetails(true);
      try {
        const response = await fetch(
          `https://items-rendergui.herokuapp.com/items/${itemId}`
        );
        const data = await response.json();
        setItem(data);
        setLoadingDetails(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItem();
  }, [itemId]);

  const addToCartHandler = () => {
    if (localStorage.getItem("cart") === null) {
      setCartItems([item]);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      navigate("/cart");
    } else {
      const onlyIds = cartItems.map((item) => {
        return item.id;
      });
      if (onlyIds.includes(Number(itemId))) {
        setError(true);
      } else {
        const updatedShoppingCart = [...cartItems, item];
        setCartItems(updatedShoppingCart);
        localStorage.setItem("cart", JSON.stringify(updatedShoppingCart));
        navigate("/cart");
      }
    }
  };

  return (
    <div>
      {loadingDetails && (
        <div className={classes.loadingDetailsContainer}>
          <p>Loading...</p>
        </div>
      )}
      <div className={classes.detailsContainer}>
        <FontAwesomeIcon className={classes.detailsImage} icon={faShirt} />
        <h2 className={classes.detailsItem}>{item.itemName}</h2>
        <p className={classes.detailsDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <h3 className={classes.detailsPrice}>${item.price}</h3>
        <button
          className={classes.addToCartButton}
          type="button"
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
        {error && <p className={classes.errorMessage}>Item already in cart!</p>}
      </div>
    </div>
  );
};

export default ItemDetails;
