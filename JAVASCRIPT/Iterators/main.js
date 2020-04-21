console.log('---------------------------');
console.log('---The .forEach() Method---');

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(groceryItem => console.log('I want to eat a '+ groceryItem));

console.log('-----------------------');
console.log('---The .map() Method---');

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// New secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(' '));

const bigNumbers = [100, 200, 300, 400, 500];

// New smallNumbers array below
const smallNumbers = bigNumbers.map(number => number / 100);

console.log(smallNumbers);
