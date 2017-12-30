var a = 2;

/* foo is called before its declaration - function hoisting */
foo();

function foo(){
	/* local scope a - used before declaration - variable hoisting */
	a = 3;
	console.log("a = " + a);
	var a;
}
/* now we get back global scope a which contains 2 */
console.log("a = " + a);


/* what about hoisiting with declarations */

/* 
   should print "undefined" as the following codes are breaked in to this :
   var aa;
   console.log(aa);
   aa = 2;
*/
console.log(aa);
var aa = 2; 

/* function declarations are hoisted - not expression */

/* 
    should get type error as it is translated to following : 
    var functionExpression;
    functionExpression(); //--> undefined();
    functionExpression = function(){
	console.log("function expression");
    }
*/
//functionExpression(); // commented for further compilation
var functionExpression = function(){
	console.log("function expression");
}

/* functions are hoisted first, then the variables */
test();
var test;

function test(){
	console.log("test function first hoisiting");
}

//or test = some value;
test = function(){
	console.log("this won't be printed, the function was hoisted first to name test");
}


/* 
  if there are two functions with same name (not function expressions assigned to varable)
  the second one is hoisted
*/
testFunctionHoisting();

function testFunctionHoisting(){
	console.log(1);
}

function testFunctionHoisting(){
	console.log(2);
}





