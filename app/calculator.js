function stringCalculator(numString) {

    numString = numString || '0';

    const values = numString.split(',').map(Number);
    console.log('vals', values);

    return values.reduce((acc, val) => acc + val);
}

module.exports = stringCalculator;
