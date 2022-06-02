const mongoose=require('mongoose');
//mongodb+srv://gaurav:<password>@cluster0.nrbsr.mongodb.net/?retryWrites=true&w=majority
//gaurav
//bl5ZNeFyGGwffxXn
mongoose.connect('mongodb+srv://cluster0.nrbsr.mongodb.net/?retryWrites=true&w=majority/ecommerce_api',{
    dbName:'ecommerce_api',
    user:'gaurav',
    pass:'bl5ZNeFyGGwffxXn'
});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error in connecting to database'));
db.once('open',function(){
    console.log('connection with databse is successful');
});