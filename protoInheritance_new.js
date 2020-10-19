//  we can use __proto__ to access properties of inherited object
// when we read property of an object, JS looks it first in the object, if not found, looks its in it's protoype.
// write/ delete property acts directly on object and not prototype (assuming its data property and not setter)
// for in iterates over own prop as well as inherited props. All other key/value gettings methods operates on object itself.

 let animal = {
    eats:true,
    walk(){
        console.log('animal walks');
    }
 }

 let rabbit = {
    jumps: true,
    __proto__:animal
 }

 console.log('eats',rabbit.eats);
 console.log('jumps',rabbit.jumps);

 // writing doesnt use prototype
 rabbit.walk = function () {
    console.log('rabit hops');
 }

 console.log('animal',animal.walk());
 console.log('rabbit',rabbit.walk());

 