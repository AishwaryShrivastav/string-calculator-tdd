# String Calculator

A flexible string calculator that adds numbers with support for various delimiter formats. This calculator is built using Test-Driven Development (TDD) principles and provides robust handling of different input formats.

## Features

- Basic number addition with comma delimiter
- Support for newline as delimiter
- Custom single-character delimiters
- Multi-character delimiters
- Multiple delimiters of any length
- Negative number validation
- Numbers larger than 1000 are ignored

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/string-calculator-tdd.git

# Navigate to the project directory
cd string-calculator-tdd

# Install dependencies
npm install
```

## Usage

```javascript
const add = require('./src/stringCalculator');

// Basic usage with default delimiter (comma)
add("1,2,3")  // returns 6

// Using newlines as delimiters
add("1\n2,3") // returns 6

// Custom single-character delimiter
add("//;\n1;2") // returns 3

// Multi-character delimiter
add("//[***]\n1***2***3") // returns 6

// Multiple delimiters
add("//[*][%]\n1*2%3") // returns 6

// Multiple long delimiters
add("//[delim1][delim2]\n1delim12delim23") // returns 6
```

## Input Format Rules

1. **Empty String**: Returns 0
   ```javascript
   add("") // returns 0
   ```

2. **Single Number**: Returns the number itself
   ```javascript
   add("1") // returns 1
   ```

3. **Default Delimiters**: Numbers can be separated by commas or newlines
   ```javascript
   add("1,2,3")   // returns 6
   add("1\n2,3")  // returns 6
   ```

4. **Custom Delimiter**: Define using //[delimiter]\n format
   ```javascript
   add("//;\n1;2")  // uses semicolon as delimiter
   ```

5. **Multi-Character Delimiter**: Use square brackets
   ```javascript
   add("//[***]\n1***2***3")  // uses *** as delimiter
   ```

6. **Multiple Delimiters**: Define multiple using [delimiter1][delimiter2] format
   ```javascript
   add("//[*][%]\n1*2%3")  // uses both * and % as delimiters
   add("//[###][!!!]\n1###2!!!3")  // uses ### and !!! as delimiters
   ```

7. **Long Multiple Delimiters**: Support for delimiters of any length
   ```javascript
   add("//[delim1][delim2]\n1delim12delim23")  // uses delim1 and delim2 as delimiters
   ```

## Validation Rules

1. **Negative Numbers**: Not allowed, throws an exception
   ```javascript
   add("1,-2,3")  // throws "Negative numbers not allowed: -2"
   add("-1,-2,3") // throws "Negative numbers not allowed: -1, -2"
   ```

2. **Numbers > 1000**: Ignored in the sum
   ```javascript
   add("2,1001")  // returns 2
   add("1000,2")  // returns 1002 (1000 is included)
   ```

## Running Tests

The project includes a comprehensive test suite built with Jest. To run the tests:

```bash
npm test
```

Test cases cover:
- Basic functionality
- Custom delimiters
- Multiple delimiters
- Negative number validation
- Large number handling
- Edge cases

## Technical Details

- Built with JavaScript
- Uses Jest for testing
- Follows TDD principles
- Regular expression based delimiter handling
- Robust error handling
