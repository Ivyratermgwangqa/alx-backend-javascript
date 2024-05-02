# TypeScript Project: Task Overview
This project covers various concepts in TypeScript, ranging from interfaces, classes, working with the DOM, to more advanced topics like namespaces, declaration merging, ambient namespaces, and nominal typing.


### Full Project Structure

```
alx-backend-javascript
├── 0x04-TypeScript
│   ├── task_0
│   │   ├── js
│   │   │   └── main.ts
│   │   ├── .eslintrc.js
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── webpack.config.js
│   ├── task_1
│   │   ├── js
│   │   │   └── main.ts
│   │   ├── .eslintrc.js
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── webpack.config.js
│   ├── task_2
│   │   ├── js
│   │   │   └── main.ts
│   │   ├── .eslintrc.js
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── webpack.config.js
│   ├── task_3
│   │   ├── js
│   │   │   ├── main.ts
│   │   │   ├── crud.d.ts
│   │   │   └── interface.ts
│   │   ├── .eslintrc.js
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── webpack.config.js
│   ├── task_4
│   │   ├── js
│   │   │   ├── main.ts
│   │   │   ├── subjects
│   │   │   │   ├── Teacher.ts
│   │   │   │   ├── Subject.ts
│   │   │   │   ├── Cpp.ts
│   │   │   │   ├── Java.ts
│   │   │   │   └── React.ts
│   │   ├── .eslintrc.js
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── webpack.config.js
│   ├── task_5
│   │   ├── js
│   │   │   └── main.ts
│   │   ├── .eslintrc.js
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── webpack.config.js
└── README.md
```


With this set of commands, you should be able to create all the required directories and files for each task in the project. Once you have this structure, you can populate the files with the corresponding code implementations and test to ensure they work as expected. If you have any more questions or need further assistance with your TypeScript project, I'm here to help.


## Tasks Summary
Below is a brief overview of all the tasks, highlighting their goals and key elements.

### Task 0: Creating an Interface for a Student
- **Goal:** Create a `Student` interface with the following fields: `firstName`, `lastName`, `age`, and `location`.
- **Implementation:** Create two students, add them to a list, and use JavaScript to render a table that displays the students' names and locations.

### Task 1: Building a Teacher Interface
- **Goal:** Create a `Teacher` interface with flexible attributes, allowing additional properties without specifying their names.
- **Implementation:** Define fixed attributes (`firstName`, `lastName`, `fullTimeEmployee`, `location`) and allow additional properties with `[key: string]: any`.

### Task 2: Extending the Teacher Interface to Create a Directors Interface
- **Goal:** Extend the `Teacher` interface to create a `Directors` interface that requires `numberOfReports`.
- **Implementation:** Create a `Directors` object with the necessary attributes, demonstrating inheritance.

### Task 3: Printing Teachers
- **Goal:** Write a function `printTeacher` to format a teacher's name.
- **Implementation:** The function takes `firstName` and `lastName`, returning the formatted name (e.g., "J. Doe").

### Task 4: Writing a Student Class
- **Goal:** Write a `StudentClass` with specific methods like `workOnHomework` and `displayName`.
- **Implementation:** Implement the class, with a constructor interface and a class interface, showcasing TypeScript class syntax.

### Task 5: Advanced Types Part 1 - Director and Teacher Classes
- **Goal:** Create interfaces for `DirectorInterface` and `TeacherInterface` and implement `Director` and `Teacher` classes based on these interfaces.
- **Implementation:** Include methods like `workFromHome`, `getCoffeeBreak`, and `workDirectorTasks`. Create a function `createEmployee` that returns a `Director` or `Teacher` based on a salary condition.

### Task 6: Creating Functions Specific to Employees
- **Goal:** Write functions to determine employee type and execute work based on type.
- **Implementation:** Implement `isDirector` to check if an employee is a director. Write `executeWork` to call the correct method based on employee type.

### Task 7: String Literal Types
- **Goal:** Define a string literal type `Subjects` allowing specific values ("Math" or "History"). Implement a function `teachClass` that returns different responses based on the input subject.
- **Implementation:** Demonstrate string literal types with the `teachClass` function.

### Task 8: Ambient Namespaces
- **Goal:** Create ambient namespace declarations for CRUD operations. Define a `RowID` type and a `RowElement` interface.
- **Implementation:** Use `crud.js` functions (`insertRow`, `deleteRow`, `updateRow`) with proper TypeScript type definitions.

### Task 9: Namespace & Declaration Merging
- **Goal:** Create a namespace `Subjects` with declaration merging to add additional attributes to the `Teacher` interface.
- **Implementation:** Write class implementations (`Cpp`, `Java`, `React`) with methods `getRequirements` and `getAvailableTeacher`.

### Task 10: Update `task_4/js/main.ts`
- **Goal:** Test different subject classes and a common teacher object.
- **Implementation:** Create instances of the subject classes and test their functionalities by setting a common teacher and calling class methods.

### Task 11: Brand Convention & Nominal Typing
- **Goal:** Create interfaces with brand properties for nominal typing. Implement functions `sumMajorCredits` and `sumMinorCredits` to demonstrate the concept.
- **Implementation:** Use unique brand properties to differentiate between `MajorCredits` and `MinorCredits`, then create functions that work with these types.

## Installation and Setup
- Ensure you have Node.js and npm installed on your system.
- Install TypeScript and other necessary dependencies.
- Run `npm install` in each task directory to set up the environment.

## Running the Project
- Navigate to the desired task directory.
- Run `npm run build` to compile TypeScript to JavaScript.
- Use a local server or open the compiled files in a browser to view the output.

## Testing and Linting
- To test, you can use Jest or similar testing frameworks.
- To lint, ensure you have ESLint set up with the TypeScript parser.
```
