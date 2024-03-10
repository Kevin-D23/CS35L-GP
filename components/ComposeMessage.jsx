"use client"
import styles from "../CSS Modules/compose.module.css"
import React from "react"
import Select from "react-select";
export default function ComposeMessage(props){
    console.log(props.user)
    let matches = []
    let sender = []
    props.user.matches.map((match)=>{
        matches.push({label: match, value: match})
    })
    return(
        <div className={styles.box}>
            <button className={styles.closeButton} onClick={console.log(props.user.matches + "      fasd")}>X</button>
            <div className={styles.title} contentEditable="true"></div>
            <Select options={matches} onChange={(e) => {
                
            }}></Select>
            <div className={styles.contents} contentEditable="true"></div>
        </div>)
}
