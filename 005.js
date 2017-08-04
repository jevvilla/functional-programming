function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
		// SOLUTION GOES HERE
		return submittedUsers.every(e => {
			return goodUsers.some(s => e.id == s.id)
		})
      };
    }
    
    module.exports = checkUsersValid