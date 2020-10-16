
function callThisFunction()
{
	console.log('named function called');
}

setTimeout(callThisFunction,1000);
setTimeout(function(){
	console.log('unnamed function called');	
},1000);


class person
{
	constructor()
	{
		this.name='';
		this.age='';
	}

	setName(name){
		this.name = name;
		return this;
	}

	setAge(age){
		this.age = age;
		return this;
	}
}

let aks = new person();
aks.setName('Akshay').setAge(25);
console.log('aks',aks);