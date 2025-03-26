const mongoose = require("mongoose");

const RentModule = mongoose.Schema({ 
rentDate:{type:Date ,required: true },
rentReturnDate:{type:Date},
rentUser:{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
rentAccessories:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Accessories' }]

});


module.exports = mongoose.model("Rents", RentModule );