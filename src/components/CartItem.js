import classes from "./CartItem.module.scss";
import { useContext } from "react";
import { ItemsContext } from "../contexts/items-contexts";

const CartItem = (props) => {
  const { cartItems, setCartItems } = useContext(ItemsContext);

  const removeItemHandler = () => {
    const updatedCart = cartItems.filter((item) => {
      return item.id !== props.id;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <div className={classes.cartItemContainer}>
      <p className={classes.itemName}>{props.itemName}</p>
      <p className={classes.itemPrice}>${props.itemPrice}</p>
      <button
        className={classes.removeButton}
        onClick={removeItemHandler}
        type="button"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
