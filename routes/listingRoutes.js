const express = require('express');
const router = express.Router();
const { createListing, listAll } = require('../controllers/listingController');

router.post('/api/listings', createListing);
router.get('/api/listings', listAll);

module.exports = router;
