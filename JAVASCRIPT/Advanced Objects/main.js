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
