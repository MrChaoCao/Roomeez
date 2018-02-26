const express = require('express');
// const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const ObjectId = require('mongodb').ObjectID;

const User = mongoose.model('User');

// const checkAuth = require('../middleware/check-auth');

// const UsersController = require('../controllers/users');

module.exports = app => {

// This works
app.get('/api/users/:userId', function(req, res) {
  User.findById(req.params.userId).then(
    (user, err) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).send("Not found");
      }
    }
  );
});

app.get('/api/users', function(req, res) {
  User.find().exec((err, users) => {
    if (err) {
      return res.status(404).send("Not found");
    } else {
      let newObj = {};
      users.forEach(user => {
        newObj[user._id] = user;
      });
      return res.json(newObj);
    }
  });
});

app.patch('/api/users/:userId', function(req, res) {
  User.findByIdAndUpdate(req.params.userId, {$set: req.body}).then(
    (user, err) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).send("Not found");
      }
    }
  );
});

};
// app.get("/api/users", function(){console.log("MW");}, UsersController.get_all_based_on_match);

// Handle incoming GET requests to /users
// router.get("/api/users/:userId", UsersController.get_user);
// router.get("/api/users", function(){console.log("MW");}, UsersController.get_all_based_on_match);
// router.post("/api/users", UsersController.create_user);
// router.patch("/api/users/:userId", UsersController.update_user);
// router.delete("/api/users/:userId", UsersController.delete_user);

// router.post("/", checkAuth, UsersController.users_create_user);
