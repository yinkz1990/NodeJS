const mongoose = require("mongoose");
const {Schema} = mongoose;



const reservationSchema = new Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    colour:{
        type: String,
    },
    guest:{
        type: Number,
        required: true
    },
    time:{
     type: String,
     required: true
    },

    date:{
        type: Date,
        required: true
    },
    completed:{
        type: Boolean,
        required: false
    }
})



module.exports = mongoose.model('Reservation', reservationSchema);