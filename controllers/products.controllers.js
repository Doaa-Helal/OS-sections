const productModel=require("../Product.model");

// GET all products
const getAllProducts=async (req,res)=>{
    const products=await productModel.find();
    res.json(products);
};
// GET a single product by ID
const getProductById=async (req,res)=>{
    const productId=req.params.id;
    const product=await productModel.findById(productId);
    if(!product){
        return res.status(404).json({message:"Product not found"});
    }
    res.json(product);
};
// POST a new product with empty field validation
const createProduct=async (req,res)=>{
    const newProduct=new productModel({
        name:req.body.name,
        price:req.body.price,
    });
    await newProduct.save();
    res.json(newProduct);
};
// PUT (update) a product with empty field validation
const updateProduct=async (req,res)=>{
    const productId=req.params.id;
    const product=await productModel.findById(productId);
    if(!product){
        return res.status(404).json({message:"Product not found"});
    }
    product.name=req.body.name;
    product.price=req.body.price;
    await product.save();
    res.json("product updates",product);
};
// PATCH (partially update)
const partiallyUpdateProduct=async (req,res)=>{
    const productId=req.params.id;
    const product=await productModel.findById(productId);
    if(!product){
        return res.status(404).json({message:"Product not found"});
    }
    if(req.body.name){
        product.name=req.body.name;
    }
    if(req.body.price){
        product.price=req.body.price;
    }
    await product.save();
    res.json(product);
};
// DELETE a product
const deleteProduct=async (req,res)=>{
    const productId=req.params.id;
    const product=await productModel.findByIdAndDelete(productId);
    if(!product){
        return res.status(404).json({message:"Product not found"});
    }
    res.json("product deleted");
};

module.exports={
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    partiallyUpdateProduct,
    deleteProduct
};