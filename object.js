const person = {
	name:['Akshay','Sutar'],
	age:20,
	hobby:['Movies','games'],
	bio : function ()
	{
		console.log('Name is '+this.getName()+' and age is '+this.age);
	},
	greetings : function()
	{
		console.log('Hi! my name is '+this.getName());
	},
	getName: function()
	{
		return this.name[0]+' '+this.name[1];
	}
};

function Person (name){
	this.name = name;
	this.greetings = function(){
		console.log("Hi! I'm "+this.name);
	}
}