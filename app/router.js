const { Router } = require('express');
const memberController = require('./controller/memberController');

const router = Router();
// route qui affichera notre page front
router.get('/', (req, res) => {
  res.sendFile('dist', 'index.html');
});
// Route qui nous servira a récupérer les members en BDD
router.get('/members', memberController.getAllMembers);
// Route qui nous servira à ajouter un member en BDD
router.post('/member', memberController.addMember);

module.exports = router;
