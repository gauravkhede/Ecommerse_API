const Product=require('../../../models/products');

// To find a product in our API
module.exports.index=async function(req,res){
        let products=await Product.find({});
        return res.json(200,{
            message:'list of products',
            products:products
        });
}

//Function to create product in our API
module.exports.createProduct=function(req,res){
    //product creation
    try{
    Product.create({
        name:req.body.name,
        quantity:req.body.quantity
    },function(err,newProduct){
        if(err){ console.log('Error in creating product',err); return; }
        return res.json(200,{
            message:'Product created a successfully',
            product:newProduct
        });
    });
    } catch{
        console.log('*****',err);
        return res.status(500).json({
            message:'Internal Server Error',
        });
    }
}
// function to delete a product from our inventory
module.exports.destroyProduct=async function(req,res){
    try{
    let product=await Product.findById(req.params.id);
    console.log(product);
    //if we find a product then delete it and if not then return status-401
    if(product){
        await product.remove();
        return res.json(200,{
        message:'Product deleted a successfully'
    });
    }
    else{
        return res.status(401).json({
            message: "Product Id doesn't match any product",
        });
    }
    } catch{
        console.log('*****',err);
        return res.status(500).json({
            message:'Internal Server Error',
        });
    }
}
//function to updateProduct in our inventory
module.exports.updateProduct=async function(req,res){
    try{
    let product=await Product.findById(req.params.id);
    // if we find a product then update it else we return message 
    if(product){
    product.quantity=req.query.number;
    product.save();
    return res.json(200,{
        data:product,
        message:"updated successfully"
    });
    }else{
        return res.status(401).json({
            message: "Product Id doesn't match any product and hence cannot be updated",
        });
    }
    }catch{
        return res.status(500).json({
            message:'Internal Server Error',
        });
    }
}