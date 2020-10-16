// delete expression
//removes reference. doesnot free memory
let a= {name:'aks',age:25};
console.log('before delete',a);
delete a.age;
console.log('after delete',a);

// deletes ref from current object and not the prototype
// variables decalred with var cannot be deleted.
