const sumOfArray = () => {
  const input = process.argv.slice(2);
  const result = input.reduce((accumulator, currentValue) => { 
    return accumulator + Number(currentValue);
  }, 0);
  console.log(result);
  return result;
};
module.exports = sumOfArray;
