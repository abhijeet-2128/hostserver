const express = require('express');
const router = express.Router();
const componentController = require('../controllers/componentController');

// Route for fetching component code
router.get('/component/:name', componentController.getComponentCode);

// Route for updating component code
router.post('/component/:name', componentController.updateComponentCode);

module.exports = router;
