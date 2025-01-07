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
//https://example.com
const matchUrl = (url) => {
  return url.match(/https?:\/\/(\w+\.)+\w{2,3}(\/\w+|:\d+)*$/);
};

// Question 3: Match a Hexadecimal Color Code
// Write a regular expression to match a 6-digit hexadecimal color code (e.g., #1a2b3c).

// The color code should start with a #.
// The 6 characters after the # should be any combination of digits (0-9) and letters (a-f or A-F).

const matchHexaDecimal = (hexadecimal) => {
  return hexadecimal.match(/#[\da-zA-Z]{3,6}$/);
};

// Question 1:
// Match an IP address (IPv4): Create a regular expression to match a valid IPv4 address, which consists of four numbers (0-255) separated by periods.
// For example: 192.168.0.1

const matchIpV4 = (ip) => {
  return ip.match(/([0-2][0-5]{0,2}\.){3}([0-2][0-5]{0,2})$/);
};

// Question 1:

// Write a regular expression to match a valid credit card number. It should:

// Allow 16 digits.
// Grouped into four sets of four digits, separated by hyphens (e.g., 1234-5678-9876-5432).
// Optionally, no hyphens (e.g., 1234567898765432).

const matchCreditCardNumber = (number) => {
  return number.match(/^(\d{4}-?){3}\d{4}$/);
};
