//Code for verifying
/*function arrowFunction1(){
    var inputs = process.argv.slice(2);
    var results = inputs.map(x => x.charAt(0)).reduce((result,char) => result+char,'');
    var answer = `[${inputs}] becomes "${results}"`;
    console.log(answer);
    return answer;
}
arrowFunction1();
*/
//Code for Jest testing
function arrowFunction1(...inputs){
    //var inputs = process.argv.slice(2);
    var results = inputs.map(x => x.charAt(0)).reduce((result,char) => result+char,'');
    //var answer = `[${inputs}] becomes "${results}"`;
    console.log(results);
    return results;
}
module.exports = arrowFunction1;