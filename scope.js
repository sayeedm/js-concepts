/* collected and modified from you dont know js - up and going */

//"use strict";

var a = "global scope";

function foo(){
	/* shadowing gloabl a, all referece of "a" inside foo will get this instead */
	var a = 1;
	function bar(){
		var b = 2;
		
		function baz(){
			var c = 3;
			console.log(a, b, c);

			/* we shadowed a by foo's a but we can still refer original gloabl a if its inside a browser */
			//console.log('global a = ' + window.a);
			/* used without declaring - it will create a global reference */
			/* should use strict mode if this type of auto declaration needs to be prevented */
			d = 4;
		}
		baz();
		console.log(a, b);
		/* following line will get referece error as can not access inner scopes b, c from outer scopes */
		//console.log(c);	
	}
	bar();
	console.log(a);
	/* following lines will get referece error as can not access inner scopes b, c from outer scopes */
	//console.log(b);
	//console.log(c);
}
foo();
/* will get back original global a , as shadow is removed now */
console.log(a);
console.log("leaked global d =  " + d);


var b = 1;
function normalCase(){
	console.log("no b inside this, so should lookup to enclosing scope and get b = " + b); 
}

function cheatingCase(str){
	eval(str);
	console.log("should get enclosed b, but if b is inside eval, scope is modified and a b is created, so b = " + b);
}

normalCase();
cheatingCase("var b = 3;");

function modifyingScopeUsingWith(obj){
	with(obj){
		p = 3;
	}
}

var o1 = {
	p: 2
}

var o2 = {
	q: 3
}

modifyingScopeUsingWith(o1);
console.log("o1.a = " + o1.p);
modifyingScopeUsingWith(o2);
console.log("o2.a = " + o2.p);

/* leaked global */
/* with creates a new scope, which attempted to assign to p, but o2 has no p, so an auto global variable p was created */
console.log("p = " + p);


/* lets try block scope, it doesn't work for blocks of code until "let" was available */
for (var i = 0 ; i < 10; i++)
	console.log("in for loop " + i);
console.log("outside for loop " + i + " whoaa , it should not have been available here");

if (true){
	var w = "ha ha";
}

console.log("outside if, w = " + w + " huh, it should not have been here");

/* but in some cases block scope can work */

try{
	undefined();
}catch(err){
	console.log(err);
}
//console.log("will get an error here : " + err); //--> block scope works here !!

/* demonstration of "let" -> where block scope works !! */
if (true){
	let www = "mu cha cha";
}

//console.log("will get a ReferenceError here " + www);




