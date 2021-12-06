const express =  require("express");
const {body} = require("express-validator");
const productRouter = express.Router();

const {getAllProduct, getSingleProduct, editProduct, deleteProduct, postProduct} = require("./product.controller");


productRouter.get("/", getAllProduct);

productRouter.get("/:id", getSingleProduct)

productRouter.post("/",  [
    body('name', "Enter the name of the product")
    .notEmpty().isString().trim(),
    body('price', "Enter the price of the menu")
    .notEmpty().isFloat().trim(),
    body('description', "Enter the description of the menu")
    .isString().isLength({min:20}),
    body('cuisine', "Select the type of cuisine")
    .notEmpty().isString().trim()
], postProduct);

productRouter.put("/:id", [
    body('productName', "Enter the name of the product")
    .notEmpty().isString().trim(),
    body('price', "Enter the price of the menu")
    .notEmpty().isFloat().trim(),
    body('description', "Enter the description of the menu")
    .isString().isLength({min:20}),
    body('cuisine', "Select the type of cuisine")
    .notEmpty().isString().trim()
],
  editProduct);

productRouter.delete("/:id", deleteProduct);








module.exports = productRouter;