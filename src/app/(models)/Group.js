import { Schema, model, models } from "mongoose";

const groupSchema = new Schema(
  {
    name: { type: String, required: true },
    owner: {
      email: { type: String, required: true },
      name: { type: String, required: true },
    },
    location: { type: String, required: true },
    studyStart: { type: String, required: true },
    studyEnd: { type: String, required: true },
    members: [
      {
        email: { type: String, required: true },
        name: { type: String, required: true },
        _id: false,
      },
    ],
    days: { type: [String], required: true },
  },
  { timestamps: true }
);

const Group = models.Group || model("Group", groupSchema);
export default Group;
