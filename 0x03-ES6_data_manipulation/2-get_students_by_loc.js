const getListStudents = require('./0-get_list_students.js');

function getStudentsByLocation(list, city) {
  return list.filter((student) => student.location === city);
}

module.exports = getStudentsByLocation;
