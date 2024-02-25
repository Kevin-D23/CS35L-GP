import connect from "../connect";
import User from "../../(models)/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email } = await req.json();
  await connect();
  await User.create({ name, email });
  return NextResponse.json({ message: "Success" }, { status: 201 });
}

export async function getUser(email) {
  await connect();
  let result = await User.findOne({ email });
  return result;
}

export async function getAllUsers() {
  await connect();
  let result = await User.find()
  return result;
}
