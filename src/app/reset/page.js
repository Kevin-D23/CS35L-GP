import { getAllUsers, updateUser } from "../api/user/route";
import { redirect } from "next/navigation";
import { generateRandomUser } from "../api/auth/[...nextauth]/testUsers";

export default async function reset() {
  let users = await getAllUsers();
  users.map(async (user) => {
    let changes = { peopleSeen: [], matches: [], likes: [] };
    await updateUser(user.email, changes);
  });
  // Create random user (TESTING)
  // PLEASE REMOVE LATER
  generateRandomUser();
  redirect("/");
  return <></>;
}
