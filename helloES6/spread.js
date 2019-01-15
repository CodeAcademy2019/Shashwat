/*function spread(){
    var inputs = process.argv.slice(2);
    var min = Math.min(...inputs);
    var output = `The minimum of [${inputs}] is ${min}`;
    console.log(output);
    return output;
}
spread();*/

//For Jest Test
function spread(...inputs){
    //var inputs = process.argv.slice(2);
    var min = Math.min(...inputs);
    var output = `The minimum of ${inputs} is ${min}`;
    console.log(output);
    return output;
}
spread();

module.exports = spread;