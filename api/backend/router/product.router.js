const {Router}=require('express');
const { getproducts, addproducts, deleteproducts, updateproduct } = require('../controller/product.contoller.js');

const router=Router();

router.get('/getproducts',getproducts)
router.post('/createProduct',addproducts)
router.delete('/deleteProduct',deleteproducts);
router.param('/updateProduct',updateproduct);

module.exports=router;