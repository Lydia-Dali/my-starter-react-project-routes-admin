const jwt = require('jsonwebtoken');
const User = require("../models").User;

module.exports = {
  signIn: function(req, res, next) {
    /* By default passport save authenticated user in req.user object */
    const user = {
      id: req.user.id,
      email: req.user.email,
      isAdmin: req.user.isAdmin
    }
    /* Signin jwt with your SECRET key */
    const token = jwt.sign(user, 'your_jwt_secret');
    /* Return user and token in json response */
    res.json({user, token});
  },
  signUp: function(req, res, next) {
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      isAdmin: req.body.isAdmin || false
    })
    .then((newUser) => {
      res.json({user: newUser})
    })
    .catch((err) => res.send(err))
  }
};