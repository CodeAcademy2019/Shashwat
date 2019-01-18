const calcMaxProfit = require('./dataStructuresTest'); 
test('Maximum profit and number of  boxes giving that benefit',function(){
    var input = [12, 3, 10, 7, 16, 5];
    var output = [8,4];
    expect(calcMaxProfit(input)).toEqual(output);
});
test('Maximum profit and number of  boxes giving that benefit',function(){
    var input = [1,2,3,4,5,6];
    var output = [39,6];
    expect(calcMaxProfit(input)).toEqual(output);
});
test('Maximum profit and number of  boxes giving that benefit',function(){
    var input = [1,12,7,9,14,6];
    var output = [11,4,6];
    expect(calcMaxProfit(input)).toEqual(output);
});
test('Maximum profit and number of  boxes giving that benefit',function(){
    var input = [12, 3, 10, 15, 5];
    var output = [5,2,3,5];
    expect(calcMaxProfit(input)).toEqual(output);
});
test('Maximum profit and number of  boxes giving that benefit',function(){
    var input = [5, 13, 8, 7, 11, 9, 2, 10, 11, 13];
    var output = [15, 7, 8];
    expect(calcMaxProfit(input)).toEqual(output);
});