const express = require('express'),
    router = express.Router(),
    auth = require("../middleware/auth"),
    controller = require('../controllers/Loup');
    const {ROLE,authRole} = require("../middleware/AuthNRole");
const { route } = require('./Loup');


router.get('/', controller.index);
router.get('/admin',auth,authRole(ROLE.ADMIN), controller.admin);
router.post('/admin',auth,authRole(ROLE.ADMIN), controller.admin);
router.get('/admin/resetVote',auth,authRole(ROLE.ADMIN),controller.resetVote);
router.get('/admin/resetZombie',auth,authRole(ROLE.ADMIN),controller.resetZombie);
router.get('/admin/resultat',auth,authRole(ROLE.ADMIN),controller.resultat);
router.get('/admin/erase',auth,authRole(ROLE.ADMIN),controller.erase);
router.get('/admin/zombie',auth,authRole(ROLE.ADMIN),controller.zombie);
router.post('/admin/zombie/revive',auth,authRole(ROLE.ADMIN),controller.revive);
router.post('/vote', controller.vote);
router.post('/admin/kill',auth,authRole(ROLE.ADMIN),controller.kill)
router.post('/admin/newPlayer',auth,authRole(ROLE.ADMIN),controller.newPlayer)




module.exports = router;