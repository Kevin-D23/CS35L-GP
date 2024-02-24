import styles from "../../../CSS Modules/signup.module.css";
import SignupCard from "../../../components/SignupCard";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Page = async () => {
  const session = await getServerSession(options);
  return (
    <div className={styles.signupContainer}>
      <SignupCard sessionName={session?.user?.name} />
    </div>
  );
};

export default Page;
