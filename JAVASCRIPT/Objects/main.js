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

console.log('-------------');
console.log('---Methods---');

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () { 
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};

alienShip.retreat();
alienShip.takeOff();

console.log('--------------------');
console.log('---Nested Objects---');

let spaceship2 = {
  passengers: [{name: 'Space cowboy', age: 24}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] 
    }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship2.crew.captain['favorite foods']['0'];
let firstPassenger = spaceship2.passengers[0];

console.log(capFave);
console.log(firstPassenger.name);

console.log('-----------------------');
console.log('---Pass By Reference---');

const spaceship3 = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

let futureEnergy = obj => {
  obj['Fuel Type'] = 'Warp juice'
}

let remotelyDisable = obj => {
  obj.disabled = true
}

futureEnergy(spaceship3);
remotelyDisable(spaceship3);
console.log(spaceship3);

console.log('-----------------------------');
console.log('---Looping Through Objects---');

let spaceship4 = {
    crew: {
    captain: { 
        name: 'Shepard', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let crewMember in spaceship4.crew) {
  console.log(`${crewMember}: ${spaceship4.crew[crewMember].name}`);
};

for (let crewMember in spaceship4.crew) {
  console.log(`${spaceship4.crew[crewMember].name}: ${spaceship4.crew[crewMember].degree}`);
};
