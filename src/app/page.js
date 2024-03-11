import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import ProfileCard from "../../components/ProfileCard";
import { redirect } from "next/navigation";
import { getUser, updateUser } from "./api/user/route";
import { getAllUsers } from "./api/user/route";
import { matching } from "./api/user/route";

export default async function Home() {

  // create session and email/user
  const session = await getServerSession(options);
  const email = session?.user?.email;
  const user = await getUser(email);
  if (!user?.signupCompleted) redirect("/signup");

  let users = []
  const pairs = await matching(email)
  for(let i = 0; i<pairs.length; i++) {
    let temp = await getUser(pairs[i].email)
    users.push(temp)
  }

  // convert returned array into plain text
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

      // check if current user is liked by the user they liked
      if (userLikes.includes(likedUser)) {
        let index = userLikes.indexOf(likedUser);
        // remove the user they liked from their liked users array
        userLikes.splice(index, 1);
        // add the liked user to the current user's matches
        userMatches.push(likedUser);
        await updateUser(email, { likes: userLikes, matches: userMatches });
        // add current user to liked user's matches
        likedUserMatches.push(email);
        await updateUser(likedUser, { matches: likedUserMatches });
      } else if (!likedUserLikes.includes(email)) {
        // add current user to liked user's likes
        likedUserLikes.push(email);
        await updateUser(likedUser, { likes: likedUserLikes });
      }
    }
    // add the user that current user just liked/disliked to peopleSeen array
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
      resolve(temp);
    });
  }

  return (
    <>
      <ProfileCard
        userArr={initialUsers}
        likeUser={likeUser}
        getFilteredUsers={getFilteredUsers}
      />
    </>
  );
}
