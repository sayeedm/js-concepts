/* implicit coercion */
var a = "4004";
var b = a * 1; 

console.log("implicit coercion test b == 4004 => " + (b == 4004));

/* explicit coercion */
var c = "444";
var d = Number(444);
console.log("Explicit coercion test d == 444 => " + (d == 444));

/* boolean coercion */

/* string to boolean coercion */
if ("")
	console.log("empty string does coerce to true !! my whole life was a lie !!");
else
	console.log("empty string does coerce to false");

if (0 || -0 || NaN)
	console.log("0, -0, NaN does coerce to true !! my whole life was a lie !!");
else
	console.log("0, -0, NaN does coerce to false");


if (null || undefined)
	console.log("null or undefined does coerce to true !! my whole life was a lie !!");
else
	console.log("null or undefined does coerce to false");

if ([])
	console.log("empty array does coerce to true");
else
	console.log("empty array does coerce to false");

if ({})
	console.log("empty object does coerce to true");
else
	console.log("empty object does coerce to false");


/* array to string coercion */
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = "1,2,3";

console.log("e == f ==> " + (e == f) + " as both are array, referecce of both not same");
console.log("e == g ==> " + (e == g) + " e coerces to a string same as g");
console.log("f == g ==> " + (f == g) + " g coerces to a string same as g");


/* NaN coercion */
var h = 15;
var i = "some string"
console.log("h < i == > " + (h < i)); 
console.log("h > i == > " + (h > i)); 
console.log("h == i == > " + (h == i));
console.log("i contains string which coerces to NaN, NaN is neither greater than, less than or equal to any number"); 


