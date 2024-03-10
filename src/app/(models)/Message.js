import { Schema, model, models } from "mongoose";

const messageSchema = new Schema(
  {
    sender: { type: String, requried: true },
    reciever: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = models.Message || model("Message", messageSchema);
export default Message;
