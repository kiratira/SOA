const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Store');


router.get('/', controller.index);
router.get('/products', controller.getAll);
router.get('/product/:id', controller.getOne);
router.delete('/delete/:id', controller.delete);
router.put('/update/:id', controller.update);
router.post('/new',controller.newProduct);

module.exports = router;

