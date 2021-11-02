const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Store');
const {authRole, ROLE} = require("../server/AuthNRole");


router.get('/',authRole(ROLE.CLIENT), controller.index);
router.get('/products',authRole(ROLE.CLIENT), controller.getAll);
router.get('/product/:id',authRole(ROLE.CLIENT), controller.getOne);
router.delete('/delete/:id',authRole(ROLE.ADMIN), controller.delete);
router.put('/update/:id',authRole(ROLE.ADMIN), controller.update);
router.post('/new',authRole(ROLE.ADMIN),controller.newProduct);

module.exports = router;

