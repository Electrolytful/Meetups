import { useFavourites } from "../../../context/favouritesContext";
import styles from "./index.module.css";
import Card from "../../ui/Card";

export default function Meetup({ id, image, title, address, description }) {
  const favouritesCtx = useFavourites();

  const itemIsFavourite = favouritesCtx.itemIsFavourite(id);

  const toggleFavouriteHandler = () => {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(id);
    } else {
      favouritesCtx.addFavourite({
        id,
        image,
        title,
        address,
        description,
      });
    }
  };

  return (
    <li className={styles.meetup}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavouriteHandler}>{itemIsFavourite ? "Remove from Favourites" : "Save to Favourites"}</button>
        </div>
      </Card>
    </li>
  );
}
