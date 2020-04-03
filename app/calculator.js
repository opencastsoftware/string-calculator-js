const _ = require("lodash");
function stringCalculator(numString) {
  //const inputString = numString.replace("\n", ",").replace(" ", "");
  const inputString = numString.split("\n").join(",");
  const arrNumbers = inputString.split(",");
  console.log(">> INPUT", JSON.stringify(arrNumbers, null, 2));
  let sum = 0;
  //   for(let i; i<arrNumbers.length, i++;) {
  //     console.log(">>>>>>", arrNumbers[i]);
  //     //if (_.isNumber(arrNumbers[i])) {
  //     //    sum += _.parseInt(arrNumbers[i]);
  //     //  }
  //   }
  arrNumbers.forEach(element => {
    try {
      if (element.length > 0) {
        sum += _.parseInt(element);
      }
    } catch (e) {
      console.error(">>>> ERROR", e);
    }
  });
  return sum;
}

module.exports = stringCalculator;
