"use client";
import React, { useState } from 'react';
import styles from "../../../../CSS Modules/signup.module.css";
import Select from "react-select";
import Link from "next/link";
import style from "../../../../CSS Modules/stylesUserEdit.module.css";

function EditButton({ onSave}) {


  const handleEditClick = () => {
    onSave();
 

  };

  return ( <Link href="/edit">
  {" "}
  {}
   <button className={`${style.editButton}`} onClick={handleEditClick}>
      save
    </button>
</Link>
   
  );
}



export default function EditableText({text}) {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [displayCourses, setDisplayCourses] = useState([]);
  const [year, setYear] = useState(null);
  const [department, setDepartment] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [startTimeIndex, setStartTimeIndex] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [endTimeIndex, setEndTimeIndex] = useState(null);
  const [selectedLocations, setselectedLocations] = useState([]);
  const [selectedDays, setselectedDays] = useState([]);
  const [selectedMajor, setSelectedMajor] = useState(null);
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
  const days = [
    { value: 0, label: "Monday" },
    { value: 1, label: "Tuesday" },
    { value: 2, label: "Wednesday" },
    { value: 3, label: "Thursday" },
    { value: 4, label: "Friday" },
    { value: 5, label: "Saturday" },
    { value: 6, label: "Sunday" }
  ]
  let endTimes = startTimes.slice(startTimeIndex + 1, 25);

  const locations = [
    { value: "YRL", label: "YRL" },
    { value: "Boelter", label: "Boelter" },
    { value: "Powell", label: "Powell" },
    { value: "Olympic", label: "Olympic" },
  ];
  function updateCourses(x) {
    let temp = [];
    for (let i = 0; i < courses[x].length; i++)
      temp.push({ value: courses[x][i], label: courses[x][i] });
    setDisplayCourses(temp);
  }
  const [editableText, setEditableText] = useState(text||' ');


const handleSave = async () => {

};

return(
  <div className={styles.signupContainer}>
  <h1 style={{color:'white',fontSize:'1em',marginRight:'400px'}}>Bio:</h1>
 <textarea
          className={styles.bioInput}
          value={editableText}
          onChange={(e) => setEditableText(e.target.value)}
        />
  <div className={styles.textInputs}>
   
  </div>
  
  <div className={styles.yearMajorContainer}>
    <label>
    <h1 style={{color:'white',fontSize:'1em'}}>Year:</h1>
      <Select
        className={styles.yearMajor}
        options={years}
        onChange={(e) => setYear(e.value)}
      />
    </label>
    <label>
    <h1 style={{color:'white',fontSize:'1em'}}>Major:</h1>
      <Select
        className={styles.yearMajor}
        options={majors}
        onChange={(e) => setSelectedMajor(e.value)}
      />
    </label>
  </div>

  <div className={styles.courseSelectionContainer}>
    <div>
      
    <h1 style={{color:'white',fontSize:'1em',marginRight:'400px'}}>Courses:</h1>

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
  <h1 style={{color:'white',fontSize:'1em',marginRight:'400px'}}>Days:</h1>
    <Select
      className={styles.daysSelect}
      options={days}
      isMulti
      onChange={(e) => {
        let x = [];
        for (let i = 0; i < e.length; i++) x.push(e[i].label);
        setselectedDays(x);
      }}
      styles={{
        control: (styles) => ({
          ...styles,
          color: "var(--primary-300)",
        }),
      }}
    />
  </div>
  <h1 style={{color:'white',fontSize:'1em',marginRight:'400px'}}>Times:</h1>
  <div className={styles.timeSelectContainer}>
    <label>
   

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
    <div style={{marginTop: '5px'}}> <EditButton onSave={handleSave}/></div>
    
  </div>

      
</div>
);
}

