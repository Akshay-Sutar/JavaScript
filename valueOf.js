function person()
{
	this.age=25;
}
person.prototype.valueOf = function (){
	return parseInt(this.age);
}

let aks = new person();

console.log('addingobj + 4',aks + 4);