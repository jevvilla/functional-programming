function countWords(inputWords) {
	// SOLUTION GOES HERE
	return inputWords.reduce((acc, curr) =>{
		acc[curr] = ++acc[curr] || 1;
		return acc
	}, {})
}

module.exports = countWords