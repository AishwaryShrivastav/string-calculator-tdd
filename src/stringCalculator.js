/**
 * A string calculator that adds numbers provided in a string with flexible delimiter options.
 * 
 * @param {string} numbers - Input string containing numbers separated by delimiters:
 *                          - Empty string returns 0
 *                          - Numbers can be separated by commas (,) or newlines (\n)
 *                          - Custom delimiter can be specified using //[delimiter]\n format
 *                            Example: "//;\n1;2" uses semicolon as delimiter
 * 
 * @returns {number} The sum of all numbers in the input string
 * 
 * @example
 * add("1,2,3")     // returns 6
 * add("")          // returns 0 
 * add("1\n2,3")    // returns 6 (mixed delimiters)
 * add("//;\n1;2")  // returns 3 (custom delimiter)
 */
function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }

    return numbers.split(delimiter).map(Number).reduce((sum, num) => sum + num, 0);
}

module.exports = add;