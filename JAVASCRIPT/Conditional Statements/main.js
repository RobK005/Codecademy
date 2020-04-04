console.log("--------------------------")
console.log("---If...Else statements---")

let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}

console.log("--------------------------")
console.log("---Comparison Operators---")

let hungerLevel = 7;

if (7 <= hungerLevel) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

console.log("------------------------")
console.log("---The switch keyword---")

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.')
    break;
}
