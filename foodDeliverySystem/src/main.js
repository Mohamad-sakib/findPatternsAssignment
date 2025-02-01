const display = console.log;

const task = (begin, end, dely, next) => () => {
  begin();
  setTimeout(() => {
    end();
    next();
  }, dely);
};

const deliverOrder = task(
  () => {},
  () => display("Order delivered"),
  5000,
  () => {}
);

const deliveringOrder = task(
  () => {},
  () => display("Delivering order"),
  1000,
  () => {}
);

const packOrder = task(
  () => {},
  () => display("Order is packed"),
  3000,
  deliveringOrder
);

const packingOrder = task(
  () => {},
  () => display("Packing order"),
  1000,
  packOrder
);

const prepareFood = task(
  () => display("Preparing food"),
  () => display("Food is prepared"),
  3000,
  packingOrder
);

const orderReceived = task(
  () => display("Order received"),
  () => {},
  1000,
  prepareFood
);

orderReceived();

// [0.00s] Order received: { orderId: 123 }// Date.now() start
// [3.01s] Preparing food...//
// [3.01s] Food is ready: { orderId: 123, foodDetails: 'Burger & Fries' }
// [5.02s] Packing order...
// [5.02s] Order packed: { orderId: 123, foodDetails: 'Burger & Fries', packageDetails: 'Packed in eco-friendly box' }
// [10.04s] Delivering order...
// [10.04s] Order delivered: { orderId: 123, foodDetails: 'Burger & Fries', packageDetails: 'Packed in eco-friendly box', deliveryDetails: 'Delivered by John at 7:30 PM' }
