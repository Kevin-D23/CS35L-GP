'use server';
import "../../../../CSS Modules/editing.module.css";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import Image from "next/image";
import styles from "../../../../CSS Modules/stylesUserEdit.module.css";
import EditableText from "./editableText"
import { getUser, getAllUsers,updateUser } from "../../api/user/route";
export async function processData(data) {
    // Process data on the server-side
    const session = await getServerSession(options);
    let email = session?.user?.email;
    const user = await getUser(email)
    updateUser(email, data);
  
  }
export async function getInfo()
{
  //name,age,year,major,bio,days,location,start,end,classes
  let data_array =[];
  const session = await getServerSession(options);
  let email = session?.user?.email;
  const user = await getUser(email);
  let name = user.name;
  data_array[0]= name;
  let age = user.age;
  data_array[1]= age;
  //use year_value
  let year = user.year;
  let year_label = "Year " + year;
  const year_value ={value: year,label:year_label}
  data_array[2]=year_value;
  //use major_value
  let major = user.major;
  const major_value ={value:  major,label: major}
  data_array[3]= major_value;
  let bio = user.bio;
  data_array[4]= bio;
  let days = user.daysAvailable;
  data_array[5]= days;
  let location = user.locations;
  data_array[6]= location;
  let start = user.studyStart;
  data_array[7]= start;
  let end = user.studyEnd;
  data_array[8]= end;
  let course = user.classes;
  data_array[9]= course;
return(data_array)

}