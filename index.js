const express = require('express');
// const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

const User = require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();
let numOfProcessedRequests = 0;

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// tells passport to make use of cookies to handle auth
app.use(passport.initialize());
app.use(passport.session());

// we export a function, with which we pass in app
require('./routes/authRoutes')(app);
//
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');

// Use the session middleware
app.use(express.static('frontend'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// use below to store the session in some server separate from the cookie
// app.use(session({
//   secret: 'YOURSECRET',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     maxAge: 30 * 60 * 1000
//   }
// }));

// Passport, I want you to know about this strategy existing
app.get('/', (req, res) => {
  numOfProcessedRequests++;
  console.log(`Server has processed ${numOfProcessedRequests} requests!`);
  res.send(`Server has processed ${numOfProcessedRequests} requests!`);
  // res.sendFile(path.join(__dirname, '/frontend/react_index.html'));
});

// Run local server on port 5000.
const port = process.env.PORT || 5000;
const server = app.listen(port, function () {
  console.log('Server running at http://127.0.0.1:' + port + '/');
});
