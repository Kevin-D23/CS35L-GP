"use client"
import styles from "../CSS Modules/compose.module.css"
import React from "react"
import Select from "react-select";
import Link from "next/link";
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
        //props.sendData(data)
    }
    return(
        <div className={styles.box}>
            <Link className={styles.closeButton} href="/messages">x</Link>
            <div className={styles.title} contentEditable="true"
             id="ComposeMessageTitle"
             onInput={(e) => {setTitle(e.currentTarget.textContent)}}></div>
            
            <Select options={matches} onChange={(e) => {
                setTarget(e.value)
            }}></Select>
            <div className={styles.contents} contentEditable="true"
             id="ComposeMessageContent"
             onInput={(e)=> {setContent(e.currentTarget.textContent)}}></div>
            <button className={styles.submitButton} onClick={handleSubmit}>Send</button>
        </div>)
}
