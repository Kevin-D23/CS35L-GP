import React from "react";
import styles from "../../../CSS Modules/stylesUserEdit.module.css";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { IoMdExit } from "react-icons/io";
import { options } from "../api/auth/[...nextauth]/options";

function EditButton() {
  return (
    <button className={`${styles.largerText} ${styles.largerShiftedText}`}>
      edit
    </button>
  );
}

let times = [
  "Saturday",
  "Sunday",
  "Thursdays",
  "Fridays",
  "Mondays",
  "Tuesdays",
];
let classes = ["CS35L", "Intro to being swag", "Naptime 101"];
let hobby = ["eat", "sleep", "nap"];
let destinations = ["Sproul", "Rieber", "Hendrick"];
export default async function edit() {
  const session = await getServerSession(options);

  let name = session?.user?.name.split(" ");
  let email = session?.user?.email;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 className={`${styles.bigHeading} ${styles.largerShiftedText}`}>
          {name[0] + " " + name[1]}
        </h1>
        <EditButton />
      </div>
      <div>
        <h2 className={`${styles.largerText} ${styles.largerShiftedText}`}>
          {email}
        </h2>
        <Image
          src={session.user.image}
          width={50}
          height={50}
          style={{ marginLeft: "100px" }}
        />
        <Image
          src={session.user.image}
          width={50}
          height={50}
          style={{ marginLeft: "100px" }}
        />

        <h1 className={`${styles.largerText} ${styles.largerShiftedText}`}>
          Classes:
        </h1>
        <div className={`${styles.scrollableList} ${styles.largerShiftedText}`}>
          <ul>
            {classes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <h1
        className={`${styles.largerText} ${styles.largerShiftedText}${styles.linespaced}`}
      >
        space:
      </h1>
      <h1 className={`${styles.largerText} ${styles.largerShiftedText}`}>
        Times Available:
      </h1>
      <div className={`${styles.scrollableList} ${styles.largerShiftedText}`}>
        <ul>
          {times.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <h1
        className={`${styles.largerText} ${styles.largerShiftedText}${styles.linespaced}`}
      >
        space:
      </h1>
      <h1 className={`${styles.largerText} ${styles.largerShiftedText}`}>
        Prefered Locations:
      </h1>
      <div className={`${styles.scrollableList} ${styles.largerShiftedText}`}>
        <ul>
          {destinations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <h1
        className={`${styles.largerText} ${styles.largerShiftedText}${styles.linespaced}`}
      >
        space:
      </h1>
      <h1 className={`${styles.largerText} ${styles.largerShiftedText}`}>
        Hobbies:
      </h1>
      <div className={`${styles.scrollableList} ${styles.largerShiftedText}`}>
        <ul>
          {hobby.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
