"use client";
import React, { useState } from "react";
import styles from "../CSS Modules/signup.module.css";
import Select from "react-select";

const SignupCard = ({ sessionName }) => {
  const [selectedMajor, setSelectedMajor] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [name, setName] = useState(sessionName);
  const [age, setAge] = useState(18);
  const [displayCourses, setDisplayCourses] = useState([]);
  const [year, setYear] = useState(null);
  const [department, setDepartment] = useState(null);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(null);
  const [selectedLocations, setselectedLocations] = useState([]);

  const departments = [
    { value: "0", label: "COM SCI" },
    { value: "1", label: "ENGR" },
  ];
  const majors = [
    { value: 0, label: "Computer Science" },
    { value: 1, label: "Computer Engineering" },
    { value: 2, label: "Computer Science and Engineering" },
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

  let endTimes = startTimes.slice(startTime + 1, 24);

  const locations = [
    { value: 0, label: "YRL" },
    { value: 1, label: "Boelter" },
    { value: 2, label: "Powell" },
    { value: 3, label: "Olympic" },
  ];

  function handleSubmit() {
    if (
      name &&
      selectedMajor &&
      year &&
      selectedCourses.length != 0 &&
      selectedLocations.length != 0 &&
      startTime &&
      endTime
    ) {
      const data = {
        name: name,
        age: age,
        year: year,
        major: selectedMajor,
        classes: selectedCourses,
        studyStart: startTime,
        studyEnd: endTime,
        locations: selectedLocations,
      };
      console.log(data);
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
          Name
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
          What year are you?
          <Select
            className={styles.yearMajor}
            options={years}
            onChange={(e) => setYear(e.value)}
          />
        </label>
        <label>
          What is your major?
          <Select
            className={styles.yearMajor}
            options={majors}
            onChange={(e) => setSelectedMajor(e.value)}
          />
        </label>
      </div>
      <div className={styles.courseSelectionContainer}>
        <div>
          What classes are you looking for study buddies in?
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
      <div className={styles.timeSelectContainer}>
        <label>
          Study time?
          <Select
            className={styles.time}
            options={startTimes}
            onChange={(e) => setStartTime(e.value)}
          />
        </label>
        <label>
          End
          <Select
            className={styles.time}
            options={endTimes}
            onChange={(e) => setEndTime(e.value)}
          />
        </label>
      </div>
      <div className={styles.locationSelectContainer}>
        Where do you like to study?
        <Select
          className={styles.locationSelect}
          options={locations}
          isMulti
          onChange={(e) => {
            let x = [];
            for (let i = 0; i < e.length; i++) x.push(e[i].value);
            setselectedLocations(x);
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
          endTime
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
