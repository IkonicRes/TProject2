const { User } = require('../models'); // Just 'models' is sufficient

const userData = [
  {
    username: 'user1',
    email: 'user1@example.com',
    password: 'password1',
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    password: 'password2',
  },
];

const seedUsers = async () => {
  await User.bulkCreate(userData);
};

module.exports = seedUsers;
