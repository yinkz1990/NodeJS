const Product = require('../model/product');
const Order = require('../model/order');


exports.getProducts = (req, res, next) => {
    Product.find().then((products) => {
        res.render('shop/product-list', {prods: products, pageTitle:'All Product', path: "/product-list"});
    }).catch(err => console.log(err))
    
    
}

exports.getProduct = (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .then((product) => {
            res.render('shop/product-list-view', {product:product, pageTitle: "product Details", path: '/product'})
        })
        .catch(err => console.log(err))
}
exports.getAbout = (req, res, next) => {
    res.render("utils/About", {pageTitle: "About", path: "/about"});
    //res.sendFile(path.join(__dirname, '../', 'views' , 'about.html'));
    }

exports.getIndex = (req, res, next) => {
    Product.find()
    //.select('title price -id') for select some properties only
    //.populate('name email') for getting nested properties
    .then((products) => {
        res.render('shop/index', {prods: products, pageTitle:'Shop', path: "/"});
    }).catch(err => console.log(err))
           
}

exports.getCart = (req, res, next) => {
    req.user
     .populate('cart.items.productId')
     .execPopulate()
     .then(product => {
      const products = product.cart.items;
       
        res.render('shop/cart', { products: products, pageTitle : 'Cart', path: '/cart'})
    }).catch(err => console.log(err));
                
}

exports.postCart = (req, res, next) => {
     const prodId = req.body.productId;
     Product.findById(prodId).then(product => {
         console.log(product);
        return  req.user.addToCart(product);
        })
        .then((result) => {
            res.redirect('/cart')})
        .catch(err => console.log(err))
    
}

exports.postDeleteCartProduct = (req, res, next) => {
    const prodId = req.body.productId;
    return req.user
    .removeFromCart(prodId)
    .then((result) => {
         res.redirect('/cart');
     }).catch(err => console.log(err))
    
}
    
exports.getOrder = (req, res, next) => {
     Order.find({'user.userId' :  req.user._id})
        .then((product) =>{
            res.render('shop/order', {prod: product, pageTitle: 'My Order', path: '/order'})
            })
           .catch(err => console.log(err))
    
}

exports.postOrder = (req, res, next) => {
    console.log('order');
    req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(prod => {
        const products = prod.cart.items.map(i => {
            return {quantity: i.quantity, product: {...i.productId._doc}};
        })
     const order = new Order({
         user: {
              email:  req.user.email,
              userId:  req.user
         },
         products: products,     

     }) 
     console.log(order);
     return order.save().then((result) => {
         
       return  req.user.deleteCart();
     });    

    })
    .then((product) =>{
        console.log(product);
        res.redirect('/order')
    })
    .catch(err => console.log(err))
    
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {pageTitle : 'Checkout', path: '/checkout'});
}

