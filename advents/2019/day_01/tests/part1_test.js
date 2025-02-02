import { main, fuleRequired } from "../parts/part1.js";
import { assertEquals } from "jsr:@std/assert";
import { afterEach, beforeEach, describe, it } from "jsr:@std/testing/bdd";

const file = {
  "module.txt": "12\n14\n1969\n100756",
};

const fakeReadTextFile = (path) => {
  if (file[path] === undefined) {
    throw "invalid file name";
  }
  return file[path];
};

const oldReadTextFile = Deno.readTextFileSync;

describe("fuleRequired", () => {
  it("for mass of module zero", () => {
    assertEquals(fuleRequired(0), -2);
  });

  it("for mass of module more then zero", () => {
    assertEquals(fuleRequired(12), 2);
    assertEquals(fuleRequired(14), 2);
    assertEquals(fuleRequired(1969), 654);
    assertEquals(fuleRequired(100756), 33583);
  });
});

describe("main", () => {
  beforeEach(() => {
    Deno.readTextFileSync = fakeReadTextFile;
  });

  afterEach(() => {
    Deno.readTextFileSync = oldReadTextFile;
  });

  it("should return total fule required for all modules", () => {
    assertEquals(main("module.txt"), 34241);
  });
});
