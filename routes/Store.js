const express = require('express'),
    auth = require("../middleware/auth"),
    router = express.Router(),
    controller = require('../controllers/Store');
const {authRole, ROLE} = require("../server/AuthNRole");


router.get('/',auth, authRole(ROLE.CLIENT), controller.index);
router.get('/products',auth, authRole(ROLE.CLIENT), controller.getAll);
router.get('/product/:id',auth, authRole(ROLE.CLIENT), controller.getOne);
router.delete('/delete/:id',auth, authRole(ROLE.ADMIN), controller.delete);
router.put('/update/:id',auth, authRole(ROLE.ADMIN), controller.update);
router.post('/new',auth, authRole(ROLE.ADMIN),controller.newProduct);

module.exports = router;

