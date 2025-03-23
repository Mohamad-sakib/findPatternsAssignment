import { assertEquals } from "jsr:@std/assert";

const conn = await Deno.connect({ port: 8000 });
// await conn.write(new TextEncoder().encode("ADD 1 1"));
// const response = await conn.readable.getReader().read();
// Deno.stdout.write(response.value);
const decoder = new TextDecoder();

const test = async (message, expected) => {
  await conn.write(new TextEncoder().encode(message));
  const response = await conn.readable.getReader().read();
  const actual = decoder.decode(response.value);
  return assertEquals(actual, expected);
};

const testAll = async () => {
  await test("ADD 1 2", "3");
};

await testAll();
console.log("all test pass!");
