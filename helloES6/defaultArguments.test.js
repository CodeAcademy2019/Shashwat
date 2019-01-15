const defaultArguments = require('./defaultArguments');

console.log('We are tring to calculate the midpoint of upperbound and lowerbound');

test('midpoint(1, 10) returns 5.5',function(){
    var input1 = 1;
    var input2 = 10;
    var output = 5.5;
    expect(defaultArguments(input1, input2)).toEqual(output);
});

test('midpoint(1.1, 10.9) returns 6',function(){
    var input1 = 1.1;
    var input2 = 10.9;
    var output = 6;
    expect(defaultArguments(input1, input2)).toEqual(output);
});

test('midpoint(a, b) returns NaN',function(){
    var input1 = 'a';
    var input2 = 'b';
    var output = NaN;
    expect(defaultArguments(input1, input2)).toEqual(output);
});