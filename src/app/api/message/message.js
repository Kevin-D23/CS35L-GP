import { messageSchema } from "/src/app/(models)/Message.js";
import Message from "@/app/(models)/Message";
import { appendUserMessagesRecieved, appendUserMessagesSent } from "../user/route";

const mongoose = require('mongoose');
const connect = async () => {
    mongoose.connect(process.env.MONGODB_URI);
  };

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
    try{
        const doc = await Message.create(data);
        const messageID = doc._id;
        appendUserMessagesRecieved(data.reciever, messageID);
        appendUserMessagesSent(data.sender, messageID);
    } catch(error){
        console.log("Error creating message");
        console.log(error);
    }
}

// Returns object containing sender, reciever, title, message
// Returns null if error
export async function fetchMessage(messageID){
    await connect();
    try{
        const doc = await Message.findById(messageID);
        if(doc){
            const data = {
                sender: doc.sender,
                reciever: doc.reciever,
                title: doc.title,
                message: doc.message
            };
            return data;
        } else {
            console.log("No document found with that ID");
            return null;
        }
    } catch(error) {
        console.log(error);
        return null;
    }


}