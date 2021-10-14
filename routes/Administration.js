const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Administration');
const {ROLE,authRole} = require("../server/AuthNRole");



router.get('/',authRole(ROLE.ADMIN), controller.index);

module.exports = router;