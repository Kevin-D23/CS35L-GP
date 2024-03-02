'use server';
import "../../../../CSS Modules/editing.module.css";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import Image from "next/image";
import styles from "../../../../CSS Modules/stylesUserEdit.module.css";
import EditableText from "./editableText"
import { getUser, getAllUsers } from "../../api/user/route";
export async function processData() {
    // Process data on the server-side
    const session = await getServerSession(options);
    let email = session?.user?.email;
    const user = await getUser(email)
    let name = user.name

    console.log('Processing data on the server:', email);
    console.log('Name:', name);

  }



