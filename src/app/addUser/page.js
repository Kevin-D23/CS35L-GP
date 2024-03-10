import { generateRandomUser } from "../api/auth/[...nextauth]/testUsers";

export default async function addUser() {
  // Create random user (TESTING)
  // PLEASE REMOVE LATER
  generateRandomUser();

  return <></>;
}
