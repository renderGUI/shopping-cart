import { useNavigate } from "react-router-dom";
import classes from "./Cart.module.scss";

const Cart = () => {
  const navigate = useNavigate();

  const continueShopping = () => {
    navigate("/items");
  };

  return (
    <div className={classes.cartContainer}>
      <div className={classes.continueContainer}>
        <button
          className={classes.continueShoppingButton}
          type="button"
          onClick={continueShopping}
        >
          &#x3C; Continue shopping
        </button>
        <h2>Shopping Cart</h2>
      </div>
      {localStorage.getItem("cart") === null && (
        <p className={classes.emptyCart}>Your cart is currently empty!</p>
      )}
      {localStorage.getItem("cart") !== null && (
        <>
          <div className={classes.labelsContainer}>
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
          </div>
          <hr></hr>
          <div className={classes.totalContainer}>
            <h3 className={classes.totalText}>Subtotal</h3>
            <h3 className={classes.totalPrice}>$12.99</h3>
          </div>
          <div className={classes.checkoutContainer}>
            <button className={classes.checkoutButton} type="button">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
