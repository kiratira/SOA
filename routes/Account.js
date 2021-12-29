const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Account'),
    auth = require("../middleware/auth");
const {authRole, ROLE} = require("../middleware/AuthNRole");


router.get('/',auth, authRole(ROLE.CLIENT), controller.index);
router.get('/users',auth, authRole(ROLE.ADMIN), controller.getAll);
router.get('/userId/:id',auth, controller.getOne);
router.delete('/delete/:email',auth, authRole(ROLE.ADMIN), controller.delete);
router.put('/update/:email',auth, authRole(ROLE.CLIENT), controller.update);
router.get('/user/:email',auth, controller.getOneByEmail);

module.exports = router;