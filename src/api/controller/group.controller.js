const Group = require("../../models/group.model")

const createGroup = async (req, res) => {
   try {
    const {name} = req.body

    const foundName = await Group.findOne({name: name})

    if(foundName) {
        res.status(403).json({message: "this group is already exist"})
    } else {

        const group = await Group.create({name})
        res.status(201).json({message: "success", group})
    }    

   } catch (error) {
    console.log(error);
   }
}

const delGroup = async (req, res) => {
   try {
    const {id} = req.params
    const foundid = await Group.findById(id)

    if(!foundid) {
        res.status(403).json({message: "this group is not found"})
    } else {
        const data = await Group.findByIdAndDelete(id) 
    
        res.status(201).json({message: "group is deleted"})
    }       
   } catch (error) {
    console.log(error);
   }
}

const updGroup = async (req, res) => {
   try {
    const {id} = req.params
    const {name} = req.body
    const foundid = await Group.findById(id)

    if(!foundid) {
        res.status(403).json({message: "this group is not found"})
    } else {
        const data = await Group.findByIdAndUpdate(foundid.id, {
            $set: {
                 name: name
            }
        })
    
        res.status(201).json({message: "name is updated", data})
    }       
   } catch (error) {
    console.log(error);
   }
}



module.exports = {
    createGroup,
    updGroup,
    delGroup,
    
}