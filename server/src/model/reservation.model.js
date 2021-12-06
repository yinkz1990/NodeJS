const mongoose =  require("mongoose");
const reservationSchema = require("./reservation.mongo");




async function getAllReservation () {
    const reservation = await reservationSchema.find();
    return reservation;
}

async function postReservation (reservation) {
 const response = await reservationSchema.create(reservation);
 return response;

}

async function completedReservation (id){
const _id = mongoose.Types.ObjectId(id);
const response = await reservationSchema.findOneAndUpdate({_id:_id}, {
    completed: true
});

return response;
}

async function abortReservation (id){
const _id = mongoose.Types.ObjectId(id);
const response = await reservationSchema.findOneAndDelete(_id);

return response;

}





module.exports = {
    getAllReservation,
    postReservation,
    completedReservation,
    abortReservation,
}