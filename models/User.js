const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class User extends Model { }

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unsigned: true,
    },
    username: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    profile_pic_url: {
      type: DataTypes.STRING(255),
      defaultValue: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;