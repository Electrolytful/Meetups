import { MeetupForm } from "../../components";

import styles from './index.module.css';

export default function NewMeetupPage() {
  return (
    <section className={styles.container}>
      <h1>Add a New Meetup</h1>
      <MeetupForm />
    </section>
  );
}
