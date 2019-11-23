var x; // hoisting is allowed.
// can be declared multiple times and accesible outside scope;

console.log('value of x is '+x);
x=10;

if (true) {
	var y = 15;
}
console.log('value of x is '+x);
console.log('value of y is '+y);

let a=20; // hoisting not allowed. declared only once in a scope. not accesible outside block

if (true) {
	let b = 25;1
	console.log('value of b is '+b);// this will generate error if accessed outside block
}
console.log('value of a is '+a);

const PI = 3.14; // value cannot be changed
const object = {}; // properties can be changed
const array = []; // properties can be changed

object.name = 'This is the name of object';
array.push("YOLO");

console.log('value of pi is ',PI);
console.log('value of object is ',object);
console.log('value of array is ',array);

// escaping characters in string
let sDialogue = 'I\'m here to chew bubblegum and kickass, and I\'m all out of bubblegum';
console.log('sDialogue',sDialogue);

//  template literals
let literal = `value of a is ${a}`;
console.log('literal',literal);
