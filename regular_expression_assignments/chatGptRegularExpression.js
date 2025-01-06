// Simple matching: Write a regular expression to match any string that contains the word "JavaScript".

const matchJavaScriptIn = (string) => string.match(/.*JavaScript.*/i);

// Matching a phone number: Create a regular expression to match a 10-digit phone number (e.g., 1234567890).
const matchPhoneNumber = (number) => number.match(/^\d{10}$/);

// Matching an email address: Write a regular expression to match a basic email address (e.g., test@example.com).

const matchEmail = (email) => email.match(/\w+@\w{5}\.\w{3,5}/);

// Question 1: Match a Date (DD/MM/YYYY)
// Write a regular expression to match a date in the format DD/MM/YYYY (e.g., 31/12/2025).

// The day (DD) should be 01-31.
// The month (MM) should be 01-12.
// The year (YYYY) should be any 4 digits.

const matchDateFormat = (date) => {
  return date.match(/^([0-2][0-9]|[3][0-1])-([0][1-9]|[1][0-2])-\d{4}$/);
};
