const bcrypt = require("bcrypt");
const jwt = require("../../utilities/jwt")
const User = require("../../models/auth.model")

const login = async (req, res) => {   
    try {
        const {username, password} = req.body

        const find = await User.findOne({username: username })
        if(!find) {
            res.status(403).json({message: "password or username is not find"})
        }
        const checkPass = await bcrypt.compare(password, find.password )
        if(!checkPass) {
            res.status(403).json({message: "password or username is not find"})      
        }else {
            const token = jwt.sign( { userId: find.id } )
            res.cookie("token", token);
        
            res.status(200).json({message: "success logged in"})        
        }   
       
    } catch (error) {
        console.log(error);
    }
} 

module.exports = {
    login,
}