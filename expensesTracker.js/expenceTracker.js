class Cash {
  #dollar;
  #cents;

  constructor(dollar, cents) {
    this.#dollar = dollar;
    this.#cents = cents;
  }

  static parse(expense) {
    if (typeof expense !== "string") {
      throw "invalid expense format!";
    }

    const [dollar, cents] = expense.split(".");
    return new Cash(parseInt(dollar), parseInt(cents.slice(0, 2)));
  }

  add(cash) {
    const cents = this.#cents + cash.#cents;
    const dollar = this.#dollar + cash.#dollar + (cents > 100 ? 1 : 0);
    return new Cash(dollar, cents % 100);
  }

  format() {
    return `${this.#dollar}.${this.#cents}`;
  }
}

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
