const express = require('express'),
    router = express.Router(),
    auth = require("../middleware/auth"),
    controller = require('../controllers/Administration');
const {ROLE,authRole} = require("../server/AuthNRole");



router.get('/',auth, authRole(ROLE.ADMIN), controller.index);

module.exports = router;