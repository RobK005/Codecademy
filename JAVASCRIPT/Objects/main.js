console.log('--------------------------');
console.log('---Accessing Properties---');

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  'Active Mission' : true,
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

const crewCount = spaceship.numCrew;
const planetArray =  spaceship.flightPath;

console.log(planetArray);

console.log('----------------------');
console.log('---Bracket Notation---');

const shipFuel = spaceship['Fuel Type'];
let propName =  'Active Mission';

console.log(shipFuel);
console.log(spaceship[propName])
