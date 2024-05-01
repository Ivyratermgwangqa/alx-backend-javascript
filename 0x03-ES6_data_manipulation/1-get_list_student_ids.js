const getListStudents = require('./0-get_list_students.js');

function getListStudentIds(list) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.map((student) => student.id);
}

module.exports = getListStudentIds;
