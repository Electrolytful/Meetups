import { useState, useEffect } from "react";

import { MeetupList } from "../../components";

export default function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState(null);

  useEffect(() => {
    const fetchMeetups = async () => {
      try {
        const response = await fetch(
          "https://meetups-app-ae644-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
        );
        const data = await response.json();

        if (data) {
          const meetups = [];

          for (const key in data) {
            const meetup = {
              id: key,
              ...data[key],
            };

            meetups.push(meetup);
          }

          setMeetups(meetups);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchMeetups();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
}
