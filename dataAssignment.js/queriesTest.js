import { testFrameWork } from "./testFrameWorkForNumber.js";
import { countEmployedIn } from "./queries.js";

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
  console.log("\n\n\t\t", querie, "\n\n\t\t");

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

const testAll = () => {
  testCountEmployedIn("Q1 How many individuals are currently employed?");
};

testAll();
