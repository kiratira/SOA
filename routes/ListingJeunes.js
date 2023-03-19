const express = require('express'),
    router = express.Router(),
    auth = require("../middleware/auth"),
    controller = require('../controllers/ListingJeunes');
    const {ROLE,authRole} = require("../middleware/AuthNRole");



router.get('/', controller.index);
router.post('/', controller.index);
router.post('/update',controller.updateJeune);
router.post('/new',controller.new);




module.exports = router;