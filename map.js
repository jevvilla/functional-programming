var myArray = [1,2,3,4,5,6,7,8,8,9,0,12,11,13,14,15,16,45,43,67,78,3,22,33,44,55,66,77];

const addTwo = (array) => {
	return [array].map(value => {
		return value * 2;
	});
};

console.log(addTwo(myArray));
console.log(array);
