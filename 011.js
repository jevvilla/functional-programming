module.exports = function arrayMap(arr, fn) {
	// SOLUTION GOES HERE
	return arr.reduce((acc, curr) => {
		acc.push(fn.apply(arguments, [curr]))
		return acc
	}, [])
}


// module.exports = function arrayMap(arr, fn, thisArg) {
// 	return arr.reduce(function (acc, item, index, arr) {
// 		acc.push(fn.call(thisArg, item, index, arr))
// 		return acc
// 	}, [])
// }