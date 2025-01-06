import * as assert from "jsr:@std/assert";

//1. Match any string that contains a number.
const matchWordsWithAtLeastANumber = (words) => {
  return words.match(/\w*\d+\w*/g);
};

//2*. Find all lowercase words in a string.
const findLowerCaseWordsInString = (words) => {
  return words.match(/[a-z]+/g);
};
//2. Find all lowercase letters in a string.
const findLowerCaseLettersInString = (words) => {
  return words.match(/[a-z]/g);
};

//3. Match a string that ends with "ed".
const findStringWithEd = (string) => {
  return !(string.match(/\w+ed$/) === null); //for last word does it end with ed
};

Deno.test(
  "findStringWithEd should return true, if string return with Ed",
  () => {
    assert.assertEquals(findStringWithEd("saied"), true);
  }
);

//3.Match all words that end ed
const findAllWordEndWithEd = (words) => {
  return words.match(/\w+ed/g);
};

//4. Match the word "yes" in a string.
const matchYesIn = (string) => {
  return string.match(/yes/);
};

//4. Match all yes in string
const matchAllYesIn = (string) => {
  return string.match(/yes/g);
};

//4. Match the word "yes" in a string.
const matchCaseInsensitiveseYesIn = (string) => {
  return string.match(/yes/i);
};

//4. Match the word "yes" in a string.
const matchCaseInsensitiveseAllYesIn = (string) => {
  return string.match(/yes/gi);
};

matchCaseInsensitiveseAllYesIn("yes that is mine, I say YES");

//5. Find any two consecutive vowels in a string.
const findTwoConsecutiveVowelsIn = (string) => {
  return string.match(/[aieou]{2}/); //any char can be matched with the patter that belong to that char class
};

//5. Find any two consecutive vowels in a string.
const findAllTwoConsecutiveVowelsIn = (string) => {
  return string.match(/[aieou]{2}/g);
};

// 6. Match any string containing the word "hello".
const matchAnyStringContainHello = (string) => {
  return string.match(/[\w ]*hello[\w ]*/);
};

// 7. Find a string that contains exactly two spaces._a_a,a_b_,a__b
const stringWithStrictTwoSpaces = (string) => {
  return string.match(/^\S*\s\S*\s\S*$/);
  // return string.match(/^(\s\S*\s\S*|\S+\s\S*\s\S*)$/);
};

//8. Find a string that starts with "abc".
const findStrEndWithaABC = (string) => {
  return string.match(/^abc.*/);
};

// 9. Match any string that contains the digit `7`.
const findStringWith7Digit = (string) => {
  return string.match(/\D*7{2}\w*/g);
};

// const findStringWithNonConsecutive7Digit = (string) => {
//   return string.match(/(\D*)7(?= \D).*/);
// };

const allOccurenceOfE = (string) => {
  return string.match(/e/g);
};

// 11. Match a string that has at least one uppercase letter.

const matchStringWithAtLeastOneUpperCaseLetter = (string) => {
  return string.match(/.*[A-Z].*/);
};

// 12. Find a string with a period (`.`) in it
const stringWithPeriod = (string) => {
  return string.match(/.*\..*/);
};

// 13. Match a string that contains a single space.
const stringWithOnlySpace = (string) => {
  return string.match(/^(\S*)\s(\S*)$/);
};

// 14. Match all words that start with the letter `c`.
const allWordsStartsWithC = (words) => {
  return words.match(/(?<=\s|^)c\S*/g);
};

// 15. Match a string that contains the sequence "123".
const matchStrConatinSequence123 = (string) => {
  return string.match(/.*123.*/);
};

//16. Match a string that contains a forward slash (`/`).
const matchStringConatinForwardSlash = (string) => {
  return string.match(/^[^\/]*\/[^\/]*$/);
};

// 17. Find all strings that contain "and".
const stringsContainAnd = (string) => {
  return string.match(/\w*and\w*/g);
};

// 18. Match a string that starts and ends with the same letter.
const matchStrinStartsEndsWithSameLetter = (string) => {
  return string.match(/^(.).*\1$/);
};

// 19. Match all lowercase letters except "x" and "y".
const matchAllLowerCaseExceptXandY = (string) => {
  return string.match(/[^xy[A-Z]\D]/g);
  // return string.match(/([a-w]|z)/g);
};

// 20. Find all words in a string that are exactly 5 letters long.
const findAllWordsOfLength5 = (words) => {
  return words.match(/\w{5}(?=\s|$)/);
};

//21. Match all words starting with a vowel.
const findAllWordsStartsWithVowel = (words) => {
  return words.match(/(?<=^|\s)[aieou]\w+/g);
};

// 22. Find all sequences of two or more consecutive digits.
const allDigitsConcecutiveDigits = (string) => {
  return string.match(/\d{2,}/d);
};

// 23. Match all words that contain exactly three letters.
const matchAllWordsHasExatlyThreeLetters = (words) => {
  return words.match(/(?<=^|\s)\w{3}(?=$|\s)/g);
};

// Find all occurrences of the word "cat" or "dog".
const matchAllDogOrDog = (words) => {
  return words.match(/(?<=^|\s)(cat|dog)(?=\s|$)/g);
};

// 25. Capture the first and last name from a string like`"John Doe"`.
const captureFirstAndLastName = (fullName) => {
  return fullName.match(/(.*)\s(\w+)/);
};

// 27. Extract all the hashtags from a tweet.
const ExtractAllHastags = (words) => words.match(/#\w+/g);

// /28. Validate a 24-hour time format like `"23:59"`.
const ValidateHourFormat = (words) => {
  return words.match(/([0-1][0-9]|[2][0-3]):[0-5][0-9]/);
};

// 29. Capture the area code and phone number from `(123) 456-7890`.
const captureAreaCodeAndPhoneNumber = (details) => {
  return details.match(/(\d{3})\)\s(.*)/);
};

//30. Find sequences of whitespace followed by a word.
const findSequeceOfWhiteSpace = (words) => {
  return words.match(/(?<=\w+)\s+/g);
};

// 31. Match strings containing at least one uppercase and one digit
const matchStringConatainAtLeastOneUpperCaseAndOneDigit = (strings) => {
  return strings.match(/.*([A-Z].*[0-9]|[0-9].*[A-Z]).*/); //not completed
};

//32. Find all non-alphanumeric characters in a string.
const nonAlphanumericCharaters = (string) => string.match(/[\W_]/g);

// 33. Match email addresses.
const matchEmail = (email) => email.match(/\w+@\w{5}\.\w{2,5}/);

// 34. Validate dates in the format `YYYY-MM-DD`.
const validateDates = (date) => date.match(/\d{4}-\d{2}-\d{2}/);

const validateDates2 = (date) => {
  return date.match(/^\d{4}-(0\d|1[0-2])-([0-2]\d|30)$/);
};

// 35. Extract the filename and extension from a path like `/path/to/file.txt`.
const fileNameAndExtension = (path) => {
  return path.match(/(?<=\/|^)(\w+)(\.\w+)/);
};

// 36. Find all duplicate words in a sentence.not completed => completed
const allDublicates = (words) => {
  return words.match(/(?<=^|\s+)(\w+)(?=.*\1)(?=\s|$)/g);
};

// 37. Match words that do not contain the letter "e".
const wordsDontContainE = (words) => {
  return words.match(/(?<=^|\s)[^e]*(?=\s|$)/g);
};

// 38. Extract the domain name from a URL like `https://www.example.com`.
const extractDomain = (link) => {
  return link.match(/.*\.(\w+)/);
};

// 39. Match strings containing three consecutive vowels.
const threeConsecutiveVowels = (strings) => {
  return strings.match(/\w*[aieou]{3}\w*/g);
};

// 40. Find all 4-letter palindromes in a string.
const fourLetterPalindromes = (strings) => {
  return strings.match(/(\w)(\w)\2\1/);
};
