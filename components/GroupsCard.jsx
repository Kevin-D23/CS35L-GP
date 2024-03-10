"use client";
import styles from "../CSS Modules/groups.module.css";
import { useState } from "react";

export default function GroupsCard({
  currentUserEmail,
  myGroups,
  suggestedGroups,
  handleLeave,
  handleJoin,
}) {
  const [groups, setGroups] = useState(myGroups);
  const [suggested, setSuggested] = useState(suggestedGroups);
  /////////////////////////////////////////////////
  // helper functions
  /////////////////////////////////////////////////
  function showGroup(group, key, user) {
    const [isOpen, setIsOpen] = useState(false);
    const [joined, setJoined] = useState(true);

    const toggleMenu = () => {
      setIsOpen(!isOpen); // toggle menu visibility
    };

    const exitGroup = () => {
      setJoined(false);
    };

    return (
      <div className={styles.groupContainer} key={key}>
        <button onClick={() => toggleMenu()} className={styles.groupButton}>
          {group.name}
        </button>
        {isOpen && (
          <div className={styles.groupInfoContainer}>
            <div className={styles.meetingInfo}>
              <h2>
                Meeting location: <h3>{group.location}</h3>
              </h2>
              <h2>
                Meeting time:{" "}
                <h3>
                  {group.studyStart} - {group.studyEnd}
                </h3>
              </h2>
            </div>
            <h2>Members:</h2>
            <ul className={styles.membersContainer}>
              {group.members.map((member, index) => {
                return (
                  <li key={index} className={styles.member}>
                    {member.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {group.owner == user && isOpen && (
          <button className={styles.editButton}>Edit Group</button>
        )}
        {isOpen && (
          <button
            className={styles.leaveButton}
            onClick={async () => {
              await handleLeave(group._id, currentUserEmail);
              window.location.reload();
            }}
          >
            Leave Group
          </button>
        )}
      </div>
    );
  }

  function showSuggestions(suggestion, key) {
    const [isOpen, setIsOpen] = useState(false);
    const [joined, setJoined] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen); // toggle menu visibility
    };

    const joinGroup = () => {
      setJoined(true);
    };

    return (
      <div className={styles.groupContainer} key={key}>
        <button onClick={() => toggleMenu()} className={styles.groupButton}>
          {suggestion.name}
        </button>
        {isOpen && (
          <div className={styles.groupInfoContainer}>
            <div className={styles.meetingInfo}>
              <h2>
                Meeting location: <h3>{suggestion.location}</h3>
              </h2>
              <h2>
                Meeting time:
                <h3>
                  {suggestion.studyStart} - {suggestion.studyEnd}
                </h3>
              </h2>
            </div>
            <h2>Members:</h2>
            <ul className={styles.membersContainer}>
              {suggestion.members.map((member, index) => {
                return (
                  <li key={index} className={styles.member}>
                    {member.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {isOpen && (
          <button
            className={styles.joinButton}
            onClick={async () => {
              await handleJoin(suggestion._id, currentUserEmail);

              window.location.reload();
            }}
          >
            Join Group
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={styles.groupsPageContainer}>
      <div className={styles.groupsPageSection}>
        <h1 className={styles.title}>YOUR GROUPS</h1>
        <div className={styles.myGroupsContainer}>
          {groups.map((group, index) =>
            showGroup(group, index, currentUserEmail)
          )}
        </div>
      </div>
      <div className={styles.groupsPageSection}>
        <h1 className={styles.title}>SUGGESTED GROUPS</h1>
        <div className={styles.myGroupsContainer}>
          {suggested.map((suggestion, index) =>
            showSuggestions(suggestion, index)
          )}
        </div>
      </div>
    </div>
  );
}
