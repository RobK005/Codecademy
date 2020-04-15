console.log('------------------------');
console.log('---Accessing Elements---');

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

var listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[1]);
console.log(famousSayings[2]);

console.log('---------------------');
console.log('---Update Elements---');

let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'butter'

console.log(groceryList);

console.log('--------------------------');
console.log('---The .length property---');

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

console.log('-------------------------------');
console.log('---Arrays with let and const---');

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[utensils.length-1] = 'Spoon';
console.log(utensils);

console.log('------------------------');
console.log('---The .push() Method---');

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('clean floor', 'make the bed');
console.log(chores)

console.log('-----------------------');
console.log('---The .pop() Method---');

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop(); // removes the last item from array
console.log(chores);

console.log('------------------------');
console.log('---More Array Methods---');

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift(); // remove the first item from the array
groceryList.unshift('popcorn'); // adding element to the beginning of the array
console.log(groceryList);

console.log(groceryList.slice(1,4)); 
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

console.log('--------------------------');
console.log('---Arrays and Functions---');

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
};

changeArr(concept);
console.log(concept);

function removeElement(newArr){
  newArr.pop();
};

removeElement(concept);
console.log(concept);

console.log('-------------------');
console.log('---Nested Arrays---');

const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];

console.log(target);
