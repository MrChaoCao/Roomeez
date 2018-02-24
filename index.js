const express = require('express');
const app = express();
// const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// app.use('view engine', 'pug')
// view engine
// app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRoutes = require("./routes/users");
const searchusersRoutes = require("./routes/searchusers");
const groupRoutes = require("./routes/groups");
app.use('/api/users', userRoutes);
app.use('/api/searchusers', searchusersRoutes);

app.use('/api/groups', groupRoutes);


// use below to store the session in some server separate from the cookie
// app.use(session({
//   secret: 'YOURSECRET',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     maxAge: 30 * 60 * 1000
//   }
// }));


// Run local server on port 5000.
const port = process.env.PORT || 5000;
const server = app.listen(port, function () {
  console.log('Server running at http://127.0.0.1:' + port + '/');
});
