const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }
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
            resolve();
        });
    });
}

module.exports = countStudents;
