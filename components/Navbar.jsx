import React from "react";
import styles from "../CSS Modules/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { IoMdExit } from "react-icons/io";
import NavBtns from "./NavBtns";
import { getUser } from "@/app/api/user/route";

export default async function NavBar() {
  const session = await getServerSession(options);

  const name = session?.user?.name;
  const email = session?.user?.email;

  // Manage names with no last names
  let displayName = "";
  if (name) {
    const nameParts = name.split(" ");
    if (nameParts.length > 1 && nameParts[1]) {
      displayName = `${nameParts[0]} ${nameParts[1][0]}.`;
    } else {
      displayName = name;
    }
  }

  const userFromDb = await getUser(email);
  const image = userFromDb?.image || session?.user?.image;

  return (
    <>
      {session ? (
        <div className={styles.navbar}>
          <br />
          <div style={{ display: "flex", width: "100%" }}>
            <img
              src="/icons/StudentsInfernoLogo.png"
              style={{ width: "250px" }}
            />
          </div>
          <div className={styles.userContainer}>
            <Image
              src={image}
              className={styles.profilePicture}
              width={1000}
              height={1000}
              alt=""
            />
            <div className={styles.userInfoContainer}>
              <h1 className={styles.name}>
                {displayName}
              </h1>
              <h2 className={styles.email}>{email}</h2>
            </div>
          </div>
          <NavBtns />
          <Link
            className={styles.signoutBtn}
            href="/api/auth/signout?callbackUrl=/"
          >
            <IoMdExit className={styles.icon} />
            Sign Out
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
