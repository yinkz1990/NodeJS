const Product = require('../model/product');



exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description; 
    const product = new Product(null, title, imageUrl, price, description);
    product.save();
    res.redirect('/');
}

exports.postEditProduct = (req, res, next) => {
      const productId = req.body.productId;
      const title = req.body.title;
      const imageUrl = req.body.imageUrl;
      const price = req.body.price;
      const description = req.body.description;
      console.log(productId);
      const product = new Product(productId, title, imageUrl, price, description);
      product.save();
      res.redirect('/admin-product');
}
exports.getAddProduct = (req, res, next) => {
    //res.sendFile(path.join(__dirname, "../", "views", "add-product.html"))
     res.render("admin/edit-product",  {pageTitle:"Add-product", path: "/add-product", edit: false});
    
}

exports.getProduct = (req, res, next) => {
    Product.fetchAll((product)=> {
        res.render('admin/product', {prods: product, pageTitle: 'Product',  path: '/product'})
    })
}

exports.getAdminProduct = (req, res, next) => {
    Product.fetchAll((product)=> {
        res.render('admin/product', {prods: product, pageTitle: 'Admin Product',  path: '/admin-product'})
    })
}


exports.getEditProduct = (req, res, next) => {
    const editting = req.query.edit;
    if(!editting){
      return  res.redirect('/');
    }
    else{
    const prodId = req.params.productId;
    Product.fetchProduct(prodId, product => {
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
   Product.deleteById(productId);
   res.redirect('/');

}