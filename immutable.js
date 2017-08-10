let o = {
	a: 1,
	b: 2,
	c: 'hola',
	d: 5
}

o.a = 50;
o['e'] = 40;
console.log(o);

const a = {
	o: 90,
	u: 80
}
// o = a;
// console.log(o);

let ob = Object.freeze({
	a: 1,
	b: 2,
	c: 3,
	d: "Hola"
})

console.log(ob);
console.log(Object.isFrozen(ob), '-> ob')

ob.a = "adfsdfsd"
ob['e'] = 'laura'
console.log(ob);
ob = a;
console.log(ob)
console.log(Object.isFrozen(ob), '-> ob')
console.log(Object.isFrozen(a), '-> a')

ob.a = 'Juan';
ob.b = 'Esteban';
 
console.log(ob)
Object.freeze(ob)
console.log(Object.isFrozen(ob), '-> ob')
console.log(ob.o)

var obje = ob;
console.log(obje)
console.log(Object.isFrozen(obje), '-> obje')
console.log(obje.o)

let s = "soy string";