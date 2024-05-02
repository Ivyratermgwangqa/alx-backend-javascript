// Define the constructor interface for StudentClass
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Define the StudentClass interface
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class Student implements StudentClass {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test the Student class
const student = new Student({ firstName: 'Alice', lastName: 'Johnson' });
console.log(student.displayName()); // Output: Alice
console.log(student.workOnHomework()); // Output: Currently working
