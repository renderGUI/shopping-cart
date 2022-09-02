import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.scss";

const NavigationBar = () => {
  return (
    <>
      <header className={classes.navContainer}>
        <Link className={classes.navLink} to="/">Items</Link>
        <Link className={classes.navLink} to="/cart">0 <FontAwesomeIcon icon={faCartShopping}/></Link>
      </header>
    </>
  );
};

export default NavigationBar;
