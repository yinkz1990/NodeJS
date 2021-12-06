const express = require("express");
const {body} = require("express-validator");
const {httpGetAllReservation, httpPostReservation, httpAbortReservation, httpCompletedReservation} = require('./reservation.controller');

const reservationRouter = express.Router();


reservationRouter.get("/", httpGetAllReservation);
reservationRouter.post("/",[
    body('firstname', 'Firstname is missing').notEmpty().isString().isLength({min: 3}),
    body('lastname', "Lastname is missing").notEmpty().isString().isLength({min:3}),
    body('email', 'Enter a valid email address').notEmpty().isEmail(),
    body('phone', 'Phone number is missing').notEmpty().isString(),
    body('colour').isString(),
    body('guest', 'Guest number is missing').notEmpty().isNumeric(),
    body('time', 'Enter the your reservation time').notEmpty(),
    body('date', 'Enter the date for you reservation').notEmpty().isDate()
], httpPostReservation);
reservationRouter.delete("/:id", httpAbortReservation);
reservationRouter.put("/:id", httpCompletedReservation);









module.exports = reservationRouter;