// question for object 
const peoplesRawDetails = [
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
];

const getGuardianDetails = function (gaurdianFormat) {
  return function (gaurdianRowDetails) {
    return arrayToObject(gaurdianRowDetails, gaurdianFormat);
  }
};

const arrayToObject = function (array, keys, gaurdiansFormat) {
  const object = {};

  for (let index = 0; index < keys.length; index++) {
    object[keys[index]] = Array.isArray(array[index]) ?
      getGuardianDetails(gaurdiansFormat)(array[index]) : array[index];
  } return object
}

function convertToObject(keysFormat, gaurdianFormat) {
  return function (personDetails) {
    return arrayToObject(personDetails, keysFormat, gaurdianFormat);
  }
}

const personDetailformat = ["name", "phoneNumber", "age", "address", "guardinan"];

const peopleRefinedDetails = peoplesRawDetails.map(
  convertToObject(personDetailformat));

const ageLesserThen = function (ageCritera) {
  return function (personAge) {
    return personAge < ageCritera;
  }
};

const ageLessThen20 = ageLesserThen(20);

const personYoungerThen20 = peopleRefinedDetails.filter(function (personDetail) {
  return ageLessThen20(personDetail.age);
});

const nameOfYoungerThen20 = personYoungerThen20.map(function (detailObject) {
  return detailObject.name;
});

//next question
const modifiedStudentRowDetails = [
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

const studentRefinedDetails = modifiedStudentRowDetails.map(function (record) {
  return convertToObject(personDetailformat, ["phoneNumber", "name"])(record);
});


const youngerThen30 = ageLesserThen(30);

const detailsOfYoungerThen30 = studentRefinedDetails.filter(function (student) {
  return youngerThen30(student.age);
});

const studentParentNameAndPhoneNumber = detailsOfYoungerThen30.map(function (student) {
  return [student.name, student.phoneNumber,
  student.guardinan.name, student.guardinan.phoneNumber]
});


//fourth Question 

const studentsRowDetails = [
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

const recordFormat = ["name", "age", "phoneNumber", "address", "guardian"];
const gaurdianFormat = ["name", "phoneNumber"];

const studentsRefinedDetails = studentsRowDetails.map(function (record) {
  return convertToObject(recordFormat, gaurdianFormat)(record);
});

const youngerThen20 = ageLessThen20;
const peopleOlderThen20 = studentsRefinedDetails.filter(function (people) {
  return !ageLessThen20(people.age);
});

const peopleOlderThen20WithValidParent = peopleOlderThen20.filter(function (people) {
  return studentRefinedDetails.some(function (record) {
    return record.name === people.guardian.name;
  });
});

const validParentDetails = peopleOlderThen20WithValidParent.map(function (people) {
  return [people.guardian.name, people.guardian.phoneNumber];
});

console.log(validParentDetails);