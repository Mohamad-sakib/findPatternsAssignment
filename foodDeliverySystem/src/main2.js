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

const deliverOrder = task(
  (time) => display(`[${timeDiff(time, Date.now())}s] Delvering order...`),
  (time, orderDetails) => {
    const updatedDetails = {
      ...orderDetails,
      ...{ deliveryDetails: "Delivered by John at 7:30 PM" },
    };
    display(`[${timeDiff(time, Date.now())}s] Order delivered`, updatedDetails);

    return orderDetails;
  },
  5000,
  () => {}
);

const packOrder = task(
  (time) => display(`[${timeDiff(time, Date.now())}s] Packing Order...`),
  (time, orderDetails) => {
    const updatedDetails = {
      ...orderDetails,
      ...{ packageDetails: "Packed in eco-friendly box" },
    };

    display(`[${timeDiff(time, Date.now())}s] Order packed`, updatedDetails);
    return updatedDetails;
  },
  3000,
  deliverOrder
);

const prepareFood = task(
  (time) => display(`[${timeDiff(time, Date.now())}s] Preparing food...`),
  (time, orderDetails) => {
    const updatedDetails = {
      ...orderDetails,
      ...{ foodDetails: "Burger & Fries" },
    };
    display(`[${timeDiff(time, Date.now())}s] Food prepared`, updatedDetails);
    return updatedDetails;
  },

  2000,
  packOrder
);

const receiveOrder = task(
  () => {},
  (time, orderDetails) => {
    display(`[${timeDiff(time, Date.now())}s] Order received`, orderDetails);
    return orderDetails;
  },
  0,
  prepareFood
);

const main = () => {
  const orderId = Math.floor(Math.random() * 1000);
  const orderTime = Date.now();

  receiveOrder(orderTime, { orderId });
};

main();
