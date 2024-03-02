"use client";
import React, { useState,useEffect } from 'react';
import styles from "../../../../CSS Modules/signup.module.css";
import Select from "react-select";
import Link from "next/link";
import style from "../../../../CSS Modules/stylesUserEdit.module.css";
import {processData} from "./actions"
import Image from "next/image";
function EditButton({ onSave}) {


  const handleEditClick = () => {
    onSave();
 window.location.href = '/edit';

  };

  return ( 
   <button className={`${style.editButton}`} onClick={handleEditClick}>
      save
    </button>

   
  );
}




export default function EditableText({text,name,email,pic,times}) {




  const [selectedCourses, setSelectedCourses] = useState([]);
  const [displayCourses, setDisplayCourses] = useState([]);
  const [department, setDepartment] = useState(null);
  const [startTime, setStartTime] = useState([{value: 0, label:"12:00am"}]);
  const [startTimeIndex, setStartTimeIndex] = useState(null);
  const [endTime, setEndTime] = useState([{value: 25, label:"1:00am"}]);
  const [endTimeIndex, setEndTimeIndex] = useState(null);


  const [selectedDays, setselectedDays] = useState([
    { value: 'Monday', label: 'Monday' },
    { value: 'Wednesday', label: 'Wednesday' },
  ]);

  const days = [
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
    { value: 'Saturday', label: 'Saturday', },
    { value: 'Sunday', label: 'Sunday' },
  ];

  const handleSelectChange = (selectedOptions) => {
    setselectedDays(selectedOptions);
  };

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

  let endTimes = startTimes.slice(startTimeIndex + 1, 25);



  function updateCourses(x) {
    let temp = [];
    for (let i = 0; i < courses[x].length; i++)
      temp.push({ value: courses[x][i], label: courses[x][i] });
    setDisplayCourses(temp);
  }
  const [editableText, setEditableText] = useState(text||' ');


const handleSave = async () => {
  const processedData = processData("helo");

  // Display the result
  console.log('Result:', processedData);
  console.log('Result:', selectedCourses);
};
const [year, setYear] = useState(years[1]);
const handleyear = (year) =>
{
setYear(year)
};


const [selectedMajor, setSelectedMajor] = useState(majors[0]);
const handlemajor = (selectedMajor) =>
{
setSelectedMajor(selectedMajor)
};

const [selectedLocations, setselectedLocations] = useState([
  { value: "YRL", label: "YRL" }
]);

const locations = [
  { value: "YRL", label: "YRL" },
  { value: "Boelter", label: "Boelter" },
  { value: "Powell", label: "Powell" },
  { value: "Olympic", label: "Olympic" },
];

const handleLocation = (selectedLocations) => {
  setselectedLocations(selectedLocations);
};

const handleStartTime =(startTime)=>
{
  setStartTime(startTime);
};

const handleEndTime =(endTime)=>
{
  setEndTime(endTime);
};
return(
  
  <div className={styles.signupContainer}>
    <div style={{ display: "flex",marginBottom:"5"}}>


<div style={{ marginLeft: "10px" }}>
<h1 style={{color:'white',fontSize:'1em'}}>{name}</h1>
</div>

<div style={{ marginLeft: "10px" }}>
<h1 style={{color:'white',fontSize:'1em'}}>{email}</h1>

</div>
<div style={{ marginLeft: "10px" }}><EditButton onSave={handleSave}/></div>


    </div>
        
    

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
        value ={year}
        onChange={handleyear}
      />
    </label>
    <label>
    <h1 style={{color:'white',fontSize:'1em'}}>Major:</h1>
      <Select
        className={styles.yearMajor}
        options={majors}
        value={selectedMajor}
        onChange={handlemajor}
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
  
          onChange={(e) =>{
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
       className={styles.locationSelect}
      options={days}
      isMulti
      value={selectedDays} // Set the initially selected values
      onChange={handleSelectChange}
    />
  </div>
  <h1 style={{color:'white',fontSize:'1em',marginRight:'400px'}}>Times:</h1>
  <div className={styles.timeSelectContainer}>
    <label>
   

      <Select
        className={styles.time}
        options={startTimes}
        value={startTime}
        onChange={(e) => {
          handleStartTime();
          setStartTimeIndex(e.value);
        }}
      />
    </label>
    <label>
   

      <Select
        className={styles.time}
        options={endTimes}
        value={endTime}
        onChange={(e) => {
          handleEndTime();
          setEndTimeIndex(e.value);
        }}
      />
    </label>
  </div>
  <div className={styles.locationSelectContainer}>
  <h1 style={{color:'white',fontSize:'1em'}}>Location:</h1>
  <Select
       className={styles.locationSelect}
      options={locations}
      isMulti
      value={selectedLocations} // Set the initially selected values
      onChange={handleLocation}
    />
    
    
  </div>

      
</div>
);
}

