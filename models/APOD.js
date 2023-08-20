// Importing the necessary modules from the Sequelize library
const { Model, DataTypes } = require('sequelize');

// Importing the connection object from the '../config/connection.js' file
const sequelize = require('../config/connection.js');

// Defining a User class that extends the Model class provided by Sequelize
class Apod extends Model { }

// Initializing the User model with the following attributes
Apod.init(
  {
    // The user_id attribute is an auto-incrementing integer, not null, and is the primary key
    apod_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // The username attribute is a string of maximum length 32, not null
    copyright: {
      type: DataTypes.STRING(255),
    //   allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    explanation: {
      type: DataTypes.TEXT,  
    },
    hdurl: {
      type: DataTypes.STRING(255),
    },
    media_type: {
      type: DataTypes.STRING(255),
    },
    service_version: {
      type: DataTypes.STRING(255),
    },
    title: {
      type: DataTypes.STRING(255),
    },
    url: {
      type: DataTypes.STRING(255),
    },
  },
  {
    // Passing the sequelize connection object
    sequelize,
    // Disabling the timestamps (createdAt and updatedAt) columns
    timestamps: false,
    // Setting the table name to be the same as the model name
    freezeTableName: true,
    // Using underscored naming convention for the table columns
    underscored: true,
    // Setting the model name to 'user'
    modelName: 'apod',
  }
);

// Exporting the User model
module.exports = Apod;
