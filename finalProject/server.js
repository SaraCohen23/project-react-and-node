const express =require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
const mongoose = require("mongoose")
require('dotenv').config();
const dbPass = process.env.DB_PASS;

const accessoryRouter = require("./Routers/AccessoryRouter");
const orderRouter = require("./Routers/OrderRouter");
const photographyRouter = require("./Routers/PhotographyRouter");
const rentRouter = require("./Routers/RentRouter");
const renterRouter = require("./Routers/RenterRouter");
const userRouter = require("./Routers/UserRouter");


const cors = require("cors")
app.use(cors())
mongoose.connect(dbPass)
.then(() => console.log("Connected…")).catch(err => console.log(err))


app.listen(8080, ()=>{
    console.log("run...");    
    
})

app.use("/Accessory", AccessoryRouter);
app.use("/Order", orderRouter);
app.use("/Photography", photographyRouter);
app.use("/Rent", rentRouter);
app.use("/Renter", renterRouter);
app.use("/User", userRouter);

