const Member = require('../models/members');

const memberController = {
  // Fonction qui récupère tous les members en BDD
  getAllMembers: async (req, res) => {
    try {
      const members = await Member.findAll();
      console.log(members);
      res.json(members);
    }
    catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  // Fonction qui ajoute un member en BDD
  addMember: async (req, res) => {
    try {
      const { newMember } = req.body;
      // si le name n'est pas renseigné on arrete la fonction
      if (!newMember) {
        return res.status(400).json('le nom doit e^tre renseigné');
      }
      const member = await Member.create({ name: newMember });
      console.log(`le membre ${member} a bien été créé !`);
      return res.send('ok');
    }
    catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
};

module.exports = memberController;
