import { MeetupForm } from "../../components";

import styles from "./index.module.css";

export default function NewMeetupPage() {
  const addMeetupHandler = async (meetupData) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meetupData),
    };

    await fetch(
      "https://meetups-app-ae644-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      options
    );
  };
  return (
    <section className={styles.container}>
      <h1>Add a New Meetup</h1>
      <MeetupForm addMeetup={addMeetupHandler} />
    </section>
  );
}
