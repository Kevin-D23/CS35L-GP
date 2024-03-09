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
        <div className={styles.sendeeName}>Haohan</div>
      )}
  </div>)
}
function Recipients(props){
  return (<div className={`${styles.messagePart} ${styles.recipients}`}> 
    <Icon source={"/icons/scissors.png"}></Icon>
    
  </div>)
}
export default function Message(props){ 
    return( <div className={styles.box}>
      <Sender sender={"Banana"}></Sender>
      <MessageBody contents="Please come urgently" ></MessageBody>
      <Recipients></Recipients>
    </div>)
}