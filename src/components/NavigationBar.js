import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.scss";
import { useContext } from "react";
import { ItemsContext } from "../contexts/items-contexts";

const NavigationBar = () => {
  const { cartItems } = useContext(ItemsContext);

  return (
    <>
      <header className={classes.navContainer}>
        <Link className={classes.navLink} to="/">
          Home
        </Link>
        <Link className={classes.navLink} to="cart">
          {cartItems.length} <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </header>
    </>
  );
};

export default NavigationBar;
