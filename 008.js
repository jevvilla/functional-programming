function duckCount() {
	// SOLUTION GOES HERE
	return Array.prototype.slice.call(arguments)
		  .filter(o => Object.prototype.hasOwnProperty.call(o, 'quack')).length
}

module.exports = duckCount