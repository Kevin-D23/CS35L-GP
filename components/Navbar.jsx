import React from "react";
import styles from "../CSS Modules/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { options } from "../src/app/api/auth/[...nextauth]/options";
import { IoMdExit } from "react-icons/io";
import NavBtns from "./NavBtns";

export default async function NavBar() {
  const session = await getServerSession(options);

  let name = session?.user?.name.split(" ");
  let email = session?.user?.email;
  let image = session?.user?.image;
  return (
    <>
      {session ? (
        <div className={styles.navbar}>
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
                {session ? name[0] + " " + name[1][0] + "." : ""}
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
