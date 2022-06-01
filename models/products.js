const mongoose=require('mongoose');
const productShema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
const Product=mongoose.model('Product',productShema);
module.exports=Product;