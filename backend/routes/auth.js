const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController')

/* POST email and password and return jwt if authenticated successfull */
router.post('/signin', passport.authenticate('local', { session: false }), authController.signIn);

/* POST create new user. */
router.post('/signup', authController.signUp)

module.exports = router;