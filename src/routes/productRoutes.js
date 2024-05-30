const express = require('express');
const { createProduct, getAllProductsWithDetails } = require('../controllers/productController');
const router = express.Router();

router.post('/create_product', createProduct);
router.get('/get_all_products_with_details', getAllProductsWithDetails);

module.exports = router;
