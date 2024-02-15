const express = require ( 'express');
const userRouter = require('./routes/user.route.js');
const ProductsRouter = require('./routes/product.route.js');

const app = express();
const port = 3001;
app.use(express.urlencoded({extended:true}));
app.use(userRouter);
app.use(ProductsRouter);

const htmlForm = `

`


app.use((req, res , next) => {
    res.status(404).json({
        message:"404! this route is not found"
    })
})
app.listen(port , () => {
    console.log(`my server is start http://localhost:${port}`);
})