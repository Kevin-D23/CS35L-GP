import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: false },
    year: { type: Number, required: false },
    major: { type: String, required: false },
    classes: { type: [String], required: false},
    studyStart: { type: Number, required: false },
    studyEnd: { type: Number, required: false },
    locations: {type: [String], required: false },
    userCompleted: { type: Boolean, required: true }
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);
export default User;
