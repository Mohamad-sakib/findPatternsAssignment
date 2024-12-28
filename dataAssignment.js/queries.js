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
