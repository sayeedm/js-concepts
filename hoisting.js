/* from you don't know js - up and going */
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

