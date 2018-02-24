const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const ObjectId = require('mongodb').ObjectID;

const User = mongoose.model('User');

// const checkAuth = require('../middleware/check-auth');

// const UsersController = require('../controllers/users');

// This works
router.get('/:userId', function(req, res) {
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

router.get('', function(req, res) {
  // This route returns all other users that match a group's survey results.
  // This is the user output from the hard filter.
  console.log("Can't work on this yet.");
  res.send("Each user needs to have a filled out survey before we can finish this.");
});

router.patch('/:userId', function(req, res) {
  User.findByIdAndUpdate(req.params.userId, {$set: req.body}).then(
    (user, err) => {
      if (user) {
        // you send back the body of the request:
        res.send(req.body);
        // this is sending the actual old user:
        // res.json(user);
      } else {
        res.status(404).send("Not found");
      }
    }
  );
});

// router.get("/api/users", function(){console.log("MW");}, UsersController.get_all_based_on_match);

// Handle incoming GET requests to /users
// router.get("/api/users/:userId", UsersController.get_user);
// router.get("/api/users", function(){console.log("MW");}, UsersController.get_all_based_on_match);
// router.post("/api/users", UsersController.create_user);
// router.patch("/api/users/:userId", UsersController.update_user);
// router.delete("/api/users/:userId", UsersController.delete_user);

// router.post("/", checkAuth, UsersController.users_create_user);

module.exports = router;
