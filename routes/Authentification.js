const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Authentification');


router.get('/', controller.index);
router.post('/new',controller.newUser);
router.post('/login', controller.loginUser);

module.exports = router;


