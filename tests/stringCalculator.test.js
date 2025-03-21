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
  /**
   * Large number case: Tests that numbers bigger than 1000 are ignored
   */
  test("ignores numbers bigger than 1000", () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,1001,2")).toBe(1002);
    expect(add("1,999,1000,1001,2000")).toBe(2000);
    expect(add("//;\n1;1001;2")).toBe(3);
  });

  /**
   * Multi-character delimiter case: Tests support for delimiters of any length
   */
  test("supports multi-character delimiters", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
    expect(add("//[===]\n1===2===3")).toBe(6);
    expect(add("//[....]\n1....2....3")).toBe(6);
    expect(add("//[sep]\n1sep2sep3")).toBe(6);
    expect(add("//[***]\n1***2***1001***4")).toBe(7);  // Testing with number > 1000
  });

  /**
   * Multiple delimiters case: Tests support for multiple different delimiters
   */
  test("supports multiple delimiters", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
    expect(add("//[###][!!!][,,,]\n1###2!!!3,,,4")).toBe(10);
    expect(add("//[*][!!][rrr]\n1*2!!3rrr4")).toBe(10);
    expect(add("//[*][%]\n1*2%1001*3")).toBe(6);  // Testing with number > 1000
    expect(add("//[++][--]\n1++2--3--4++5")).toBe(15);
  });

  /**
   * Long multiple delimiters case: Tests support for multiple delimiters with length > 1
   */
  test("supports multiple long delimiters", () => {
    expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
    expect(add("//[delim1][delim2]\n1delim12delim23")).toBe(6);
    expect(add("//[separator][divider]\n1separator2divider3")).toBe(6);
    expect(add("//[long-delim][short]\n1long-delim2short3")).toBe(6);
    expect(add("//[***][%%%][###]\n1***2%%%3###4")).toBe(10);
    expect(add("//[long-delim][short][medium]\n1long-delim2short3medium4")).toBe(10);
  });
});