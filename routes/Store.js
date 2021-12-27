const express = require('express'),
    auth = require("../middleware/auth"),
    router = express.Router(),
    controller = require('../controllers/Store');
const {authRole, ROLE} = require("../middleware/AuthNRole");


router.get('/',auth, authRole(ROLE.CLIENT), controller.index);
router.get('/products',auth, authRole(ROLE.CLIENT), controller.getAll);
router.get('/productId/:id',auth, authRole(ROLE.CLIENT), controller.getOne);
router.get('/product/:name',auth, authRole(ROLE.CLIENT), controller.getOneByName);
router.put('/product/ticket',auth,authRole(ROLE.CLIENT),controller.getTicket);
router.delete('/delete/:name',auth, authRole(ROLE.ADMIN), controller.delete);
router.put('/update/:name',auth, authRole(ROLE.ADMIN), controller.update);
router.post('/new',auth, authRole(ROLE.ADMIN),controller.newProduct);

module.exports = router;

