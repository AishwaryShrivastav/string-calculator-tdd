/**
 * A string calculator that adds numbers provided as a comma-separated string.
 * 
 * @param {string} numbers - A string containing comma-separated numbers (e.g., "1,2,3")
 *                          An empty string represents no numbers.
 * @returns {number} The sum of all numbers in the input string.
 *                   Returns 0 for an empty string.
 * 
 * @example
 * add("1,2,3") // returns 6
 * add("") // returns 0
 * add("5") // returns 5
 */
function add(numbers) {
    if (numbers === "") return 0;
    return numbers.split(",").map(Number).reduce((sum, num) => sum + num, 0);
}

module.exports = add;