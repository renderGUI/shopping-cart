import { useNavigate } from "react-router-dom";
import classes from "./Home.module.scss";

const Home = () => {
  const navigate = useNavigate();

  const viewItemsHandler = () => {
    navigate("/items");
  };

  return (
    <div className={classes.homeContainer}>
      <button
        className={classes.viewItemsButton}
        type="button"
        onClick={viewItemsHandler}
      >
        View Items
      </button>
    </div>
  );
};

export default Home;
