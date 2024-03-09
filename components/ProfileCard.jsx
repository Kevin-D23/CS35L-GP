"use client";
import { useState } from "react";
import React from "react";
import styles from "../CSS Modules/home.module.css";
import { usePathname } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

// takes an array of users and displays first index of array as profile card
// likeUser and getFilteredUsers are functions to handle liking users and getting a new array of users based on filters
export default function ProfileCard({ userArr, likeUser, getFilteredUsers }) {
  const location = usePathname();
  const [users, setUsers] = useState(userArr);
  const [user, setUser] = useState(users[0]);
  const cardRef = React.useRef(null);
  const leftSide = React.useRef(null);
  const rightSide = React.useRef(null);
  const background = React.useRef(null);
  const [filters, setFilters] = useState([]);

  // whenever user clicks like/dislike, shift array 1 left and set user to front of array
  function shiftArr(like) {
    likeUser(user.email, like);
    setUser(null);
    if (users.length > 1) {
      let temp = users;
      temp.shift();
      setUsers(temp);
      setUser(users[0]);
    }
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
        rightSide.current.style.backgroundColor = "var(--primary-300)";
        background.current.style.backgroundColor = "var(--primary-300)";
        leftSide.current.style.backgroundColor = "var(--primary-300)";
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

  async function handleFilters(filter) {
    let temp = filters;
    if (filters.includes(filter)) {
      const index = filters.indexOf(filter);
      temp.splice(index, 1);
      setFilters(temp);
    } else {
      temp.push(filter);
      setFilters(temp);
    }
    await getFilteredUsers(filters).then((res) => {
      setUsers(res);
      setUser(res[0]);
    });
  }

  return (
    <div className={styles.homeContainer} ref={background}>
      {location == "/" && (
        <div className={styles.filterOptionsContainer}>
          <h2>Filter By</h2>
          <div className={styles.filterOptions}>
            <div className={styles.filterOption}>
              <label>Major</label>
              <input
                type="checkbox"
                value={"major"}
                onClick={(e) => handleFilters(e.target.value)}
              />
            </div>
            <div className={styles.filterOption}>
              <label>Classes</label>
              <input
                type="checkbox"
                value={"classes"}
                onClick={(e) => handleFilters(e.target.value)}
              />
            </div>
            <div className={styles.filterOption}>
              <label>Locations</label>
              <input
                type="checkbox"
                value={"locations"}
                onClick={(e) => handleFilters(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
      {user ? (
        <div className={styles.home} ref={background}>
          {location == "/" && (
            <div
              className={styles.matchOption}
              onMouseEnter={() => handleMouseHover(-5)}
              onMouseLeave={() => handleMouseHover(0)}
              ref={leftSide}
              onClick={() => {
                handleClick(-1);
                setTimeout(() => {
                  shiftArr(0);
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
          <div>
            <div className={styles.userContainer} ref={cardRef}>
              <div className={styles.left}>
                <div className={styles.imageContainer}>
                  <img
                    src={user.image}
                    alt={"Profile Picture"}
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
                  shiftArr(1);
                }, 600);
              }}
            >
              <button>
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
        </div>
      ) : (
        <div className={styles.home} ref={background}>
          <div className={styles.matchOption}></div>
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
          <div className={styles.matchOption}></div>
        </div>
      )}
    </div>
  );
}
