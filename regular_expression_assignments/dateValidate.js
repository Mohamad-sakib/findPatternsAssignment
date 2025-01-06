const findDateFormatId = (dateFormat) => {
  const dateFormats = ["dd-mm-yyyy", "mm-dd-yyyy", "yyyy-mm-dd"];
  return dateFormats.indexOf(dateFormat);
};

const captureDateDetails = (date, dateFormat) => {
  const captureFormats = [
    /(\d{2})-(\d{2})-(\d{4})/,
    /(\d{2})-(\d{2})-(\d{4})/,
    /(\d{4})-(\d{2})-(\d{2})/,
  ];

  const dateFormatId = findDateFormatId(dateFormat);
  const selectedCaptureFormat = captureFormats[dateFormatId];

  return date.match(selectedCaptureFormat);
};

const areDatesEqual = (validateDate, [day, month, year]) => {
  return (
    validateDate.getDate() === day &&
    validateDate.getMonth() === month &&
    validateDate.getFullYear() === year
  );
};

const isEven = (number) => number % 2 === 0;
const areEqual = (num1, num2) => num1 === num2;

const extractDMY = (capturedDate, dateIndex, monthIndex, yearIndex) => {
  const day = +capturedDate[dateIndex];
  const month = +capturedDate[monthIndex];
  const year = +capturedDate[yearIndex];

  return [day, month, year];
};

const getDateDetails = (date, dateFormat) => {
  const dateDetails = captureDateDetails(date, dateFormat);
  const dateFormatId = findDateFormatId(dateFormat);
  const monthIndex = isEven(dateFormatId) ? 2 : 1;
  const yearIndex = areEqual(dateFormatId, 2) ? 1 : 3;
  const dateIndex = dateFormatId + 1;
  const [day, month, year] = extractDMY(
    dateDetails,
    dateIndex,
    monthIndex,
    yearIndex
  );

  return [day, month, year];
};

export const validateDate = (date, dateFormat) => {
  const [day, month, year] = getDateDetails(date, dateFormat);
  const validDate = new Date(year, month - 1, day);

  return areDatesEqual(validDate, [day, month - 1, year]);
};

console.log(validateDate("2004-99-31", "yyyy-mm-dd"));

//if id -> 0 --> d=>1,m=>2,y=>3
//if id -> 1 --> d=>2,m=>1,y=>3
//if id -> 2 --> d=>3,m=>2,y=>1
//in
//delete
