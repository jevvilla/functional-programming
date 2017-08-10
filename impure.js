// /**
//  * Impure Function
//  */

 let impureValues = { a: 1 };
 let pureValues = { a: 1 };
 

 const impureFunction = (items) => {

	 let b = 1;
 	 items.a = items.a * b + 2;
 	  return items.a
  }
  let impureResult = impureFunction(impureValues)

  console.log("returned value of ImpureFunction: ", impureResult);
  console.log("original object: ", impureValues);


/**
 *  Pure Function
 */


 function pureFunction( a ) {
	 let b = 1;
	 a = a * b + 2;
	  return a
 }

 let pureResult = pureFunction(pureValues.a);

 console.log("Returned values of pureFuntion : ", pureResult);
 console.log("original object: ", pureValues)


 /**
  *  Impure function
  */

let values = { a: 1 };
 let b = 1;

 function impureFunc(a){
	a = a * b + 2;
	 return a;
 }

 console.log(impureFunc( values.a ));
 // Actually, the value of `c` will depend on the value of `b`.
// In a bigger codebase, you may forget about that, which may
// surprise you because the result can vary implicitly.


var values = { a: 1 };
var b = 1;

function pureFunction ( a, c ) {
  a = a * c + 2;

  return a;
}

var c = pureFunction( values.a, b );
// Here it's made clear that the value of `c` will depend on
// the value of `b`. No sneaky surprise behind your back.