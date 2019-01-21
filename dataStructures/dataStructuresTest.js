//This function just takes one stack as a input and gives max profit
const maxProfitSIngleStack = (input) => {
    let result = [];
    let finalResult = [];
    let maxEarning = -200, currentEarning=0;
    let len = input.length;
    for(let i = 0; i<len; i++){
        input[i] = 10-input[i];
    }
    for(let i = 0; i<len; i++){
        currentEarning = currentEarning + input[i];
        if(currentEarning>maxEarning){
            maxEarning = currentEarning;
            result.length=0;
            result.push(i+1);
        }
        else if(currentEarning===maxEarning){
            result.push(i+1);
        }
    }
    result = result.sort();
    if(result.length>10){
        result = result.splice(10,result.length-10);
    }
    finalResult.push(maxEarning);
    finalResult.push(result);
    return finalResult;
}
//End of function for generating answer for one stack

//Start of Function for taking care of multiple stacks
const maxProfit = (arrayOfInputs) => {
    let intermediateResults = [];
    let finalResult = [];
    let counter = 1;
    let inputSize = arrayOfInputs.length;
    for(let i =0;i<inputSize-1;i++){
        if(i===inputSize-1){
            break;
        }
        let numStacks = arrayOfInputs[i];
        intermediateResults.push(counter);
        for(let j=0;j<numStacks;j++){
            let singleStack = arrayOfInputs[i+j+1];
            singleStack.shift();
            let tempResult = maxProfitSIngleStack(singleStack);
            intermediateResults.push(tempResult[0]);
            intermediateResults.push(tempResult[1]);
        }
        counter++;
        i = i+numStacks;
        finalResult.push(intermediateResults[0]);
        let maximumProfit = 0;
        for(let j = 0;j<numStacks;j++){
            maximumProfit = maximumProfit + intermediateResults[(j*2)+1];
        }
        finalResult.push(maximumProfit);
        for(let j = 0;j<numStacks;j++){
            finalResult.push(intermediateResults[(j*2)+2]);
        }
    }
    console.log(finalResult);
    return finalResult;
    


}
//End of Function for taking care for multiple stacks

module.exports = maxProfit;
