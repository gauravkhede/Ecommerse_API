const express=require('express');
const router=express.Router();
// we need to import for post requests in JSON from postman otherwise we are not able to catch req.body
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const productsApi=require('../../../controllers/api/v1/products_api');
router.get('/',productsApi.index);
//Route to create a product in our inventory
router.post('/create',jsonParser,productsApi.createProduct);
//Route to delete a product in our inventory
router.delete('/:id',jsonParser,productsApi.destroyProduct);
//Route to update quantity in our product
router.post('/:id/update_quantity',jsonParser,productsApi.updateProduct);



module.exports=router;