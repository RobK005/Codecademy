// The forecast today is 293 Kelvin
const kelvin = 293;

// Convert to Celcius
const celcius = kelvin - 273;

// Convert to Fahrenheit, when you convert from Celsius to Fahrenheit, you often get a decimal number, that's why we use .floor() method to round it down
const fahrenheit = Math.floor(celcius * (9 / 5) + 32);

// Convert to Newton scale, round down
const newton = Math.floor(celcius * (33 / 100));

console.log(`The temperature is ${celcius} degrees Celcius.`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);