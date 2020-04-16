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
