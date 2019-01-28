const User = require('../models').User;

module.exports = {
  index: function(req, res, next) {
    User.findAll()
    .then((users) => res.json({users}))
    .catch((err) => res.send(err))
  }
}