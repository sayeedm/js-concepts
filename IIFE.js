/* the target is to eleminate global scope pollution as much as possible */

/* anonymous */

(function(){
	console.log("anonymous IIFE");
})();

/* named IIFE - it doesn't actually imply anything other than allowing recursion */
(function namedIIFE(){
	console.log("named IIFE");
})();

/* another style to do IIFE */
(function (passedFunction){
	passedFunction();
})(function declaration(){
	console.log("invoke IIFE before declaration");
});
