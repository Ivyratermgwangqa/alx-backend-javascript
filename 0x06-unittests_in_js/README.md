# 0x06. Unittests in JS

This repository contains unit tests for JavaScript functions as part of the ALX Backend JavaScript curriculum. The focus is on learning how to write unit tests using Mocha, Chai, and Sinon.

## Table of Contents

- [Installation](#installation)
- [Files](#files)
- [Usage](#usage)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/Ivyratermgwangqa/alx-backend-javascript.git
    ```

2. Navigate to the project directory:
    ```sh
    cd alx-backend-javascript/0x06-unittests_in_js
    ```

3. Install the required dependencies:
    ```sh
    npm install
    ```

## Files

This project includes the following files:

### JavaScript Files

- `0-calcul.js`: Contains the `calculateNumber` function.
- `1-calcul.js`: Contains an extended version of `calculateNumber` function with additional operations.
- `2-calcul_chai.js`: Contains the `calculateNumber` function tested with Chai.
- `3-payment.js`: Handles payment processing logic.
- `4-payment.js`: An extension of the payment processing logic.
- `5-payment.js`: Another extension of the payment processing logic.
- `utils.js`: Contains utility functions used by other modules.

### Test Files

- `0-calcul.test.js`: Tests for `0-calcul.js`.
- `1-calcul.test.js`: Tests for `1-calcul.js`.
- `2-calcul_chai.test.js`: Tests for `2-calcul_chai.js` using Chai.
- `3-payment.test.js`: Tests for `3-payment.js`.
- `4-payment.test.js`: Tests for `4-payment.js`.
- `5-payment.test.js`: Tests for `5-payment.js`.

## Usage

To run the tests, use the following command:

```sh
npm test
```

You can also run tests for individual files:

```sh
npm test 0-calcul.test.js
npm test 1-calcul.test.js
# And so on...
```

### Example Output

Running the tests will produce output similar to this:

```
> mocha

  calculateNumber
    ✓ should return 4 when inputs are 1 and 3
    ✓ should return 5 when inputs are 1 and 3.7
    ✓ should return 5 when inputs are 1.2 and 3.7
    ✓ should return 6 when inputs are 1.5 and 3.7

  calculateNumber with types
    SUM
      ✓ should return 6 when inputs are 1.4 and 4.5
    SUBTRACT
      ✓ should return -4 when inputs are 1.4 and 4.5
    DIVIDE
      ✓ should return 0.2 when inputs are 1.4 and 4.5
      ✓ should return "Error" when divided by 0

  8 passing (10ms)
```

## License

This project is licensed under the Alx Curriculum.
```
