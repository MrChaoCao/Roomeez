const express = require('express');
// const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./config/keys');

const app = express();
//
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');

// Use the session middleware
app.use(express.static('frontend'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//
// app.use(session({
//   secret: 'YOURSECRET',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     maxAge: 30 * 60 * 1000
//   }
// }));

// Passport, I want you to know about this strategy existing
passport.use(new FacebookStrategy({
  clientID: keys.facebookClientID,
  clientSecret: keys.facebookClientSecret,
  callbackURL: '/auth/facebook/callback'
},
(accessToken, refreshToken, profile, done) => {
  console.log("Access Token: ", accessToken);
  console.log("Refresh Token: ", refreshToken);
  console.log("Profile: ", profile);
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/react_index.html'));
});

app.get('/auth/facebook',
  passport.authenticate('facebook', {
    scope: ['public_profile', 'email']
  }));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


// Run local server on port 3000.
const port = process.env.PORT || 5000;
const server = app.listen(port, function () {
  console.log('Server running at http://127.0.0.1:' + port + '/');
});
