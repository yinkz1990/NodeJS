const{validationResult} = require("express-validator");
const {getAllReservation, postReservation, abortReservation, completedReservation} = require("../../model/reservation.model");


async function httpGetAllReservation(req, res, next){
    const reservation = await getAllReservation();
    return res.status(200).json(reservation);
}

async function httpPostReservation(req, res, next){
    const error = validationResult(req);
    const reservation = req.body;
    if(!error.isEmpty()){
        return res.status(401).json({
            error: error.array()[0].msg
        })
    }
    const newReservation = Object.assign(reservation,{
        completed: false
    })
    const response = await postReservation(newReservation); 
    return res.status(201).json(response);
}

async function httpAbortReservation(req, res,next){
    const id = req.params.id;
    const response = await abortReservation(id);
    if(!response){
        return res.status(400).json({
            error: "Reservation not deleted"
        })
        
    }
    return res.status(201).json({
        ok:true
    })
}

async function httpCompletedReservation(req, res, next){
const id = req.params.id;
const response = await completedReservation(id);
if(!response){
    return res.status(400).json({
        error: "reservation not updated"
    })
}
return res.status(201).json({
    ok : true
})

}
module.exports = {
    httpGetAllReservation,
    httpPostReservation,
    httpAbortReservation,
    httpCompletedReservation,
}