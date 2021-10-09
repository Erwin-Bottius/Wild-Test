const Member = require('../models/members');

const memberController = {

  getAllMembers: async (req, res) => {
    try {
      const members = await Member.findAll();
      console.log(members);
      res.send('ok');
    }
    catch (error) {
      console.log(error);
      res.send(error);
    }
  },
};

module.exports = memberController;
