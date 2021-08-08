const Product = require('../model/product');
const Cart = require('../model/cart');


exports.getProducts = (req, res, next) => {
    Product.fetchAll().then((products) => {
        res.render('shop/product-list', {prods: products, pageTitle:'All Product', path: "/product-list"});
    }).catch(err => console.log(err))
    
    
}

exports.getProduct = (req, res, next) => {
    const id = req.params.productId;
    Product.findByPk(id)
        .then((product) => {
            console.log(product);
            res.render('shop/product-list-view', {product:product, pageTitle: "product Details", path: '/product'})
        })
        .catch(err => console.log(err))
}
exports.getAbout = (req, res, next) => {
    res.render("utils/About", {pageTitle: "About", path: "/about"});
    //res.sendFile(path.join(__dirname, '../', 'views' , 'about.html'));
    }

exports.getIndex = (req, res, next) => {
    Product.fetchAll().then((products) => {
        res.render('shop/index', {prods: products, pageTitle:'Shop', path: "/"});
    }).catch(err => console.log(err))
           
}

exports.getCart = (req, res, next) => {
    Cart.fetchCart(cart => {
        Product.fetchAll(products => {
            const cartProduct = [];
            for(prod of products){
                const cartProductData = cart.product.find(product => product.id === prod.id);
                if(cartProductData){
                    cartProduct.push({product : prod, qty: cartProductData.qty});
                }
            }
            
            res.render('shop/cart', { products: cartProduct, totalPrice: cart.totalPrice, pageTitle : 'Cart', path: '/cart'})
        })
    })
    
}

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.fetchProduct(prodId)
        .then((product) => {
         Cart.addProduct(product.id, product.price);
         res.redirect('/cart');
        })
        .catch(err => console.log(err))
    
}

exports.postDeleteCartProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.fetchProduct(prodId)
        .then(product => {
            Cart.deleteInCart(prodId, product.price);
            res.redirect('/cart');
        })
        .catch(err => console.log(err));
    
}
    
exports.getOrder = (req, res, next) => {
    res.render('shop/order', {pageTitle: 'My Order', path: '/order' })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {pageTitle : 'Checkout', path: '/checkout'});
}

