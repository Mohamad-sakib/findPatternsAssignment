import { Cash } from "./cash.js";

const addExpense = (total, expense) => {
  return total.add(Cash.parse(expense));
};

const readExpenses = () => Deno.readTextFileSync("./expenses.txt").split("\n");

const main = (path) => {
  const expenses = readExpenses(path);
  const expenditure = expenses.reduce(addExpense, new Cash(0, 0));

  return expenditure.format();
};

console.log(main());
