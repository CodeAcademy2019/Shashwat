function countWords(inputWords) {
    var count = {};
    count = inputWords.reduce(function(count, currentWord){
        if(currentWord in count)
            count[currentWord]++;
        else
            count[currentWord]=1;
        return count;
    },{})
    return count;
  }

  module.exports = countWords