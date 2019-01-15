const rest = require('./rest');

console.log('We are tring to calculate the average of variable number of numbers');

test('average(1, 1, 2, 3, 5, 8, 13, 21, 34, 55) returned 14.3',function(){
    var output = 14.3;
    expect(rest(1, 1, 2, 3, 5, 8, 13, 21, 34, 55)).toEqual(output);
});