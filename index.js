const express=require('express');
var bodyParser = require('body-parser');
// import database in our project
const db=require('./config/mongoose');
//fire our express
const app=express();
//For post request json parser used for postman
var jsonParser = bodyParser.json();
var http=require('http');
//our app running on this port
var port=8000;
const path=require('path');
app.use(express.static('assets'));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//Index route is imported
app.use('/',require('./routes'));

app.get('/',function(req,res){
    return res.send('<h1> Please Use POSTMAN </h1>');
})

app.listen(port,function(err){
    if(err){ console.log('Error in listening to server',err); return; }
    console.log('server is up and running on port',port);
});