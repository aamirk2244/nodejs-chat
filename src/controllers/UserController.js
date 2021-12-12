const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {

  async store(req, res) {
    const { username } = req.body;

    const user = await User.create({ username });

    return res.json(user);
  },

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async findById(req, res) {
    const { id } = req.params;
    const user = await User.findAll({
      where: {
        id: id
      }
   } );

    return res.json(user);
  },

  async delete(req, res) {
    const { id } = req.params;
    const user = await User.destroy({
      where: {
        id: id
      }
   } );

    return res.json(user);
  },
};
