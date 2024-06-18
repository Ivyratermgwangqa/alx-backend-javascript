const fs = require('fs');

function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }
            const lines = data.trim().split('\n').slice(1);
            const students = {};

            lines.forEach((line) => {
                if (line) {
                    const [firstname, lastname, age, field] = line.split(',');
                    if (!students[field]) students[field] = [];
                    students[field].push(firstname);
                }
            });

            resolve(students);
        });
    });
}

module.exports = { readDatabase };
