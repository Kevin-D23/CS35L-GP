"use client";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdPeople } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import styles from "../CSS Modules/navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBtns() {
  const path = usePathname();

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
      page: "/messages",
      icon: <IoMdMail className={styles.icon} />,
    },
    {
      name: "Groups",
      page: "/groups",
      icon: <HiUserGroup className={styles.icon} />,
    },
  ];
  return (
    <div className={styles.navBtnContainer}>
      {pages.map((page, key) => {
        return (
          <Link
            className={styles.navBtn}
            key={key}
            href={page.page}
            style={page.page == path ? { background: "var(--dark-200)" } : {}}
          >
            {page.icon}
            {page.name}
          </Link>
        );
      })}
    </div>
  );
}
