import React from "react";
import styles from "../../../CSS Modules/stylesUserEdit.module.css";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { getUser,getAllUsers,updateUser } from "../api/user/route";
import { redirect } from "next/navigation";

function EditButton() {
  return (
    <Link href="/edit/editing">
      {" "}
      {}
      <button className={`${styles.editButton}`}>edit</button>
    </Link>
  );
}
let times = [
  "Saturday",
  "Sunday",
];

let destinations = ["Sproul", "Rieber", "Hedrick"];
export function getTimes()
{
return(times)
}
export default async function edit() {
  const session = await getServerSession(options);
  let email = session?.user?.email;
  const user = await getUser(email);
  let name = user.name;
  let year = user.year;
  let bio = user.bio;
  let classes = user.classes;
  let daysAvailable = user.daysAvailable;
  let studyStart = user.studyStart;
  let studyEnd = user.studyEnd;
  let locations = user.locations;
  console.log(name);
  if (!user?.signupCompleted) redirect("/signup");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: "50px",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <Image src={session.user.image} width={50} height={50} />
        <div style={{ marginLeft: "10px" }}>
          <h1 className={`${styles.largerText} `}>
            <b>{name}</b>
          </h1>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <h1 className={`${styles.largerText} `}>{email}</h1>
        </div>
        <div style={{ marginLeft: "100px" }}>
          <EditButton />
        </div>
      </div>
      <div>
        <h1 className={`${styles.largerText} `}>Bio:</h1>
      </div>
      <h1 className={`${styles.largerText} `}> {bio}</h1>
      <h1 className={`${styles.largerText} `}>
            Year: {year}
          </h1>
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
        <h1 className={`${styles.largerText}`}>Times Available: {studyStart} - {studyEnd}</h1>
        <h1 className={`${styles.largerText}`}>Days Available:</h1>
        <div className={`${styles.scrollableList} `}>
          <ul>
            {daysAvailable.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <h1 className={`${styles.largerText}`}>Prefered Locations: </h1>
        <div className={`${styles.scrollableList} `}>
          <ul>
            {locations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
