//importing modules
import { people } from "./data.js";
import { countEmployedIn } from "./queries.js";
import { countPeopleOwnCarIn } from "./queries.js";
import { countVaccinatedPet } from "./queries.js";

//questions

console.log("Q1 How many individuals are currently employed?");
export const unemployedPeopleCount = countEmployedIn(people);
console.log("=>", unemployedPeopleCount);

console.log("Q2 How many people own a car?");
const countOfpeopleOwnCar = countPeopleOwnCarIn(people);
console.log("=>", countOfpeopleOwnCar);

console.log("Q3 How many pets are fully vaccinated?");
const countOfVaccinatedPets = countVaccinatedPet(people);
console.log("=>", countOfVaccinatedPets);

console.log(
  "Q4 What are the names of all the pets, and what type of animal is each?"
);
