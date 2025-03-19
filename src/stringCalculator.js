/**
 * A string calculator that adds numbers provided in a string with flexible delimiter options.
 * 
 * @param {string} numbers - Input string containing numbers separated by delimiters:
 *                          - Empty string returns 0
 *                          - Numbers can be separated by commas (,) or newlines (\n)
 *                          - Custom delimiter can be specified using //[delimiter]\n format
 *                            Example: "//;\n1;2" uses semicolon as delimiter
 *                          - Numbers bigger than 1000 are ignored in the sum
 * @throws {Error} If negative numbers are found in the input
 * @returns {number} The sum of all numbers in the input string
 * 
 * @example
 * add("1,2,3")     // returns 6
 * add("")          // returns 0 
 * add("1\n2,3")    // returns 6 (mixed delimiters)
 * add("//;\n1;2")  // returns 3 (custom delimiter)
 * add("2,1001")    // returns 2 (numbers > 1000 are ignored)
 */
function add(numbers) {
    // Handle empty string case
    if (numbers === "") return 0;

    let delimiter = /[,\n]/;  // Default delimiters: comma and newline
    let numbersToProcess = numbers;

    // Handle custom delimiter case
    if (numbers.startsWith("//")) {
        const customDelimiterIndex = numbers.indexOf("\n");
        if (customDelimiterIndex !== -1) {
            // Extract custom delimiter and remaining numbers
            const customDelimiter = numbers.substring(2, customDelimiterIndex);
            numbersToProcess = numbers.substring(customDelimiterIndex + 1);
            delimiter = new RegExp(escapeRegExp(customDelimiter));
        }
    }

    // Split string by delimiter and convert to numbers
    const numberList = numbersToProcess.split(delimiter)
        .map(num => num.trim())
        .filter(num => num !== '')
        .map(Number);

    // Check for negative numbers
    const negativeNumbers = numberList.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }

    // Filter out numbers greater than 1000 and calculate sum
    return numberList
        .filter(num => num <= 1000)  // Ignore numbers greater than 1000
        .reduce((sum, num) => sum + num, 0);
}

/**
 * Helper function to escape special characters in custom delimiters
 * @param {string} string - The string to escape
 * @returns {string} Escaped string safe for RegExp
 */
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = add;