const {getProduct, getAllProducts, saveProduct, removeProduct, updateProduct} = require("../../model/product.model");
const{validationResult} = require("express-validator");




async function getAllProduct(req, res, next){

const page = +req.query.page; 
const products =  await getAllProducts(page); 
return res.status(200).json(products)
}

async function postProduct(req, res, next){
    const error = validationResult(req);

    if(!error.isEmpty()){
        return res.status(422).json({
            errors: error.array()
        })  
    }

    const productName  = req.body.name;
    const price = req.body.price;
    const cuisine = req.body.cuisine;
    const description = req.body.description;
    
    const image = req.file;
    
    

    if(!image){
        return res.status(401).json({
            errors: "invalid image",
        })
    }
   const imageUrl = image.path;
   console.log(imageUrl);

   const response = await saveProduct({productName, imageUrl, price, cuisine, description});
   return res.status(201).json(response);
}

async function getSingleProduct(req, res, next){
    const id = req.params.id;
    const product = await getProduct(id)
    return res.status(200).json(product)
}

async function editProduct(req, res, next){
    const errors = validationResult(req);
    const id = req.params.id;
    const product = req.body;
    const image = req.file;
    
    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()
        })
    }
    
    if (image){
        product.imageUrl = image.path;
    }
    
    const response = await updateProduct(id, product)
   
   if(!response){
    return res.status(400).json({
        error: "Data was not updated"
    });
   }
    return res.status(201).json({
        ok: true
    });
}

async function deleteProduct(req, res, next){
    const id = req.params.id;
    const response = await removeProduct(id);
    if(!response){
        return res.status(400).json({
            error: "Product was not deleted"
        })
    }
    return res.status(200).json({
        ok:true
    });
}
module.exports = {
    getAllProduct,
    getSingleProduct,
    editProduct,
    deleteProduct,
    postProduct,

}