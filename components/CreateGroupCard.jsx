"use client";
import React, { useState } from "react";
import styles from "../CSS Modules/creategroup.module.css";
import Select from "react-select";
import { FaXmark } from "react-icons/fa6";

const CreateGroupCard = ({
  sessionName,
  matches,
  handleCreate,
  setShowCreate,
}) => {
  const [groupName, setGroupName] = useState("");
  const [location, setLocation] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [startTimeIndex, setStartTimeIndex] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [endTimeIndex, setEndTimeIndex] = useState(null);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  let matchesObjects = [];

  for (let i = 0; i < matches.length; i++) {
    matchesObjects.push({ value: matches[i].email, label: matches[i].name });
  }

  const members = [
    { value: 1, label: "Member 1" },
    { value: 2, label: "Member 2" },
    { value: 3, label: "Member 3" },
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

  async function handleSubmit() {
    if (
      groupName &&
      location &&
      selectedDays.length != 0 &&
      startTime &&
      endTime
    ) {
      const data = {
        name: groupName,
        location: location,
        members: selectedMembers,
        studyStart: startTime,
        studyEnd: endTime,
        days: selectedDays,
      };
      await handleCreate(data);
      window.location.reload()
    } else {
      setSubmitAttempted(true);
    }
  }
  return (
    <div className={styles.createGroupPageContainer}>
      <button className={styles.closeButton} onClick={() => setShowCreate(false)}>
        <FaXmark
          color="var(--dark-400)"
          style={{
            width: "2.5rem",
            height: "2.5rem",
          }}
        />
      </button>
      <div className={styles.createGroupContainer}>
        <h1>Create Your Group</h1>
        <div className={styles.createGroupCardContainer}>
          <label className={styles.textInput}>
            <div style={submitAttempted && !groupName ? { color: "red" } : {}}>
              What is your group name?
            </div>
            <input
              type="text"
              value={groupName}
              className={styles.textInput}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </label>
        </div>

        <div className={styles.locationSelectContainer}>
          <div style={submitAttempted && !location ? { color: "red" } : {}}>
            Where will the group be meeting?
          </div>
          <Select
            className={styles.locationSelect}
            options={locations}
            onChange={(e) => {
              setLocation(e.value);
            }}
            styles={{
              control: (styles) => ({
                ...styles,
                color: "var(--primary-300)",
              }),
            }}
          />
        </div>

        <div className={styles.daysSelectContainer}>
          <div
            style={
              submitAttempted && !selectedDays.length ? { color: "red" } : {}
            }
          >
            What days will your group be meeting?
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
                submitAttempted &&
                (!startTime || startTimeIndex >= endTimeIndex)
                  ? { color: "red" }
                  : {}
              }
            >
              Meeting Time: Start
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
              Meeting Time: End
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

        <div className={styles.membersSelectContainer}>
          <div>Add members to your group!</div>
          <Select
            className={styles.membersSelect}
            options={matchesObjects}
            isMulti
            onChange={(e) => {
              let x = [];
              for (let i = 0; i < e.length; i++) x.push(e[i].value);
              setSelectedMembers(x);
            }}
            styles={{
              control: (styles) => ({
                ...styles,
                color: "var(--primary-300)",
              }),
            }}
          />
        </div>

        <div>
          <button
            className={styles.submit}
            style={
              startTime &&
              endTime &&
              startTimeIndex < endTimeIndex &&
              groupName &&
              location &&
              days
                ? { backgroundColor: "var(--primary-400)" }
                : { backgroundColor: "var(--dark-200)" }
            }
            onClick={() => {
              handleSubmit();
            }}
          >
            Create Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupCard;
