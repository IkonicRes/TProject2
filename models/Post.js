// Import the necessary modules from Sequelize
const { Model, DataTypes } = require('sequelize');

// Import the Sequelize connection
const sequelize = require('../config/connection.js');

// Create a Post class that extends the Sequelize Model class
class Post extends Model {}

// Initialize the Post model with its attributes
Post.init(
  {
    // Define the post_id attribute
    post_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    likeys: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    // Define the poster_id attribute
    poster_id: { 
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },

    // Define the title attribute
    title: { 
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    // Define the text_content attribute
    mediaSource: { 
      type: DataTypes.JSON,
    },
    text_content: { 
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Defining the created_at attribute
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // Define the media_url attribute
    // Define the topic_id attribute
    topic_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'topic',
        key: 'topic_id',
      },
    },
    apod_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: 'apod',
        key: 'apod_id',
      },
    }
  },
  // Define the model options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

// Export the Post model
module.exports = Post;
