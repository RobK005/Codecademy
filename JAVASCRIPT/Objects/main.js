console.log('--------------------------');
console.log('---Accessing Properties---');

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  'Active Mission' : true,
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn'],
  'Secret Mission' : 'Discover life outside of Earth.'
};

const crewCount = spaceship.numCrew;
const planetArray =  spaceship.flightPath;

console.log(planetArray);

console.log('----------------------');
console.log('---Bracket Notation---');

const shipFuel = spaceship['Fuel Type'];
let propName =  'Active Mission';

console.log(shipFuel);
console.log(spaceship[propName]);

console.log('-------------------------');
console.log('---Property Assignment---');

spaceship.color = 'glorious gold';
spaceship.numEngines = 6;

delete spaceship['Secret Mission'];
