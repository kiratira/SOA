const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Account'),
    auth = require("../middleware/auth");
const {authRole, ROLE} = require("../middleware/AuthNRole");


router.get('/',auth, authRole(ROLE.CLIENT), controller.index);
router.get('/users',auth, authRole(ROLE.ADMIN), controller.getAll);
router.get('/userId/:id',auth, controller.getOne);
router.delete('/delete/:id',auth, authRole(ROLE.ADMIN), controller.delete);
router.put('/update/:id',auth, authRole(ROLE.ADMIN), controller.update);
router.get('/user/:email',auth, controller.getOneByEmail);

module.exports = router;