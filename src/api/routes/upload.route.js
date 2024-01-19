const router = require("express").Router()
const {addUpload} = require("../controller/uploads.controller")

router.post("/addUpload", addUpload)

module.exports = router