 let obj =   {
     a:1,
     b:'YOLO',
     c:12.3
 };

 console.log('key',Object.keys(obj));


 console.log('values',Object.values(obj));

// returns obj own enumerable key.value pair
 console.log('entries',Object.entries(obj));

 // delete keyword removes property from an object.
 // prop declared as var cannot be deleted from global scope or from a function's scope
 // prop declared with let or const cannot be deleted  from the scope within which they were defined
 // non configurable prop cannot be delete. eg built in prop of Math, Array, Object
 const o = {a:1,b:2};
 delete o.b;
 console.log(o);

 //toString returns string representation of object

 function dog(name, breed){
    this.name = name;
    this.breed = breed;
 }

 let kipper = new dog('kipper','beagle');

 dog.prototype.toString = function()
 {
     return `${this.name} is a ${this.breed}`;
 }
 
 console.log('kipper',kipper.toString());

 //valueOf returns the primitive value of an object
 function myNum(num)
 {
     this.num = num;
 }

 myNum.prototype.valueOf = function(){
     return this.num;
 }

 const number = new myNum(3);
 console.log('num',number,number.valueOf(),number+1);

 //hasOwnProperty retuns true of the obj has the prop as its own and not inherited
 console.log('has own prop',number.hasOwnProperty('num'));
 console.log('has own prop',number.hasOwnProperty('toString'));


 