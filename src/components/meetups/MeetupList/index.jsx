import styles from "./index.module.css";
import Meetup from "../Meetup";

export default function MeetupList({ meetups }) {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => (
        <Meetup
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}
