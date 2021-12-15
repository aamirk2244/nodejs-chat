const { Model, DataTypes } = require('sequelize');

class Message extends Model {
  static init(sequelize) {
    super.init({
      message: DataTypes.STRING,
      username: DataTypes.STRING,
    }, {
      sequelize
    })
  };
};

module.exports = Message;
