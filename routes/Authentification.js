const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Authentification');


router.get('/', controller.index);

module.exports = router;


