const display = console.log;

const task = (begin, end, dely, next) => (time, input) => {
  begin(time);
  setTimeout(() => {
    const output = end(time, input);
    next(time, output);
  }, dely);
};

const timeDiff = (initalTime, currentTime) => {
  return ((currentTime - initalTime) / 1000).toFixed(2);
};

// const deliverOrder = task(
//   (time) => display(`[${timeDiff(time, Date.now())}s] Delvering order`),
//   (time) => display(`[${timeDiff(time, Date.now())}s] Order delivered`),
//   5000,
//   () => {}
// );

// const packOrder = task(
//   (time) => display(`[${timeDiff(time, Date.now())}s] Packing Order`),
//   (time) => display(`[${timeDiff(time, Date.now())}s] Order packed`),
//   3000,
//   deliverOrder
// );

const prepareFood = task(
  (time) => display(`[${timeDiff(time, Date.now())}s] Preparing food`),
  (time, orderDetails) => {
    const updatedDetails = {
      ...orderDetails,
      ...{ foodDetails: "Burger & Fries" },
    };
    display(`[${timeDiff(time, Date.now())}s] food prepared`, updatedDetails);
    return updatedDetails;
  },

  2000,
  () => {}
  // packOrder
);

const receiveOrder = task(
  () => {},
  (time, orderDetails) => {
    display(`[${timeDiff(time, Date.now())}s] order received`, orderDetails);
    return orderDetails;
  },
  0,
  prepareFood
);

receiveOrder(Date.now(), { orderId: Math.floor(Math.random() * 1000) });
// const deliveringOrder = task(
//   () => {},
//   () => display("Delivering order"),
//   1000,
//   deliverOrder
// );

// const packOrder = task(
//   () => {},
//   () => display("Order is packed"),
//   3000,
//   deliveringOrder
// );

// const packingOrder = task(
//   () => {},
//   () => display("Packing order"),
//   1000,
//   packOrder
// );

// const foodPrepared = task(
//   () => {},
//   () => display("Food is prepared"),
//   3000,
//   packingOrder
// );

// const preparingFood = task(
//   () => {},
//   () => display("Preparing food"),
//   1000,
//   foodPrepared
// );

// const orderReceived = task(
//   () => display("Order received"),
//   () => {},
//   1000,
//   preparingFood
// );

// orderReceived();

// [0.00s] Order received: { orderId: 123 }// Date.now() start
// [3.01s] Preparing food...//
// [3.01s] Food is ready: { orderId: 123, foodDetails: 'Burger & Fries' }
// [5.02s] Packing order...
// [5.02s] Order packed: { orderId: 123, foodDetails: 'Burger & Fries', packageDetails: 'Packed in eco-friendly box' }
// [10.04s] Delivering order...
// [10.04s] Order delivered: { orderId: 123, foodDetails: 'Burger & Fries', packageDetails: 'Packed in eco-friendly box', deliveryDetails: 'Delivered by John at 7:30 PM' }
