import Image from "next/image";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import styles from "../../CSS Modules/home.module.css";

export default async function Home() {
  const session = await getServerSession(options);
  let name = session?.user?.name.split(" ");
  let email = session?.user?.email;
  const user = {
    name: name[0] + " " + name[1][0] + ".",
    year: 3,
    major: "Computer Science",
    bio: "I bully kids blah blah blah blah blah blah blah blah blah",
    courses: ["CS-33", "Jazz Appreciation", "PHSYC-1A"],
    days: [0, 1, 2, 3, 4, 5, 6],
    timeStart: 18,
    timeEnd: 21,
    locations: ["your mom's house", "Powell"],
  };
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function calcTime(start, end) {
    let startTime = start + "am";
    let endTime = end + "am";
    if (start > 12) startTime = start - 12 + "pm";
    if (end > 12) endTime = end - 12 + "pm";
    return startTime + "-" + endTime;
  }

  return (
    <main className={styles.home}>
      <div className={styles.matchOption}>
        <button>no likey :{"("}</button>
      </div>
      <div className={styles.userContainer}>
        <div className={styles.left}>
          <div className={styles.imageContainer}></div>
          <div className={styles.bioContainer}>
            <h1>{user.name.toUpperCase()}</h1>
            <h2>
              {user.year}
              {user.year === 1
                ? "st"
                : user.year == 2
                ? "nd"
                : user.year === 3
                ? "rd"
                : "th"}{" "}
              year
            </h2>
            <h2>
              Major:<p>{user.major}</p>
            </h2>
            <p>{user.bio}</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.coursesContainer}>
            <h2 style={{ marginTop: "20px" }}>COURSES</h2>
            <ul>
              {user.courses.map((course, key) => {
                return <li key={key}>{course}</li>;
              })}
            </ul>
          </div>
          <div className={styles.timesContainer}>
            <h2>AVAILABLE DAYS</h2>
            <ul>
              {user.days.map((day, key) => {
                return <li key={key}>{days[day]}</li>;
              })}
            </ul>
            <h2>WHEN</h2>
            <p>{calcTime(user.timeStart, user.timeEnd)}</p>
          </div>
          <div className={styles.locationContainer}>
            <h2>LOCATIONS</h2>
            <ul>
              {user.locations.map((location, key) => {
                return <li key={key}>{location}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.matchOption}>
        <button>me likey :{")"}</button>
      </div>
    </main>
  );
}
