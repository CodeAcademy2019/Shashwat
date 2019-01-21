// This function just takes one stack as a input and gives max profit
const maxProfitSIngleStack = (input) => {
  let result = [];
  const finalResult = [];
  let maxEarning = -200; let
    currentEarning = 0;
  const len = input.length;
  for (let i = 0; i < len; i += 1) {
    input[i] = 10 - input[i];
  }
  for (let i = 0; i < len; i += 1) {
    currentEarning += input[i];
    if (currentEarning > maxEarning) {
      maxEarning = currentEarning;
      result.length = 0;
      result.push(i + 1);
    } else if (currentEarning === maxEarning) {
      result.push(i + 1);
    }
  }
  result = result.sort();
  if (result.length > 10) {
    result = result.splice(10, result.length - 10);
  }
  finalResult.push(maxEarning);
  finalResult.push(result);
  return finalResult;
};
// End of function for generating answer for one stack

//  Start of function for calculating all combinations of all boxes giving Maximum Profit
const combinationsOfBoxes = (arrInput) => {
  let combinations = [];
  const profits = [];
  const indexOfZeros = [];
  const numStacks = arrInput.length;
  for (let i = 0; i < numStacks; i += 1) {
    profits.push(arrInput[i][0]);
  }
  return combinations;
};
//  End of function for calculating all combinations of all boxes giving Maximum Profit

// Start of Function for taking care of multiple stacks
const maxProfit = (arrayOfInputs) => {
  const intermediateResults = [];
  const finalResult = [];
  let counter = 1;
  const inputSize = arrayOfInputs.length;
  for (let i = 0; i < inputSize - 1; i += 1) {
    if (i === inputSize - 1) {
      break;
    }
    const numStacks = arrayOfInputs[i];
    intermediateResults.push(counter);
    for (let j = 0; j < numStacks; j += 1) {
      const singleStack = arrayOfInputs[i + j + 1];
      singleStack.shift();
      const tempResult = maxProfitSIngleStack(singleStack);
      intermediateResults.push(tempResult[0]);
      intermediateResults.push(tempResult[1]);
    }
    counter += 1;
    i += numStacks;
    finalResult.push(intermediateResults[0]);
    let maximumProfit = 0;
    for (let j = 0; j < numStacks; j += 1) {
      maximumProfit += intermediateResults[(j * 2) + 1];
    }
    finalResult.push(maximumProfit);
    for (let j = 0; j < numStacks; j += 1) {
      finalResult.push(intermediateResults[(j * 2) + 2]);
    }
  }
  return finalResult;
};
// End of Function for taking care for multiple stacks

module.exports = maxProfit;
