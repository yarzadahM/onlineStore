const express = require("express");
const router = express.Router();
const Product =require('../controllers/Product')
const Authorization = require("../services/Authorization");
const productValidations = require("../validations/productValidations");


router.post('/create-product',[Authorization.authorized],Product.create);
router.get("/products/:page", Authorization.authorized, Product.get);
router.get("/product/:id", Product.getProduct);
router.put(
    "/product",
    [Authorization.authorized, productValidations],
    Product.updateProduct
  );



module.exports=router;