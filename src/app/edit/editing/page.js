import "../../../../CSS Modules/editing.module.css";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import Image from "next/image";
import styles from "../../../../CSS Modules/stylesUserEdit.module.css";
import EditableText from "./editableText"
import GetButton from "./editableText"
import { getUser, getAllUsers } from "../../api/user/route";
import {getTimes} from "../page"


async function Name() {
  const session = await getServerSession(options);

  let name = session?.user?.name.split(" ");
  return <b>{name[0] + " " + name[1]}</b>;
}

async function Email() {
  const session = await getServerSession(options);
  let email = session?.user?.email;
  return email;
}

async function Profilepic() {
  const session = await getServerSession(options);

  let image = session?.user?.image;
  if (image) {
    return (
      <Image
        src={image}
        width={50}
        height={50}
        alt={"profile picture"}
      />
    );
  }
}

export default async function editing() {
console.log(getTimes())
  const session = await getServerSession(options);
  let image = session?.user?.image; 
  
  return (

  <EditableText text={"this is the bio"} name={Name()} email={Email()} pic = {image}/>


    
  );
}


