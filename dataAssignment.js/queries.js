import { areEqual } from "./testFrameWork.js";

export const countEmployedIn = (people) => {
  return people.filter((person) => person.employed).length;
};

export const getEmployedPeople = (people) => {
  return people.filter((person) => person.employed);
};

export const countPeopleOwnCarIn = (people) => {
  return people.filter(
    (person) => person.vechiles !== undefined && person.vechiles.length > 0
  ).length;
};

export const countOfpeopleOwnCar = (people) => {
  return people.filter((person) => person.ownVechile);
};

export const getPeopleHavePets = (people) => {
  return people.filter((person) => person.pets.length > 0);
};

export const getAllPets = (people) => {
  return people.flatMap((person) => {
    return person.pets;
  });
};

export const countVaccinatedPet = (people) => {
  const allPets = getAllPets(people);
  return allPets.filter((pet) => pet.vaccinated).length;
};

export const getAllPetsNameAndType = (people) => {
  const allPets = getAllPets(people);
  return allPets.map((pet) => {
    return { name: pet.name, type: pet.type };
  });
};

export const getAllPeopleHaveCity = (people) => {
  return people.filter((person) => person.city !== undefined);
};

export const getAllCityNames = (people) => {
  const AllPeopleHaveCity = getAllPeopleHaveCity(people);
  return AllPeopleHaveCity.map((person) => person.city);
};

export const getAllPetsActivitiesAndCountIn = (people) => {
  const allPets = getAllPets(people);
  const allActivities = allPets.flatMap((pet) => {
    return areEqual({}, pet) ? [] : pet.favoriteActivities;
  });

  return {
    favoriteActivities: allActivities,
    countOfActivities: allActivities.length,
  };
};

const getAllHobbiesSharedIn = (people) => {
  return people.flatMap((person) => {
    // console.log(person, "person is here");
    return areEqual({}, person) ? [] : person.hobbies;
  });
}; //when there is only one person with a hobbie but info is not available for
// the hobbie instead the hobbie is associated with undefined then what should
// be totalHobbiesCount and all hobbies can it be {allHobbie :
// [undefined], count: 1}

const getAllHobbieType = (hobbies) => {
  return hobbies.flatMap((hobbie) => {
    return areEqual({}, hobbie) ? [] : hobbie.type;
  });
};

export const getAllHobbiesAndCountIn = (people) => {
  const allHobbies = getAllHobbiesSharedIn(people);
  const allHobbieType = getAllHobbieType(allHobbies);
  return { hobbies: allHobbieType, hobbiesCount: allHobbieType.length };
};
