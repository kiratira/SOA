const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Map');


router.get('/', controller.index);

module.exports = router;

