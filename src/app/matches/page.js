"use client";
import styles from "../../../CSS Modules/matches.module.css";
import { useRouter } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { IoMdMail } from "react-icons/io";

export default function matches() {
  const matches = [
    { name: "Haohan Chen", userID: "1234556789", email: "haohan@gmail.com" },
    {
      name: "Michael Khojastegan",
      userID: "987654321",
      email: "michael@yahoo.com",
    },
    {
      name: "Britney Chen",
      userID: "294829102",
      email: "brittany@hotmail.com",
    },
    { name: "Amanda Mai", userID: "293401923", email: "amanda@g.ucla.edu.com" },
  ];
  const router = useRouter();
  function handleClick(id) {
    router.push(`/user/${id}`);
  }

  return (
    <div className={styles.matchesContainer}>
      <h1>MATCHES</h1>
      <hr />
      <div className={styles.usersContainer}>
        {matches.map((user, key) => {
          return (
            <div key={key} className={styles.user}>
              <div className={styles.name}>
                <p>{user.name.split(" ")[0]}</p>
                <p>{user.name.split(" ")[1]}</p>
              </div>
              <p
                className={styles.profile}
                onClick={() => handleClick(user.userID)}
              >
                <CgProfile className={styles.icon} />
              </p>
              <a
                className={styles.email}
                href={"mailto:" + user.email}
                type="email"
              >
                <IoMdMail className={styles.icon} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
