const auth = require("./auth.route")
const student = require("./student.route")
const group = require("./group.route")
const addStudent = require("./addStudent.route")
const exam = require("./exam.route")
const upload = require("./upload.route")
const mark = require("./marking.route")


module.exports = [auth, student, group, addStudent, exam, upload, mark]