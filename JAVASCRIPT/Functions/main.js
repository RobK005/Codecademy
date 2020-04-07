console.log('------------------------');
console.log('---Calling a Function---');

function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
};

sayThanks();
sayThanks();
sayThanks();

console.log('------------------------------');
console.log('---Parameters and Arguments---');

function sayThanks(name) {
  console.log('Thank you for your purchase '+ name +'! We appreciate your business.');
};

sayThanks('Cole');

