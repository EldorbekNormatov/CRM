const router = require("express").Router()
const { isAuth } = require("../../middleware/isAuth")
const {createGroup, updGroup, delGroup} = require("../controller/group.controller")

router.post("/createGroup",isAuth, createGroup)
router.post("/updGroup/:id", isAuth, updGroup)
router.post("/delGroup/:id",isAuth, delGroup)

module.exports = router
