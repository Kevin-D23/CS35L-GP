import React from "react";
import styles from "../CSS Modules/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { options } from "../src/app/api/auth/[...nextauth]/options";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdPeople } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { IoMdExit } from "react-icons/io";

// function Icon(props) {
//   return (
//     <Link href={"/" + props.link} className={`${styles.icon}`}>
//       <div className={styles.icon}>
//         <Image
//           src="/icons/scissors.png"
//           width={40}
//           height={40}
//           alt="Example Icon"
//           className={styles.iconImage}
//         />
//         <div className={styles.iconImage}>{props.name}</div>
//       </div>{" "}
//     </Link>
//   );
// }

export default async function NavBar() {
  const session = await getServerSession(options);
  const pages = [
    { name: "Home", page: "/", icon: <AiFillHome className={styles.icon} /> },
    {
      name: "Edit Profile",
      page: "/edit",
      icon: <CgProfile className={styles.icon} />,
    },
    {
      name: "Matches",
      page: "/matches",
      icon: <MdPeople className={styles.icon} />,
    },
    {
      name: "Messages",
      page: "messages",
      icon: <IoMdMail className={styles.icon} />,
    },
    {
      name: "Groups",
      page: "/groups",
      icon: <HiUserGroup className={styles.icon} />,
    },
  ];

  let name = session?.user?.name.split(" ");
  let email = session?.user?.email;

  return (
    <div className={styles.navbar}>
      <div className={styles.userContainer}>
        <Image src={session.user.image} className={styles.profilePicture} />
        <div className={styles.userInfoContainer}>
          <h1 className={styles.name}>{name[0] + " " + name[1][0] + "."}</h1>
          <h2 className={styles.email}>{email}</h2>
        </div>
      </div>
      {pages.map((page, key) => {
        return (
          <Link className={styles.navBtn} key={key} href={page.page}>
            {page.icon}
            {page.name}
          </Link>
        );
      })}
      <Link className={styles.signoutBtn} href="/api/auth/signout">
        <IoMdExit className={styles.icon} />
        Sign Out
      </Link>
      {/* <Icon name="Test" link="./example" className="icon"></Icon>
      <Icon name="Test2" link="./example" className="icon"></Icon> */}
    </div>
  ); //put the route to your page in link.
}
