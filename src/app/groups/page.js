"use client";
import styles from "../../../CSS Modules/groups.module.css";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';


export default function Groups() {
    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); // toggle menu visibility
    };

    return (
        <div>
            <button className={styles.group} onClick={toggleMenu}>
                CS35L Project Group
            </button>
            <div className={`styles.members ${isOpen ? 'open' : ''}`}>
                <a href="#" className={styles.members}>Member 1</a>
                <a href="#" className={styles.members}>Member 2</a>
                <a href="#" className={styles.members}>Member 3</a>
                <a href="#" className={styles.members}>Member 4</a>
                <a href="#" className={styles.members}>Member 5</a>
            </div>
            
            <button onClick={toggleMenu} className={styles.group}>
                Physics 1B Study Group
            </button>
            <div className={`styles.members ${isOpen ? 'open' : ''}`}>
                <a href="#" className={styles.members}>Member 1</a>
                <a href="#" className={styles.members}>Member 2</a>
                <a href="#" className={styles.members}>Member 3</a>
                <a href="#" className={styles.members}>Member 4</a>
            </div>

            <button onClick={toggleMenu} className={styles.group}>
                Political Science Research Group
            </button>
            <div className={`styles.members ${isOpen ? 'open' : ''}`}>
                <a href="#" className={styles.members}>Member 1</a>
                <a href="#" className={styles.members}>Member 2</a>
                <a href="#" className={styles.members}>Member 3</a>
            </div>
        </div>
    );
};






