/*function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      return submittedUsers.every(function(element){
        return goodUsers.some(function(validUsers){
            return element===validUsers;
        })
      })
    }
  }
*/
  function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      return submittedUsers.every(function(users){
          return goodUsers.includes(users);
      })
    };
  }


  module.exports = checkUsersValid