/**
 * Test suite for the string calculator function.
 * The calculator takes a string input of numbers with various delimiters
 * and returns their sum. It handles various input cases including
 * empty strings, single numbers, multiple numbers, and custom delimiters.
 */
const add = require("../src/stringCalculator");

describe("String Calculator", () => {
  /**
   * Base case: Empty string should return 0
   */
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  /**
   * Single number case: String with one number should return that number
   */
  test("returns the number itself when a single number is passed", () => {
    expect(add("1")).toBe(1);
    expect(add("42")).toBe(42);
  });

  /**
   * Two number case: Tests basic addition functionality
   */
  test("returns the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
    expect(add("10,20")).toBe(30);
  });

  /**
   * Multiple number case: Tests addition of several numbers
   */
  test("returns the sum of multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
    expect(add("5,10,15,20")).toBe(50);
  });

  /**
   * Mixed delimiter case: Tests handling of newline characters
   */
  test("handles new lines between numbers as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("1,2\n3")).toBe(6);
    expect(add("1\n2\n3")).toBe(6);
  });

  /**
   * Custom delimiter case: Tests support for user-defined delimiters
   */
  test("supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//:\n1:2:3")).toBe(6);
    expect(add("//$\n1$2$3$4")).toBe(10);
  });

  /**
   * Negative number case: Tests error handling for negative inputs
   */
  test("throws an exception for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    expect(() => add("-1,-2,3")).toThrow("Negative numbers not allowed: -1, -2");
    expect(() => add("//;\n1;-2;-3")).toThrow("Negative numbers not allowed: -2, -3");
  });
});