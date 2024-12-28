import { testFrameWork } from "./testFrameWork.js";
import { countEmployedIn } from "./queries.js";
import { countPeopleOwnCarIn } from "./queries.js";

const personData = {
  name: "Rahul",
  city: "Pune",
  country: "india",
  employed: true,
  profession: "software engineer",
  age: 24,
  studied: ["computer science"],
  vechiles: ["car"],
  pets: [
    {
      name: "max",
      age: 4,
      vaccinated: true,
      type: "dog",
      category: "golden retriever",
      favoriteActivities: true,
    },
  ],
  hobbies: [
    {
      type: "playing chess",
      interested: ["woodenChess"],
    },
    {
      type: "gardening",
      interested: ["homeGardening"],
    },
  ],
};

//"Q1 How many individuals are currently employed?"
const testCountEmployedIn = (querie) => {
  console.log("\n\n=>>>>>>>>>>>>>>>>>>", querie, "\n\n\t\t");

  testFrameWork(countEmployedIn, 1, [{ ...personData, employed: true }]);

  testFrameWork(countEmployedIn, 2, [
    { ...personData, employed: true },
    { ...personData, employed: true },
  ]);

  testFrameWork(countEmployedIn, 1, [
    { ...personData, employed: true },
    { ...personData, employed: false },
  ]);

  testFrameWork(countEmployedIn, 0, [
    { ...personData, employed: false },
    { ...personData, employed: false },
  ]);

  testFrameWork(countEmployedIn, 0, [
    { ...personData, employed: undefined },
    { ...personData, employed: undefined },
  ]);

  testFrameWork(countEmployedIn, 0, [{}, {}]);
};

//"Q2 How many people own a car??"
const testCountPeopleOwnCarIn = (querie) => {
  console.log("\n\n=>>>>>>>>>>>>>>>>>>", querie, "\n\n\t\t");

  testFrameWork(countPeopleOwnCarIn, 0, [{ ...personData, vechiles: [] }]);

  testFrameWork(countPeopleOwnCarIn, 0, [
    { ...personData, vechiles: undefined },
  ]);

  testFrameWork(countPeopleOwnCarIn, 1, [{ ...personData, vechiles: ["car"] }]);

  testFrameWork(countPeopleOwnCarIn, 2, [
    { ...personData, vechiles: ["car"] },
    { ...personData, vechiles: ["car"] },
  ]);

  testFrameWork(countPeopleOwnCarIn, 0, [{}, {}]);
};

const testAll = () => {
  testCountEmployedIn("Q1 How many individuals are currently employed?");
  testCountPeopleOwnCarIn("Q2 How many people own a car??");
  console.log("\n\t\t\tallPass ✅");
};

testAll();
