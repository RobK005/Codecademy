console.log('---------------------------');
console.log('---Constructor, Instance---');

class SurgeonConstruct {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  };
};

const surgeonJohn = new SurgeonConstruct('John', 'Cardiovascular');
const surgeonEmma = new SurgeonConstruct('Emma', 'Orthopedics');
console.log(surgeonJohn);

console.log('------------------');
console.log('---Method Calls---');

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
    return this._remainingVacationDays;
  }
};

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
console.log(surgeonDurant.takeVacationDays(5));

console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);
