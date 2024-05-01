# ES6 Data Manipulation

This repository contains solutions for various tasks related to ES6 data manipulation concepts. Each task focuses on specific data structures and methods to perform operations on data.

## Prerequisites
- Node.js v12.11.1
- npm v6.11.3

## Setup
1. Install Node.js
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

2. Install Jest, Babel, and ESLint
   ```bash
   npm install
   ```

## Running Tests
To run tests, use the command:
```bash
npm run test
```

To run full tests, including lint checks, use the command:
```bash
npm run full-test
```

## Function Descriptions
- `getListStudents()`: Returns an array of student objects with attributes: `id`, `firstName`, and `location`.
- `getListStudentIds(students)`: Returns an array of student IDs given a list of students.
- `getStudentsByLocation(students, city)`: Returns a filtered list of students based on a specific city.
- `getStudentIdsSum(students)`: Returns the sum of all student IDs in the list.
- `updateStudentGradeByCity(students, city, newGrades)`: Returns a list of students with their grades updated for a specific city.
- `createInt8TypedArray(length, position, value)`: Returns a new ArrayBuffer with an Int8 value at a specific position.
- `setFromArray(array)`: Returns a Set from a given array.
- `hasValuesFromArray(set, array)`: Returns `true` if all elements in the array exist within the set, otherwise `false`.
- `cleanSet(set, startString)`: Returns a string of set values that start with a specific prefix, separated by `-`.
- `groceriesList()`: Returns a map of grocery items with specific quantities.
- `updateUniqueItems(map)`: Updates all map values with initial quantity of 1 to 100.
- `queryAPI(endpoint)`: Tracks the number of times a specific endpoint is queried. Throws an error if the query count is 5 or more.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
```
