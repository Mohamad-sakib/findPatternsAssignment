import { testFrameWork } from "./testFrameWork.js";
import { countEmployedIn, countVaccinatedPet } from "./queries.js";
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
const testCountEmployedIn = (query) => {
  console.log("\n\n=>>>>>>>>>>>>>>>>>>", query, "\n\n\t\t");

  testFrameWork(countEmployedIn, 1, "one person employed", [
    { ...personData, employed: true },
  ]);

  testFrameWork(countEmployedIn, 2, "two people employed", [
    { ...personData, employed: true },
    { ...personData, employed: true },
  ]);

  testFrameWork(countEmployedIn, 1, "one person employed and another not", [
    { ...personData, employed: true },
    { ...personData, employed: false },
  ]);

  testFrameWork(countEmployedIn, 0, "two unemployed people", [
    { ...personData, employed: false },
    { ...personData, employed: false },
  ]);

  testFrameWork(
    countEmployedIn,
    0,
    "undefined as value associated with empoyed key",
    [
      { ...personData, employed: undefined },
      { ...personData, employed: undefined },
    ]
  );

  testFrameWork(countEmployedIn, 0, "no information available for people", [
    {},
    {},
  ]);
};

//"Q2 How many people own a car??"
const testCountPeopleOwnCarIn = (query) => {
  console.log("\n\n=>>>>>>>>>>>>>>>>>>", query, "\n\n\t\t");

  testFrameWork(countPeopleOwnCarIn, 0, "person with no vechile", [
    { ...personData, vechiles: [] },
  ]);

  testFrameWork(
    countPeopleOwnCarIn,
    0,
    "person vechile information not available",
    [{ ...personData, vechiles: undefined }]
  );

  testFrameWork(countPeopleOwnCarIn, 1, "person with one vechile", [
    { ...personData, vechiles: ["car"] },
  ]);

  testFrameWork(countPeopleOwnCarIn, 2, "preson with two vechile", [
    { ...personData, vechiles: ["car"] },
    { ...personData, vechiles: ["car"] },
  ]);

  testFrameWork(countPeopleOwnCarIn, 0, "no information available for people", [
    {},
    {},
  ]);
};

const testCountVaccinatedPet = (query) => {
  console.log("\n\n=>>>>>>>>>>>>>>>>>>", query, "\n\n\t\t");
  testFrameWork(
    countVaccinatedPet,
    3,
    "two people with two pets each and 3 out of 4 pets are vaccinated ",
    [
      { ...personData, pets: [{ vaccinated: true }, { vaccinated: true }] },
      { ...personData, pets: [{ vaccinated: true }, { vaccinated: false }] },
    ]
  );

  testFrameWork(
    countVaccinatedPet,
    0,
    "one person with two no vaccinated pets",
    [{ ...personData, pets: [{ vaccinated: false }, { vaccinated: false }] }]
  );

  testFrameWork(
    countVaccinatedPet,
    1,
    "one person with two pets , one vaccinated",
    [{ ...personData, pets: [{ vaccinated: true }, { vaccinated: false }] }]
  );

  testFrameWork(countVaccinatedPet, 1, "one person with  one vaccinated pet", [
    { ...personData, pets: [{ vaccinated: true }] },
  ]);

  testFrameWork(
    countVaccinatedPet,
    0,
    "one person with one pet,having no information available for vaccination",
    [{ ...personData, pets: [{ vaccinated: undefined }] }]
  );

  testFrameWork(
    countVaccinatedPet,
    0,
    "one person with two pets, having no infomation available",
    [{ ...personData, pets: [{}, {}] }]
  );
};

const testAll = () => {
  testCountEmployedIn("Q1 How many individuals are currently employed?");
  testCountPeopleOwnCarIn("Q2 How many people own a car??");
  testCountVaccinatedPet("Q3 How many pets are fully vaccinated?");
  console.log("\n\t\t\tallPass ✅");
};

testAll();
