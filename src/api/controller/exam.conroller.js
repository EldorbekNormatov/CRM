const Exam = require("../../models/exam.model")

const addExam = async (req, res) => {
    try {
        const {examNumber, time, id } = req.body

        const date = new Date()
              date.setHours(date.getHours() + (time * 1) )
    
       const data = await Exam.create({examNumber, Deadline: date, group: id})
       res.status(403).json({message: "success", data})       
    } catch (error) {
        console.log(error);
    }
    
}

const getExam = async (req, res) => {
   try {
    const {  id } = req.body

    const foundGroup = await Exam.find(id).populate('group')
    
    res.status(201).json({message: "success", foundGroup})    
   } catch (error) {
    console.log(error);
   }
}

module.exports = {
    addExam,
    getExam,
}