const express = require('express');
const router = express.Router();
const mssvController = require('../controllers/mssvController');

router.get('/:id', mssvController.getMSSV);
router.post('/:id', mssvController.postMSSV);

module.exports = router;
