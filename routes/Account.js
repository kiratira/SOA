const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Account');


router.get('/', controller.index);

module.exports = router;

