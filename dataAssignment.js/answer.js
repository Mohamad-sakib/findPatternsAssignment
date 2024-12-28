//importing modules
import { people } from "./data.js";
import { countEmployedIn } from "./queries.js";
import { countPeopleOwnCarIn } from "./queries.js";

//questions

console.log("Q1 How many individuals are currently employed?");
export const unemployedPeopleCount = countEmployedIn(people);
console.log("=>", unemployedPeopleCount);

console.log("Q2 How many people own a car?");
const countOfpeopleOwnCar = countPeopleOwnCarIn(people);
console.log("=>", countOfpeopleOwnCar);