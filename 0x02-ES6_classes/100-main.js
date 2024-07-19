// 100-main.js
import EVCar from './100-evcar.js';

const ec = new EVCar('Tesla', 'Turbo', 'Red', '250');
const newEc = ec.cloneCar();
console.log(newEc instanceof EVCar);
console.log(newEc);