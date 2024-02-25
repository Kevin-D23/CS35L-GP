"use client";
import styles from "../../../CSS Modules/groups.module.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Groups() {
  const groups = [
    { name: "Group 1", members: ["Member1", "Member 2"] },
    { name: "Group 2", members: ["Member1", "Member 2"] },
  ];

  function showGroup(group) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen); // toggle menu visibility
    };

    return (
      <div>
        <div>
          <button className={styles.group} onClick={() => toggleMenu()}>
            {group.name}
          </button>
          <div className={`styles.members ${isOpen ? "styles.open" : ""}`}>
            {group.members.map((member, i) => {
              return (
                <a
                  key={i}
                  href="#"
                  className={`${styles.members} ${isOpen ? styles.open : ""}`}
                >
                  Member 1
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return <div>{groups.map((group) => showGroup(group))}</div>;
}
