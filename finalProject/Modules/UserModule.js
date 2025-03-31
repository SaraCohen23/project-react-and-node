const mongoose = require("mongoose");

const UserModule = mongoose.Schema({
<<<<<<< HEAD
    userPassword: { type: Number ,required: true },
    userName: { type: String,required: true  },
    userAddress: { type: String,required: true  },
    userMail: { type: String ,required: true  },
    userPhone: { type: String },
=======
    userPassword: { type: String ,required: true },
    userName: { type: String,required: true  },
    userAddress: { type: String,required: true  },
    userMail: { type: String ,required: true,match: /.+\@.+\..+/  },
    userPhone: { 
        type: String,
        match: /^\+?[0-9]{10,15}$/
    },
>>>>>>> 43bd554afe6e7aed6abd8895fd1e21c6bbe17748
    userOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Orders' }],
    userRent:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Rents' }],
});


module.exports = mongoose.model("Users", UserModule );