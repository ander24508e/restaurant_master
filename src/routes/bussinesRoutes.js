const express = require('express');
const { createBusiness, getAllBusinesses } = require('../controllers/businessController');
const router = express.Router();

router.post('/create_business', createBusiness);
router.get('/get_all_businesses', getAllBusinesses);

module.exports = router;
