const express = require('express');
const { getProduct, saveProduct } = require('../controllers/Products.controller');
const router = express.Router();


router.get('/products' , getProduct) ;

router.post('/products' , saveProduct) ;

module.exports = router ;