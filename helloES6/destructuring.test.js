const destructuring = require('./destructuring');

console.log('We will extract the username and email from array and assign it to object');

test('The output should be {username : Shashwat Sinha, email : shashwat@gmail.com}',function(){
    var input = ['123','Shashwat Sinha','shashwat@gmail.com','22','Shashwat','Sinha'];
    var output = {username: 'Shashwat Sinha',
                    email: 'shashwat@gmail.com'};
    expect(destructuring(input)).toEqual(output);
});

test('The output should be {username : , email : }',function(){
    var input = ['123',' ',' ','22','Shashwat','Sinha'];
    var output = {username: ' ',
                    email: ' '};
    expect(destructuring(input)).toEqual(output);
});

test('The output should be {username : 112, email : 111}',function(){
    var input = ['123','112','111','22','Shashwat','Sinha'];
    var output = {username: '112',
                    email: '111'};
    expect(destructuring(input)).toEqual(output);
});