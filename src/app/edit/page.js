import React from "react";
import styles from "../../../CSS Modules/home.module.css";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { getUser,getAllUsers,updateUser } from "../api/user/route";
import { redirect } from "next/navigation";
import style from "../../../CSS Modules/stylesUserEdit.module.css";
function EditButton() {
  return (
    <Link href="/edit/editing">
      {" "}
      {}
      <button className={`${style.editButton}`}>Edit Your Profile</button>
    </Link>
  );
}

export default async function edit() {
  const session = await getServerSession(options);
  let email = session?.user?.email;
  const user = await getUser(email);
  let name = user.name;
  if (!user?.signupCompleted) redirect("/signup");

  return (
    <div>
    <div className={styles.userContainer} style={{width:"36em",minWidth:"36rem",display:"flex",
    backgroundColor:"var(--dark-200)",aspectRatio:"auto"}}>
      <div className={styles.left}>
        <div className={styles.imageContainer}>
          <img
            src="/icons/haohan.jpeg"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
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
          <h2>COURSES</h2>
          <ul>
            {user.classes.map((course, key) => {
              return <li key={key}>{course}</li>;
            })}
          </ul>
        </div>
        <div className={styles.timesContainer}>
          <h2>AVAILABLE DAYS</h2>
          <ul>
            {user.daysAvailable.map((day, key) => {
              return <li key={key}>{day}</li>;
            })}
          </ul>
          <h2>WHEN</h2>
          <p>
            {user.studyStart} - {user.studyEnd}
          </p>
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

    <div style={{color:"white"}}>  <EditButton/></div>   
    
  </div>
  );
}
