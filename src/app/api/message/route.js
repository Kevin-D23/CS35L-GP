import connect from "../connect";
import User from "../../(models)/User";
import { NextResponse } from "next/server";

//too confusing for Haohan monkey frontend brain
//will ask kevin and michael tomorrow boohoo
export async function addNewSent(email, docId){

}
export async function updateUser(email, changes) {
    await connect();
    await User.updateOne({ email: email }, { $set: changes });
    let result = await User.findOne({ email: email });
    return result;
  }



