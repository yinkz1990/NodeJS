const path = require('path');
const express = require('express');

const router = express.Router();

const product = [];
router.get('/add-product', (req, res, next) => {
    //res.sendFile(path.join(__dirname, "../", "views", "add-product.html"))
    res.render("add-product");
    
});

router.post('/product', (req, res, next) => {
    product.push({firstname : req.body.firstname, lastname : req.body.lastname});
    res.redirect('/');
});



exports.router = router;
exports.product = product;