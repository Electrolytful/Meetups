import { useNavigate } from "react-router-dom";

import { MeetupForm } from "../../components";

import styles from "./index.module.css";

export default function NewMeetupPage() {
  const navigate = useNavigate();

  const addMeetupHandler = async (meetupData) => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meetupData),
      };

      const response = await fetch(
        "https://meetups-app-ae644-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
        options
      );

      if (response.ok) {
        navigate("/", { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className={styles.container}>
      <h1>Add a New Meetup</h1>
      <MeetupForm addMeetup={addMeetupHandler} />
    </section>
  );
}
