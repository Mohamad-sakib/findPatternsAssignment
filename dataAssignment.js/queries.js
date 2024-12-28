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
