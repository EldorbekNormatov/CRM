const router = require("express").Router()
const { isAuth } = require("../../middleware/isAuth")
const {addExam, getExam} = require('../controller/exam.conroller')

router.post("/addExam", isAuth, addExam)
router.get("/getExam",isAuth, getExam)

module.exports = router