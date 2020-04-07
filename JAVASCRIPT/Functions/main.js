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

console.log('------------------------');
console.log('---Default Parameters---');

function makeShoppingList(item1='milk', item2='bread', item3='eggs') {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
};

makeShoppingList('butter');

