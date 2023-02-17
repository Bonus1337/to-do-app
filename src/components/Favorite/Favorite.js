import { useSelector } from "react-redux";
import { getAllFavoriteCards } from "../../redux/store";
import Card from "../Card/Card";
import PageTitle from "../PageTitle/PageTitle";
import styles from "./Favorite.module.scss";

const Favorite = () => {
  const allFavoriteCards = useSelector(getAllFavoriteCards);

  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.favoriteContainer}>
        <ul className={styles.cards}>
          {allFavoriteCards.length > 0 ? (
            allFavoriteCards.map((card) => <Card key={card.id} {...card} />)
          ) : (
            <h3 className={styles.subtitle}>No cards</h3>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Favorite;
