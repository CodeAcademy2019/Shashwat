const defaultArguments2 = require('./defaultArguments2');

console.log('We are tring to manipulate the given message to add exclamations to its end.');

test('defaultArguments2("Shashwat") returns Shashwat!!!!!!!!!!',function(){
    var input1 = 'Shashwat';
    var input2 = 10;
    var output = 'Shashwat!!!!!!!!!!';
    expect(defaultArguments2(input1, input2)).toEqual(output);
});

test('defaultArguments2("Hello") returns Hello!!!!!',function(){
    var input1 = 'Hello';
    var input2 ;
    var output = 'Hello!!!!!';
    expect(defaultArguments2(input1, input2)).toEqual(output);
});

test('defaultArguments2("") returns ',function(){
    var input1 = '';
    var input2 = null;
    var output = '';
    expect(defaultArguments2(input1, input2)).toEqual(output);
});

test('defaultArguments2("") returns !!!!!',function(){
    var input1 = '';
    var input2 = 5;
    var output = '!!!!!';
    expect(defaultArguments2(input1, input2)).toEqual(output);
});