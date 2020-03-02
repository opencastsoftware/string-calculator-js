function stringCalculator(numString, delim) {
  //make sure that if we pass an empty parameter, it's being handled
  //properly
  if (!numString || numString.length === 0) {
    return 0;
  }
  var stringAsArray = numString.split(",");
  var sum = 0;
  stringAsArray.forEach(function(element) {
    var elemAsNumber = parseInt(element.trim());
    sum += elemAsNumber;
  });
  return sum;
}

module.exports = stringCalculator;
