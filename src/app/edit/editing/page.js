import "../../../../CSS Modules/editing.module.css";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import Image from "next/image";
import styles from "../../../../CSS Modules/stylesUserEdit.module.css";
import EditableText from "./editableText"
import { getUser, getAllUsers } from "@/app/api/user/route";

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

  const session = await getServerSession(options);
  let image = session?.user?.image; 
  
  return (<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
  <div style={{ display: "flex", alignItems: "center", marginBottom: "10px",marginTop: "80px" }}>
  <Image
        src={image}
        width={50}
        height={50}
        alt={"profile picture"}
      />
    <div style={{ marginLeft: "10px" }}>
    <h1 className={`${styles.largerText} `}>
    <Name/>
  </h1>
    </div>
    <div style={{ marginLeft: "10px" }}>
    <h1 className={`${styles.largerText} `}>
    <Email/>
  </h1>
    </div>
  
  </div>
  <EditableText text={"this is the bio"}/>
 

</div>
    
  );
}


