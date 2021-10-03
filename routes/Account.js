const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Account');


router.get('/', controller.index);
router.get('/user',controller.getAll);
router.get('/user/:id', controller.getOne);
router.delete('/delete/:id', controller.delete);
router.patch('/modify/:id', controller.modify);

module.exports = router;

