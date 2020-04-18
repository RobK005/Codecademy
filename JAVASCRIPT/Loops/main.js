console.log('------------------');
console.log('---The For Loop---');

for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
};

console.log('------------------------');
console.log('---Looping in Reverse---');

for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
};

console.log('----------------------------');
console.log('---Looping through Arrays---');

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit '+ vacationSpots[i]);
};

console.log('------------------');
console.log('---Nested Loops---');

const bobsFollowers = ['Robert', 'Andrzej', 'Marcin', 'Ela'];
const tinasFollowers = ['Andrzej', 'Paweł', 'Ela'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    };
  };
};

console.log(mutualFollowers);

console.log('--------------------');
console.log('---The While Loop---');

const cards = ['diamond', 'spade', 'heart', 'club'];

// Until the chosen card is not spade, choose another
let currentCard = [];
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
};

console.log('---------------------------');
console.log('---Do...While Statements---');

let cupsOfSugarNeeded = 4;
let cupsAdded = 0;

do {
  cupsAdded++;
}
while (cupsOfSugarNeeded > cupsAdded);

console.log(`I've just added ${cupsAdded} cup(s) of sugar, that's enough for me`);

console.log('-----------------------');
console.log('---The break Keyword---');

const SuperCarsArray = ["Maserati", "Ferrari", "McLaren", "Lamborghini"];

for (let i = 0; i < SuperCarsArray.length; i++) {
  if (SuperCarsArray[i] === 'Ferrari' ) {
    console.log(SuperCarsArray[i]);
    break;
  };
  console.log(SuperCarsArray[i]);
};
console.log("After Ferrari, we don't need to mention further");
