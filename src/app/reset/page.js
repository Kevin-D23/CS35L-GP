import { getAllUsers, updateUser } from "../api/user/route";
import { redirect } from "next/navigation";


export default async function reset() {
  let users = await getAllUsers();
  users.map(async (user) => {
    let changes = { peopleSeen: [], matches: [], likes: [], groups: [] };
    await updateUser(user.email, changes);
  });
 
  redirect("/");
  return <></>;
}
