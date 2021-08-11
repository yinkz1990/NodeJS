module.exports = class Cart {
 
    static addProduct (id, prodPrice) {
// connect with the filesytem
        const p = path.join(__dirname, '../', 'data', 'cart.json'); 
        fs.readFile(p, (err, fileContent)=> {
            let cart = { product:[], totalPrice:0 }
            if(!err){
              cart = JSON.parse(fileContent);  
            }
//Analyse the cart => check for the existing product
            const productIndex = cart.product.findIndex(product => product.id === id);
            const existingProduct = cart.product[productIndex];
            let updatedProduct;
            if(existingProduct){
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.product = [...cart.product];
                cart.product[productIndex] = updatedProduct;
           
            } //if the product does not exist inside the cart, add new
            else{
                updatedProduct = {id:id, qty:1}
                cart.product = [...cart.product, updatedProduct]
            }
            cart.totalPrice = cart.totalPrice + +prodPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        })

    }

    static deleteInCart (id, prodPrice){
        const p = path.join(__dirname, '../', 'data', 'cart.json');
        fs.readFile(p, (err, fileContent) => {
          if(err){
              return;
          }
        const cart = JSON.parse(fileContent);
        const newCart = {...cart};
        const product = newCart.product.find(product => product.id === id);
        if(!product){
            return;
        }
        const productQty = product.qty;
        newCart.product = newCart.product.filter(product => product.id !== id); 
        newCart.totalPrice = newCart.totalPrice - productQty * prodPrice;

        fs.writeFile(p, (JSON.stringify(newCart)), (err) => {
              console.log(err);
          } )


        })

    }

    static fetchCart (cb) {
     const p = path.join(__dirname, '../', 'data', 'cart.json');
     fs.readFile(p, (err, fileContent) => {
         if(err){
             console.log(err);
         }
         else{
            const cart = JSON.parse(fileContent);
            cb(cart);
         }
     })

    }

}