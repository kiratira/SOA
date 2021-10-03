const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Account');


router.get('/', controller.index);
router.get('/user',controller.getAll);

module.exports = router;

