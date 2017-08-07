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
rottweiler.bind(dog)();