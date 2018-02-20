const express = require('express');
// const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
require('./services/passport');

const app = express();

// we export a function, with which we pass in app
require('./routes/authRoutes')(app);
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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/react_index.html'));
});



// Run local server on port 3000.
const port = process.env.PORT || 5000;
const server = app.listen(port, function () {
  console.log('Server running at http://127.0.0.1:' + port + '/');
});
