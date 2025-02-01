const sumAll = (list) => {
  return list.reduce((x, y) => x + y, 0);
};

export class ExpensesTracker {
  #expenses;

  constructor(expenses) {
    this.#expenses = expenses;
  }

  trackExpenses() {
    return sumAll(this.#expenses);
  }

  formatTotal() {
    return this.trackExpenses().toFixed(2);
  }
}

//[{ 1.1}, { 2.2}];
//creating and represeting expenseTracker as class isn't good idea
//expenseTracker as program where some of its compoents would be reprensentd as class for some valid reasons .
