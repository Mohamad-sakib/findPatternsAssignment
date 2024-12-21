// There are two arrays. The first array consisting of countries, the second array consisting of the corresponding capitals. Write a function that can take a country and return its respective capital
const countries = ["India", "United States", "France", "Japan", "Brazil", "Australia", "Germany", "Canada", "Italy", "South Korea"]
const capitals = ["New Delhi", "Washington, D.C.", "Paris", "Tokyo", "Brasília", "Canberra", "Berlin", "Ottawa", "Rome", "Seoul"];

const findKeyValue = function (key) {
  // for (let index  = 0; index < countries.length; index++) {
  //   if (countries[index] === country) {
  //     return capitals[index];
  //   }
  // }
  const keyIndex = countries.indexOf(key);
  return capitals[keyIndex];
}

const contact = [
  ["Alice", "9876543210", 25, "123 Elm Street, Springfield"],
  ["Bob", "8765432109", 35, "456 Oak Avenue, Metropolis"],
  ["Charlie", "7654321098", 19, "789 Pine Road, Gotham City"],
  ["Diana", "6543210987", 42, "101 Maple Lane, Smallville"],
  ["Eve", "5432109876", 28, "202 Birch Boulevard, Star City"],
  ["Frank", "4321098765", 31, "303 Cedar Drive, Central City"],
  ["Grace", "3210987654", 18, "404 Willow Way, Coast City"],
  ["Hank", "2109876543", 45, "505 Aspen Circle, Riverdale"],
  ["Ivy", "1098765432", 23, "606 Fir Terrace, Hill Valley"],
  ["Jack", "0198765431", 37, "707 Spruce Court, Twin Peaks"]
]

const filterBasedContext = function (array, context) {
  return array.filter(context);
}

filterBasedContext(contact, function (array) { return array[2] > 20 });

// findKeyValue("India");

const contactWithGuardian = [
  ["Aarav", "9876543210", 25, "123 MG Road, Mumbai", ["9123456780", "Suresh"]],
  ["Ananya", "8765432109", 35, "456 Brigade Road, Bengaluru", ["8223456781", "Lakshmi"]],
  ["Ishaan", "7654321098", 19, "789 Park Street, Kolkata", ["8323456782", "Ramesh"]],
  ["Meera", "6543210987", 42, "101 Connaught Place, Delhi", ["8423456783", "Sunita"]],
  ["Rohan", "5432109876", 28, "202 Marine Drive, Chennai", ["8523456784", "Arun"]],
  ["Priya", "4321098765", 31, "303 Sarjapur Road, Hyderabad", ["8623456785", "Geeta"]],
  ["Kavya", "3210987654", 18, "404 Carter Road, Pune", ["8723456786", "Rajesh"]],
  ["Aditya", "2109876543", 45, "505 Residency Road, Ahmedabad", ["8823456787", "Vimala"]],
  ["Naina", "1098765432", 23, "606 MG Road, Jaipur", ["8923456788", "Ashok"]],
  ["Veer", "0198765431", 37, "707 Lodhi Road, Chandigarh", ["9023456789", "Manju"]]
];

const extactInfomation = function (contact, context) {
  const criteraPassedData = contact.filter(context);
  return criteraPassedData.map(function (student) { return [student[0], student[1], student[4][1], student[4][0]] });
}

extactInfomation(contactWithGuardian, function (array) { return array[2] < 30 });

const studentDetailInNewFormat = [
  ["Aarav", 25, 9876543210, "123 MG Road, Mumbai", ["Rohan", 5432109876]],
  ["Ananya", 35, 8765432109, "456 Brigade Road, Bengaluru", ["Lakshmi", 8223456781]],
  ["Ishaan", 19, 7654321098, "789 Park Street, Kolkata", ["Aarav", 9876543210]],
  ["Meera", 42, 6543210987, "101 Connaught Place, Delhi", ["Sunita", 8423456783]],
  ["Rohan", 28, 5432109876, "202 Marine Drive, Chennai", ["Lakshmi", 7654321098]],
  ["Priya", 31, 4321098765, "303 Sarjapur Road, Hyderabad", ["Geeta", 8623456785]],
  ["Kavya", 18, 3210987654, "404 Carter Road, Pune", ["Aditya", 2109876543]],
  ["Aditya", 45, 2109876543, "505 Residency Road, Ahmedabad", ["Vimala", 8823456787]],
  ["Naina", 23, 1098765432, "606 MG Road, Jaipur", ["Meera", 6543210987]],
  ["Veer", 37, 1987654321, "707 Lodhi Road, Chandigarh", ["Rajesh", 8723456786]]
];

const getParentInformation = function (peopleDetails, criteria1, criteria2) {
  const criteriaPassedPeople = peopleDetails.filter(criteria1)
  //.filter(function (array) {return criteria2(array, peopleDetails)});
  console.log(criteriaPassedPeople);
  // return criteriaPassedPeople.map(function (array) { return [array[0], array[1]] });
}

const criteria1 = function (array) {
  return array[1] > 20;
};

const criteria2 = function (array, peopleDetails) {
  for (const personDetail of peopleDetails) {
    if (array[0] === peopleDetails.at(-1)[0]) {
      return true;
    }
  }

  return false;
}

console.log(getParentInformation(studentDetailInNewFormat, criteria1, criteria2));

