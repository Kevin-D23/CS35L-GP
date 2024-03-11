"use client"
import styles from "../CSS Modules/compose.module.css"
import React from "react"
import Select from "react-select";
import Link from "next/link";
import { IoMdExit } from "react-icons/io";

export default function ComposeMessage(props){
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [matches, setMatches] = React.useState(props.user.matches.map(match => ({ label: match, value: match })));
    const [target, setTarget] = React.useState('')
    const handleSubmit = () =>{
        const data = {sender:props.user.email,
        reciever:target,
        title: title,
        message: content}
        props.sendData(data)
    }
    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          backgroundColor: ' var(--primary-600)', 
          borderColor:'rgb(180, 164, 204)',
        }),
      };
      const [charCount, setCharCount] = React.useState(0);
      const maxCharLength = 50;
      const [charCountMessage, setCharCountMessage] = React.useState(0);
      const handleInput = (e) => {
        const inputText = e.currentTarget.textContent;
        if (inputText.length <= maxCharLength) {
          setTitle(inputText);
          setCharCount(inputText.length);
        } else {
          e.currentTarget.textContent = title;
        }
      };

      const handleInputMessage = (e) => {
        const inputText = e.currentTarget.textContent;
        if (inputText.length <= 1000) {
            setContent(e.currentTarget.textContent);
          setCharCountMessage(inputText.length);
        } else {
          e.currentTarget.textContent = content;
        }
      };
    return(
        <div className={styles.box}>
            <Link className={styles.closeButton} href="/messages"><IoMdExit /></Link>
            <div style={{color:"black",fontSize:"1.3rem",fontFamily:"Abel"}}>Message Header:</div> 
           <div  className={styles.title}
      contentEditable="true"
      id="ComposeMessageTitle"
      onInput={handleInput}
    >
    </div>
          <div style={{color:"black",fontSize:"1.3rem",fontFamily:"Abel"}}>Recipient:</div> 
            <Select  className={styles} options={matches} onChange={(e) => {
                setTarget(e.value)
            }}></Select>
              <div style={{color:"black",fontSize:"1.3rem",fontFamily:"Abel"}}>Message Body:</div> 
            <div className={styles.contents} contentEditable="true"
             id="ComposeMessageContent"
             onInput={handleInputMessage}></div>
            <button className={styles.submitButton} onClick={handleSubmit}>Send</button>
        </div>)
}
