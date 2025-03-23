import { assertEquals } from "jsr:@std/assert";

const conn = await Deno.connect({ port: 8000 });
const decoder = new TextDecoder();

const test = async (message, expected) => {
  await conn.write(new TextEncoder().encode(message));
  const reader = conn.readable.getReader();
  const response = await reader.read();
  const actual = decoder.decode(response.value);
  assertEquals(actual, expected);
  reader.releaseLock();
};

const testAllRaw = async () => {
  await testRaw("ADD 1 2", "3");
  await testRaw("ADD 1 1", "2");
};

// await testAllRaw();

const testAll = async () => {};
console.log("all test pass!");
