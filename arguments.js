/**
 *  to pass arguments to a function in javascript there is no need to 
 * say it to function how many variables will be accepted, 
 * you can know what arguments are being passed to function using
 * ** arguments **, this is an object 
 */

function dummy() {
	console.log( Array.prototype.slice.call(arguments))
}
dummy(1, 2, 3, "asd", "kjuan", 30, [5,6,7]);

var arr = [1, 2, 3, 4, 5, 6];
var str = "hola";
var result = [str].concat(arr)
console.log(result)

function dummy2(a) {
	return function(b){
		console.log(a, b)
	}
}

var invq = dummy2('hello');
invq("fsd");