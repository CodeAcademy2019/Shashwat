const destructuring = require('./destructuring');

console.log('We will extract the username and email from array and assign it to object');

test('The output should be {username : Shashwat Sinha, email : shashwat@gmail.com}',function(){
    var input = ['123','Shashwat Sinha','shashwat@gmail.com','22','Shashwat','Sinha'];
    var output = {username: 'Shashwat Sinha',
                    email: 'shashwat@gmail.com'};
    expect(destructuring(input)).toEqual(output);
});