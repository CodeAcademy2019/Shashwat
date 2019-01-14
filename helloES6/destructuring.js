function destructuring(){
    var inputs = process.argv.slice(2);
    var userDetails = {};
    [ ,userDetails.username,userDetails.email] = inputs;
    console.log(userDetails);
    return userDetails;
}
destructuring();

module.exports = destructuring;