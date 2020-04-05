console.log("--------------------------");
console.log("---If...Else statements---");

let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}

console.log("--------------------------");
console.log("---Comparison Operators---");

let hungerLevel = 7;

if (7 <= hungerLevel) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

console.log("-----------------------");
console.log("---Logical Operators---");

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

console.log("----------------------");
console.log("---Truthy and Falsy---");

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

console.log("---------------------------------");
console.log("---Truthy and Falsy Assignment---");

let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);

console.log("----------------------");
console.log("---Ternary Operator---");

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Spooon?';

favoritePhrase === 'SPOOON!' ? console.log('I love that!'): console.log("I don't love that!");

console.log("------------------------");
console.log("---The switch keyword---");

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.')
    break;
}
