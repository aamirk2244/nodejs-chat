const User = require('../models/User');
const Message = require('../../models/Message');

module.exports = {
  async index (req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'messages' }
    });

    return res.json(user.messages);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { message } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const message = await Message.create({ message, user_id });

    return res.json(message);
  }
};
