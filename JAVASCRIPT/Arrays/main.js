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
