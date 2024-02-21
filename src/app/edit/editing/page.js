import "../../../../CSS Modules/editing.module.css";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../../CSS Modules/stylesUserEdit.module.css";
import EditableText from './editableText';

let times = [
  "Saturday",
  "Sunday",
  "Thursdays",
  "Fridays",
  "Mondays",
  "Tuesdays",
];
let classes = ["CS35L", "Intro to being swag", "Naptime 101"];
let hobby = ["eat", "sleep", "nap"];
let destinations = ["Sproul", "Rieber", "Hendrick"];

function EditButton() {
  return (
    <Link href="/edit"> {}
    <button className={`${styles.largerText}`}>
      save
    </button>
    </Link>
  );
}

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

  return (<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop:"100px" }}>
  <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
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
    <div style={{ marginLeft: "100px" }}>
      <EditButton />
    </div>
  </div>
  <h1 className={`${styles.largerText} `}>Bio:</h1>
  <h1 className={`${styles.largerText} `}><EditableText textIn={"Hi this is my bio!"}/></h1>
  <div style={{ marginTop: "10px" }}>
  <h1 className={`${styles.largerText} `}>Classes:</h1>
  <div className={`${styles.scrollableList}`}>
      <ul
      >
        {classes.map((item, index) => (
          <li key={index}>{<EditableText textIn={item}/>}</li>
        ))}
      </ul>
    </div>
    </div>
    <div style={{ marginTop: "10px" }}>
    <h1 className={`${styles.largerText}`}>Times Available:</h1>
  <div className={`${styles.scrollableList} `}>
    <ul>
      {times.map((item, index) => (
         <li key={index}>{<EditableText textIn={item}/>}</li>
      ))}
    </ul>
  </div>
  </div>
  <div style={{ marginTop: "10px" }}>
  <h1 className={`${styles.largerText}`}>Prefered Locations: </h1>
  <div className={`${styles.scrollableList} `}>
    <ul>
      {destinations.map((item, index) => (
         <li key={index}>{<EditableText textIn={item}/>}</li>
      ))}
    </ul>
  </div>
  </div>
</div>
    
  );
}


