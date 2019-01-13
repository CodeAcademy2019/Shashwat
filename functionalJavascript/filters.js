    function getShortMessages(messages) {
      var results = messages.map(function(messageObject){
          return messageObject.message;
      }).filter(function(message){
          return message.length<50;
      })
      return results;
    }
    module.exports = getShortMessages;