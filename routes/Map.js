const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Map');
const {authRole, ROLE} = require("../server/AuthNRole");


//router.get('/', controller.index);
router.get('/',authRole(ROLE.CLIENT),controller.getAll);
router.get(':id',authRole(ROLE.CLIENT), controller.getOne);
router.delete('/delete/:id',authRole(ROLE.CLIENT), controller.delete);
router.put('/update/:id',authRole(ROLE.ARTISANT), controller.update);
router.post('/new',authRole(ROLE.ADMIN),controller.newInterestPoint);

module.exports = router;

