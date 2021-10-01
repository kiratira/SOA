const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Store');


router.get('/', controller.index);

module.exports = router;

