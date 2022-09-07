import { useNavigate } from "react-router-dom";
import classes from "./Cart.module.scss";
import CartItem from "../components/CartItem";
import { useContext } from "react";
import { ItemsContext } from "../contexts/items-contexts";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(ItemsContext);

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
      {cartItems.length === 0 && (
        <p className={classes.emptyCart}>Your cart is currently empty!</p>
      )}
      {cartItems.length > 0 && (
        <>
          <div className={classes.labelsContainer}>
            <p>Item</p>
            <p>Price</p>
            <p></p>
          </div>
          <hr></hr>
          {cartItems.map((item) => {
            return (
              <CartItem
                id={item.id}
                key={item.id}
                itemName={item.itemName}
                itemPrice={item.price}
              />
            );
          })}
          <div className={classes.totalContainer}>
            <h3 className={classes.totalText}>Subtotal</h3>
            <h3 className={classes.totalPrice}>
              $
              {cartItems
                .map((item) => {
                  return item.price;
                })
                .reduce((sum, price) => {
                  return (sum += price);
                }, 0)}
            </h3>
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
