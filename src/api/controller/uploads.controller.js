const Upolad = require("../../models/upload.model")
const path = require("path")
const {v4: uuid} = require("uuid");



const addUpload = async (req, res) => {
   try {
    const {studentId, groupId, examId} = req.body
    const { fileInput } = req.files

    const fileName = `${uuid()}${path.extname(fileInput.name)}`;
    fileInput.mv(process.cwd() + "/uploads/" + fileName);

    const data = await Upolad.create({fileName, student: studentId, group: groupId, exam: examId})

    res.status(201).json({message: "suxccess", data})      
   } catch (error) {
    console.log(error);
   }
    console.log(fileInput);
}


module.exports = {
    addUpload,
}