import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import classes from "./ItemCard.module.scss";
import { useNavigate } from "react-router-dom";

const ItemCard = (props) => {
  const navigate = useNavigate();

  const viewItemDetails = () => {
    navigate(`${props.itemId}`);
  };

  return (
    <div className={classes.itemContainer} onClick={viewItemDetails}>
      <FontAwesomeIcon className={classes.shirtImage} icon={faShirt} />
      <h2 className={classes.itemName}>{props.itemName}</h2>
      <p className={classes.price}>${props.price}</p>
    </div>
  );
};

export default ItemCard;
