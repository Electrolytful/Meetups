import { useRef } from "react";

import styles from "./index.module.css";

import Card from "../../ui/Card";

export default function MeetupForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    // send data to server here
    console.log(meetupData);
  };

  return (
    <div className={styles.formContainer}>
      <Card>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              ref={titleInputRef}
              placeholder="Meetup in Barcelona"
              required
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="image">Image</label>
            <input
              type="url"
              id="image"
              ref={imageInputRef}
              placeholder="URL of image"
              required
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              ref={addressInputRef}
              placeholder="Carrer de Casp, 30, Barcelona"
              required
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              rows="10"
              ref={descriptionInputRef}
              placeholder="Please describe your meetup here"
              required
            ></textarea>
          </div>
          <div className={styles.actions}>
            <button>Post Meetup</button>
          </div>
        </form>
      </Card>
    </div>
  );
}
