const productSchema = require("./product.mongo");
const mongoose = require("mongoose");
const { Pagination } = require("../services/pagination");
const deleteFile = require("../utils/deletePhoto");



async function saveProduct(product) {
    const response = await productSchema.create(product);
    return response;
}

async function getAllProducts(pageNumber){
const {skip, limit, page} = Pagination(pageNumber);
const numberOfItems = await productSchema.find({}).countDocuments();
const pageSize = 3;
const products =  await productSchema.find({})
                 .skip(skip)
                 .limit(limit);
const result = Object.assign({
    page,
    numberOfItems,
    pageSize,
    products
})
 return result;
}

async function getProduct(id){
    const productId = mongoose.Types.ObjectId(id) 
   try{
      return await productSchema.findOne({_id: productId})
   }catch(err){
  throw new Error(err)
   }
}



 async function removeProduct(id){
    const _id = mongoose.Types.ObjectId(id);
    try{
        return await productSchema.findOneAndDelete(_id);
    }catch(err){
        throw new Error(err);
    }
 }

 async function updateProduct(id, product){
     const _id = mongoose.Types.ObjectId(id);
     const findproduct = await productSchema.findOne(_id);
     
     if(!findproduct){
         throw new Error("Product was not find");
     }

     if(product.imageUrl){
         deleteFile(findproduct.imageUrl);
     }
     const response =  await productSchema.findOneAndUpdate(_id, product);
     return response;

 }

 
 

module.exports = {
    saveProduct,
    getAllProducts,
    getProduct,
    removeProduct,
    updateProduct
}