const defaultArguments = require('./defaultArguments');

console.log('We are tring to calculate the midpoint of upperbound and lowerbound');

test('midpoint(1, 10) returned 5.5',function(){
    var input1 = 1;
    var input2 = 10;
    var output = 5.5;
    expect(defaultArguments(input1, input2)).toEqual(output);
});