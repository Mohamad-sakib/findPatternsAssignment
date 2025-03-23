import { assertEquals } from "jsr:@std/assert";

const conn = await Deno.connect({ port: 8000 });
const decoder = new TextDecoder();

const generateMsg = (jsonObj) => JSON.stringify(jsonObj);

const test = async (cmd, args, expected) => {
  const msg = generateMsg({ cmd, args });
  await conn.write(new TextEncoder().encode(msg));
  const reader = conn.readable.getReader();
  const response = await reader.read();
  const actual = decoder.decode(response.value);
  console.log(actual);
  assertEquals(JSON.parse(actual), expected);
  reader.releaseLock();
};

const testAllRaw = async () => {
  await testRaw("ADD 1 2", "3");
  await testRaw("ADD 1 1", "2");
  await testRaw("ADD 1 4", "2");
};

// await testAllRaw();

const testAll = async () => {
  await test("ADD", [1, 2], { result: 3 });
  await test("ADD", [1, 4], { result: 5 });
};

await testAll().then(
  () => {
    console.log("all test pass!");
  },
  (e) => {
    console.log(e);
  }
);
