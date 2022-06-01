const express=require('express');
const router=express.Router();

// import route to api from index route
router.use('/api',require('./api'));


module.exports=router;