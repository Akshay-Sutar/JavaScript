/*
Pure Functions - 
Functions that produces same o/p given the same i/p every time i.e they are independent 
of outside factors. They have no side effects ie they do not alter any external state.

*/

function doubleIt(x)
{
	return 2*x;
}

let a = {
	name:'Aks',
	age:25
};

let b = a;

console.log('a',a);
console.log('b',b);
a.age=30;

console.log('a',a);
console.log('b',b);


/*
Idempotent fn is the one where outcome is same if called multiple times with the same input
*/