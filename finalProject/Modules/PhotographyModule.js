const mongoose = require("mongoose");

const PhotographyModule = mongoose.Schema({
    photographyPassword: { type: Number ,required: true },
    photographyName: { type: String,required: true  },
    photographyAddress: { type: String,required: true  },
    photographyMail: { type: String ,required: true },
    photographyPhone: { type: String },
    //אולי נוסיף פרטי אשראי
    photographyRank: { type: Number, min: 0, max: 10 },
    photographyImages: [{
        url: { type: String, required: true }, 
        galery: { type: String, required: true } 
    }],
    photographyGaleries:[{type:String}],
    photographyOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Orders' }],
    photographyResopnse:[{type:String}]
});


module.exports = mongoose.model("Photographies", PhotographyModule);
