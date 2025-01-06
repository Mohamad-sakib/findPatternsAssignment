import { validateDate } from "./dateValidate.js";
import * as assert from "jsr:@std/assert";

Deno.test("test valid Date in   yyyy-mm-dd format", () => {
  assert.assertEquals(validateDate("2025-01-07", "yyyy-mm-dd"), true);
});

Deno.test("test valid Date in mm-dd-yyyy format", () => {
  assert.assertEquals(validateDate("01-07-2025", "mm-dd-yyyy"), true);
});

Deno.test("test valid Date in dd-mm-yyyy format", () => {
  assert.assertEquals(validateDate("30-12-2025", "dd-mm-yyyy"), true);
});

Deno.test("test Invalid Date in yyyy-dd-mm format", () => {
  assert.assertEquals(validateDate("2025-32-07", "yyyy-mm-dd"), false);
});

Deno.test("test Invalid Date in mm-dd-yyyy format", () => {
  assert.assertEquals(validateDate("13-07-2025", "mm-dd-yyyy"), false);
});

Deno.test("test Invalid Date in dd-mm-yyyy format", () => {
  assert.assertEquals(validateDate("32-13-2025", "dd-mm-yyyy"), false);
});

Deno.test("test  LeapYear Invalid Date in yyyy-dd-mm format", () => {
  assert.assertEquals(validateDate("2025-29-02", "yyyy-mm-dd"), false);
});

Deno.test("test LeapYear Invalid Date in mm-dd-yyyy format", () => {
  assert.assertEquals(validateDate("02-29-2025", "mm-dd-yyyy"), false);
});

Deno.test("test LeapYear Invalid Date in dd-mm-yyyy format", () => {
  assert.assertEquals(validateDate("29-02-2025", "dd-mm-yyyy"), false);
});

Deno.test("test  LeapYear valid Date in yyyy-mm-dd format", () => {
  assert.assertEquals(validateDate("2004-02-29", "yyyy-mm-dd"), true);
});

Deno.test("test LeapYear valid Date in mm-dd-yyyy format", () => {
  assert.assertEquals(validateDate("02-29-2004", "mm-dd-yyyy"), true);
});

Deno.test("test LeapYear valid Date in dd-mm-yyyy format", () => {
  assert.assertEquals(validateDate("29-02-2024", "dd-mm-yyyy"), true);
});
