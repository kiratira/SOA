const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Account');


router.get('/', controller.index);
router.get('/user',controller.getAll);
router.get('/user/:id', controller.getOne);
router.delete('/delete/:id', controller.delete);
router.put('/update/:id', controller.update);

module.exports = router;

