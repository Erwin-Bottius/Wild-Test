const { Router } = require('express');
const memberController = require('./controller/memberController');

const router = Router();

router.get('/', memberController.getAllMembers);

module.exports = router;
