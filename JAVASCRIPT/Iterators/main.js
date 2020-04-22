console.log('---------------------------');
console.log('---The .forEach() Method---');

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits
fruits.forEach(groceryItem => console.log('I want to eat a '+ groceryItem));

console.log('-----------------------');
console.log('---The .map() Method---');

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// New secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(' '));

const bigNumbers = [100, 200, 300, 400, 500];

// New smallNumbers array below
const tinyNumbers = bigNumbers.map(number => number / 100);

console.log(tinyNumbers);

console.log('--------------------------');
console.log('---The .filter() Method---');

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers
const smallNumbers = randomNumbers.filter(number => number < 250);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords
const longFavoriteWords = favoriteWords.filter(word => word.length > 7);

console.log(smallNumbers);
console.log(longFavoriteWords);

console.log('-----------------------------');
console.log('---The .findIndex() Method---');

const wildAnimals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = wildAnimals.findIndex(animal => animal === 'elephant');
console.log(foundAnimal);

const startsWithS = wildAnimals.findIndex(animal => animal[0] === 's');
console.log(startsWithS);

console.log('--------------------------');
console.log('---The .reduce() Method---');

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10); // <- initial accumulator

console.log(newSum); // Output: 26
