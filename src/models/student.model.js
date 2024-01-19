const {Schema, model} = require("mongoose")

const schema = new Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true},    
    login: {type: String, required: true},
    password: {type: String, required: true},
    status: {type: Boolean, default: true},
    mark: {type: String, default: 0},

    group: {type: Schema.Types.ObjectId, ref: "Group"}
    
})

module.exports = model("Student", schema)  
  