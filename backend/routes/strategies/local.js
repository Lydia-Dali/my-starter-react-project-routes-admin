const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require("../../models").User


const localAuthStrategy = passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
},
function(email, password, done) {
  User.findAll({where: { email: email }})
  .then((user) => {
    bcrypt.compare(password, user[0].dataValues.password, function(err, res) {
      if(res){
        return done(null, user[0].dataValues);
      } else {
        return done(null, false);
      }
    })
  })
  .catch(err => done(null, false))
}
));

module.exports.localAuthStrategy = localAuthStrategy;