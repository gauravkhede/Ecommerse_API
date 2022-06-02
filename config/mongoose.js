const mongoose=require('mongoose');
//mongodb+srv://gaurav:<password>@cluster0.nrbsr.mongodb.net/?retryWrites=true&w=majority
//gaurav
//bl5ZNeFyGGwffxXn
mongoose.connect('mongodb+srv://gaurav:bl5ZNeFyGGwffxXn@cluster0.nrbsr.mongodb.net/ecommerce_api?retryWrites=true');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error in connecting to database'));
db.once('open',function(){
    console.log('connection with databse is successful');
});