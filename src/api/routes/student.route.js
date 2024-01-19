const router = require("express").Router()
const {registr, studentLogin, studentupd} = require("../controller/student.controller")

router.post("/group/register", registr)
router.post("/group/login", studentLogin)
router.put("/group/upd/:id",studentupd )

module.exports = router