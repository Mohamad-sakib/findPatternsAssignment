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

contact.filter(function (array) { return array[2] > 20 });

findKeyValue("India");