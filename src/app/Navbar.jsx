import React from "react";
import styles from "./CSS Modules/navbar.module.css"
import Link from "next/link"
import Image from "next/image"
function Icon(props){
    return (<Link href={"/"+props.link} className={`${styles.icon}`}>
    <div className={styles.icon}>
        <Image src="/icons/scissors.png" width={40} height={40} alt="Example Icon" className={styles.iconImage}/>
        <div className={styles.iconImage}>{props.name}</div>
    </div> </Link>)
}

export default function NavBar(){
    return(<div className={styles.navbar}>
        <Icon name="Test" link="./example" className="icon"></Icon> 
        <Icon name="Test2" link="./example" className="icon"></Icon>
    </div>) //put the route to your page in link.
}