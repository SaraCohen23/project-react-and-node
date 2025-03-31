const mongoose = require("mongoose");

const PhotographyModule = mongoose.Schema({
    photographyPassword: { type: String ,required: true },
    photographyName: { type: String,required: true  },
    photographyAddress: { type: String,required: true  },
    photographyMail: {  type: String, 
        required: true, 
        match: /.+\@.+\..+/ },
    photographyPhone: { 
        type: String,
        match: /^\+?[0-9]{10,15}$/ 
    },
    photographyPrice:{type:Numbe,required: true},
    photographyRank: { type: Number, min: 0, max: 10 },
    photographyImages: [{
        url: { type: String, required: true }, 
        galery: { type: String, required: true } 
    }],
    photographyGaleries:[{type:String}],
    photographyOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Orders' }],
    photographyResopnse:[{type:String}],
    
    photographyLink: {type: String,required: true,validate: {
            validator: function(v) {
                return /^(ftp|http|https):\/\/[^ "]+$/.test(v); // בדיקה אם הלינק בפורמט תקני
            },
            message: props => `${props.value} הוא לא לינק חוקי!`
        }
    },
});


module.exports = mongoose.model("Photographies", PhotographyModule);
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
