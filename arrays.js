// target - Array methods (`.map()`, `.filter()`, `.reduce()`, `.forEach()`, `.flatMap()`, `.include()`, `.some()`, `.every()`, `.find()`, `.indexOf()`, `.findIndex()`)
// arrays can have only numeric indices. setting/getting a non numeric index will not retrieve an element from the array but will set or access a variable associated with that array's object property collection. Array's traversal and mutation operations cannot be applied to named properties.

let myArray = ['apple','banana','orange','peach','jackfruit','grapes','kiwi'];
const vowel = ['a', 'e', 'i', 'o', 'u'];

console.log('array',myArray);

// append item
myArray.push('pomegranate');
console.log('after adding',myArray);

// remove item
let removedItem = myArray.pop();
console.log('after removing',myArray);

//iterating
console.log('itertating');
myArray.forEach(function(item, index){
    console.log(index, item);
});

let aFirstLetters = myArray.map( x=> x[0]);
console.log('first letter od each fruit',aFirstLetters);

let aVowelFruits = myArray.filter(x =>vowel.indexOf(x[0])>-1 );
console.log('Fruit name starting with vowel',aVowelFruits   );

let numArray = [1,2,3,4,5];
const reducer = (accumulator, currentVal) => accumulator + currentVal;
let iSum = numArray.reduce(reducer,0);
console.log('sum of array',iSum);

//array.includes checks if item is present in array
console.log('is banana in array',myArray.includes('banana'));


//.some() check whether atleast one element fullfills the condition
let bHasVowels = myArray.some( x => vowel.includes(x[0]) );
console.log('has vowels',bHasVowels);

//.every() check whether every elements fullfills the condition
let bAllHasVowels = myArray.every( x => vowel.includes(x[0]) );
console.log('do all elements has vowels', bAllHasVowels);

//.find() find the first element that satisfies the condition
let firstVowelFruit =  myArray.find( x => vowel.includes(x[0]) ); 
console.log(' first vowel fruit ', firstVowelFruit);

//.findIndex returns index of first element matched
let matchedIndex = myArray.findIndex( x=> x=='banana' );
console.log('banana found at', matchedIndex);

//.flat()   creates a new array with all sub array elements concatenated into it recursively upto specified depth
let aFatTony = [1,2,3,[4,5],[[[5,6,]]]];
console.log('fat tony', aFatTony);
console.log('Take care of fat tony',aFatTony.flat());
console.log('Take good care of fat tony',aFatTony.flat(1));
console.log('Take great care of fat tony',aFatTony.flat(2));
console.log('the best fat tony can get',aFatTony.flat(3));

//.flatMap() combination of flat and map.
// your map returns an array, then you flatten it
// lets create a new array of fruits
let eatFruits = myArray.flatMap( function(item){
    return [item,`eat ${item}`];
} );

console.log('flat map', eatFruits);