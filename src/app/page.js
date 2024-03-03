import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import ProfileCard from "../../components/ProfileCard";
import { redirect } from "next/navigation";
import { getUser, updateUser } from "./api/user/route";
import { getAllUsers } from "./api/user/route";
import { get } from "http";

export default async function Home() {
  const session = await getServerSession(options);
  const email = session?.user?.email;
  const user = await getUser(email);
  if (!user?.signupCompleted) redirect("/signup");

  // convert returned array into plain text
  let users = await getAllUsers();
  for (let i = 0; i < users.length; i++) {
    users[i] = JSON.parse(JSON.stringify(users[i]));
  }

  // filter out current session user from array
  users = users.filter(function (obj) {
    return obj.email !== email;
  });

  // filter out the people that the current user has seen
  for (let i = 0; i < user.peopleSeen.length; i++) {
    users = users.filter(function (obj) {
      return obj.email !== user.peopleSeen[i];
    });
  }
  let initialUsers = users;

  // likes user and checks for matches
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
    let userSeen = user.peopleSeen;
    userSeen.push(likedUser);
    await updateUser(email, { peopleSeen: userSeen });
  }

  async function getFilteredUsers(filters) {
    "use server";
    function haveCommonElement(arr1, arr2) {
      return arr1.some((element) => arr2.includes(element));
    }
    const session = await getServerSession(options);
    const email = session?.user?.email;
    const user = await getUser(email);
    let temp = initialUsers;
    if (filters.includes("major")) {
      // filter by major
      temp = temp.filter(function (obj) {
        return obj.major === user.major;
      });
    }
    if (filters.includes("classes")) {
      // filter by classes
      temp = temp.filter(function (obj) {
        return haveCommonElement(obj.classes, user.classes);
      });
    }
    if (filters.includes("locations")) {
      // filter by classes
      temp = temp.filter(function (obj) {
        return haveCommonElement(obj.classes, user.classes);
      });
    }
    return new Promise((resolve, reject) => {
      resolve(temp)
    });
  }

  return (
    <>
      <ProfileCard
        userArr={users}
        likeUser={likeUser}
        getFilteredUsers={getFilteredUsers}
      />
    </>
  );
}
