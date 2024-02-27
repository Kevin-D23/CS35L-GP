import connect from "../connect";
import User from "../../(models)/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, signupCompleted } = await req.json();
  await connect();
  await User.create({ name: name, email: email, signupCompleted: signupCompleted });
  return NextResponse.json({ message: "Success" }, { status: 201 });
}

// takes user's email as argument and returns corresponding user object
export async function getUser(email) {
  await connect();
  let result = await User.findOne({ email: email });
  return result;
}

// returns array of all users
export async function getAllUsers() {
  await connect();
  let result = await User.find();
  return result;
}

// updates user with new fields from `changes`; Returns user object with new info
// Example: changes = {name: "Haohan Smith", age: 16}
// ``Check @/app/(models)/User.js to view existing fields ``
export async function updateUser(email, changes) {
  await connect();
  await User.updateOne({ email: email }, { $set: changes });
  let result = await User.findOne({ email: email });
  return result;
}
