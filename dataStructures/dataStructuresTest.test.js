const calcMaxProfit = require('./dataStructuresTest'); 
test('Maximum profit and number of  boxes giving that benefit',function(){
    var input = [1,[6, 12, 3, 10, 7, 16, 5], 0];
    var output = [1, 8, [4]];
    expect(calcMaxProfit(input)).toEqual(output);
});
test('Maximum profit and number of  boxes giving that benefit',function(){
    var input = [1, [6, 1, 2, 3, 4, 5, 6], 0];
    var output = [1, 39, [6]];
    expect(calcMaxProfit(input)).toEqual(output);
});
test('Maximum profit and number of  boxes giving that benefit',function(){
    var input = [1, [6, 1, 12, 7, 9, 14, 6], 0];
    var output = [1, 11, [4,6]];
    expect(calcMaxProfit(input)).toEqual(output);
});
test('Maximum profit and number of  boxes giving that benefit',function(){
    var input = [1, [5, 12, 3, 10, 15, 5], 0];
    var output = [1, 5 ,[2,3,5]];
    expect(calcMaxProfit(input)).toEqual(output);
});
test('Maximum profit and number of  boxes giving that benefit',function(){
    var input = [1, [10, 5, 13, 8, 7, 11, 9, 2, 10, 11, 13], 0];
    var output = [1, 15, [7, 8]];
    expect(calcMaxProfit(input)).toEqual(output);
});
test('Maximum profit and number of  boxes giving that benefit',function(){
    var input = [3,[3, 19, 9, 2],[5, 20, 11, 10, 7, 1],[2, 18, 2],0];
    var output = [3,1,[5, 7, 8, 10]];
    expect(calcMaxProfit(input)).toEqual(output);
});