const express = require("express")
const config = require("../config")
const {connect} = require("mongoose")
const routes = require("./api/routes")
const cookie = require("cookie-parser")
const fileUpload = require("express-fileupload");

const bootsrapt = async () => {
    await connect("mongodb://127.0.0.1:27017/imtihon4")
    console.log('databse is connected');

    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(cookie());
    app.use(fileUpload());

    app.use(express.static( (process.cwd() + "uploads") ))
    
    app.use(routes)

    app.listen(config.PORT, () => {
        console.log(config.PORT);
    })            
}

bootsrapt()

