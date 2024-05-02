// Define interfaces for MajorCredits and MinorCredits with unique brand property
interface MajorCredits {
  credits: number;
  brand: 'MajorCredits'; // Brand convention to uniquely identify MajorCredits
}

interface MinorCredits {
  credits: number;
  brand: 'MinorCredits'; // Brand convention to uniquely identify MinorCredits
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'MajorCredits' };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'MinorCredits' };
}

// Example usage of MajorCredits and MinorCredits
const major1: MajorCredits = { credits: 3, brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 4, brand: 'MajorCredits' };
const minor1: MinorCredits = { credits: 2, brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 3, brand: 'MinorCredits' };

console.log(sumMajorCredits(major1, major2)); // Output: { credits: 7, brand: 'MajorCredits' }
console.log(sumMinorCredits(minor1, minor2)); // Output: { credits: 5, brand: 'MinorCredits' }
