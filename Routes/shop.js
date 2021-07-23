const path = require('path');
const express = require('express');
const routeAdmin = require('./admin');

const router = express.Router();


router.get('/', (req, res, next) => {
    const product = routeAdmin.product;
    res.render('shop', {prods: product, DOCTitle:'shop'});
    //res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});





module.exports = router;