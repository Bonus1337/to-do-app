import clsx from "clsx";
import { useDispatch } from "react-redux";
import { toggleCardFavorite } from "../../redux/store";
import styles from "./Card.module.scss";

const Card = (props) => {
  const dispatch = useDispatch();

  const handleFavorite = (e) => {
    e.preventDefault();
    console.log(e);
    dispatch(toggleCardFavorite(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button
        onClick={handleFavorite}
        className={clsx(styles.btn, props.isFavorite && styles.active)}
      >
        <i className="fa fa-star-o"></i>
      </button>
    </li>
  );
};

export default Card;
