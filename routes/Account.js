const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Account');
const {authRole, ROLE} = require("../server/AuthNRole");


router.get('/',authRole(ROLE.CLIENT), controller.index);
router.get('/user',authRole(ROLE.ADMIN),controller.getAll);
router.get('/user/:id',authRole(ROLE.ADMIN), controller.getOne);
router.delete('/delete/:id',authRole(ROLE.ADMIN),controller.delete);
router.put('/update/:id',authRole(ROLE.ADMIN), controller.update);

module.exports = router;

