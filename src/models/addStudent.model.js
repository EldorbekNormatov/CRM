const {Schema, model} = require("mongoose")

const schema = new Schema({
    studentName:{type: String, required: true},
    student: {type: Schema.Types.ObjectId, ref: "Student"}, 
    groupName:{type: String, required: true},
    group: {type: Schema.Types.ObjectId, ref: "Group"}
})  
 
module.exports = model("AddStudent", schema)