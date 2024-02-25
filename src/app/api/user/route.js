import connect from "../connect";
import User from "../../(models)/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email } = await req.json();
  await connect();
  await User.create({ name, email });
  return NextResponse.json({ message: "Success" }, { status: 201 });
}
