const getListStudents = require('./0-get_list_students.js');

function getStudentIdsSum(list) {
  return list.reduce((sum, student) => sum + student.id, 0);
}

module.exports = getStudentIdsSum;
