import connect from "../connect";
import User from "../../(models)/User";
import { NextResponse } from "next/server";

// make POST request whenever adding a new user to database; req is a JSON object
export async function POST(req) {
  const { name, email, signupCompleted } = await req.json();
  await connect();
  const defaultAge = 0;
  const defaultYear = 0;
  const defaultMajor = "";
  const defaultBio = "";
  const defaultClasses = [];
  const defaultDaysAvailable = [];
  const defaultStudyStart = "";
  const defaultStudyEnd = "";
  const defaultLocations = [];
  const defaultImage = "https://media.vanityfair.com/photos/64ca8376f9a03860a86c239f/9:16/w_747,h_1328,c_limit/taylor-swift-bonuses.jpg";
  const defaultMatches = [];
  const defaultPeopleSeen = [];
  const defaultLikes = [];

  await User.create({
    name: name,
    email: email,
    age: defaultAge,
    year: defaultYear,
    major: defaultMajor,
    bio: defaultBio,
    classes: defaultClasses,
    daysAvailable: defaultDaysAvailable,
    studyStart: defaultStudyStart,
    studyEnd: defaultStudyEnd,
    locations: defaultLocations,
    image: defaultImage,
    peopleSeen: defaultPeopleSeen,
    matches: defaultMatches,
    likes: defaultLikes,
    signupCompleted: signupCompleted,
    messagesSent: [],
    messagesRecieved: [],
    messagesRead: [],
  });
  return NextResponse.json({ message: "Success" }, { status: 201 });
}

// INTERFACE FUCNTIONS FOR DATABASE

// takes user's email as argument and returns corresponding user object
export async function getUser(email, id) {
  await connect();
  let result = await User.findOne({ email: email });
  if (id) result = await User.findOne({ _id: id });
  return result;
}

// returns array of all users with completed accounts
export async function getAllUsers() {
  await connect();
  let result = await User.find({ signupCompleted: true });
  return result;
}

// updates user with new fields from `changes`; Returns user object with new info
// Example: changes = {name: "Haohan Smith", age: 16}
// ``Check @/app/(models)/User.js to view existing fields ``
// TO DO: Update function to include new fields
export async function updateUser(email, changes) {
  await connect();
  await User.updateOne({ email: email }, { $set: changes });
  let result = await User.findOne({ email: email });
  return result;
}

// Returns array of everyone's emails
// To print: getEmailsOfCompletedSignups().then(emails => console.log(emails));
export async function getEmailsOfCompletedSignups() {
  await connect();
  let users = await User.find({ signupCompleted: true }, 'email').exec();
  let emails = users.map(users => users.email);
  return emails;
}

// Not good at naming
// Returns array of everyone's emails except current user
// To print: getEmailsOfCompletedSignupsExceptCurrentUser(currentUserEmail).then(emails => console.log(emails));
export async function getEmailsOfCompletedSignupsExceptCurrentUser(currentUserEmail) {
  await connect();
  let users = await User.find({ signupCompleted: true, email: { $ne: currentUserEmail } }, 'email').exec();
  let emails = users.map(user => user.email);
  return emails;
}

// Aquire user's locations given email
// To print: getUserLocations(currentUserEmail).then(locations => console.log(locations))
export async function getUserLocations(currentUserEmail){
  await connect();
  let user = await User.findOne({ email: currentUserEmail }, 'locations').exec();
  return user.locations;
}

// Aquire user's classes given email
// To print: getUserClasses(currentUserEmail).then(classes => console.log(classes))
export async function getUserClasses(currentUserEmail){
  await connect();
  let user = await User.findOne({ email: currentUserEmail }, 'classes').exec();
  return user.classes;
}

// Aquire user's major given email
// To print: getUserMajor(currentUserEmail).then(major => console.log(major))
export async function getUserMajor(currentUserEmail){
  await connect();
  let user = await User.findOne({ email: currentUserEmail }, 'major').exec();
  return user.major;
}

export async function matching(currentUserEmail){
  // Setup connection, get current user info
  await connect();
  const currentMajor = await getUserMajor(currentUserEmail);
  const currentClasses = await getUserClasses(currentUserEmail);
  const currentLocations = await getUserLocations(currentUserEmail);

  const POINTS_PER_MAJOR = 10;
  const POINTS_PER_LOCATION = 20;
  const POINTS_PER_CLASS = 10;
  
  // Get emails of everyone else
  let emails = await getEmailsOfCompletedSignupsExceptCurrentUser(currentUserEmail);
  
  // Pairs of emails to points
  let pairs = emails.map(email => ({ email: email, value: 0 }));

  // Compare majors
  for(let pair of pairs){
    const otherMajor = await getUserMajor(pair.email);
    if(currentMajor === otherMajor){
      pair.value += POINTS_PER_MAJOR;
    }
  }
  
  // Compare locations
  for(let pair of pairs){
    const otherLocations = await getUserLocations(pair.email);
    const commonLocations = currentLocations.filter(location => otherLocations.includes(location));
    pair.value += (otherLocations.length * POINTS_PER_LOCATION);
  }

  // Compare classes
  for(let pair of pairs){
    const otherClasses = await getUserClasses(pair.email);
    const commonClasses = currentClasses.filter(classes => otherClasses.includes(classes));
    pair.value += (commonClasses.length * POINTS_PER_CLASS);
  }

  pairs.sort((a, b) => b.value - a.value);
  return pairs;
}


