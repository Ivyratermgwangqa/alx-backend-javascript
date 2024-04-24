# 0x01. ES6 Promises

This project demonstrates the key aspects of JavaScript Promises and the use of async/await. It contains multiple tasks that cover the following topics:

- Basic promises
- Handling rejections
- Using `Promise.all`
- Using `Promise.race`
- Async/await patterns
- Error handling with try-catch
- Structuring Promises for scalability and maintainability

## Prerequisites
Ensure you have the following installed on your system:

- **Node.js** (v12.11.x)
- **npm** (v6.11.3 or later)

## Installation
1. Install Node.js and npm:
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

2. Verify Node.js and npm installation:
   ```bash
   node -v
   npm -v
   ```

3. Clone the repository and install dependencies:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   npm install
   ```

## Directory Structure
Here's the layout of the project:

- **`0x01-ES6_promise`**: Contains all the task files.
  - **`0-promise.js`**: Simple promise.
  - **`1-promise.js`**: Resolves or rejects a promise based on a boolean.
  - **`2-then.js`**: Handles promise results with logging.
  - **`3-all.js`**: Uses `Promise.all` to resolve multiple promises.
  - **`4-user-promise.js`**: Returns a resolved promise with a simple object.
  - **`5-photo-reject.js`**: Creates a rejected promise with a custom error.
  - **`6-final-user.js`**: Resolves multiple promises and returns status and value/error.
  - **`7-load_balancer.js`**: Uses `Promise.race` to get the first-resolved promise.
  - **`8-try.js`**: Throws an error for division by zero.
  - **`9-try.js`**: Captures errors and adds to a queue.
  - **`100-await.js`**: Uses async/await to handle multiple promises.

## Running the Code
To execute a specific task, use the following command:
```bash
npm run dev <filename>
```
For example, to run the code for task 0, use:
```bash
npm run dev 0-main.js
```
Replace `<filename>` with the appropriate task file for each task.

### Task Details
Here's a brief description of each task:

- **0. Keep every promise you make and only make promises you can keep**: Creates a simple promise that does not resolve or reject.
- **1. Don't make a promise if you know you can't keep it**: Resolves or rejects a promise based on a boolean parameter.
- **2. Catch me if you can!**: Handles promise results with logging and returns a structured result.
- **3. Handle multiple successful promises**: Uses `Promise.all` to handle multiple successful promises, logging their results.
- **4. Simple promise**: Returns a resolved promise with a specified object.
- **5. Reject the promises**: Creates a promise that rejects with a custom error.
- **6. Handle multiple promises**: Resolves multiple promises and returns the status and value/error.
- **7. Load balancer**: Uses `Promise.race` to return the first resolved promise.
- **8. Throw error / try catch**: Throws an error for division by zero; otherwise, returns the division result.
- **9. Throw an error**: Catches errors and adds error messages to a queue, along with a "Guardrail was processed" message.
- **10. Await / Async**: Uses async/await to call multiple asynchronous operations, handling errors with a fallback object.

## Contributing
We welcome contributions to this project. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a pull request explaining your modifications.

For bug reports, please open an issue with a detailed description of the problem.

## License
This project is licensed under the [MIT License](LICENSE).

## Author
This project was developed by Lerato Mgwangqa. Feel free to reach out with any questions or suggestions.

```
