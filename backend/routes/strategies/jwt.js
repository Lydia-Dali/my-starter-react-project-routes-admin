const passport = require('passport')
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const models = require("../../models");
const User = models.User;

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'your_jwt_secret';

const jwtAuthStrategy = passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findAll({where: {id: jwt_payload.id}})
    .then((users) => {
      if (users.length > 0) {
          return done(null, users[0]);
      } else {
          return done(null, false);
      }
    })
    .catch((err) => done(err, false));
}));

module.exports.jwtAuthStrategy = jwtAuthStrategy;