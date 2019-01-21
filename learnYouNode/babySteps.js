const sumOfArray = () => {
  const input = process.argv.slice(2);
  const integerInput = input.map(x => Number(x));
  const result = integerInput.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  console.log(result);
  return result;
};
sumOfArray();
module.exports = sumOfArray;
