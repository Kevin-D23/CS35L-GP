"use client";
import React, { useState } from "react";
import styles from "../CSS Modules/signup.module.css";
import Select from "react-select";
import { useRouter } from "next/navigation";

// submit is a function that pushes data from signup page to database
const SignupCard = ({ sessionName, submit }) => {
  const [selectedMajor, setSelectedMajor] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [name, setName] = useState(sessionName);
  const [age, setAge] = useState(18);
  const [bio, setBio] = useState("");
  const [displayCourses, setDisplayCourses] = useState([]);
  const [year, setYear] = useState(null);
  const [department, setDepartment] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [startTimeIndex, setStartTimeIndex] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [endTimeIndex, setEndTimeIndex] = useState(null);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [image, setImage] = useState(null);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const router = useRouter();

  const departments = [
    { value: "0", label: "COM SCI" },
    { value: "1", label: "ENGR" },
  ];
  const majors = [
    { value: "Computer Science", label: "Computer Science" },
    { value: "Computer Engineering", label: "Computer Engineering" },
    {
      value: "Computer Science and Engineering",
      label: "Computer Science and Engineering",
    },
  ];

  const courses = [
    ["CS31", "CS32", "CS33", "CS35L"],
    ["ENGR2", "ENGR19", "ENGR20"],
  ];

  const years = [
    { value: 1, label: "Year 1" },
    { value: 2, label: "Year 2" },
    { value: 3, label: "Year 3" },
    { value: 4, label: "Year 4" },
    { value: 5, label: "Year 5" },
  ];

  const days = [
    { value: 1, label: "Sunday" },
    { value: 2, label: "Monday" },
    { value: 3, label: "Tuesday" },
    { value: 4, label: "Wednesday" },
    { value: 5, label: "Thursday" },
    { value: 6, label: "Friday" },
    { value: 7, label: "Saturday" },
  ];

  const startTimes = [
    { value: 0, label: "12:00am" },
    { value: 1, label: "1:00am" },
    { value: 2, label: "2:00am" },
    { value: 3, label: "3:00am" },
    { value: 4, label: "4:00am" },
    { value: 5, label: "5:00am" },
    { value: 6, label: "6:00am" },
    { value: 7, label: "7:00am" },
    { value: 8, label: "8:00am" },
    { value: 9, label: "9:00am" },
    { value: 10, label: "10:00am" },
    { value: 11, label: "11:00am" },
    { value: 12, label: "12:00pm" },
    { value: 13, label: "1:00pm" },
    { value: 14, label: "2:00pm" },
    { value: 15, label: "3:00pm" },
    { value: 16, label: "4:00pm" },
    { value: 17, label: "5:00pm" },
    { value: 18, label: "6:00pm" },
    { value: 19, label: "7:00pm" },
    { value: 20, label: "8:00pm" },
    { value: 21, label: "9:00pm" },
    { value: 22, label: "10:00pm" },
    { value: 23, label: "11:00pm" },
    { value: 24, label: "11:59pm" },
  ];

  let endTimes = startTimes.slice(startTimeIndex + 1, 25);

  const locations = [
    { value: "YRL", label: "YRL" },
    { value: "Boelter", label: "Boelter" },
    { value: "Powell", label: "Powell" },
    { value: "Olympic", label: "Olympic" },
  ];

  function handleSubmit() {
    if (
      name &&
      age &&
      selectedMajor &&
      year &&
      bio &&
      selectedCourses.length != 0 &&
      selectedLocations.length != 0 &&
      startTime &&
      endTime &&
      startTimeIndex < endTimeIndex
    ) {
      const data = {
        name: name,
        age: age,
        year: year,
        major: selectedMajor,
        bio: bio,
        classes: selectedCourses,
        daysAvailable: selectedDays,
        studyStart: startTime,
        studyEnd: endTime,
        locations: selectedLocations,
        image: image,
        // Not changing
        //peopleSeen: peopleSeen,
        //matches: matches,
        //messagesSent: [],
        //messagesRecieved: [],
        //messagesRead: [],
        signupCompleted: true
      };
      submit(data);
      router.push("/");
    } else {
      setSubmitAttempted(true);
    }
  }

  function updateCourses(x) {
    let temp = [];
    for (let i = 0; i < courses[x].length; i++)
      temp.push({ value: courses[x][i], label: courses[x][i] });
    setDisplayCourses(temp);
  }
  return (
    <div className={styles.signupContainer}>
      <h1>Create a Free Account</h1>
      <div className={styles.textInputs}>
        <label className={styles.textInput}>
          <div style={submitAttempted && !name ? { color: "red" } : {}}>
            Name
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className={styles.textInput}>
          Age
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </div>
      <div className={styles.yearMajorContainer}>
        <label>
          <div style={submitAttempted && !year ? { color: "red" } : {}}>
            What year are you?
          </div>
          <Select
            className={styles.yearMajor}
            options={years}
            onChange={(e) => setYear(e.value)}
          />
        </label>
        <label>
          <div
            style={submitAttempted && !selectedMajor ? { color: "red" } : {}}
          >
            What is your major?
          </div>
          <Select
            className={styles.yearMajor}
            options={majors}
            onChange={(e) => setSelectedMajor(e.value)}
          />
        </label>
      </div>
      <div className={styles.bioContainer}>
        <div style={submitAttempted && !bio ? { color: "red" } : {}}>
          Write a short bio about you!
        </div>
        <textarea
          className={styles.bioInput}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <div className={styles.courseSelectionContainer}>
        <div>
          <div
            style={
              submitAttempted && !selectedCourses.length ? { color: "red" } : {}
            }
          >
            What classes are you looking for study buddies in?
          </div>

          <Select
            className={styles.courseSelect}
            options={departments}
            onChange={(e) => {
              updateCourses(e.value);
              setDepartment(e.value);
            }}
          />
          <div>
            {department != null ? (
              <Select
                className={styles.courseSelect}
                options={displayCourses}
                isMulti
                onChange={(e) => {
                  let x = [];
                  for (let i = 0; i < e.length; i++) x.push(e[i].value);
                  setSelectedCourses(x);
                }}
                styles={{
                  control: (styles) => ({
                    ...styles,
                    color: "var(--primary-300)",
                  }),
                }}
              />
            ) : (
              <Select />
            )}
          </div>
        </div>
      </div>
      <div className={styles.daysSelectContainer}>
        <div
          style={
            submitAttempted && !selectedDays.length ? { color: "red" } : {}
          }
        >
          What days are you available?
        </div>
        <Select
          className={styles.daysSelect}
          options={days}
          isMulti
          onChange={(e) => {
            let x = [];
            for (let i = 0; i < e.length; i++) x.push(e[i].label);
            setSelectedDays(x);
          }}
          styles={{
            control: (styles) => ({
              ...styles,
              color: "var(--primary-300)",
            }),
          }}
        />
      </div>
      <div className={styles.timeSelectContainer}>
        <label>
          <div
            style={
              submitAttempted && (!startTime || startTimeIndex >= endTimeIndex)
                ? { color: "red" }
                : {}
            }
          >
            Study Time: Start
          </div>

          <Select
            className={styles.time}
            options={startTimes}
            onChange={(e) => {
              setStartTime(e.label);
              setStartTimeIndex(e.value);
            }}
          />
        </label>
        <label>
          <div
            style={
              submitAttempted && (!endTime || startTimeIndex >= endTimeIndex)
                ? { color: "red" }
                : {}
            }
          >
            Study Time: End
          </div>

          <Select
            className={styles.time}
            options={endTimes}
            onChange={(e) => {
              setEndTime(e.label);
              setEndTimeIndex(e.value);
            }}
          />
        </label>
      </div>
      <div className={styles.locationSelectContainer}>
        <div
          style={
            submitAttempted && !selectedLocations.length ? { color: "red" } : {}
          }
        >
          Where do you like to study?
        </div>
        <Select
          className={styles.locationSelect}
          options={locations}
          isMulti
          onChange={(e) => {
            let x = [];
            for (let i = 0; i < e.length; i++) x.push(e[i].value);
            setSelectedLocations(x);
          }}
          styles={{
            control: (styles) => ({
              ...styles,
              color: "var(--primary-300)",
            }),
          }}
        />
      </div>
      <button
        className={styles.submit}
        style={
          name &&
          selectedMajor &&
          year &&
          selectedCourses.length != 0 &&
          selectedLocations.length != 0 &&
          startTime &&
          endTime &&
          startTimeIndex < endTimeIndex
            ? { backgroundColor: "var(--primary-400" }
            : {}
        }
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
    </div>
  );
};

export default SignupCard;
