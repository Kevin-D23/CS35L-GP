"use client";
import React from "react";
import styles from "../CSS Modules/messages.module.css";

function Sender(props) {
  return (
    <header className={`${styles.messagePart} ${styles.sender}`}>
      <img src="/icons/scissors.png" className={styles.senderProfile}></img>
      <div className={styles.senderName}>{props.sender}</div>
    </header>
  );
}
function MessageBody(props) {
  return (
    <div className={`${styles.messagePart} ${styles.messageBody}`}>
      {props.contents}
    </div>
  );
}
function Icon(props) {
  const [isVisible, setVisible] = React.useState(false);
  const toggleVisbility = () => {
    setVisible(!isVisible);
  };
  return (
    <div>
      <img
        src={props.source}
        className={styles.sendeeProfile}
        onClick={toggleVisbility}
      ></img>
      {isVisible && (
        <div className={styles.sendeeName}>
          <div className={styles.sendeeName}>Haohan</div>
          <div>Computer Science</div>
        </div>
      )}
    </div>
  );
}

function Recipients(props) {
  return (
    <div className={`${styles.messagePart} ${styles.recipients}`}>
      <Icon source={"/icons/scissors.png"}></Icon>
    </div>
  );
}
const data = [
  ["Button 1", "New Text 1", "#59BFFF"],
  ["Button 2", "New Text 2", "#A5D296"],
  ["Button 3", "New Text 3", "#D3D3D3"],
  ["Button 4", "New Text 4", "#59BFFF"],
  ["Button 5", "New Text 5", "#A5D296"],
  ["Button 6", "New Text 6", "#D3D3D3"],
  ["Button 7", "New Text 7", "#59BFFF"],
  ["Button 8", "New Text 8", "#A5D296"],
  ["Button 9", "New Text 9", "#D3D3D3"],
  ["Button 10", "New Text 10", "#59BFFF"],
  // Add more pairs as needed
];
function ButtonClick({ message, toggleBool }) {
  if (toggleBool) {
    return <div>{message}</div>;
  }
}
export default function Message(props) {
  const [buttonColors, setButtonColors] = React.useState(() =>
    props.receivedMessages.map((item) => ["#59BFFF", 80, 92])
  );
  const [sentButtonColors, setSentButtonColors] = React.useState(() =>
    props.sentMessages.map((item) => ["#A5D296", 80, 92])
  )
  const [buttonTextIndex, setButtonTextIndex] = React.useState(
    Array(props.receivedMessages.length).fill(0)
  );
  const [SentsbuttonTextIndex, setSentsButtonTextIndex] = React.useState(
    Array(props.sentMessages.length).fill(0)
  );

  const toggleBackgroundColor = (index, newColor) => {
    setButtonColors(
      buttonColors.map((color, idx) => {
        //idx === index ? [newColor,10,20] : color
        if (idx === index && color[1] == 10) {
          return [newColor, 80, 92];
        } else if (idx === index && color[1] == 80) {
          return [newColor, 10, 20];
        } else {
          return color;
        }
      })
    );
  };
  const toggleSetBackgroundColor = (index, newColor) => {
    setSentButtonColors(
      sentButtonColors.map((color, idx) => {
        //idx === index ? [newColor,10,20] : color
        if (idx === index && color[1] == 10) {
          return [newColor, 80, 92];
        } else if (idx === index && color[1] == 80) {
          return [newColor, 10, 20];
        } else {
          return color;
        }
      })
    );
  };
  const toggleButtonText = (index, newColor) => {
    const updatedIndexes = [...buttonTextIndex];
    updatedIndexes[index] = 1 - updatedIndexes[index];
    setButtonTextIndex(updatedIndexes);
    toggleBackgroundColor(index, newColor);
  };
  const toggleSentText = (index, newColor) => {
    const updatedSetIndexes = [...SentsbuttonTextIndex];
    updatedSetIndexes[index] = 1 - updatedSetIndexes[index];
    setSentsButtonTextIndex(updatedSetIndexes);
    toggleSetBackgroundColor(index, newColor);
  };
  //`linear-gradient(120deg, #252525 80\\%, #2f2f2f 92%, ${buttonColors[index]} 100%`
  return (
    <div>
      <div className={styles.scrollContainer}>
        <div className={styles.label}>
          Received
        </div>
        {props.receivedMessages.filter(buttonTexts => buttonTexts !== null).map((buttonTexts, index) => (
          <div>
            <div key={index} className={styles.buttonContainer}>
              <button
                style={{background: `linear-gradient(120deg, #252525 ${buttonColors[index][1]}%, #2f2f2f ${buttonColors[index][2]}%, ${buttonColors[index][0]} 100%`}}
                className={styles.button}
                onClick={() => toggleButtonText(index,buttonColors[index][0])}
                id={`message${index}`}
              >
                {buttonTexts.sender}
              </button>
              {buttonTextIndex[index] === 1 && (
                <div className={styles.message}>
                  {buttonTexts.message}
                </div>
              )}
            </div>
        
          </div>
        ))}
      </div>
      <div className={styles.scrollContainer}>
        <div className={styles.label}>
          Sent
        </div>
        {props.sentMessages.filter(buttonTexts=> buttonTexts !== null).map((buttonTexts, index) => (
          <div>
            <div key={index} className={styles.buttonContainer}>
              <button
                style={{background: `linear-gradient(120deg, #252525 ${sentButtonColors[index][1]}%, #2f2f2f ${sentButtonColors[index][2]}%, ${sentButtonColors[index][0]} 100%`}}
                className={styles.button}
                onClick={() => toggleSentText(index,sentButtonColors[index][0])}
                id={`message${index}`}
              >
                Sent to: {buttonTexts.reciever}
              </button>
              {SentsbuttonTextIndex[index] === 1 && (
                <div>
                  {buttonTexts.message}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
