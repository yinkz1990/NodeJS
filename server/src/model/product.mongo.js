const mongoose = require("mongoose");

const {Schema} = mongoose;

const productSchema = new Schema({
    
    productName:{
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },

    cuisine:{
        type: String,
        required: true
    }
    
})


module.exports = mongoose.model('Product', productSchema);