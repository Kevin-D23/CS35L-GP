"use client";
import React, { useState,useEffect } from "react";
import styles from "../../../../CSS Modules/signup.module.css";
import Select from "react-select";
import { useRouter } from "next/navigation";
import {processData,getInfo} from "./actions"
import Haohan from "../../../../public/icons/haohan.jpeg";
const SignupCard = () => {
  const [selectedMajor, setSelectedMajor] = useState();
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [age, setAge] = useState();
  const [bio, setBio] = useState();
  const [name, setName] = useState("");
  const [displayCourses, setDisplayCourses] = useState([]);
  const [year, setYear] = useState();
  const [department, setDepartment] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [startTimeIndex, setStartTimeIndex] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [endTimeIndex, setEndTimeIndex] = useState(null);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const router = useRouter();
  useEffect(() => {
    // Fetch user data when the component mounts
    async function fetchData() {
    //name,age,year,major,bio,days,location,start,end,classes
    let info_array = [];
    info_array = await getInfo();
    setName(info_array[0]);
    setAge(info_array[1]);
    setYear(info_array[2].value);
    setSelectedMajor(info_array[3].value);
    setBio(info_array[4]);
    setCharCount(info_array[4].length)
    setSelectedDays(info_array[5]);
    setSelectedLocations(info_array[6]);
    setStartTime(info_array[7]);
    setEndTime(info_array[8]);
    setSelectedCourses(info_array[9]);
    setStartTimeIndex(0);
    setEndTimeIndex(1);

    }

    fetchData();
  }, []);
  const pictures = [
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYm6wqVw9UyQjxFlzZ7e_0d13kNxdD2DQ0ttREVNgoJ1mpIHIyt-8uRXxsn7N4oFZAf-DPn94vHBuADtflvBQhHOg59=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYuAuYkj6OfWXPXmDmJ0rRJ001_Bt3Th_YeyISFTOz_1NVW4pwtZWdSGFLwxteQF4v7EdDNlpNcq8XXSgTf_Sj6S7Ln=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZvyCZGQEVMSzn8XifdLUe4WkJn6Jou3mq2ZXaVAVS7C2nv7mj9VjN2vgMbbBSecfPqQ7vsA4Zc6QDXqgrPKAUNBRP5hw=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaTyxfxR246RZEF6ghO6EJ36YL46E4qTexnNq7Za51N6ftUABQIxUD5fNLglW8dQrNuc3qDjbGj5oJOwJ2bzdm_xyEE7Q=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihb0HdM6Ua8xt19YO84e9B9bAcZLDtlpjVgap0FB-gTz3jEKVhuQzy1rNwqO6sQ8_6KyZ3pGBIfy2N_4qg26of8-gKgq8A=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZrvUbGDo-TvAK3jGama17A4rC2WCBKuQ1RKPkPhHKIchsVUJEg3WqLkHQ8k1eMaBagiooIV6xLdul_Ir_jgMJJ3XUa=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbYkZ9opUt86FBu5Q4UxvOeb2Z-4NLJUUogithVxqGRW80dD3J129FMtYkIKNIpgNP8u15gh0Hxx1YXngBsb3LJsmkQAQ=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYnBiOLSsspFeQT5dj3BCkLVgIm2_pSLwfQUP-RL8GciBGrzus8_Uxw5Mb4YjuEbPMvn7xfbNjEViaSdMtIHUVcuEEcgw=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpiha3ZgiMnf9BkwQuBnirNKybs-4ss8ESa7HqF9lfq2Fr6jmKCbAkoymSoaGkfji_NyhNJr8nE4htPBkqLisH_r9pVU-rCw=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbqjVsPecpTD_jVwFbdYWfQ5x4Uw7uoLV7OX2zJ4sIxsFedMBM26jH88N8AEE3GzZL6_UGiikl6EPUfL-fAHbx4oMs0eg=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZC4g_fv5e3wk8qJlKfvKitNOJ60WBbYeZqugrB_8xakTVKTbdisZr24IqTYYSOy3ROhbcVALNTCrlP8ATJYDkFSo8DIA=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZRKllEtwffB77bj_8uIF1xkC5b4v3Gq2HQj86m2U6Pd5frZ0PRavuxI90_RaG-cHFt8C97LFhD62EjQc6CGyIzypIj0w=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbo1Cq1NKrYRo0QQsRbtkGWnSDyBQUtWAeNm5Fcz3gQKo4ypxRfRt2wAquvhJbHEu6CdaJ1PftrBt2HvzGeL08BfMOi=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihb4daWBr7JBsMhzvC2c8epkydRu3nn0-3diuZI02GLzgJYSDCRM5mvBmLRvCJNb7X5gahAk5dEkvYjYDkeADT_ctsP1aA=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihar4Krs6L2qOWuGs-aPj1ZQYECe_bINM67ozLasnDY86yf5nVKLyuhNBF1lga4M2FnaS-XCw3fDbraIhnSxVEilmKbO=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZChf3YEXR2mFy3L-EvsXA9c_CiKVpoKQmkl70yecEogy-Ynv7I3ZHr_tUsfJ9fiyJtVv6EI4tD1XIe4kqGSBpvptKk2A=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYTmYvHGiDg5Gv9fE-QQGDzTyz9AKI8FFnjQH4A6IBwf2M6b-c-NKE8f2iwpPt_In3EZGNuljDVZwM-bvYtxsqZfUJO=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihai4a5PP3FR4hG2H6hGxLabCfW9Py6hbxgIUbBfEv7wDuixGqWtrvH6xrKnpuQfZAUakxmOo31-SqbtaoU55RA4y6TJcw=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZN02Zc2tH9vhmM-mPfJ3rUM9iuEjSWF-gWqeuQPhi_w_g2Rljf80P9EwsnloOUYgxrmBLklXyuQ3HeMMuaZHhgLs0J-Q=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYCsj3SCf3i50IUg8KL573kLovtLnU_dZXWFvAROmbs798z8-4VizdbZ5ZbBbiEWMd32Wq0Tse1aIxJMyBFvFRFfSJQ=w3600-h2008",
  ];
  const [selectedPicture, setSelectedPicture] = useState();
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
      &&
      selectedDays.length != 0
    ) {
      if(selectedPicture){
        const data = {
          name:name,
          age: age,
          year: year,
          major: selectedMajor,
          bio: bio,
          classes: selectedCourses,
          daysAvailable: selectedDays,
          studyStart: startTime,
          studyEnd: endTime,
          locations: selectedLocations,
          image: pictures[selectedPicture]
        };
        processData(data);
      }
      else
      {
        const data = {
          name:name,
          age: age,
          year: year,
          major: selectedMajor,
          bio: bio,
          classes: selectedCourses,
          daysAvailable: selectedDays,
          studyStart: startTime,
          studyEnd: endTime,
          locations: selectedLocations,
          image: pictures[selectedPicture]
        };
        processData(data);
      }
      
      window.location.href = '/edit';
    }
    else
    {
      setSubmitAttempted(true);
    }
    } 
  
    const handleyear = (year) =>
    {
    setYear(year)
    };
  function updateCourses(x) {
    let temp = [];
    for (let i = 0; i < courses[x].length; i++)
      temp.push({ value: courses[x][i], label: courses[x][i] });
    setDisplayCourses(temp);
  }
  return (
    <div>
      {pageNumber == 0 ? ( <div className={styles.pictureContainer}>
          <h1>Edit Your Profile Picture?</h1>
          <div className={styles.pictures}>
            {pictures.map((picture, index) => {
              return (
                <img
                  key={index}
                  className={styles.picture}
                  src={picture}
                  alt={Haohan}
                  style={
                    selectedPicture == index
                      ? { border: "2px solid var(--primary-300)" }
                      : {}
                  }
                  onClick={() => {
                    setSelectedPicture(index);
                  }}
                />
              );
            })}
          </div>
          <div className={styles.pictureButtons}>
            <button
              onClick={() =>  setPageNumber(pageNumber + 1)}
              style={{ backgroundColor: "var(--primary-300)" }}
            >
              Next
            </button>
          </div>
        </div>) : (
        <div  className={styles.signupContainer}>
      <h1>Edit your profile:</h1>
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
        <div
          style={
            submitAttempted && !age? { color: "red" } : {}
          }
        >
          Age
          </div>
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
            value={years.find(option => option.value === year)}
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
            value={majors.find(option => option.value === selectedMajor)}
            onChange={(e) => setSelectedMajor(e.value)}
          />
        </label>
      </div>
      <div className={styles.bioContainer}>

     <div className={styles.bioContainer}>
            <div style={submitAttempted && !bio ? { color: "red" } : {}}>
              Write a short bio about you!
            </div>
            <textarea
              className={styles.bioInput}
              value={bio}
              maxLength={150}
              onChange={(e) => {
                setBio(e.target.value);
                setCharCount(e.target.value.length);
              }}
            />
            {charCount} / 150 characters
          </div>
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
            value={departments.find(option => option.value === department)}
            onChange={(e) => {
              updateCourses(e.value);
              setDepartment(e.value);
            }}
          />
          <div>
            {department != null ||  selectedCourses.length != 0 ? (
              <Select
                className={styles.courseSelect}
                options={displayCourses}
                isMulti
                value={selectedCourses.map(course => ({ label: course, value: course }))}
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
          value={selectedDays.map(day => ({ label: day, value: days.find(d => d.label === day).value }))}
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
            value={startTimes.find(option => option.label === startTime)}
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
            value={endTimes.find(option => option.label === endTime)}
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
          value={selectedLocations.map(location => ({ label: location, value: locations.find(d => d.label === location).value }))}
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
      <button  className={styles.submit}  style={{backgroundColor:"#7a5af5"}}onClick={() => setPageNumber(pageNumber - 1)}>Back</button>
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
            ? { backgroundColor: "#7a5af5"}
            : {}
        }
        onClick={() => handleSubmit()}
      >
        Save
      </button>
      </div>
      )}
    </div>
  );
};

export default SignupCard;
