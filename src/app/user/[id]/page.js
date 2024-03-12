import ProfileCard from "../../../../components/ProfileCard";
import { getUser } from "@/app/api/user/route";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function User({ params }) {
  const session = await getServerSession(options);
  const email = session?.user?.email;
  const sessionUser = await getUser(email);
  if (!sessionUser?.signupCompleted) redirect("/signup");
  let user;
  await getUser(null, params.id).then((res) => {
    user = res;
    user = JSON.parse(JSON.stringify(user));
  });
  return (
    <>
      <ProfileCard userArr={[user]} />
    </>
  );
}
