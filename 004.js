function getShortMessages(messages) {
	let results = [];
	// SOLUTION GOES HERE
	return messages.filter(message => {
		return message.message.length < 50;
	}).map(message => {
		message.message
	})
	// for (let i = 0; i < messages.length; i++) {
	// 	if (messages[i].message.length < 50) {
	// 		results.push(messages[i].message);
	// 	}
	// }

	// return results
}

module.exports = getShortMessages