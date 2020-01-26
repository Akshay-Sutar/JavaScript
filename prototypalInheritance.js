let user = {
	fname:'',
	lname:'',
	set fullName(fullName){
		[this.fname,this.lname] = fullName.split(' ');
	},
	get fullName()
	{
		return `${this.fname} ${this.lname}`;
	}
};

let admin={
	canDelete : true,
	__proto__: user
};

admin.fullName='Kira Yoshikage';
console.log('fullName',admin.fullName);
console.log('can deleted',admin.canDelete);

let animal={
	walk(){
		if(!this.isSleeping){
			console.log('walking');
		}	
	},
	sleep()
	{
		this.isSleeping = true;
	}
}

let rabbit = {
	__proto__:animal,
	move:'jump'
};

rabbit.sleep();
console.log('rabbit',rabbit.isSleeping);// true, rabbit.sleep() was called
console.log('animal',animal.isSleeping); // undefined because animal.sleep is not yet called

// only own keys
console.log('keys',Object.keys(rabbit));

// all keys
for(keys in rabbit){
	console.log('rabbit keys',keys);
}

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__:head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__:table
};

let pockets = {
  money: 2000,
  __proto__:bed
};

let human = {
	stomach:[],
	eat(food){
		this.stomach.push(food);
	}
};

let soni = {
	name:'Soni',
	__proto__:human
};

let aas = {
	name:'AAS',
	__proto__:human
};

console.log('human stomach',human.stomach);
console.log('soni stomach',soni.stomach);
console.log('aas stomach',aas.stomach);

soni.eat('Cake');

console.log('human stomach',human.stomach);
console.log('soni stomach',soni.stomach);
console.log('aas stomach',aas.stomach);
