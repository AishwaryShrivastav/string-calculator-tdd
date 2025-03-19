/**
 * Test suite for the string calculator function.
 * The calculator takes a string input of comma-separated numbers
 * and returns their sum. It handles various input cases including
 * empty strings, single numbers, and multiple numbers.
 */
const add = require("../src/stringCalculator");

/**
 * Base case: Empty string should return 0
 * This is the simplest case for the calculator
 */
test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
});

/**
 * Single number case: String with one number should return that number
 * Tests the parsing of a single number from string to integer
 */
test("returns the number itself when a single number is passed", () => {
    expect(add("1")).toBe(1);
});

/**
 * Two number case: Tests basic addition functionality
 * Verifies that the calculator can split the string and sum two numbers
 */
test("returns the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
});

/**
 * Multiple number case: Tests addition of several numbers
 * Verifies that the calculator can handle an arbitrary number of inputs
 */
test("returns the sum of multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
});

/**
 * Mixed delimiter case: Tests handling of newline characters
 * Verifies that the calculator can handle both commas and newlines
 * as valid delimiters between numbers. This ensures flexibility
 * in input format and maintains backward compatibility with
 * existing comma-separated inputs.
 */

test("handles new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
});

/**
 * Custom delimiter case: Tests support for user-defined delimiters
 * Verifies that the calculator can handle a custom delimiter specified 
 * in the format "//[delimiter]\n[numbers]". In this case, testing
 * semicolon as a custom delimiter.
 * 
 * Example input: "//;\n1;2" uses semicolon as delimiter for numbers 1,2
 */
test("supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
});