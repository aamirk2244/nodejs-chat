const Message = require('../../models/Message');

module.exports = {
  async store(req, res) {
    const { username, message } = req.body;

    const message = await Message.create({ username, message });

    return res.json(message);
  },
  async index(req, res) {
    const messages = await Message.findAll();

    return res.json(messages);
  },
  async delete(req, res) {
    const { id } = req.params;
    const messsage = await Message.destroy({
      where: {
        id: id
      }
    } );

    return res.json(messsage);
  },
};
