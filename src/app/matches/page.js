import Matches from "../../../components/MatchesCard";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { getUser } from "../api/user/route";
import { redirect } from "next/navigation";

export default async function matches() {
  const session = await getServerSession(options)
  const email = session?.user?.email;
  const user = await getUser(email);
  if (!user?.signupCompleted) redirect("/signup");
  

  return (
   <div>
    <Matches/>
   </div>
  );
}
