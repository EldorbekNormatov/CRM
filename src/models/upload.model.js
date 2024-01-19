const {Schema, model} = require("mongoose")

const schema = new Schema({
    fileName: {type: String, required: true},
    student: {type: Schema.Types.ObjectId, ref: "Student"}, 
    group: {type: Schema.Types.ObjectId, ref: "Group"},
    exam: {type: Schema.Types.ObjectId, ref: "Exam"}
})  

module.exports = model("Upolad", schema)