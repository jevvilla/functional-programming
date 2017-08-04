function getShortMessages(messages) {
	  // SOLUTION GOES HERE
		return messages.filter(message =>{
			return message.message.length < 50;
		}).map(message => message.message)
    }
    
    module.exports = getShortMessages