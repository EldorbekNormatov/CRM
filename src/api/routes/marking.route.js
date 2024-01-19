const router = require("express").Router()
const { isAuth } = require("../../middleware/isAuth")
const {addMarking, getMark} = require("../controller/marking.controller")

router.post("/addMarking", isAuth, addMarking)
router.get("/getMarking/:id", isAuth, getMark)

module.exports = router