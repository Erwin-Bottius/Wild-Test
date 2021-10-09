const { Router } = require('express');
const memberController = require('./controller/memberController');

const router = Router();

router.get('/members', memberController.getAllMembers);
router.post('/member', memberController.addMember);

module.exports = router;
