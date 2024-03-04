import connect from "../connect";
import User from "../../(models)/User";
import { NextResponse } from "next/server";

// make POST request whenever adding a new user to database; req is a JSON object
export async function POST(req) {
  const { name, email, signupCompleted } = await req.json();
  await connect();
  const defaultAge = 0;
  const defaultYear = 0;
  const defaultMajor = '';
  const defaultBio = '';
  const defaultClasses = [];
  const defaultDaysAvailable = [];
  const defaultStudyStart = '';
  const defaultStudyEnd = '';
  const defaultLocations = [];
  const defaultMatches = [];
  const defaultPeopleSeen = [];
  const defaultLikes = []

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
    peopleSeen: defaultPeopleSeen,
    matches: defaultMatches,
    likes: defaultLikes,
    signupCompleted: signupCompleted
  });
  return NextResponse.json({ message: "Success" }, { status: 201 });
}

// takes user's email as argument and returns corresponding user object
export async function getUser(email) {
  await connect();
  let result = await User.findOne({ email: email });
  return result;
}

// returns array of all users with completed accounts
export async function getAllUsers() {
  await connect();
  let result = await User.find({signupCompleted: true});
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
