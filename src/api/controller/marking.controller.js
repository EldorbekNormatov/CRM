const Student = require("../../models/student.model")

const addMarking = async (req, res) => {
   try {
    const {studentId, baho} = req.body

    const foundStudent = await Student.findById(studentId)

    if(!foundStudent) {
        res.status(403).json({message: "this student is not found"})
    } else {
        const data = await Student.findByIdAndUpdate(foundStudent.id, {
            $set: {
                mark: baho
            }
        })

    
            res.status(403).json({message: "success", data})
    }    
   } catch (error) {
    console.log(error);
   }
}

const getMark = async (req, res) => {
    try {
        const {id} = req.params
        const foundStudent = await Student.findById(id)

        if(foundStudent.mark < 50 )  {
            await Student.findByIdAndUpdate(foundStudent.id, {
                $set: {
                    status: false
                }
            })
        }
    } catch (error) {
     console.log(error);   
    }
}

module.exports = {
    addMarking,
    getMark,
}