const express = require('express'),
    router = express.Router(),
    auth = require("../middleware/auth"),
    controller = require('../controllers/Map');
const {authRole, ROLE} = require("../middleware/AuthNRole");



//router.get('/', controller.index);
router.get('/points',auth, authRole(ROLE.CLIENT),controller.getAll);
router.get('/pointId/:id',auth, authRole(ROLE.CLIENT), controller.getOne);
router.get('/point/:name',auth, authRole(ROLE.CLIENT), controller.getOneByName);
router.delete('/delete/:name',auth, authRole(ROLE.ADMIN), controller.delete);
router.put('/update/:name',auth, authRole(ROLE.artisan), controller.update);
router.post('/new',auth, authRole(ROLE.ADMIN),controller.newInterestPoint);

module.exports = router;