const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Account'),
    auth = require("../middleware/auth");
const {authRole, ROLE} = require("../middleware/AuthNRole");


router.get('/',auth, authRole(ROLE.CLIENT), controller.index);
router.get('/user',auth, authRole(ROLE.ADMIN), controller.getAll);
router.get('/user/:id',auth, controller.getOne);
router.delete('/delete/:id',auth, authRole(ROLE.ADMIN), controller.delete);
router.put('/update/:id',auth, authRole(ROLE.ADMIN), controller.update);

module.exports = router;

