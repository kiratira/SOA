const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/Map');


router.get('/', controller.index);
router.get('/interestPoints',controller.getAll);
router.get('/interestPoint/:id', controller.getOne);
router.delete('/delete/:id', controller.delete);
router.put('/update/:id', controller.update);
router.post('/new',controller.newInterestPoint);

module.exports = router;

