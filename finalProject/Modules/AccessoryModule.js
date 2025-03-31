const mongoose = require("mongoose");

const AccessoryModule= mongoose.Schema({
   
    accessoryName: { type: String },
    accessoryImage:{type:String},
    accessoryRenter:[{
        renter:{ type: mongoose.Schema.Types.ObjectId, ref: 'Renters'}
    }],
    accessoryGallery:{type:String},
    accessoryRent:[{
        date: { type:Date, required: true }, 
        quantity: { type: Number, required: true } , 
    }],
   
});


module.exports = mongoose.model("Accessories",AccessoryModule);