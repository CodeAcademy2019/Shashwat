//This code is just for one stack
//This function just takes one stack as a input and gives max profit
const maxProfit = (input) => {
    let result = [];
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
    result.unshift(maxEarning);
    return result;
}


module.exports = maxProfit;
