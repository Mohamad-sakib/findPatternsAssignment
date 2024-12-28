import { testFrameWork } from "./testFrameWork.js";
import {
  countEmployedIn,
  countVaccinatedPet,
  getAllPetsNameAndType,
} from "./queries.js";
import { countPeopleOwnCarIn } from "./queries.js";

const displayHeading = (heading) => {
  console.log("\n\n=>>>>>>>>>>>>>>>>>>", heading, "\n\n\t\t");
};

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
const testCountEmployedIn = (fn, query) => {
  displayHeading(query);
  testFrameWork(fn, 1, "one person employed", [
    { ...personData, employed: true },
  ]);

  testFrameWork(fn, 2, "two people employed", [
    { ...personData, employed: true },
    { ...personData, employed: true },
  ]);

  testFrameWork(fn, 1, "one person employed and another not", [
    { ...personData, employed: true },
    { ...personData, employed: false },
  ]);

  testFrameWork(fn, 0, "two unemployed people", [
    { ...personData, employed: false },
    { ...personData, employed: false },
  ]);

  testFrameWork(fn, 0, "undefined as value associated with empoyed key", [
    { ...personData, employed: undefined },
    { ...personData, employed: undefined },
  ]);

  testFrameWork(fn, 0, "no information available for people", [{}, {}]);
};

//"Q2 How many people own a car??"
const testCountPeopleOwnCarIn = (fn, query) => {
  displayHeading(query);

  testFrameWork(fn, 0, "person with no vechile", [
    { ...personData, vechiles: [] },
  ]);

  testFrameWork(fn, 0, "person vechile information not available", [
    { ...personData, vechiles: undefined },
  ]);

  testFrameWork(fn, 1, "person with one vechile", [
    { ...personData, vechiles: ["car"] },
  ]);

  testFrameWork(fn, 2, "preson with two vechile", [
    { ...personData, vechiles: ["car"] },
    { ...personData, vechiles: ["car"] },
  ]);

  testFrameWork(fn, 0, "no information available for people", [{}, {}]);
};

const testCountVaccinatedPet = (fn, query) => {
  displayHeading(query);
  testFrameWork(
    fn,
    3,
    "two people with two pets each and 3 out of 4 pets are vaccinated ",
    [
      { ...personData, pets: [{ vaccinated: true }, { vaccinated: true }] },
      { ...personData, pets: [{ vaccinated: true }, { vaccinated: false }] },
    ]
  );

  testFrameWork(fn, 0, "one person with two no vaccinated pets", [
    { ...personData, pets: [{ vaccinated: false }, { vaccinated: false }] },
  ]);

  testFrameWork(fn, 1, "one person with two pets , one vaccinated", [
    { ...personData, pets: [{ vaccinated: true }, { vaccinated: false }] },
  ]);

  testFrameWork(fn, 1, "one person with  one vaccinated pet", [
    { ...personData, pets: [{ vaccinated: true }] },
  ]);

  testFrameWork(
    fn,
    0,
    "one person with one pet,having no information available for vaccination",
    [{ ...personData, pets: [{ vaccinated: undefined }] }]
  );

  testFrameWork(
    fn,
    0,
    "one person with two pets, having no infomation available",
    [{ ...personData, pets: [{}, {}] }]
  );
};

const testGetAllPetsNameAndType = (fn, query) => {
  displayHeading(query);
  testFrameWork(
    fn,
    [
      { name: "tim", type: "dog" },
      { name: "timmy", type: "dog" },
      { name: "tom", type: "cat" },
      { name: "tommy", type: "cat" },
    ],
    "two people with two pets",
    [
      {
        ...personData,
        pets: [
          { name: "tim", type: "dog" },
          { name: "timmy", type: "dog" },
        ],
      },
      {
        ...personData,
        pets: [
          { name: "tom", type: "cat" },
          { name: "tommy", type: "cat" },
        ],
      },
    ]
  );

  testFrameWork(
    fn,
    [
      { name: "tom", type: "cat" },
      { name: "timmy", type: "dog" },
    ],
    "one person with two pets , having no information for name",
    [
      {
        ...personData,
        pets: [
          { name: "tom", type: "cat" },
          { name: "timmy", type: "dog" },
        ],
      },
    ]
  );

  testFrameWork(
    fn,
    [
      { name: "tom", type: undefined },
      { name: "timmy", type: undefined },
    ],
    "one person with two pets, having no information for type",
    [
      {
        ...personData,
        pets: [
          { name: "tom", type: undefined },
          { name: "timmy", type: undefined },
        ],
      },
    ]
  );

  testFrameWork(
    fn,
    [
      { name: undefined, type: undefined },
      { name: undefined, type: undefined },
    ],
    "one person with two  pets, having no  information for type and name",
    [
      {
        ...personData,
        pets: [
          { name: undefined, type: undefined },
          { name: undefined, type: undefined },
        ],
      },
    ]
  );

  testFrameWork(
    fn,
    [
      { name: undefined, type: undefined },
      { name: undefined, type: undefined },
    ],
    "one person with two pets, having no information",
    [
      {
        ...personData,
        pets: [{}, {}],
      },
    ]
  );
};

const testAll = () => {
  testCountEmployedIn(
    countEmployedIn,
    "Q1 How many individuals are currently employed?"
  );

  testCountPeopleOwnCarIn(
    countPeopleOwnCarIn,
    "Q2 How many people own a car??"
  );

  testCountVaccinatedPet(
    countVaccinatedPet,
    "Q3 How many pets are fully vaccinated?"
  );

  testGetAllPetsNameAndType(
    getAllPetsNameAndType,
    "Q4 What are the names of all the pets, and what type of animal is each?"
  );

  displayHeading("\n\t\t\tallPass ✅");
};

testAll();
