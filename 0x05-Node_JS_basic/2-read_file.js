const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.trim().split('\n').slice(1);  // skip the header line
        const students = {};

        lines.forEach((line) => {
            if (line) {
                const [firstname, lastname, age, field] = line.split(',');
                if (!students[field]) students[field] = [];
                students[field].push(firstname);
            }
        });

        const totalStudents = lines.length;
        console.log(`Number of students: ${totalStudents}`);
        for (const field in students) {
            if (students.hasOwnProperty(field)) {
                console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
            }
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
