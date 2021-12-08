const express = require("express");
const multer = require("multer");
const cors =  require("cors");
const path = require("path")
const productRouter = require("./Route/Production/product.router");
const reservationRouter = require("./Route/Reservation/reservation.router")

const app = express();


app.use(cors());
app.use(express.json());


const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },

    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + file.originalname)
    }
})
 const fileFilter = (req, file, cb) => {
     if(file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
         cb(null, true)
     }else{
         cb(null, false)
     }
 }

app.use(multer({storage:fileStorage, fileFilter: fileFilter}).single('image'));
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/api/product', productRouter);
app.use('/api/reservation', reservationRouter );
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
    });





module.exports = app;