//  module.exports = function(namespace) {
// 	  // SOLUTION GOES HERE
// 		let str = '';
// 		let arr = [];
// 		return function(){
// 			arr = [namespace].concat(Array.prototype.slice.call(arguments))
// 			arr.map(x => str = str + ' ' + x)
// 			console.log(str.trim())
// 		}
// }

module.exports = function(namespace) {
	return console.log.bind(console, namespace)
}