const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Administration');


router.get('/', controller.index);

module.exports = router;

