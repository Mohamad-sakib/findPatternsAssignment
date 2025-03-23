import { assertEquals } from "jsr:@std/assert";

const conn = await Deno.connect({ port: 8000 });
const decoder = new TextDecoder();

const generateMsg = (jsonObj) => JSON.stringify(jsonObj);

const test = async (cmd, args, expected) => {
  const msg = generateMsg({ cmd, args });
  await conn.write(new TextEncoder().encode(msg));
  const reader = conn.readable.getReader();
  const response = await reader.read();
  reader.releaseLock();
  const actual = JSON.parse(decoder.decode(response.value));
  console.log(actual);
  assertEquals(actual.result | actual.error, expected);
};

const parse = (msg) => {
  const [cmd, ...args] = msg.split(/\s+/);
  return { cmd, args: args.map(Number) };
};

const testRaw = async (msg, expected) => {
  const { cmd, args } = parse(msg);
  console.log(msg, cmd, args);
  await test(cmd, args, expected);
};

const testAllRaw = async () => {
  await testRaw("ADD 1 2", 3);
  await testRaw("ADD 1 1", 2);
};

// await testAllRaw();

const testAll = async () => {
  await test("ADD", [1, 2], { result: 3 });
  await test("ADD", [1, 4], { result: 5 });
  await test("SUB", [1, 4], { result: -3 });
  await test("SUB", [1, 1], { result: 0 });
  await test("MUL", [1, 4], { result: 4 });
  await test("MUL", [1, 0], { result: 0 });
  await test("DIV", [1, 0], { result: null });
  await test("DIV", [1, 2], { result: 0.5 });
  await test("ABS", [1], { result: 1 });
};

// await testAll().then(
//   () => {
//     console.log("all test pass!");
//   },
//   (e) => {
//     console.log(e);
//   }
// );

await testAllRaw().then(
  () => {
    console.log("all test pass!");
  },
  (e) => {
    console.log(e);
  }
);
