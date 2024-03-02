'use client'
import React from "react"
import styles from "../CSS Modules/messages.module.css"
function Sender(props){
    return <header className={`${styles.messagePart} ${styles.sender}`}>
      <img src="/icons/scissors.png" className={styles.senderProfile}></img>
      {props.sender}
      </header>
}
function MessageBody(props){
  return <div className={`${styles.messagePart} ${styles.messageBody}`}>{props.contents}</div>
}
function Recipients(props){
  return (<div className={`${styles.messagePart} ${styles.recipients}`}> Me</div>)
}
export default function Message(props){ 
    return( <div className={styles.box}>
      <Sender sender={"Banana"}></Sender>
      <MessageBody contents="Please come urgently" ></MessageBody>
      <Recipients></Recipients>
    </div>)
}