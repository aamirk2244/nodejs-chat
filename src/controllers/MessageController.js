const Message = require('../../models/Message');

module.exports = {
  async store(req, res) {
    const { username, message } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const message = await Message.create({ username, message });

    return res.json(message);
  },
  async index(req, res) {
    const message = await Message.findAll();

    return res.json(messages);
  },
};
