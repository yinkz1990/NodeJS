const Product = require('../model/product');




exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const userId = req.user;
    const product = new Product({title: title, price: price, imageUrl: imageUrl, description: description, userId : userId});
    product.save()
    .then((result) => {
        res.redirect('/admin-product')
    })
    .catch(err => console.log('there is an error'));
    
}

exports.postEditProduct = (req, res, next) => {
      const productId = req.body.productId;
      const title = req.body.title;
      const imageUrl = req.body.imageUrl;
      const price = req.body.price;
      const description = req.body.description;
      Product.findById(productId).then(product => {
          product.title = title;
          product.imageUrl = imageUrl;
          product.price = price;
          product.description = description;
          return product.save();
      }).then(result => {
            console.log('UPDATED');
            res.redirect('admin-product'); 
            
        }).catch(err => console.log(err));
      
      
}
exports.getAddProduct = (req, res, next) => {
    //res.sendFile(path.join(__dirname, "../", "views", "add-product.html"))
     res.render("admin/edit-product",  {pageTitle:"Add-product", path: "/add-product", edit: false});
    
}

exports.getProduct = (req, res, next) => {
     Product.find().then((product)=> {
         res.render('admin-product', {prods: product, pageTitle: 'Product',  path: '/product'})
     }).catch(err => console.log(err));
 }

exports.getAdminProduct = (req, res, next) => {
     Product.find().then((product)=> {
         res.render('admin/product', {prods: product, pageTitle: 'Admin Product',  path: '/admin-product'})
     }).catch(err => console.log(err));
 }


exports.getEditProduct = (req, res, next) => {
    const editting = req.query.edit;
    if(!editting){
      return  res.redirect('/');
    }
    else{
    const prodId = req.params.productId;
    Product.findById(prodId).then(product => {
        if(!product){
            return res.redirect('/');
        }else{
            res.render("admin/edit-product",  {pageTitle:"Add-product", path: "/edit-product", edit: editting, product:product});
        }
        
     });
    
    }
    
    
}

exports.postDeleteProduct = (req, res, next) => {
   const productId = req.body.productId;
   Product.findByIdAndRemove(productId)
   .then(result => {
       console.log('It has be deleted');
       res.redirect('/');
    })
    .catch(err => console.log(err));
   
}