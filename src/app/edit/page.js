import React from "react";
import styles from "../../../CSS Modules/stylesUserEdit.module.css";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

function EditButton() {
  return (
    <Link href="/edit/editing"> {}
    <button className={`${styles.editButton}`}>
      edit
    </button>
    </Link>
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
let destinations = ["Sproul", "Rieber", "Hedrick"];


export default async function edit() {
  const session = await getServerSession(options);

  let name = session?.user?.name.split(" ");
  let email = session?.user?.email;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop:"100px" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <Image
          src={session.user.image}
          width={50}
          height={50}
          
        />
        <div style={{ marginLeft: "10px" }}>
        <h1 className={`${styles.largerText} `}>
        <b>{name[0] + " " + name[1]}</b>
      </h1>
        </div>
        <div style={{ marginLeft: "10px" }}>
        <h1 className={`${styles.largerText} `}>
        {email}
      </h1>
        </div>
        <div style={{ marginLeft: "100px" }}>
          <EditButton />
        </div>
      </div>
      <div><h1 className={`${styles.largerText} `}>Bio:</h1></div>
      <h1 className={`${styles.largerText} `}> Hi this is my bio!</h1>
      <div style={{ marginTop: "10px" }}>
      <h1 className={`${styles.largerText} `}>Classes:</h1>
      <div className={`${styles.scrollableList}`}>
          <ul>
            {classes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        </div>
        <div style={{ marginTop: "10px" }}>
        <h1 className={`${styles.largerText}`}>Times Available:</h1>
      <div className={`${styles.scrollableList} `}>
        <ul>
          {times.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      </div>
      <div style={{ marginTop: "10px" }}>
      <h1 className={`${styles.largerText}`}>Prefered Locations: </h1>
      <div className={`${styles.scrollableList} `}>
        <ul>
          {destinations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
  
}
