import ProfileCard from "../../../../components/ProfileCard";

export default function User({ params }) {
  const users = [
    {
      name: "Haohan Chen",
      year: 3,
      major: "Computer Science",
      bio: "I bully kids blah blah blah blah blah blah blah blah blah",
      courses: ["CS-33", "Jazz Appreciation", "PHSYC-1A"],
      days: [0, 1, 2, 3, 4, 5, 6],
      timeStart: 18,
      timeEnd: 21,
      locations: ["your mom's house", "Powell"],
    },
  ];
  return (
    <>
      <ProfileCard userArr={users}/>
    </>
  );
}
