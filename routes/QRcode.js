const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/QRcode');


//router.get('/', controller.index);
router.get('/pierre', controller.pierre);
router.get('/bronze', controller.bronze);
router.get('/fer', controller.fer);

module.exports = router;

