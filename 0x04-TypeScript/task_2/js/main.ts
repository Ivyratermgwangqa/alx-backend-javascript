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
