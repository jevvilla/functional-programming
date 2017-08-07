function talk() {
	console.log(this.sound);
}

let animal = {
	talk
}

let cat = {
	sound: 'meoww',
	action: 'eating whiskas'
}

/**
 * Prototypes are like delegates, where we can make use of setPrototypeOf mehod 
 * to set extra properties to an object
 */
Object.setPrototypeOf(cat, animal);
animal.talk = function() {
	console.log(this.action);
}
 cat.talk()