import { userSchema } from "/src/app/(models)/User.js";
import User from "@/app/(models)/User";



// Testing function - creates a random user on the database
// Randomized stuff: email, name, major, classes, daysavailable
// start/end times, locations
const mongoose = require('mongoose');
const connect = async () => {
    mongoose.connect(process.env.MONGODB_URI);
  };

export async function generateRandomUser(){
    function randNumStart1(num){
      return Math.floor((Math.random() * num) + 1);
    }
    const nameChoices = ["Patrick Star", "Phineas", "That boi", "I have a name"];
    const name = nameChoices[randNumStart1(4) - 1];
    const age = randNumStart1(50) + 18;
    console.log(typeof(age));
    const year = randNumStart1(5);
    const majorChoices = ["Computer Science", "Computer Science and Engineering", "Computer Engineering"];
    const major = majorChoices[randNumStart1(4) - 1];
    const bio = "I am a UCLA student teehee";
    const classesChoices = [
        ["CS31", "CS32", "CS33", "CS35L"],
        ["ENGR2", "ENGR19", "ENGR20"],
    ]
    const classes = [];
    classes.push(classesChoices[0][randNumStart1(4) - 1]);
    classes.push(classesChoices[1][randNumStart1(3) - 1]);
    const daysAvailableChoices = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const daysAvailable = [];
    daysAvailable.push(daysAvailableChoices[randNumStart1(2) - 1]);
    daysAvailable.push(daysAvailableChoices[randNumStart1(4) + 2]);
    const startTimes = ["12:00am", "1:00am", "2:00am", "3:00am", "4:00am", "5:00am", "6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm"];
    const startTime = startTimes[randNumStart1(13) - 1];
    const endTimes = ["1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm", "11:00pm"];
    const endTime = endTimes[randNumStart1(11) - 1];
    const locationsChoices = ["YRL", "Boelter", "Olympic", "Powell"];
    const locations = locationsChoices[randNumStart1(4) - 1];
    const image = "https://pbs.twimg.com/media/E1IvSeIVEAAycGS?format=jpg&name=large"
    const email = randNumStart1(100000) + "@gmail.com";

    const data = {
      email: email,  
      name: name,
      age: age,
      year: year,
      major: major,
      bio: bio,
      classes: classes,
      daysAvailable: daysAvailable,
      studyStart: startTime,
      studyEnd: endTime,
      locations: locations,
      image: image,
      signupCompleted: true
    };

    await connect();

    User.create(data);
    return(
      <></>
    )
  }