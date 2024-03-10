'use client'
import React from "react"
import styles from "../CSS Modules/messages.module.css"

function Sender(props){
    return <header className={`${styles.messagePart} ${styles.sender}`}>
      <img src="/icons/scissors.png" className={styles.senderProfile}></img>
      <div className={styles.senderName}>{props.sender}</div>
      </header>
}
function MessageBody(props){
  return <div className={`${styles.messagePart} ${styles.messageBody}`}>{props.contents}</div>
}
function Icon(props){
  const [isVisible, setVisible] = React.useState(false)
  const toggleVisbility = () => {
    setVisible(!isVisible)
  }
  return(<div>
    <img src={props.source} className={styles.sendeeProfile} onClick={toggleVisbility}></img>
    {isVisible && (
        <div className={styles.sendeeName}>
          <div className={styles.sendeeName}>Haohan</div>
          <div>Computer Science</div>
        </div>
      )}
  </div>)
}

function Recipients(props){
  return (<div className={`${styles.messagePart} ${styles.recipients}`}> 
    <Icon source={"/icons/scissors.png"}></Icon>
    
  </div>)
}
const data = [
  ["Button 1", "New Text 1","#59BFFF"],
  ["Button 2", "New Text 2","#A5D296"],
  ["Button 3", "New Text 3","#D3D3D3"],
  ["Button 4", "New Text 4","#59BFFF"],
  ["Button 5", "New Text 5","#A5D296"],
  ["Button 6", "New Text 6","D3D3D3"],
  ["Button 7", "New Text 7","59BFFF"],
  ["Button 8", "New Text 8","A5D296"],
  ["Button 9", "New Text 9","#D3D3D3"],
  ["Button 10", "New Text 10","59BFFF"],
  // Add more pairs as needed
];
function ButtonClick({message,toggleBool})
{
if(toggleBool)
{
  return(<div>{message}</div>);
}

}

export default function Message(props){ 
  const [buttonTextIndex, setButtonTextIndex] = React.useState(Array(data.length).fill(0));
  const toggleButtonText = (index) => {
    const updatedIndexes = [...buttonTextIndex];
    updatedIndexes[index] = 1 - updatedIndexes[index]; 
    setButtonTextIndex(updatedIndexes);
  };

  return (
    <div>
      <div className={styles.scrollContainer}>
        {data.map((buttonTexts, index) => (
          <div key={index} className={styles.buttonContainer}>
            <button
              style={{background: `linear-gradient(120deg, #252525 80%, #2F2F2F 92%,${buttonTexts[2]} 100%)`}}
              className={styles.button}
              onClick={() => toggleButtonText(index)}
            >
              {buttonTexts[buttonTextIndex[index]]}
            </button>
            {buttonTextIndex[index] === 1 && (
              <div>
                Additional Content for {buttonTexts[0]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

}