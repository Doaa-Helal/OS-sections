const express = require('express');
const mongoose=require("mongoose");
const url = "mongodb+srv://doohelal055:doaahelalmongodb@cluster0.wcb1e.mongodb.net/OS_SEC?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url).then(console.log("connected"));



const { body, validationResult } = require('express-validator');
const app = express();
app.use(express.json());

const controller=require("./controllers/products.controllers");

app.get("/products",controller.getAllProducts);
app.get("/products/:id",controller.getProductById);
app.post("/products",body("name").notEmpty(),body("price").isNumeric(),controller.createProduct);
app.put("/products/:id",controller.updateProduct);
app.patch("/products/:id",controller.partiallyUpdateProduct);
app.delete("/products/:id",controller.deleteProduct);

app.listen(3000,()=>{
console.log("Server is running on port 3000");
});
