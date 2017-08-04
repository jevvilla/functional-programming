function repeat(operation, num) {
	   //when num is equal or lower than zero, program ends
		if(num <= 0) return;
		operation()
		repeat(operation, --num)
    }
    
    module.exports = repeat
