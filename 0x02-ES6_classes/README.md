# 0x02. ES6 Classes

## Description

This project focuses on implementing Object-Oriented Programming (OOP) concepts using ES6 classes in JavaScript. You will learn how to define classes, add methods, extend classes, and use metaprogramming techniques.

## Learning Objectives

By the end of this project, you should be able to:

- Define a class
- Add methods to a class
- Add static methods to a class
- Extend a class from another
- Understand and apply metaprogramming and symbols

## Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file at the root of the project folder is mandatory
- Code should use the `.js` extension
- Code will be tested using Jest and the command `npm run test`
- Code will be verified against lint using ESLint
- Code needs to pass all tests and lint. Verify the entire project by running `npm run full-test`

## Setup

### Install NodeJS 12.11.x

Run the following commands in your home directory:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
# v12.11.1
npm -v
# 6.11.3
```

### Install Jest, Babel, and ESLint

In your project directory, use the provided `package.json` and run:

```bash
npm install
```

### Configuration Files

Ensure the following configuration files are in your project directory:

- `package.json`
- `babel.config.js`
- `.eslintrc.js`

## Tasks

### Task 0: You used to attend a place like this at some point

Implement a class named `ClassRoom`:

- Prototype: `export default class ClassRoom`
- It should accept one attribute named `maxStudentsSize` (Number) and assign it to `_maxStudentsSize`

Example:

```javascript
import ClassRoom from "./0-classroom.js";

const room = new ClassRoom(10);
console.log(room._maxStudentsSize); // 10
```

### Task 1: Let's make some classrooms

Implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34.

Example:

```javascript
import initializeRooms from './1-make_classrooms.js';

console.log(initializeRooms());
/*
[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
*/
```

### Task 2: A Course, Getters, and Setters

Implement a class named `HolbertonCourse`:

- Constructor attributes: `name` (String), `length` (Number), `students` (array of Strings)
- Verify the type of attributes during object creation
- Store each attribute in an “underscore” attribute version (e.g., `name` is stored in `_name`)
- Implement a getter and setter for each attribute

Example:

```javascript
import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
console.log(c1.name); // ES6
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} catch(err) {
    console.log(err); // TypeError: Name must be a string
}
```

### Task 3: Methods, static methods, computed methods names..... MONEY

Implement a class named `Currency`:

- Constructor attributes: `code` (String), `name` (String)
- Store each attribute in an “underscore” attribute version (e.g., `name` is stored in `_name`)
- Implement a getter and setter for each attribute
- Implement a method named `displayFullCurrency` that returns the attributes in the format `name (code)`

Example:

```javascript
import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency()); // Dollars ($)
```

### Task 4: Pricing

Implement a class named `Pricing`:

- Constructor attributes: `amount` (Number), `currency` (Currency)
- Store each attribute in an “underscore” attribute version (e.g., `name` is stored in `_name`)
- Implement a getter and setter for each attribute
- Implement a method named `displayFullPrice` that returns the attributes in the format `amount currency_name (currency_code)`
- Implement a static method named `convertPrice` that accepts two arguments: `amount` (Number), `conversionRate` (Number). The function should return the amount multiplied by the conversion rate

Example:

```javascript
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"));
console.log(p);
console.log(p.displayFullPrice()); // 100 Euro (EUR)
```

### Task 5: A Building

Implement a class named `Building`:

- Constructor attributes: `sqft` (Number)
- Store each attribute in an “underscore” attribute version (e.g., `name` is stored in `_name`)
- Implement a getter for each attribute
- Consider this class as an abstract class. Ensure that any class extending it should implement a method named `evacuationWarningMessage`
- If a class extending it does not have an `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`

Example:

```javascript
import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200);
} catch(err) {
    console.log(err); // Error: Class extending Building must override evacuationWarningMessage
}
```

### Task 6: Inheritance

Implement a class named `SkyHighBuilding` that extends from `Building`:

- Constructor attributes: `sqft` (Number) (must be assigned to the parent class `Building`), `floors` (Number)
- Store each attribute in an “underscore” attribute version (e.g., `name` is stored in `_name`)
- Implement a getter for each attribute
- Override the method named `evacuationWarningMessage` to return the string `Evacuate slowly the NUMBER_OF_FLOORS floors`

Example:

```javascript
import SkyHighBuilding from './6-sky_high.js';

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft); // 140
console.log(building.floors); // 60
console.log(building.evacuationWarningMessage()); // Evacuate slowly the 60 floors
```

### Task 7: Airport

Implement a class named `Airport`:

- Constructor attributes: `name` (String), `code` (String)
- Store each attribute in an “underscore” attribute version (e.g., `name` is stored in `_name`)
- The default string description of the class should return the airport code

Example:

```javascript
import Airport from "./7-airport.js";

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString()); // [object SFO]
```

### Task 8: Primitive - Holberton Class

Implement a class named `HolbertonClass`:

- Constructor attributes: `size` (Number), `location` (String)
- Store each attribute in an “underscore” attribute version (e.g., `name` is stored in `_name`)
- When the class is cast into a Number, it should return the size
- When the class is cast into a String, it should return the location

Example:

```javascript
import HolbertonClass from "./8-hbtn_class.js";

const hc = new HolbertonClass(12, "Mezzanine");
console.log(Number(hc)); // 12
console.log(String(hc)); // Mezzanine
```

### Task 9: Hoisting

Fix the provided code and make it work correctly.

### Task 10: Vroom

Implement a class named `Car`:

- Constructor attributes: `brand` (String), `motor` (String), `color` (String)
- Store each attribute in an “underscore” attribute version (e.g., `name` is stored in `_name`)
- Add a method named `cloneCar` that should return a new object of the class

Example:

```javascript
import Car from "./10-car.js";

class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar); // true
console.log(tc2);
console.log(tc2 instanceof TestCar); // true
console.log(tc1 == tc2); // false
```

### Task 11: EVCar (Advanced)

Implement a class named `EVCar` that extends the `Car` class:

- Constructor attributes: `brand` (String), `motor` (String), `color` (String), `range` (String)
- Store each attribute in an “underscore” attribute version (e.g., `name` is stored in `_name`)
- When `cloneCar` is called on an `EVCar

` object, it should return a new instance of `Car` and not `EVCar`

Example:

```javascript
import EVCar from "./100-evcar.js";

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
const ec2 = ec1.cloneCar();

console.log(ec1);
console.log(ec1 instanceof EVCar); // true
console.log(ec2);
console.log(ec2 instanceof EVCar); // false
console.log(ec2 instanceof Car); // true
```

## Author

Lerato Mgwangqa
