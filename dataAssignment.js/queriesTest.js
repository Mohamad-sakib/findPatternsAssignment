import { testFrameWork } from "./testFrameWork.js";

import {
  countEmployedIn,
  countVaccinatedPet,
  getAllCityNames,
  getAllHobbiesAndCountIn,
  getAllPetsActivitiesAndCountIn,
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

const testGetAllCityNames = (fn, query) => {
  displayHeading(query);
  testFrameWork(
    fn,
    ["mumbai", "ghaziabad"],
    "two people with where they linving info ",
    [
      { ...personData, city: "mumbai" },
      { ...personData, city: "ghaziabad" },
    ]
  );

  testFrameWork(
    fn,
    ["ghaziabad"],
    "two people, one of them only have city info available ",
    [
      { ...personData, city: undefined },
      { ...personData, city: "ghaziabad" },
    ]
  );

  testFrameWork(fn, [], "two people with no info avaibale for city ", [
    { ...personData, city: undefined },
    { ...personData, city: undefined },
  ]);

  testFrameWork(fn, [], "two people with no info avaibale for city ", [
    { ...personData, city: undefined },
    { ...personData, city: undefined },
  ]);
};

const testGetAllPetsActivitiesAndCountIn = (fn, query) => {
  displayHeading(query);

  const activities = "favoriteActivities";
  const count = "countOfActivities";

  testFrameWork(
    fn,
    { [activities]: ["dancing", "singing", "bathing", "swiming"], [count]: 4 },
    "two people with two diffrent pets each ",
    [
      {
        ...personData,
        pets: [{ [activities]: ["dancing"] }, { [activities]: ["singing"] }],
      },
      {
        ...personData,
        pets: [{ [activities]: ["bathing"] }, { [activities]: ["swiming"] }],
      },
    ]
  );

  testFrameWork(
    fn,
    { [activities]: ["dancing", "singing"], [count]: 2 },
    "one person , two pets ",
    [
      {
        ...personData,
        pets: [{ [activities]: ["dancing"] }, { [activities]: ["singing"] }],
      },
    ]
  );

  testFrameWork(
    fn,
    { [activities]: ["dancing"], [count]: 1 },
    "one person with one pet",
    [{ ...personData, pets: [{ [activities]: ["dancing"] }] }]
  );

  testFrameWork(fn, { [activities]: [], [count]: 0 }, "one peron with no pet", [
    { ...personData, pets: [] },
  ]);

  testFrameWork(
    fn,
    { [activities]: [undefined], [count]: 1 },
    "one person with one pet , having no info available for fav actives or no fav activities",
    [{ ...personData, pets: [{ [activities]: undefined }] }]
  );

  testFrameWork(
    fn,
    { [activities]: [], [count]: 0 },
    "one perso with one pet , having no info available",
    [{ ...personData, pets: [{}] }]
  );
};

const testGetAllHobbiesAndCountIn = (fn, query) => {
  displayHeading(query);

  const hobbies = "hobbies";
  const count = "hobbiesCount";

  testFrameWork(
    fn,
    { [hobbies]: ["dancing", "singing", "bathing", "swiming"], [count]: 4 },
    "two people with two diffrent hobbies each ",
    [
      {
        ...personData,
        [hobbies]: [{ type: "dancing" }, { type: "singing" }],
      },
      {
        ...personData,
        [hobbies]: [{ type: "bathing" }, { type: "swiming" }],
      },
    ]
  );

  testFrameWork(
    fn,
    { [hobbies]: ["dancing", "singing"], [count]: 2 },
    "one person , two hobbies ",
    [
      {
        ...personData,
        [hobbies]: [{ type: "dancing" }, { type: "singing" }],
      },
    ]
  );

  testFrameWork(
    fn,
    { [hobbies]: ["dancing"], [count]: 1 },
    "one person with one hobbie",
    [{ ...personData, [hobbies]: [{ type: "dancing" }] }]
  );

  testFrameWork(
    fn,
    { [hobbies]: [], [count]: 0 },
    "one peron with no hobbies",
    [{ ...personData, hobbies: [] }]
  );

  testFrameWork(
    fn,
    { [hobbies]: [undefined], [count]: 1 },
    "one person with one hobbie , having no info available for",
    [{ ...personData, [hobbies]: [{ type: undefined }] }]
  );

  testFrameWork(
    fn,
    { [hobbies]: [], [count]: 0 },
    "one person with one hobbie , having no info available",
    [{ ...personData, hobbies: [{}] }]
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

  testGetAllCityNames(
    getAllCityNames,
    "Q5 Which cities do the individuals live in?"
  );

  testGetAllPetsActivitiesAndCountIn(
    getAllPetsActivitiesAndCountIn,
    "Q6 How many PetsActivities are shared across the group? What are they?"
  );

  testGetAllHobbiesAndCountIn(
    getAllHobbiesAndCountIn,
    "Q7 How many hobbies are shared across the group? What are they?"
  );

  displayHeading("\n\t\t\tallPass ✅");
};

testAll();
