const mongoose = require("mongoose");

const AccessoryModule= mongoose.Schema({
   
    accessoryName: { type: String },
    accessoryImage:{type:string},
    accessoryRent:[{
        date: { type:Date, required: true }, 
        galery: { type: String, required: true } ,
        quantity: { type: Number, required: true } 
    }],
   
});


module.exports = mongoose.model("Accessories",AccessoryModule);