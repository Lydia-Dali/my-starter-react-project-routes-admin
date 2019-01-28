'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        return bcrypt.hash(user.password, 10)
        .then((hash) => user.password = hash)
        .catch((err) => console.log(err))
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};