const { Post } = require('../models');

const postData = [
  {
    poster_id: 1, // Corresponds to the user ID
    likes: 5,
  },
  {
    poster_id: 2, // Corresponds to the user ID
    likes: 10,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;