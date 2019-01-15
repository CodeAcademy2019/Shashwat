//Code for verify
/*function destructuring(){
    var inputs = process.argv.slice(2);
    var userDetails = {};
    [ ,userDetails.username,userDetails.email] = inputs;
    console.log(userDetails);
    return userDetails;
}
destructuring();*/

//code for jest
function destructuring(inputs){
    //var inputs = process.argv.slice(2);
    var userDetails = {};
    [ ,userDetails.username,userDetails.email] = inputs;
    console.log(userDetails);
    return userDetails;
}
module.exports = destructuring;