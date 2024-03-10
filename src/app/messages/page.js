import { getUser } from "@/app/api/user/route"
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options"
import React from "react"
import Link from "next/link"
import Message from "../../../components/Message"
import styles from "../../../CSS Modules/MessagesPage.module.css"
export default async function Messages() {
  const session = await getServerSession(options)
  let user = await getUser(session?.user?.email)
  user = JSON.parse(JSON.stringify(user));
  //we will pass in the database data into the components which will handle it from there
  return(
    <>
    <Link href="/compose" className={styles.makeMessageButton}>Send Message!</Link>
    <Message></Message>
    </>
    )
}
