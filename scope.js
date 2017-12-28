/* collected and modified from you dont know js - up and going */

//"use strict";

var a = "global scope";

function foo(){
	/* shadowing gloabl a, all referece of inside foo a will get this instead */
	var a = 1;
	function bar(){
		var b = 2;
		
		function baz(){
			var c = 3;
			console.log(a, b, c);
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

