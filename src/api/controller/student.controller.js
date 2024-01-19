const shortid = require("shortid")
const Student = require("../../models/student.model")
const {mailer} = require("../../utilities/nodemailer")


const registr = async (req, res) => {
   try {
    const {name, surname, email} = req.body

    const login = await shortid.generate()
    const password = await shortid.generate()

     mailer(email, login, password)
    console.log(login, password);

    const student = await Student.create({ name, surname, email, login, password })

    res.status(201).json({message: "suxccess", student})   
   } catch (error) {
    console.log(error);
   }
} 

const studentLogin = async (req, res) => {
    try {
        const {login, password} = req.body

        const foundLogin = await Student.findOne({login: login})
    
        if(!foundLogin) {
            res.status(403).json({message: "login or password is incorrect"})
        }
    
        const foundPass = await Student.findOne({password: password})
    
        if(!foundPass) {
             res.status(403).json({message: "login or password is incorrect"})
        } else {
            res.status(403).json({message: "success"})
        }       
    } catch (error) {
        console.log(error);
    }
}

const studentupd = async (req, res) => {
   try {
    const {id} = req.params
    const {login, password} = req.body

    const foundId = await Student.findById(id) 

    if(!foundId) {
        res.status(403).json({message: "this user is not found"})
    }  else {
        const data = await Student.findByIdAndUpdate(foundId.id, {
            $set: {
                login: login,
                password: password
            }
        })
        res.status(201).json({message: "success", data})
    }          
   } catch (error) {
    console.log(error);
   }
}



module.exports = {
    registr,
    studentLogin,
    studentupd,
}