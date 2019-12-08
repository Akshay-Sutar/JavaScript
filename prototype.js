// prototype fns are like static functions ie they exists only once and are not created new for evert object.

var Person = function (name){
	this.name = name;
	this.canTalk = true;
};

Person.prototype.greet = function(){
	if(this.canTalk){
		console.log('Hi, I am '+this.name);
	}
};

var Employee = function(name,title){
	Person.call(this, name);
	this.title = title;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;//WTF COMMENT!!!
										  // If you don't set Object.prototype.constructor to Employee, 
                                          //it will take prototype.constructor of Person (parent). 
                                          //To avoid that, we set the prototype.constructor to Employee (child).

Employee.prototype.greet = function (){
	if (this.canTalk){
		console.log('Hi, I am '+this.name+' and title is '+this.title);		
	}
}

var Mime = function(name){
	Person.call(this,name);
	this.canTalk = false;
}

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime; // WTF COMMENT. If you don't set Object.prototype.constructor to Mime,
                                   //it will take prototype.constructor of Person (parent).
                                   //To avoid that, we set the prototype.constructor to Mime (child).

var aPerson = Person('Akshay');
var aEmp = Employee('AAS','SWD');
var aMime = Mime('RW');

aPerson.greet();
aEmp.greet();
aMime.greet();