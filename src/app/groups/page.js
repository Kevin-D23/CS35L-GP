import GroupsCard from "../../../components/GroupsCard";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import styles from "../../../CSS Modules/groups.module.css";
import { redirect } from "next/navigation";
import {
  addGroupMember,
  getMyGroups,
  getSuggestedGroups,
  removeGroupMember,
  deleteGroup,
  getGroup,
  createGroup,
} from "../api/group/route";
import { getUser } from "../api/user/route";

export default async function Groups() {
  const session = await getServerSession(options);
  const email = session?.user?.email;
  let x = await getUser(email);
  if (!x?.signupCompleted) redirect("/signup");

  let myGroups = await getMyGroups(email);
  let suggestedGroups = await getSuggestedGroups(myGroups);
  myGroups = JSON.parse(JSON.stringify(myGroups));
  suggestedGroups = JSON.parse(JSON.stringify(suggestedGroups));

  async function handleLeave(groupID, memberEmail) {
    "use server";
    let group = await getGroup(groupID);
    if (group.owner.email === memberEmail) await deleteGroup(groupID);
    else await removeGroupMember(groupID, memberEmail);
  }

  async function handleJoin(groupID, memberEmail) {
    "use server";
    await addGroupMember(groupID, memberEmail);
  }

  async function handleCreate(data) {
    "use server";
    await createGroup(
      data.name,
      email,
      data.location,
      data.studyStart,
      data.studyEnd,
      data.days,
      data.members
    );
  }

  let user = await getUser(email);
  let matches = [];

  for (let i = 0; i < user.matches.length; i++) {
    let matchedUser = await getUser(user.matches[i]);
    matches.push({ email: matchedUser.email, name: matchedUser.name });
  }

  return (
    <>
      <GroupsCard
        currentUserEmail={email}
        myGroups={myGroups}
        suggestedGroups={suggestedGroups}
        handleLeave={handleLeave}
        handleJoin={handleJoin}
        matches={matches}
        handleCreate={handleCreate}
      />
    </>
  );
}
