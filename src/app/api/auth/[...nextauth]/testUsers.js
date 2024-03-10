import { userSchema } from "/src/app/(models)/User.js";
import User from "@/app/(models)/User";

// Testing function - creates a random user on the database
// Randomized stuff: email, name, major, classes, daysavailable
// start/end times, locations
const mongoose = require("mongoose");
const connect = async () => {
  mongoose.connect(process.env.MONGODB_URI);
};

export async function generateRandomUser() {
  function randNumStart1(num) {
    return Math.floor(Math.random() * num + 1);
  }
  const images = [
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYm6wqVw9UyQjxFlzZ7e_0d13kNxdD2DQ0ttREVNgoJ1mpIHIyt-8uRXxsn7N4oFZAf-DPn94vHBuADtflvBQhHOg59=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYuAuYkj6OfWXPXmDmJ0rRJ001_Bt3Th_YeyISFTOz_1NVW4pwtZWdSGFLwxteQF4v7EdDNlpNcq8XXSgTf_Sj6S7Ln=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZvyCZGQEVMSzn8XifdLUe4WkJn6Jou3mq2ZXaVAVS7C2nv7mj9VjN2vgMbbBSecfPqQ7vsA4Zc6QDXqgrPKAUNBRP5hw=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaTyxfxR246RZEF6ghO6EJ36YL46E4qTexnNq7Za51N6ftUABQIxUD5fNLglW8dQrNuc3qDjbGj5oJOwJ2bzdm_xyEE7Q=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihb0HdM6Ua8xt19YO84e9B9bAcZLDtlpjVgap0FB-gTz3jEKVhuQzy1rNwqO6sQ8_6KyZ3pGBIfy2N_4qg26of8-gKgq8A=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZrvUbGDo-TvAK3jGama17A4rC2WCBKuQ1RKPkPhHKIchsVUJEg3WqLkHQ8k1eMaBagiooIV6xLdul_Ir_jgMJJ3XUa=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbYkZ9opUt86FBu5Q4UxvOeb2Z-4NLJUUogithVxqGRW80dD3J129FMtYkIKNIpgNP8u15gh0Hxx1YXngBsb3LJsmkQAQ=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYnBiOLSsspFeQT5dj3BCkLVgIm2_pSLwfQUP-RL8GciBGrzus8_Uxw5Mb4YjuEbPMvn7xfbNjEViaSdMtIHUVcuEEcgw=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpiha3ZgiMnf9BkwQuBnirNKybs-4ss8ESa7HqF9lfq2Fr6jmKCbAkoymSoaGkfji_NyhNJr8nE4htPBkqLisH_r9pVU-rCw=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbqjVsPecpTD_jVwFbdYWfQ5x4Uw7uoLV7OX2zJ4sIxsFedMBM26jH88N8AEE3GzZL6_UGiikl6EPUfL-fAHbx4oMs0eg=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZC4g_fv5e3wk8qJlKfvKitNOJ60WBbYeZqugrB_8xakTVKTbdisZr24IqTYYSOy3ROhbcVALNTCrlP8ATJYDkFSo8DIA=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZRKllEtwffB77bj_8uIF1xkC5b4v3Gq2HQj86m2U6Pd5frZ0PRavuxI90_RaG-cHFt8C97LFhD62EjQc6CGyIzypIj0w=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbo1Cq1NKrYRo0QQsRbtkGWnSDyBQUtWAeNm5Fcz3gQKo4ypxRfRt2wAquvhJbHEu6CdaJ1PftrBt2HvzGeL08BfMOi=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihb4daWBr7JBsMhzvC2c8epkydRu3nn0-3diuZI02GLzgJYSDCRM5mvBmLRvCJNb7X5gahAk5dEkvYjYDkeADT_ctsP1aA=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihar4Krs6L2qOWuGs-aPj1ZQYECe_bINM67ozLasnDY86yf5nVKLyuhNBF1lga4M2FnaS-XCw3fDbraIhnSxVEilmKbO=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZChf3YEXR2mFy3L-EvsXA9c_CiKVpoKQmkl70yecEogy-Ynv7I3ZHr_tUsfJ9fiyJtVv6EI4tD1XIe4kqGSBpvptKk2A=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYTmYvHGiDg5Gv9fE-QQGDzTyz9AKI8FFnjQH4A6IBwf2M6b-c-NKE8f2iwpPt_In3EZGNuljDVZwM-bvYtxsqZfUJO=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihai4a5PP3FR4hG2H6hGxLabCfW9Py6hbxgIUbBfEv7wDuixGqWtrvH6xrKnpuQfZAUakxmOo31-SqbtaoU55RA4y6TJcw=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZN02Zc2tH9vhmM-mPfJ3rUM9iuEjSWF-gWqeuQPhi_w_g2Rljf80P9EwsnloOUYgxrmBLklXyuQ3HeMMuaZHhgLs0J-Q=w3600-h2008",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYCsj3SCf3i50IUg8KL573kLovtLnU_dZXWFvAROmbs798z8-4VizdbZ5ZbBbiEWMd32Wq0Tse1aIxJMyBFvFRFfSJQ=w3600-h2008",
  ];
  const nameChoices = ["Patrick Star", "Phineas", "That boi", "I have a name"];
  const name = nameChoices[randNumStart1(4) - 1];
  const age = randNumStart1(50) + 18;
  const year = randNumStart1(5);
  const majorChoices = [
    "Computer Science",
    "Computer Science and Engineering",
    "Computer Engineering",
  ];
  const major = majorChoices[randNumStart1(3) - 1];
  const bio = "I am a UCLA student teehee";
  const classesChoices = [
    ["CS31", "CS32", "CS33", "CS35L"],
    ["ENGR2", "ENGR19", "ENGR20"],
  ];
  const classes = [];
  classes.push(classesChoices[0][randNumStart1(4) - 1]);
  classes.push(classesChoices[1][randNumStart1(3) - 1]);
  const daysAvailableChoices = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const daysAvailable = [];
  daysAvailable.push(daysAvailableChoices[randNumStart1(2) - 1]);
  daysAvailable.push(daysAvailableChoices[randNumStart1(4) + 2]);
  const startTimes = [
    "12:00am",
    "1:00am",
    "2:00am",
    "3:00am",
    "4:00am",
    "5:00am",
    "6:00am",
    "7:00am",
    "8:00am",
    "9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
  ];
  const startTime = startTimes[randNumStart1(13) - 1];
  const endTimes = [
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
    "5:00pm",
    "6:00pm",
    "7:00pm",
    "8:00pm",
    "9:00pm",
    "10:00pm",
    "11:00pm",
  ];
  const endTime = endTimes[randNumStart1(11) - 1];
  const locationsChoices = ["YRL", "Boelter", "Olympic", "Powell"];
  const locations = locationsChoices[randNumStart1(4) - 1];
  const image = images[randNumStart1(20) - 1];
  const email = randNumStart1(100000) + "@gmail.com";

  const data = {
    email: email,
    name: name,
    age: age,
    year: year,
    major: major,
    bio: bio,
    classes: classes,
    daysAvailable: daysAvailable,
    studyStart: startTime,
    studyEnd: endTime,
    locations: locations,
    image: image,
    signupCompleted: true,
  };

  await connect();

  User.create(data);
  return <></>;
}
