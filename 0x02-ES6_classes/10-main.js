// 10-main.js
import Car from './10-car.js';

class TestCar extends Car { }

const tc = new TestCar('Nissan', 'Turbo', 'Red');
const newTc = tc.cloneCar();
console.log(newTc instanceof TestCar);
console.log(newTc);