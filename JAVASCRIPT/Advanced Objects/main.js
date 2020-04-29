console.log('-----------------------');
console.log('---The .this Keyword---');

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}. `
  }
};

console.log(robot.provideInfo());

console.log('----------------------------------------');
console.log('---Privacy; Arrow Functions and .this---');

const robot2 = {
  _energyLevel: 100, // "_" means the property should NOT be directly manipulated
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  },
  faultyRecharge: () => {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

// Example of mutating an object, side-effect of type-coercion
robot2._energyLevel = 'high'
robot2.recharge();

// This method doesn't work correctly because of ARROW function. In this case .this is refering to the GLOBAL object, not robot2. It's better to avoid those kind of functions inside objects.
robot2.faultyRecharge();

console.log('-------------');
console.log('---Getters---');

const robot3 = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`
    } else {
      return `System malfunction: cannot retrieve energy level`
    }
  },
};

console.log(robot3.energyLevel);

console.log('-------------');
console.log('---Setters---');

const robot4 = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if(typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};

robot4.numOfSensors = 100;
console.log(robot4.numOfSensors);

console.log('-----------------------');
console.log('---Factory Functions---');

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};

const tinCan = robotFactory('P-500', true);

tinCan.beep();

console.log('------------------------------');
console.log('---Property Value Shorthand---');

function robotFactory2(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  };
};

// To check that the property value shorthand technique worked:
const newRobot = robotFactory2('R2-D2', false);
console.log(newRobot.model);
console.log(newRobot.mobile);

console.log('-----------------------------');
console.log('---Destructured Assignment---');

const robot5 = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    talk() {
      console.log('Destrooooy!');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { talk } = robot5.functionality;
talk();

const { functionality } = robot5;
functionality.fireLaser();

console.log('-----------------------------');
console.log('---Built-in Object Methods---');

const robot6 = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot6);
console.log(robotKeys);

const robotEntries = Object.entries(robot6);
console.log(robotEntries);

const newRobot2 = Object.assign({laserBlaster: true, voiceRecognition: true}, robot6);
console.log(newRobot2);
