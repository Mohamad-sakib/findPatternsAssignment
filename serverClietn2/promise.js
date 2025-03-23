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

const anotherAsync = async () => {
  const file = await Deno.open("./deno.lock", { read: true });
  const readable = file.readable;
  for await (const chunk of readable) {
    console.log(chunk);
  }
};

const asyncFn1 = async () => {
  anotherAsync();
  console.log("comming");
};

asyncFn1();
