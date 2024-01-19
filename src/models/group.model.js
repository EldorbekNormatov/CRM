const {Schema, model} = require("mongoose")

const schema = new Schema({
    name: {type: String, required: true}, 
    student: {type: Schema.Types.ObjectId, ref: "Student"},
 
})

module.exports = model("Group", schema)  
  