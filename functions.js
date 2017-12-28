/* lets print all functions arguments, we can pass any number of params irrespective of its declaration in js */
/* so it will be handy to know the params */

function testParams(){
	console.log(arguments.length + " params has been passed");
}

testParams(1);
testParams(1, 2, 3);
testParams([1, 2, 3, 4]);
