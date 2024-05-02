// Define the Teacher interface with flexible attributes
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow additional attributes
}

// Create a Teacher object with additional attributes
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  yearsOfExperience: 10,
};

const teacher2: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'Paris',
  contract: true, // Additional attribute
};

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Additional required attribute
}

// Create a Directors object
const director1: Directors = {
  firstName: 'James',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'Sydney',
  numberOfReports: 5,
};

const director2: Directors = {
  firstName: 'Sophia',
  lastName: 'Brown',
  fullTimeEmployee: true,
  location: 'Berlin',
  numberOfReports: 15,
};

// Define an interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Test the function
console.log(printTeacher('John', 'Doe')); // Output: J. Doe

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
