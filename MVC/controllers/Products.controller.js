const Products = require ( '../models/Products.model');
const path = require('path');

exports.getProduct = (req, res) => {
    res.sendFile(path.join(__dirname+"./../views/product.html"));
};

exports.saveProduct = (req, res) => {
    const ProductName = req.body.ProductName;
    const price = Number(req.body.price);
    const Product  = {
        ProductName ,
        price 
    };
    Products.push(Product);
    res.status(201).json({
        succes : "Product Created successfully",
        Products,
    });

}