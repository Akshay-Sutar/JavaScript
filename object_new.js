// to provide inheritance, objects can have a prototype object, which is a template object from which it inherits properties and methods

function Person(first, last, age, gender, interest)
{
    this.name = {'first':first,'last':last};
    this.age = age;
    this.gender = gender;
    this.interest = interest;       
}

let John = new Person('John','Smith',32,'Male',['Golf']);

// when we call John.valueOf(), browser first looks up the valueOf in John, object of Person. It doesn't, then it looks up one link up, ie its prototype. John prototype is Object, which has valueOf(), so Object.valueOf() is called.

// using the constructor
let Jane = new John.constructor('Jane','Smith',32,'Female',['Vaulting']);

// using prototype to create new methods
Person.prototype.sayHello = function () 
{
    console.log('Say hello to my little friend');
}

function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  
  // Write your code below here
  Shape.prototype.calcPerimeter = function(){
  let perimeter = this.sides * this.sideLength;
  console.log(this.name+' perimeter is '+perimeter);
  }
  
  let square = new Shape('square',4,5);
  square.calcPerimeter();
  
  
  let triangle = new Shape('triangle',3,3);
  triangle.calcPerimeter();     



  class Shape{
    constructor(name,sides,length){
       this.name = name;
       this.sides = sides;
       this.length = length;
     }
     
     calPerimeter = function(){
      console.log(this.name+ ' perimeter = '+ (this.sides * this.length));
   
   }
    
   }
   
   let oSquare = new Shape('oSquare',4,5);
   oSquare.calPerimeter();
   
   let oTriangle = new Shape('oTriangle',3,3);
   oTriangle .calPerimeter();
    
   
   
   class Shape{
    constructor(name,sides,length){
       this.name = name;
       this.sides = sides;
       this.length = length;
     }
     
     calPerimeter = function(){
      console.log(this.name+ ' perimeter = '+ (this.sides * this.length));
   
   }
    
   }
   
   class Square extends Shape{
    constructor(length)
   {
    this.name='Square';
   this.sides = 4;
   this.length = length;
   }
   
     calcArea = function()
   {
     console.log(this.name+' area is '+(this.length * this.length));
   }
   }
   
   let newSquare  = new Square(5);
   newSquare.calcArea();