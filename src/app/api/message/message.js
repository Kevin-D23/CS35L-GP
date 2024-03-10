import { messageSchema } from "/src/app/(models)/Message.js";
import Message from "@/app/(models)/Message";

const mongoose = require('mongoose');
const connect = async () => {
    mongoose.connect(process.env.MONGODB_URI);
  };

export async function generateSameMessage(){
    const sender = "studentsinferno2024@gmail.com";
    const reciever = "hchen417@gmail.com";
    const title = "this is a title";
    const message = "this is a message";

    const data = {
        sender: sender,
        reciever: reciever,
        title: title,
        message: message
    };

    await connect();

    Message.create(data);
    return(
      <></>
    )
}

// DATA has to be in form
/*
const data = {
        sender: sender,
        reciever: reciever,
        title: title,
        message: message
    };
*/
export async function pushMessage(data){
    Message.create(data);
    return(
        <></>
    )
}