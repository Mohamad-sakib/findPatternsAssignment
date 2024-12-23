const people = [
  {
    name: "Rahul",
    city: "Pune",
    country: "india",
    employed: true,
    profession: "software engineer",
    age: 24,
    studied: ["computer science"],
    ownVechile: true,
    hasPet: true,
    petsCount: 1,
    pets: [
      {
        name: "max",
        age: 4,
        vaccinated: true,
        type: "dog",
        category: "golden retriever",
        hasFavoriteActivities: true,
        numberOfFavoriteActivites: 1,
      },
    ],
    hobbiesCount: 2,
    hobbies: [
      {
        type: "playing chess",
        interested: ["woodenChess"],
        shareTo: [{}],
      },
      {
        type: "gardening",
        interested: ["homeGardening"],
        shareTo: [{}],
      },
    ],
  },

  {
    name: "Ananya",
    city: "Bangalore",
    country: "india",
    employed: false,
    profession: "not working",
    age: 30,
    studied: ["computer science", "Ananya also has a minor in graphic design"],
    ownVechile: false,
    hasPet: true,
    petsCount: 1,
    pets: [
      {
        name: "Kiwi",
        age: 4,
        vaccinated: true,
        type: "parrot",
        category: "not available",
        hasFavoriteActivities: true,
        numberOfFavoriteActivites: 1,
      },
    ],
    hobbiesCount: 1,
    hobbies: [
      {
        type: "cooking",
        interested: ["experiments with Italian recipes"],
        shareTo: [{}],
      },
    ],
  },

  {
    name: "Ramesh",
    city: "Jaipur",
    country: "india",
    employed: true,
    profession: "owning bussiness",
    age: 45,
    studied: ["computer science"],
    ownVechile: false,
    hasPet: true,
    petsCount: 2,
    pets: [
      {
        name: "Bella",
        age: 3,
        vaccinated: true,
        type: "cats",
        category: "Persian cats",
        hasFavoriteActivities: true,
        numberOfFavoriteActivites: 1,
      },
      {
        name: "Leo",
        age: 3,
        vaccinated: true,
        type: "cats",
        category: "Persian cats",
        hasFavoriteActivities: true,
        numberOfFavoriteActivites: 1,
      },
    ],
    hobbiesCount: 2,
    hobbies: [
      {
        type: "gardening",
        interested: ["rose garden in weekends"],
        shareTo: [{}],
      },
      {
        type: "reading",
        interested: ["historical fiction"],
        shareTo: [{}],
      },
    ],
  },

  {
    name: "Kavya",
    city: "Chennai",
    country: "india",
    employed: false,
    profession: "professional dancer",
    age: 28,
    studied: ["not available"],
    ownVechile: false,
    hasPet: true,
    petsCount: 1,
    pets: [
      {
        name: "Snowy",
        age: 2,
        vaccinated: true,
        type: "cats",
        category: "Persian cats",
        hasFavoriteActivities: true,
        numberOfFavoriteActivites: 2,
      },
    ],
    hobbiesCount: 2,
    hobbies: [
      {
        type: "watching",
        interested: ["binge-watching sci-fi shows in her downtime"],
        shareTo: [{}],
      },
      {
        type: "reading",
        interested: ["modern fantasy novels"],
        shareTo: [{}],
      },
    ],
  },

  {
    name: "shakti",
    city: "Bangalore",
    country: "india",
    employed: false,
    profession: "not working",
    age: 30,
    studied: ["computer science", "Ananya also has a minor in graphic design"],
    ownVechile: false,
    hasPet: false,
    petsCount: 1,
    pets: [
      {
        name: "Kiwi",
        age: 4,
        vaccinated: true,
        type: "parrot",
        category: "not available",
        hasFavoriteActivities: true,
        numberOfFavoriteActivites: 1,
      },
    ],
    hobbiesCount: 3,
    hobbies: [
      {
        type: "cooking",
        interested: ["experiments with Italian recipes"],
        shareTo: [{}],
      },
    ],
  },
];

const unemployedPeople = people.filter((person) => person.employed);
const peopleOwnCar = people.filter((person) => person.ownVechile);
const peopleHavePets = people.filter((person) => person.hasPet);
const countOfVaccinatedPet = peopleHavePets.map((person) => {
  return person.pets.filter((pet) => pet.vaccinated).length;
});

const countTotalPet = (countOfTotalPets, petsCount) => {
  return countOfTotalPets + petsCount;
};

const totalVaccinatedPet = countOfVaccinatedPet.reduce(countTotalPet);
const petsNameAndType = peopleHavePets.map((person) => {
  return person.pets.map((pet) => [pet.name, pet.type]);
});

const countPet = (totalPets, person) => {
  return totalPets + person.petsCount;
};

const averageOf = (key, array) => {
  const sum = array.reduce((sum, object) => sum + object[key], 0);
  return sum / array.length;
};

const personAndCity = people.map((person) => [person.name, person.city]);
const unemployedPeopleTotalPets = unemployedPeople.reduce(countPet, 0);
const averageAgeOfpeople = averageOf("age", people);
const peopleStudiedCS = people.filter((person) => {
  return person.studied.some((course) => course === "computer science");
});

const peopleStudiedCsAndHavePet = peopleStudiedCS.filter((person) => {
  return person.hasPet;
});

const countOfPeopleStudiedCSAndHavePet = peopleStudiedCsAndHavePet.length;
const peopleOwnPetsMoreThen1 = people.filter((person) => person.petsCount > 1);
const countOfPeopleOwnPetsMoreThen1 = peopleOwnPetsMoreThen1.length;
const allPets = peopleHavePets.flatMap((person) => person.pets);
const petsWithActivities = allPets.filter((pet) => {
  return pet.hasFavoriteActivities;
});

const petsNamesAssociatedWithFavActivies = petsWithActivities.map((pet) => {
  return pet.name;
});

const peopleLiveInBangaloreOrChennai = peopleHavePets.filter((person) => {
  return person.city === "Bangalore" || person.city === "Chennai";
});

const petsInBangaloreOrChennai = peopleLiveInBangaloreOrChennai.flatMap(
  (person) => {
    return person.pets;
  }
);

const nameOfPetsInBangaloreOrChennai = petsInBangaloreOrChennai.map((pet) => {
  return pet.name;
});

const countTotalPets = (totalPets, person) => {
  return totalPets + person.petsCount;
};

const createNoDublicateArray = (noDublicates, elementToAdd) => {
  if (!noDublicates.includes(elementToAdd)) {
    noDublicates.push(elementToAdd);
  }

  return noDublicates;
};

const removeDublication = (array) => {
  return array.reduce(createNoDublicateArray, []);
};

const collectTotalOccurence = (value, arryOfOccurences) => {
  const addTotalOccurence = (totalOccurence, element) => {
    return element === value ? totalOccurence + 1 : totalOccurence;
  };

  return arryOfOccurences.reduce(addTotalOccurence, 0);
};

const findOccurenceOf = (array, arryOfOccurences) => {
  return array.map((element) => {
    return [element, collectTotalOccurence(element, arryOfOccurences)];
  });
};

const isMostOccuring = (mostOccuringElement, element) => {
  if (mostOccuringElement[1] < element[1]) return element;
  return mostOccuringElement;
};

const mostOccurring = (array, arryOfOccurences) => {
  const occurences = findOccurenceOf(array, arryOfOccurences);
  const mostOccurring = occurences.reduce(isMostOccuring, occurences[0]);
  return mostOccurring;
};

const peopleOwnNoCar = people.filter((person) => !person.ownVechile);
const totalPetsOfPeopleOwnNoCar = peopleOwnNoCar.reduce(countTotalPets, 0);
const petTypes = allPets.map((pet) => pet.type);
const uniquePetTypes = removeDublication(petTypes);
const mostCommenTypePet = mostOccurring(uniquePetTypes, petTypes);
// console.log(uniquePetTypes);
const peopleHaveMoreThanTwoHobbies = people.filter(
  (person) => person.hobbiesCount > 2
).length;

const youngestPet = allPets.reduce((youngestPet, pet) => {
  return pet.age < youngestPet.age ? pet : youngestPet;
});

const isStartWith = (string, char) => string.at(0) === char;

const youngestPetName = youngestPet.name;
const peopleLiveInCitiesStartsWithB = people.filter((person) => {
  return isStartWith(person.city, "B");
});

const peopleOwnNoPets = people.filter((person) => !person.hasPet);
const peopleHobbies = people.flatMap((person) => {
  return person.hobbies;
});

const peopleHaveHobbieOfReading = people.filter((person) => {
  return person.hobbies.some((hobbie) => {
    return hobbie.type === "reading";
  });
});

const readingHobbies = peopleHobbies.filter((hobbie) => {
  return hobbie.type === "reading";
});

const booksMentioned = readingHobbies.flatMap((readingHobbie) => {
  return readingHobbie.interested;
});

const getInterestOf = (person) => {
  const personHobbie = person.hobbies.filter((hobbie) => {
    return hobbie.type === "reading";
  });

  return personHobbie[0].interested;
};

const booksMentionedAndName = peopleHaveHobbieOfReading.map((person) => {
  return { name: person.name, book: getInterestOf(person).join("") };
});

const uniqueHobbies = removeDublication(peopleHobbies).map((hobbie) => {
  return hobbie.type;
});

const ramesh = people.filter((person) => person.name === "Ramesh")[0];
const rameshHobbies = ramesh.hobbies.map((hobbie) => hobbie.type);
const peopleAndHobbies = people.map((person) => {
  const hobbiesType = person.hobbies.map((hobbie) => hobbie.type);
  return { name: person.name, hobbies: hobbiesType };
});

const hasAnyOneSharedHobbiesToRamesh = (person) => {
  return person.hobbies.some((hobbie) => {
    return rameshHobbies.includes(hobbie);
  });
};

const peopleWithCommonHobbiesToRamesh = peopleAndHobbies.filter(
  hasAnyOneSharedHobbiesToRamesh
);

const countOfPeopleWithSharedHobbiesToRamesh =
  peopleWithCommonHobbiesToRamesh.length - 1;
