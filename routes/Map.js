const express = require('express'),
    router = express.Router(),
    auth = require("../middleware/auth"),
    controller = require('../controllers/Map');
const {authRole, ROLE} = require("../server/AuthNRole");



//router.get('/', controller.index);
router.get('/',auth, authRole(ROLE.CLIENT),controller.getAll);
router.get(':id',auth, authRole(ROLE.CLIENT), controller.getOne);
router.delete('/delete/:id',auth, authRole(ROLE.CLIENT), controller.delete);
router.put('/update/:id',auth, authRole(ROLE.ARTISANT), controller.update);
router.post('/new',auth, authRole(ROLE.ADMIN),controller.newInterestPoint);

module.exports = router;