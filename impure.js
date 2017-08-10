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
