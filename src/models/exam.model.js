const {Schema, model} = require("mongoose")

const schema = new Schema({
    examNumber:{type: String, required: true},
    Deadline:{type: String, required: true},
    group: {type: Schema.Types.ObjectId, ref: "AddStudent"}, 
})  

module.exports = model("Exam", schema)