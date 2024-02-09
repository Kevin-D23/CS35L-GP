import Link from "next/link";
import styles from "../../../CSS Modules/matches.module.css";

export default function matches() {
  const matches = [
    { name: "Haohan", userID: "1234556789", email: "haohan@gmail.com" },
    { name: "Michael", userID: "987654321", email: "michael@yahoo.com" },
    { name: "Brittany", userID: "294829102", email: "brittany@hotmail.com" },
    { name: "Amanda", userID: "293401923", email: "amanda@g.ucla.edu.com" },
  ];

  return (
    <div className={styles.matchesContainer}>
      <h1>Matches</h1>
      <hr />
      <div className={styles.usersContainer}>
        {matches.map((user, key) => {
          return (
            <div key={key} className={styles.user}>
              <p className={styles.name}>{user.name}</p>
              <Link className={styles.profile} href={"/" + user.userID}>
                View Profile
              </Link>
              <a
                className={styles.email}
                href={"mailto:" + user.email}
                type="email"
              >
                {user.email}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
