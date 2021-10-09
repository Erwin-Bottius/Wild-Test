const Member = require('../models/members');

const memberController = {

  getAllMembers: async (req, res) => {
    try {
      const members = await Member.findAll();
      res.send(members);
    }
    catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  addMember: async (req, res) => {
    try {
      const newMember = await Member.create({ name: 'nouveau membre' });
      console.log('le nouvel utilisateur a bien étét créé');
      res.send('ok');
    }
    catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};

module.exports = memberController;
