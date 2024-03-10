import styles from "../../../CSS Modules/creategroup.module.css";
import CreateGroupCard from "../../../components/CreateGroupCard";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { updateUser, getUser } from "../api/user/route";
import { redirect } from "next/navigation";

const Page = async () => {

    const submit = async (data) => {
        "use server";
      };
      return (
        <div>
          <CreateGroupCard submit={submit} />
        </div>
      );
    };
    
export default Page;
