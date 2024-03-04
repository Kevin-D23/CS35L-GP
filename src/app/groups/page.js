"use client";
import styles from "../../../CSS Modules/groups.module.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Groups() {
  const groups = [
    { name: "CS35L Final Project", joinStatus: true, location: "Boelter", time: "2:00 pm - 4:00 pm", members: ["Member 1", "Member 2"] },
    { name: "Physics Lab 3", joinStatus: true, location: "YRL", time: "6:00 pm - 9:00 pm", members: ["Member 1", "Member 2"] },
  ];

  function showGroup(group) {
    const [isOpen, setIsOpen] = useState(false);
    const [joined, setJoined] = useState(true);

    const toggleMenu = () => {
      setIsOpen(!isOpen); // toggle menu visibility
    };

    const exitGroup = () => {
      console.log(group.name + ' group exited')
      setJoined(false);
    }

    return (
      <div>
        <div>
          <button className={styles.group} onClick={() => toggleMenu()}>
            {group.name}
          </button>

          <div className={`styles.location ${isOpen ? "styles.open" : ""}`}>
            <a 
              className={`${styles.location} ${isOpen ? styles.openLocationTime : ""}`}
            >
              Meeting location: {group.location}
            </a>
          </div>

          <div className={`styles.time ${isOpen ? "styles.open" : ""}`}>
            <a 
              className={`${styles.members} ${isOpen ? styles.openLocationTime : ""}`}
            >
              Meeting time: {group.time}
            </a>
          </div>

          <div className={`styles.members ${isOpen ? "styles.open" : ""}`}>
            {group.members.map((member, i) => {
              return (
                <a
                  key={i}
                  href="#"
                  className={`${styles.members} ${isOpen ? styles.open : ""}`}
                >
                  {member}
                </a>
              );
            })}
          </div>
          <button className={styles.exit} onClick={exitGroup}>
            Exit {group.name}
          </button>
        </div>
      </div>
    );
  }

  return <div>{groups.map((group) => showGroup(group))}</div>;
}
