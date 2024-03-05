import ProfileCard from "../../../../components/ProfileCard";
import { getUser } from "@/app/api/user/route";

export default async function User({ params }) {
  let user;
  await getUser(null, params.id).then((res) => {
    user = res;
    user = JSON.parse(JSON.stringify(user));
  });
  return (
    <>
      <ProfileCard userArr={[user]} />
    </>
  );
}
