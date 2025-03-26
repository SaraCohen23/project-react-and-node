const express =require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
const mongoose = require("mongoose")
require('dotenv').config();
const dbPass = process.env.DB_PASS;

const cors = require("cors")
app.use(cors())
mongoose.connect(dbPass)
.then(() => console.log("Connected…")).catch(err => console.log(err))


app.listen(8080, ()=>{
    console.log("run...");    
    
})
