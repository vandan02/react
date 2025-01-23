const {Router}=require('express');
const { getproducts, addproducts, deleteproducts, updateproduct } = require('../controller/product.contoller.js');

const router=Router();

router.get('/getproducts',getproducts)
router.post('/createProduct',addproducts)
router.delete('/deleteProduct/:id',deleteproducts);
router.param('/updateProduct/:id',updateproduct);

module.exports=router;