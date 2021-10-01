const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/QRcode');


router.get('/', controller.index);

module.exports = router;

