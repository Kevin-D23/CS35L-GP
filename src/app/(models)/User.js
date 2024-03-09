import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: false },
    year: { type: Number, required: false },
    major: { type: String, required: false },
    bio: { type: String, required: false },
    classes: { type: [String], required: false },
    daysAvailable: { type: [String], required: false },
    studyStart: { type: String, required: false },
    studyEnd: { type: String, required: false },
    locations: { type: [String], required: false },
    image: { type: String, required: false },
    peopleSeen: { type: [String], required: false },
    matches: { type: [String], required: false },
    likes: { type: [String], required: false },
    signupCompleted: { type: Boolean, required: true },
    messagesSent: {type:[String], required: false},
    messagesRecieved: {type:[String],required: false},
    messagesRead: {type:[String],required:false},

  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);
export default User;
