"use client";
import styles from "../../../CSS Modules/groups.module.css";
import React, { useState } from "react";

export default function Groups() {
  const groups = [
    {
      name: "CS35L Final Project",
      joinStatus: true,
      location: "Boelter",
      time: "2:00 pm - 4:00 pm",
      members: ["Member 1", "Member 2"],
    },
    {
      name: "Physics Lab 3",
      joinStatus: true,
      location: "YRL",
      time: "6:00 pm - 9:00 pm",
      members: ["Member 1", "Member 2"],
    },
  ];

  const suggestions = [
    {
      name: "Bruins Art Club",
      joinStatus: false,
      location: "Covel Commons",
      time: "7:00 pm - 9:00 pm",
      members: ["Member 1", "Member 2"],
    },
    {
      name: "Physics 1B Study Group",
      joinStatus: false,
      location: "Physics and Astronomy Building",
      time: "4:00 pm - 6:00 pm",
      members: ["Member 1", "Member 2"],
    },
    {
      name: "Polisci Research Group",
      joinStatus: false,
      location: "Public Affairs Building",
      time: "9:00 am - 12:00 pm",
      members: ["Member 1", "Member 2"],
    },
  ];

  function showGroup(group) {
    const [isOpen, setIsOpen] = useState(false);
    const [joined, setJoined] = useState(true);

    const toggleMenu = () => {
      setIsOpen(!isOpen); // toggle menu visibility
    };

    const exitGroup = () => {
      console.log(group.name + " group exited");
      setJoined(false);
    };

    return (
      <div>
        <div>
          <button className={styles.group} onClick={() => toggleMenu()}>
            {group.name}
          </button>

          <div className={`styles.location ${isOpen ? "styles.open" : ""}`}>
            <a
              className={`${styles.location} ${
                isOpen ? styles.openLocationTime : ""
              }`}
            >
              Meeting location: {group.location}
            </a>
          </div>

          <div className={`styles.time ${isOpen ? "styles.open" : ""}`}>
            <a
              className={`${styles.members} ${
                isOpen ? styles.openLocationTime : ""
              }`}
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

  function showSuggestions(suggestions) {
    const [isOpen, setIsOpen] = useState(false);
    const [joined, setJoined] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen); // toggle menu visibility
    };

    const joinGroup = () => {
      console.log(suggestions.name + " group joined");
      setJoined(true);
    };

    return (
      <div>
        <div>
          <button className={styles.suggestions} onClick={() => toggleMenu()}>
            {suggestions.name}
          </button>

          <div className={`styles.location ${isOpen ? "styles.open" : ""}`}>
            <a
              className={`${styles.location} ${
                isOpen ? styles.openLocationTime : ""
              }`}
            >
              Meeting location: {suggestions.location}
            </a>
          </div>

          <div className={`styles.time ${isOpen ? "styles.open" : ""}`}>
            <a
              className={`${styles.members} ${
                isOpen ? styles.openLocationTime : ""
              }`}
            >
              Meeting time: {suggestions.time}
            </a>
          </div>

          <div className={`styles.members ${isOpen ? "styles.open" : ""}`}>
            {suggestions.members.map((member, i) => {
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
          <button className={styles.join} onClick={joinGroup}>
            Join {suggestions.name}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className={styles.title}>YOUR GROUPS</h1>
      {groups.map((group) => showGroup(group))}
      <br />
      <h1 className={styles.title}>SUGGESTED GROUPS</h1>
      {suggestions.map((suggestions) => showSuggestions(suggestions))}
      <br />
    </div>
  );
}
