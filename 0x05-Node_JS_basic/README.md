# Node.js Basics

This repository contains a series of tasks to help you learn the basics of Node.js.

## Table of Contents

- [Task 0: Printing in Javascript](#task-0-printing-in-javascript)
- [Task 1: Using Process stdin](#task-1-using-process-stdin)
- [Task 2: Reading a File Synchronously with Node JS](#task-2-reading-a-file-synchronously-with-node-js)
- [Task 3: Reading a File Asynchronously with Node JS](#task-3-reading-a-file-asynchronously-with-node-js)
- [Task 4: Creating a Basic HTTP Server](#task-4-creating-a-basic-http-server)
- [Task 5: Creating a More Complex HTTP Server](#task-5-creating-a-more-complex-http-server)
- [Task 6: Creating a Basic Express Server](#task-6-creating-a-basic-express-server)
- [Task 7: Creating a More Complex Express Server](#task-7-creating-a-more-complex-express-server)
- [Task 8: Full Server with Express](#task-8-full-server-with-express)

## Task 0: Printing in Javascript

**Files:**

- `0-console.js`
- `0-main.js`

**Description:**

This task involves writing a simple script that prints messages to the console.

## Task 1: Using Process stdin

**Files:**

- `1-stdin.js`

**Description:**

This task involves writing a script that uses `process.stdin` to read data from the standard input.

## Task 2: Reading a File Synchronously with Node JS

**Files:**

- `2-read_file.js`

**Description:**

This task involves writing a script that reads a file synchronously using Node.js.

## Task 3: Reading a File Asynchronously with Node JS

**Files:**

- `3-read_file_async.js`

**Description:**

This task involves writing a script that reads a file asynchronously using Node.js.

## Task 4: Creating a Basic HTTP Server

**Files:**

- `4-http.js`

**Description:**

This task involves creating a basic HTTP server using the `http` module in Node.js.

## Task 5: Creating a More Complex HTTP Server

**Files:**

- `5-http.js`

**Description:**

This task involves creating a more complex HTTP server that handles different routes and responses.

## Task 6: Creating a Basic Express Server

**Files:**

- `6-http_express.js`

**Description:**

This task involves creating a basic server using the Express framework.

## Task 7: Creating a More Complex Express Server

**Files:**

- `7-http_express.js`

**Description:**

This task involves creating a more complex Express server with multiple routes and middleware.

## Task 8: Full Server with Express

**Directories and Files:**

- `full_server/utils/`
  - `utils.js`
- `full_server/controllers/`
  - `AppController.js`
  - `StudentsController.js`
- `full_server/routes/`
  - `index.js`
- `full_server/`
  - `server.js`
  - `.babelrc`

**Description:**

This task involves creating a full server with Express, organized into a modular structure with utilities, controllers, and routes.

## Additional Configuration Files

### `database.csv`

**Description:**

A CSV file containing sample data for use in the tasks.

**Contents:**

```
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

### `package.json`

**Description:**

Contains the project configuration and dependencies for Node.js.

**Contents:** *(see original content above)*

### `babel.config.js`

**Description:**

Configuration file for Babel, used for transpiling ES6+ code.

**Contents:** *(see original content above)*

### `.eslintrc.js`

**Description:**

Configuration file for ESLint, used for code linting.

**Contents:** *(see original content above)*

## Getting Started

1. Clone the repository:
    ```sh
    git clone <repository_url>
    cd <repository_name>
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the development server:
    ```sh
    npm run dev
    ```

4. Run tests:
    ```sh
    npm test
    ```

## Author

**Lerato Mgwangqa**

## License

This project is licensed under the My License - see the `LICENSE` file for details.
```
