import myCurrentLocation, { message, name, getGreeting } from './myModule';
import addNumber, { subtract } from './math';

console.log(message);
console.log(name);
console.log(myCurrentLocation);
console.log(getGreeting('Jessica'));

console.log(addNumber(5, 7))
console.log(subtract(12, 7))
