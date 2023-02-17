import clsx from "clsx";
import { useDispatch } from "react-redux";
import { removeCard, toggleCardFavorite } from "../../redux/cardsRedux";
import styles from "./Card.module.scss";

const Card = (props) => {
  const dispatch = useDispatch();

  const handleFavorite = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  };

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button
          onClick={handleFavorite}
          className={clsx(styles.btn, props.isFavorite && styles.active)}
        >
          <i className="fa fa-star-o"></i>
        </button>
        <button onClick={handleRemove} className={styles.btn}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
};
export default Card;
