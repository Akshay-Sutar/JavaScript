function person(name)
{
	this.name = name;
}

let aks = new person('aks');

console.log('instance of person?',aks instanceof person);
console.log('type of person',typeof aks);