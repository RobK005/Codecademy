const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

console.log('-----------------------');
console.log('---Functions as Data---');

const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);

console.log('-----------------------------');
console.log('---Functions as Parameters---');

//Let's check the runtime of a function
const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
console.log(`It takes this long to run this function: ${time2p2}`);
console.log('---');

const addTwo = num => num + 2;

const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val) + 1;
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return `This function returned inconsistent results: ${firstTry} is not equal to ${secondTry}`
    };
};

console.log(checkConsistentOutput(addTwo, 10));