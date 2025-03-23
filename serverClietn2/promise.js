const fn = async () => {
  // Promise.resolve("resolved");
  return Promise.reject("rejected");
  // Promise.resolve("resolved");

  // return Promise.resolve("resolved3");
};

// await fn().catch(console.log);
try {
  await fn();
  // console.log(promise);
} catch (e) {
  console.log(e);
}
