const defaultArguments2 = require('./defaultArguments2');

console.log('We are tring to manipulate the given message to add exclamations to its end.');

test('mdefaultArguments2("Shashwat") returns Shashwat!!!!!!!!!!',function(){
    var input1 = 'Shashwat';
    var input2 = 10;
    var output = 'Shashwat!!!!!!!!!!';
    expect(defaultArguments2(input1, input2)).toEqual(output);
});