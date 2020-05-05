function stringCalculator(numString) {

    numString = numString || '0';

    const regEx = new RegExp(/\d/, 'g');

    const res = numString.match(regEx);
    console.log("stringCalculator -> res", res);
    


    // const selectedDelim = delimiters.find((v) => newString.includes(v));
    // console.log("stringCalculator -> selectedDelim", selectedDelim);

    // const selectedDim = selectedDelim || ',';
    

    const values = numString.split(',').map(Number);
    console.log('vals', values);

    return values.reduce((acc, val) => acc + val);
}

module.exports = stringCalculator;
