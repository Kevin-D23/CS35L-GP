import { getUser } from "@/app/api/user/route"
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options"
import ComposeMessage from "./ComposeMessage"
import { pushMessage } from "@/app/api/message/message";
export default async function Compose(){
    const session = await getServerSession(options)
    let user = await getUser(session?.user?.email)
    user = JSON.parse(JSON.stringify(user));
    const sendMessageData = async (data) =>{
        "use server"
        console.log(data)
        pushMessage(data)
    }
    return(<ComposeMessage user={user} sendData = {sendMessageData}></ComposeMessage>)
}