const router = require("express").Router()
const { isAuth } = require("../../middleware/isAuth")
const {add, get, del} = require("../controller/addStudents.controller")

router.post("/addStudent", isAuth, add)
router.get("/get", get)
router.delete("/del",isAuth, del)

module.exports = router