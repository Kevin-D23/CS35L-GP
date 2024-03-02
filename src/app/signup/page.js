import styles from "../../../CSS Modules/signup.module.css";
import SignupCard from "../../../components/SignupCard";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { updateUser, getUser } from "../api/user/route";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerSession(options);
  const name = session?.user?.name;
  const email = session?.user?.email;
  const user = await getUser(email);
  const signupCompleted = user?.signupCompleted;

  if (signupCompleted) redirect("/");
  
  const submit = async (data) => {
    "use server";
    await updateUser(email, data);
  };
  return (
    <div>
      <SignupCard sessionName={name} submit={submit} />
    </div>
  );
};

export default Page;
