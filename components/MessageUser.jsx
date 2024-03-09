import { getUser, getAllUsers } from "@/app/api/user/route";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import styles from "../CSS Modules/messages.module.css";


export default async function test(){
    const session = await getServerSession(options);
    let email = session?.user?.email;
    const user = await getUser(email); // returns user object
    let name = user.name;
    console.log(email);
    console.log(user);
    return (<></>)
}