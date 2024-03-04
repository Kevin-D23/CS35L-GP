import Matches from "../../../components/MatchesCard";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { getUser } from "../api/user/route";
import { redirect } from "next/navigation";

export default async function matches() {
  const session = await getServerSession(options);
  const email = session?.user?.email;
  const user = await getUser(email);
  if (!user?.signupCompleted) redirect("/signup");

  let matchEmails = [];
  matchEmails = user?.matches;
  let matches = [];

  for (let i = 0; i < matchEmails.length; i++) {
    let temp = await getUser(matchEmails[i]);
    matches.push(JSON.parse(JSON.stringify(temp)));
  }
  return (
    <div>
      <Matches matches={matches} />
    </div>
  );
}
