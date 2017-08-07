let  dog = {
	sound: 'woooof',
	talk: function () {
		console.log(this.sound);
	}
}

/**
 * Following line of code prints woooof without need to bind and object
 * because **this** refers to the object's scope  which is calling,
 * dog in this case.
 */
dog.talk(); 
let rottweiler =  dog.talk

rottweiler() // prints undefined, because **this** points to window object, which is the actual scope

/**
 * to use print correctly what rottweiler object has, is needed bind dog 
 * object passing it as paremeter, now **this** points to the passed object (dog)
 *  instead of window.
 */
rottweiler.bind(dog)(); // parenthesis at the end are used to call the function



/**
 * *********************************************************************************************************
 */


/**
 * function used as dummy, if we cal it without binding or calling usign an object
 *  it is gointg to print **undefined** because **this** is pointing or refering to window object
 * and that object does not have a property called **say **
 */
(saySomething = function(){
	console.log(this.say);
})();


/**
 *  this object has talk property which use **saySomething** function as its talk property value,
 */
let luis = {
	talk: saySomething,
	say: 'hello I am Luis..... cool'
}

/**
 *  invoque talk property of luis object, and it will run correctly,
 * prints 'hello I am Luis..... cool', because its beign called from luis object
 * so **this** points to luis object
 */
luis.talk();


/**
 * so.... What is going to happen in the next lines of code?
 */
let juan = {
	tell: luis.talk,
	say: 'Hello I am Juan.... coolest than luis !!'
}

juan.tell()
