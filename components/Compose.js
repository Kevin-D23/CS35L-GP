import { getUser } from "@/app/api/user/route"
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options"
import ComposeMessage from "./ComposeMessage"
export default async function Compose(){
    const session = await getServerSession(options)
    let user = await getUser(session?.user?.email)
    user = JSON.parse(JSON.stringify(user));
    return(<ComposeMessage user={user}></ComposeMessage>)
}