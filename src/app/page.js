import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import ProfileCard from "../../components/ProfileCard";
import { redirect } from "next/navigation";
import { getUser, updateUser } from "./api/user/route";
import { getAllUsers } from "./api/user/route";

export default async function Home() {
  const session = await getServerSession(options);
  const email = session?.user?.email;
  const user = await getUser(email);
  if (!user?.signupCompleted) redirect("/signup");

  let users = await getAllUsers();
  for (let i = 0; i < users.length; i++) {
    users[i] = JSON.parse(JSON.stringify(users[i]));
  }

  users = users.filter(function (obj) {
    return obj.email !== email;
  });

  for (let i = 0; i < user.peopleSeen.length; i++){
    users = users.filter(function (obj) {
      return obj.email !== user.peopleSeen[i];
    });
  }

  async function likeUser(likedUser, like) {
    "use server";
    const session = await getServerSession(options);
    const email = session?.user?.email;
    const user = await getUser(email);
    if (like) {
      let likedUserObj = await getUser(likedUser);
      let likedUserLikes = likedUserObj.likes;
      let likedUserMatches = likedUserObj.matches;
      let userLikes = user.likes;
      let userMatches = user.matches;
      if (userLikes.includes(likedUser)) {
        let index = userLikes.indexOf(likedUser);
        userLikes.splice(index, 1);
        userMatches.push(likedUser);
        await updateUser(email, { likes: userLikes, matches: userMatches });
        likedUserMatches.push(email);
        await updateUser(likedUser, { matches: likedUserMatches });
      } else !likedUserLikes.includes(email);
      likedUserLikes.push(email);
      await updateUser(likedUser, { likes: likedUserLikes });
    }
    let userSeen = user.peopleSeen
    userSeen.push(likedUser)
    await updateUser(email, {peopleSeen: userSeen})
  }

  return (
    <>
      <ProfileCard userArr={users} likeUser={likeUser} />
    </>
  );
}
