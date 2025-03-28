const mongoose = require("mongoose");

const UserModule = mongoose.Schema({
    userPassword: { type: Number ,required: true },
    userName: { type: String,required: true  },
    userAddress: { type: String,required: true  },
    userMail: { type: String ,required: true  },
    userPhone: { type: String },
    userOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Orders' }],
    userRent:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Rents' }],
});


module.exports = mongoose.model("Users", UserModule );