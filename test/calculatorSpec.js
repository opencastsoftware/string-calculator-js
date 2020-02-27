/*
String Calculator Kata
  Create a simple String calculator with a method int Add(string numbers)

  1. The method can take 0, 1 or 2 numbers,
  and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”

  2. Start with the simplest test case of an empty string and move to 1 and two numbers

  3. Remember to solve things as simply as possible so that you force yourself to write tests
  you did not think about.

  4. Remember to refactor after each passing test

Requirements:
  1. Allow the Add method to handle an unknown amount of numbers
  2. Allow the Add method to handle new lines between numbers (instead of commas).
     the following input is ok:  “1\n2,3”  (will equal 6)

  3. Support different delimiters
      to change a delimiter, the beginning of the string will contain a separate line that looks like this:
      “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return three where the default delimiter is ‘;’ .
      the first line is optional. all existing scenarios should still be supported
  4. Negative numbers
    Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed.
    if there are multiple negatives, show all of them in the exception message
*/

var expect = require("chai").expect;

var stringCalculator = require("../app/calculator.js");

describe("stringCalculator", function() {

    it("should return 0", function() {
        expect(stringCalculator()).to.equal(0);
    });
});
