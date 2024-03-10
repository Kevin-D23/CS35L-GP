import GroupsCard from "../../../components/GroupsCard";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import {
  addGroupMember,
  getMyGroups,
  getSuggestedGroups,
  removeGroupMember,
} from "../api/group/route";

export default async function Groups() {
  const session = await getServerSession(options);
  const email = session?.user?.email;
  let myGroups = await getMyGroups(email);
  let suggestedGroups = await getSuggestedGroups(myGroups);
  myGroups = JSON.parse(JSON.stringify(myGroups));
  suggestedGroups = JSON.parse(JSON.stringify(suggestedGroups));

  async function handleLeave(groupID, memberEmail) {
    "use server";
    await removeGroupMember(groupID, memberEmail);
  }

  async function handleJoin(groupID, memberEmail) {
    "use server";
    await addGroupMember(groupID, memberEmail);
  }

  return (
    <>
      <GroupsCard
        currentUserEmail={email}
        myGroups={myGroups}
        suggestedGroups={suggestedGroups}
        handleLeave={handleLeave}
        handleJoin={handleJoin}
      />
    </>
  );
}
