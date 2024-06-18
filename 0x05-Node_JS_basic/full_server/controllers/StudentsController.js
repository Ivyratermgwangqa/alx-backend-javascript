const { readDatabase } = require('../utils');

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const students = await readDatabase(process.argv[2]);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('This is the list of our students\n');

            const fields = Object.keys(students).sort();

            for (const field of fields) {
                res.write(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`);
            }
            res.end();
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const major = req.params.major;
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const students = await readDatabase(process.argv[2]);
            res.status(200).send(`List: ${students[major].join(', ')}`);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

module.exports = StudentsController;
