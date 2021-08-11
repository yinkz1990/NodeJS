
const express = require('express');
const adminController = require('../controller/admin');

const router = express.Router();




router.post('/product', adminController.postAddProduct);

router.get('/add-product', adminController.getAddProduct);

router.get('/admin-product', adminController.getAdminProduct);


router.get('/products', adminController.getProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct );

router.post('/delete-product', adminController.postDeleteProduct);



module.exports = router;
