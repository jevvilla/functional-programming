function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
      }
      return result
    }
	
	function doubleAll(numbers) {
		console.log(numbers)
		return numbers.map(number => number * 2);
	}

module.exports = doubleAll
