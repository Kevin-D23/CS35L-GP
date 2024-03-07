import { getAllUsers, updateUser } from "../api/user/route"

export default async function reset() {
    let users = await getAllUsers()
    users.map(async(user) => {
        let changes = {peopleSeen: [], matches: [], likes: []}
        await updateUser(user.email, changes)
    })
    return <></>
}