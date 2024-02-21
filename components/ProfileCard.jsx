"use client";
import { useState } from "react";
import React from "react";
import styles from "../CSS Modules/home.module.css";
import { usePathname } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function ProfileCard(userArr) {
  const location = usePathname();
  const [users, setUsers] = useState(userArr.userArr);
  const [user, setUser] = useState(users[0]);
  const cardRef = React.useRef(null);
  const leftSide = React.useRef(null);
  const rightSide = React.useRef(null);
  const background = React.useRef(null);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function shiftArr() {
    setUser(null);
    setTimeout(() => {
      if (users.length > 1) {
        let temp = users;
        temp.shift();
        setUsers(temp);
        setUser(users[0]);
      }
    }, 0);
  }

  function calcTime(start, end) {
    let startTime = start + "am";
    let endTime = end + "am";
    if (start > 12) startTime = start - 12 + "pm";
    if (end > 12) endTime = end - 12 + "pm";
    return startTime + "-" + endTime;
  }

  const handleMouseHover = (angle) => {
    if (cardRef.current) {
      if (angle < 0) {
        cardRef.current.style.transformOrigin = "20% 80%";
        leftSide.current.style.backgroundColor = "var(--dark-200)";
        rightSide.current.style.backgroundColor = "var(--dark-200)";
        background.current.style.backgroundColor = "var(--dark-200)";
      } else if (angle > 0) {
        cardRef.current.style.transformOrigin = "80% 80%";
        rightSide.current.style.backgroundColor = "var(--primary-200)";
        background.current.style.backgroundColor = "var(--primary-200)";
        leftSide.current.style.backgroundColor = "var(--primary-200)";
      } else {
        leftSide.current.style.backgroundColor = "var(--dark-100)";
        rightSide.current.style.backgroundColor = "var(--dark-100)";
        background.current.style.backgroundColor = "var(--dark-100)";
      }
      cardRef.current.style.transform = `rotateZ(${angle}deg)`;
    }
  };

  function handleClick(direction) {
    if (cardRef.current) {
      cardRef.current.style.transform = `translateX(${
        direction * 1500
      }px) rotateZ(${direction * 100}deg)`;
    }
    setTimeout(() => {
      cardRef.current.style.transform = `translateX(0) rotateZ(0)`;
    }, 500);
  }

  return (
    <div className={styles.home} ref={background}>
      {user ? (
        <>
          {location == "/" && (
            <div
              className={styles.matchOption}
              onMouseEnter={() => handleMouseHover(-5)}
              onMouseLeave={() => handleMouseHover(0)}
              ref={leftSide}
              onClick={() => {
                handleClick(-1);
                setTimeout(() => {
                  shiftArr();
                }, 600);
              }}
            >
              <FaXmark
                color="var(--dark-300)"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                }}
              />
            </div>
          )}
          <div className={styles.userContainer} ref={cardRef}>
            <div className={styles.left}>
              <div className={styles.imageContainer}></div>
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
                <h2 style={{ marginTop: "20px" }}>COURSES</h2>
                <ul>
                  {user.courses.map((course, key) => {
                    return <li key={key}>{course}</li>;
                  })}
                </ul>
              </div>
              <div className={styles.timesContainer}>
                <h2>AVAILABLE DAYS</h2>
                <ul>
                  {user.days.map((day, key) => {
                    return <li key={key}>{days[day]}</li>;
                  })}
                </ul>
                <h2>WHEN</h2>
                <p>{calcTime(user.timeStart, user.timeEnd)}</p>
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
          {location == "/" && (
            <div
              className={styles.matchOption}
              onMouseEnter={() => handleMouseHover(5)}
              onMouseLeave={() => handleMouseHover(0)}
              ref={rightSide}
              onClick={() => {
                handleClick(1);
                setTimeout(() => {
                  shiftArr();
                }, 600);
              }}
            >
              <button onClick={() => shiftArr()}>
                <FaCheck
                  color="var(--primary-200)"
                  style={{
                    width: "2rem",
                    height: "2rem",
                  }}
                />
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <div className={styles.userContainer}>
            <div className={styles.left}>
              <div className={styles.imageContainer}></div>
              <div className={styles.bioContainer}>
                <h1>...</h1>
                <h2>...</h2>
                <h2>
                  Major:<p>...</p>
                </h2>
                <p>...</p>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.coursesContainer}>
                <h2>COURSES</h2>
                ...
              </div>
              <div className={styles.timesContainer}>
                <h2>AVAILABLE DAYS</h2>
                ...
                <h2>WHEN</h2>
                <p>...</p>
              </div>
              <div className={styles.locationContainer}>
                <h2>LOCATIONS</h2>
                ...
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}