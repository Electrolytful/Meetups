import styles from "./index.module.css";
import Card from "../../ui/Card";


export default function Meetup({ id, image, title, address, description }) {
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
          <button>Save to Favourites</button>
        </div>
      </Card>
    </li>
  );
}
