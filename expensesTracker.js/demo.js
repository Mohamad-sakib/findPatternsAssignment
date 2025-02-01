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
