import connect from "../connect";
import Group from "../../(models)/Group";
import User from "@/app/(models)/User";

// all arguments are required to create group
export async function createGroup(
  name,
  owner,
  location,
  studyStart,
  studyEnd,
  days,
  memberEmails
) {
  await connect();
  let members = [];
  for (let i = 0; i < memberEmails.length; i++) {
    let user = await User.findOne({ email: memberEmails[i] });
    members.push({ email: memberEmails[i], name: user.name });
  }
  let user = await User.findOne({ email: owner });
  members.push({ email: owner, name: user.name });
  let ownerObj = await User.findOne({ email: owner });
  let ownerDBInfo = { email: owner, name: ownerObj.name };

  let group = await Group.create({
    name: name,
    owner: ownerDBInfo,
    location: location,
    studyStart: studyStart,
    studyEnd: studyEnd,
    days: days,
    members: members,
  })
    .then(async (group) => {
      console.log("Group successfully created");
      for (let i = 0; i < memberEmails.length; i++) {
        await User.updateOne(
          { email: memberEmails[i] },
          { $push: { groups: group._id } }
        );
      }
      await User.updateOne({email: owner}, { $push: { groups: group.id } })
    })
    .catch(() => console.log("Group creation failed"));
}

// find group by id
export async function getGroup(id) {
  await connect();
  let result = await Group.findOne({ _id: id });
  return result;
}

// returns the number of documents deleted
export async function deleteGroup(id) {
  await connect();
  let result = await Group.deleteOne({ _id: id });
  return result;
}

// updates group with new fields from `changes`; Returns group object with new info
// Example: changes = {name: "CS35L Group", location: "YRL"}
// ``Check @/app/(models)/Group.js to view existing fields ``
export async function updateGroup(id, changes) {
  await connect();
  let result = await Group.updateOne({ _id: id }, changes);
  return result;
}

// adds member to some group's member array
// adds group to member's group array
// return new group and user object
export async function addGroupMember(id, memberEmail) {
  await connect();
  let userObj = await User.findOne({ email: memberEmail });
  let group = await Group.updateOne(
    { _id: id },
    { $push: { members: { email: memberEmail, name: userObj.name } } }
  );
  let user = await User.updateOne(
    { email: memberEmail },
    { $push: { groups: id } }
  );
  return group, user;
}

// removes member from some group's member array
// removes group from member's group array
// return new group and user object
export async function removeGroupMember(id, memberEmail) {
  await connect();
  let userObj = await User.findOne({ email: memberEmail });
  let group = await Group.updateOne(
    { _id: id },
    {
      $pull: { members: { $in: [{ email: memberEmail, name: userObj.name }] } },
    }
  );
  let user = await User.updateOne(
    { email: memberEmail },
    { $pull: { groups: id } }
  );
  return group, user;
}

// get all groups that user has
export async function getMyGroups(email) {
  await connect();
  let user = await User.findOne({ email: email });
  let groups = Group.find({ members: { email: email, name: user.name } });
  return groups;
}

// get list of suggested group objects by excluding list from mygroups
export async function getSuggestedGroups(excludeList) {
  await connect();
  let result = await Group.find({ _id: { $nin: excludeList } });
  return result;
}
