//call() allows a function belonging to one object to be assigned and called for a different object.
function product(name,price)
{
	this.name = name;
	this.price = price;
}

function food(name,price)
{
	product.call(this,name,price);
	this.category = 'food';
}

let cheese = new food('cheese',25);
console.log('cheese',cheese);

//apply() is similar to call() but it takes an array or args instead of parameterlist
let min = Math.min.apply(null,[10,5,15,25,65]);
let max = Math.max.apply(null,[10,5,15,25,65]);
console.log('min',min);
console.log('max',max);

// bind method creates a new function that has its this keyword set to the provided value.

let module = {
	x:42,
	getX:function (){
		return this.x;
	}
};

let unbound = module.getX;
let binded = unbound.bind(module);

console.log('module x',module.getX());
console.log('ubnbound x',unbound());
console.log('binded x',binded());