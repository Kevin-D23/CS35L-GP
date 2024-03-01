import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import ProfileCard from "../../components/ProfileCard";
import { redirect } from "next/navigation";
import { getUser } from "./api/user/route";
import { getAllUsers } from "./api/user/route";


export default async function Home() {
  const session = await getServerSession(options);
  const email = session?.user?.email;
  const user = await getUser(email);
  if (!user.signupCompleted) redirect("/signup");

  console.log(await getAllUsers())

  const users = [
    {
      name: "Haohan Chen",
      year: 3,
      major: "Computer Science",
      bio: "I bully kids blah blah blah blah blah blah blah blah blah",
      courses: ["CS-33", "Jazz Appreciation", "PHSYC-1A"],
      days: [0, 1, 2, 3, 4, 5, 6],
      timeStart: 18,
      timeEnd: 21,
      locations: ["your mom's house", "Powell"],
    },
    {
      name: "Kevin Duong",
      year: 2,
      major: "Computer Science",
      bio: "Hi mom",
      courses: ["CS-33", "CS-M151A"],
      days: [0, 1, 4, 5, 6],
      timeStart: 2,
      timeEnd: 10,
      locations: ["in my basement"],
    },
  ];

  return (
    <>
      <ProfileCard userArr={users} />
    </>
  );
}
