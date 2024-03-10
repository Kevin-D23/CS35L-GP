import { Schema, model, models } from "mongoose";

const groupSchema = new Schema(
  {
    name: { type: String, required: true },
    owner: { type: String, required: true },
    location: { type: String, required: true },
    studyStart: { type: String, required: true },
    studyEnd: { type: String, required: true },
    members: {email: String, name: String},
  },
  { timestamps: true }
);

const Group = models.Group || model("Group", groupSchema);
export default Group;
