const AddStudent = require("../../models/addStudent.model")
const Group = require("../../models/group.model")
const Student = require("../../models/student.model") 

const add = async (req, res) => {
   try {
    const {studentId, groupId} = req.body
    
    const student = await Student.findById(studentId)

    if(!student) {
        res.status(403).json({message: "this student is not found"})        
    }

    const group = await Group.findById(groupId)
    if(!group) {
        res.status(403).json({message: "this group is not found"})        
    } else {
        const data = await AddStudent.create({student, group})
        res.status(201).json({message: "success", data})    
    }       
   } catch (error) {
    console.log(error);
   }
}

const get = async (req, res) => {
    try {
        const {groupId} = req.body
        const students = await AddStudent.find({group: groupId}).populate('student' )    
    
        res.status(201).json({message: "success", students})       
    } catch (error) {
        console.log(error);
    }        
} 

const del = async (req, res) => {
    try {
        const {groupId} = req.body

        const foundGroup = await AddStudent.find({group: groupId})
    
        if(!foundGroup) {
            res.status(403).json({message: "this group is not found"})       
        } else {
            await AddStudent.deleteMany({group: groupId})
            res.status(200).json({message: "this group is deleted"})       
    
        }          
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    add,
    get,
    del,
}